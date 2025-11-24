-- Migration: Add payment verification tables and audit logging
-- Created: 2025-01-24
-- Description: Creates tables for tracking Razorpay payments and verification logs

-- ============================================================================
-- 1. PAYMENT TRANSACTIONS TABLE
-- ============================================================================
-- Stores all payment transactions from Razorpay
CREATE TABLE IF NOT EXISTS payment_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  clerk_user_id TEXT NOT NULL, -- Redundant for quick lookups

  -- Razorpay IDs
  razorpay_payment_id TEXT UNIQUE NOT NULL,
  razorpay_order_id TEXT NOT NULL,
  razorpay_signature TEXT NOT NULL,

  -- Payment Details
  amount INTEGER NOT NULL, -- Amount in paise (₹499 = 49900 paise)
  currency TEXT DEFAULT 'INR',

  -- Payment Status from Razorpay
  payment_status TEXT CHECK (payment_status IN ('created', 'authorized', 'captured', 'refunded', 'failed')) DEFAULT 'created',

  -- Our Verification Status
  verification_status TEXT CHECK (verification_status IN ('pending', 'verified', 'failed', 'fraud_suspected')) DEFAULT 'pending',
  signature_valid BOOLEAN DEFAULT false,

  -- Additional Metadata
  payment_method TEXT, -- card, netbanking, upi, wallet, etc
  razorpay_fee INTEGER, -- Fee charged by Razorpay
  notes JSONB, -- Any additional notes/metadata

  -- Timestamps
  payment_created_at TIMESTAMPTZ,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_payment_transactions_user_id ON payment_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_clerk_user_id ON payment_transactions(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_razorpay_payment_id ON payment_transactions(razorpay_payment_id);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_verification_status ON payment_transactions(verification_status);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_created_at ON payment_transactions(created_at DESC);

-- ============================================================================
-- 2. PAYMENT VERIFICATION LOGS TABLE
-- ============================================================================
-- Detailed logs of each verification attempt (for debugging and audit trail)
CREATE TABLE IF NOT EXISTS payment_verification_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_transaction_id UUID NOT NULL REFERENCES payment_transactions(id) ON DELETE CASCADE,

  -- Verification Details
  verification_attempt INTEGER NOT NULL DEFAULT 1,
  signature_valid BOOLEAN,
  razorpay_api_status TEXT, -- Status returned from Razorpay API
  razorpay_api_response JSONB, -- Full API response for debugging

  -- Error Handling
  error_code TEXT,
  error_message TEXT,

  -- Request Metadata
  ip_address INET,
  user_agent TEXT,

  -- Timestamp
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_payment_verification_logs_transaction_id ON payment_verification_logs(payment_transaction_id);
CREATE INDEX IF NOT EXISTS idx_payment_verification_logs_created_at ON payment_verification_logs(created_at DESC);

-- ============================================================================
-- 3. IDEMPOTENCY KEYS TABLE
-- ============================================================================
-- Prevents duplicate payment processing
CREATE TABLE IF NOT EXISTS payment_idempotency_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  idempotency_key TEXT UNIQUE NOT NULL,
  payment_transaction_id UUID REFERENCES payment_transactions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  request_data JSONB NOT NULL,
  response_data JSONB,
  status TEXT CHECK (status IN ('processing', 'completed', 'failed')) DEFAULT 'processing',
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_payment_idempotency_keys_key ON payment_idempotency_keys(idempotency_key);
CREATE INDEX IF NOT EXISTS idx_payment_idempotency_keys_expires_at ON payment_idempotency_keys(expires_at);

-- ============================================================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE payment_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_verification_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_idempotency_keys ENABLE ROW LEVEL SECURITY;

-- Payment Transactions Policies
-- Users can only view their own payment transactions
CREATE POLICY "Users can view their own payment transactions"
  ON payment_transactions FOR SELECT
  USING (clerk_user_id = (current_setting('request.jwt.claims', true)::json->>'sub')::text);

-- Only Edge Functions/Service Role can insert/update payment transactions
CREATE POLICY "Service role can manage payment transactions"
  ON payment_transactions FOR ALL
  USING (true)
  WITH CHECK (true);

-- Payment Verification Logs Policies
-- Users can view verification logs for their own payments
CREATE POLICY "Users can view their own verification logs"
  ON payment_verification_logs FOR SELECT
  USING (
    payment_transaction_id IN (
      SELECT id FROM payment_transactions
      WHERE clerk_user_id = (current_setting('request.jwt.claims', true)::json->>'sub')::text
    )
  );

-- Only Edge Functions/Service Role can insert logs
CREATE POLICY "Service role can manage verification logs"
  ON payment_verification_logs FOR ALL
  USING (true)
  WITH CHECK (true);

-- Idempotency Keys Policies
-- Only service role can access idempotency keys (security)
CREATE POLICY "Service role can manage idempotency keys"
  ON payment_idempotency_keys FOR ALL
  USING (true)
  WITH CHECK (true);

-- ============================================================================
-- 5. FUNCTIONS & TRIGGERS
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_payment_transactions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER payment_transactions_updated_at
  BEFORE UPDATE ON payment_transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_payment_transactions_updated_at();

-- Function to clean up expired idempotency keys (run daily)
CREATE OR REPLACE FUNCTION cleanup_expired_idempotency_keys()
RETURNS void AS $$
BEGIN
  DELETE FROM payment_idempotency_keys
  WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- 6. GRANT PERMISSIONS
-- ============================================================================

-- Grant necessary permissions to authenticated users (for SELECT only)
GRANT SELECT ON payment_transactions TO authenticated;
GRANT SELECT ON payment_verification_logs TO authenticated;

-- Grant all permissions to service_role (Edge Functions)
GRANT ALL ON payment_transactions TO service_role;
GRANT ALL ON payment_verification_logs TO service_role;
GRANT ALL ON payment_idempotency_keys TO service_role;

-- ============================================================================
-- 7. COMMENTS FOR DOCUMENTATION
-- ============================================================================

COMMENT ON TABLE payment_transactions IS 'Stores all Razorpay payment transactions with verification status';
COMMENT ON TABLE payment_verification_logs IS 'Detailed audit logs of payment verification attempts';
COMMENT ON TABLE payment_idempotency_keys IS 'Prevents duplicate payment processing with idempotency';

COMMENT ON COLUMN payment_transactions.amount IS 'Amount in paise (₹499 = 49900)';
COMMENT ON COLUMN payment_transactions.verification_status IS 'Our internal verification status: pending, verified, failed, fraud_suspected';
COMMENT ON COLUMN payment_transactions.payment_status IS 'Razorpay payment status: created, authorized, captured, refunded, failed';
