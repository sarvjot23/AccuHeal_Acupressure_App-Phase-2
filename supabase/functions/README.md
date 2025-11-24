# Supabase Edge Functions - AccuHeal

This directory contains Supabase Edge Functions for secure server-side operations.

## Available Functions

### 1. verify-payment

Securely verifies Razorpay payment signatures and activates user subscriptions.

**Features:**
- ✅ HMAC SHA256 signature verification
- ✅ Razorpay API status confirmation
- ✅ Idempotency key handling (prevents duplicate processing)
- ✅ Payment amount validation (₹499)
- ✅ Comprehensive audit logging
- ✅ User subscription activation (30 days)

**Endpoint:** `POST /functions/v1/verify-payment`

**Authentication:** Required (Clerk JWT via Bearer token)

**Request Body:**
```json
{
  "razorpay_payment_id": "pay_xxxxxxxxxxxxx",
  "razorpay_order_id": "order_xxxxxxxxxxxxx",
  "razorpay_signature": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "idempotency_key": "optional_unique_key"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Payment verified and subscription activated",
  "payment_id": "pay_xxxxxxxxxxxxx",
  "subscription_expires_at": "2025-02-23T12:00:00.000Z"
}
```

**Response (Failure):**
```json
{
  "success": false,
  "error": "Invalid signature | Payment not captured | Invalid amount"
}
```

---

## Setup Instructions

### 1. Install Supabase CLI

```bash
# macOS/Linux
brew install supabase/tap/supabase

# Windows
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase

# Or via npm
npm install -g supabase
```

### 2. Link Your Project

```bash
# Navigate to project root
cd F:\ai_projects\projects\accuheal

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref ignobvlfgvcrgywkldbz
```

### 3. Set Environment Secrets

Edge Functions need access to sensitive environment variables. Set them using the Supabase CLI:

```bash
# Set Razorpay credentials
supabase secrets set RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxx
supabase secrets set RAZORPAY_KEY_SECRET=your_actual_secret_key

# Verify secrets are set
supabase secrets list
```

**⚠️ IMPORTANT:**
- Never commit `RAZORPAY_KEY_SECRET` to git
- Use **live** keys for production, **test** keys for development
- Get keys from: https://dashboard.razorpay.com/app/keys

### 4. Run Database Migration

Before deploying the Edge Function, run the payment verification migration:

```bash
# Apply migration to create payment tables
supabase db push

# Or if you prefer manual migration:
supabase db reset  # Warning: This resets the entire database!
```

**What the migration does:**
- Creates `payment_transactions` table
- Creates `payment_verification_logs` table
- Creates `payment_idempotency_keys` table
- Sets up Row Level Security (RLS) policies
- Creates indexes for performance
- Adds cleanup functions for expired keys

### 5. Deploy Edge Function

```bash
# Deploy the verify-payment function
supabase functions deploy verify-payment

# Verify deployment
supabase functions list
```

### 6. Test the Function

```bash
# Get your project URL and anon key
echo "URL: $(supabase status | grep 'API URL')"
echo "Anon Key: $(supabase status | grep 'anon key')"

# Test with curl (replace with actual values)
curl -X POST \
  https://ignobvlfgvcrgywkldbz.supabase.co/functions/v1/verify-payment \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "razorpay_payment_id": "pay_test_123",
    "razorpay_order_id": "order_test_456",
    "razorpay_signature": "test_signature_789"
  }'
```

---

## Local Development

### Run Functions Locally

```bash
# Start Supabase locally
supabase start

# Run Edge Function locally
supabase functions serve verify-payment --env-file .env.local

# Function will be available at:
# http://localhost:54321/functions/v1/verify-payment
```

### Create .env.local for Local Testing

```bash
# Create .env.local in supabase/functions/
cat > supabase/functions/.env.local << EOF
SUPABASE_URL=http://localhost:54321
SUPABASE_SERVICE_ROLE_KEY=your_local_service_role_key
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
RAZORPAY_KEY_SECRET=your_test_secret
EOF
```

### View Logs

```bash
# View real-time logs
supabase functions logs verify-payment --follow

# View recent logs
supabase functions logs verify-payment --limit 100
```

---

## Troubleshooting

### Issue: "Function not found"

**Solution:** Make sure the function is deployed:
```bash
supabase functions list
supabase functions deploy verify-payment
```

### Issue: "Missing environment variables"

**Solution:** Set secrets properly:
```bash
supabase secrets set RAZORPAY_KEY_SECRET=your_secret
```

### Issue: "Signature verification failed"

**Causes:**
1. Using wrong Razorpay secret key
2. Test key vs live key mismatch
3. Incorrect signature format

**Solution:**
- Verify you're using matching test/live keys
- Check Razorpay dashboard for correct keys
- Ensure signature is hex string from Razorpay

### Issue: "Payment not captured"

**Causes:**
1. Payment failed at bank/card
2. Payment still pending
3. Using test payment ID with live keys

**Solution:**
- Check payment status in Razorpay dashboard
- Wait for payment to complete
- Use matching test/live credentials

### Issue: "User not found"

**Causes:**
1. User not synced to Supabase
2. Wrong Clerk user ID
3. JWT token invalid

**Solution:**
- Ensure user is logged in via Clerk
- Check users table in Supabase
- Verify JWT token is valid

---

## Security Best Practices

### ✅ DO:
- Always verify signatures on the backend (Edge Function)
- Use idempotency keys to prevent duplicate processing
- Log all verification attempts for audit trail
- Validate payment amounts server-side
- Use Row Level Security (RLS) on all tables
- Keep `RAZORPAY_KEY_SECRET` in Supabase secrets only

### ❌ DON'T:
- Never verify signatures on the client
- Never expose `RAZORPAY_KEY_SECRET` in client code
- Never trust payment data from client without verification
- Never skip amount validation
- Never allow users to set their own subscription expiry
- Never commit secrets to git

---

## Monitoring & Maintenance

### View Payment Transactions

```sql
-- View all verified payments
SELECT * FROM payment_transactions
WHERE verification_status = 'verified'
ORDER BY created_at DESC;

-- View failed verifications
SELECT * FROM payment_transactions
WHERE verification_status = 'failed'
ORDER BY created_at DESC;

-- View verification logs with errors
SELECT * FROM payment_verification_logs
WHERE error_message IS NOT NULL
ORDER BY created_at DESC;
```

### Cleanup Expired Keys (Run Daily)

```sql
-- Manual cleanup
DELETE FROM payment_idempotency_keys
WHERE expires_at < NOW();

-- Or use the function
SELECT cleanup_expired_idempotency_keys();
```

### Monitor Function Performance

```bash
# View function metrics in Supabase Dashboard
# Navigate to: Functions > verify-payment > Metrics

# Or via CLI
supabase functions logs verify-payment --since 1h
```

---

## Additional Resources

- [Supabase Edge Functions Docs](https://supabase.com/docs/guides/functions)
- [Razorpay Payment Verification](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/#step-3-verify-signature)
- [Razorpay API Reference](https://razorpay.com/docs/api/)
- [Deno Deploy Docs](https://deno.com/deploy/docs)

---

## Support

If you encounter issues:
1. Check function logs: `supabase functions logs verify-payment`
2. Verify secrets are set: `supabase secrets list`
3. Test locally first: `supabase functions serve verify-payment`
4. Check Razorpay dashboard for payment status
5. Review audit logs in `payment_verification_logs` table
