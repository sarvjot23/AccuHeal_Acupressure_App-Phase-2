/**
 * Supabase Edge Function: razorpay-webhook
 *
 * Handles asynchronous payment notifications from Razorpay webhooks.
 * Provides additional reliability layer for payment confirmation.
 *
 * Features:
 * - Webhook signature verification
 * - Handles payment.captured, payment.failed, payment.authorized events
 * - Updates payment status in database
 * - Idempotent (safe to receive duplicate webhooks)
 * - Comprehensive error logging
 *
 * @endpoint POST /functions/v1/razorpay-webhook
 * @auth Not required (webhook signature verification instead)
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createHmac } from 'https://deno.land/std@0.177.0/node/crypto.ts';

// Environment variables
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const RAZORPAY_WEBHOOK_SECRET = Deno.env.get('RAZORPAY_WEBHOOK_SECRET')!;

// Types
interface WebhookPayload {
  entity: string; // 'event'
  account_id: string;
  event: string; // 'payment.captured', 'payment.failed', etc.
  contains: string[]; // ['payment']
  payload: {
    payment: {
      entity: {
        id: string; // razorpay_payment_id
        entity: string; // 'payment'
        amount: number; // in paise
        currency: string;
        status: string; // 'captured', 'failed', 'authorized'
        order_id: string;
        method: string; // 'card', 'netbanking', 'upi', etc.
        amount_refunded: number;
        refund_status: string | null;
        captured: boolean;
        description: string;
        card_id: string | null;
        bank: string | null;
        wallet: string | null;
        vpa: string | null;
        email: string;
        contact: string;
        fee: number;
        tax: number;
        error_code: string | null;
        error_description: string | null;
        error_source: string | null;
        error_step: string | null;
        error_reason: string | null;
        created_at: number; // Unix timestamp
      };
    };
  };
  created_at: number;
}

/**
 * Verify webhook signature
 * Razorpay sends signature in X-Razorpay-Signature header
 */
function verifyWebhookSignature(body: string, signature: string): boolean {
  try {
    const expectedSignature = createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    return expectedSignature === signature;
  } catch (error) {
    console.error('Webhook signature verification error:', error);
    return false;
  }
}

/**
 * Handle payment.captured event
 */
async function handlePaymentCaptured(
  supabase: any,
  payment: any
): Promise<void> {
  console.log('📥 Handling payment.captured event:', payment.id);

  // Check if transaction already exists
  const { data: existingTransaction } = await supabase
    .from('payment_transactions')
    .select('id, verification_status')
    .eq('razorpay_payment_id', payment.id)
    .single();

  if (existingTransaction) {
    console.log('✅ Transaction already exists:', existingTransaction.id);

    // If already verified, skip
    if (existingTransaction.verification_status === 'verified') {
      console.log('✅ Transaction already verified, skipping');
      return;
    }

    // Update status to verified
    await supabase
      .from('payment_transactions')
      .update({
        payment_status: payment.status,
        verification_status: 'verified',
        verified_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', existingTransaction.id);

    console.log('✅ Updated existing transaction to verified');
    return;
  }

  // Transaction doesn't exist yet - this shouldn't happen normally
  // but webhook might arrive before user completes flow
  console.log('⚠️ Transaction not found, creating from webhook...');

  // Get user by email (payment contains email)
  const { data: userData } = await supabase
    .from('users')
    .select('id, clerk_user_id')
    .eq('email', payment.email)
    .single();

  if (!userData) {
    console.error('❌ User not found for email:', payment.email);
    throw new Error('User not found');
  }

  // Create transaction record
  const { data: transaction, error: transactionError } = await supabase
    .from('payment_transactions')
    .insert({
      user_id: userData.id,
      clerk_user_id: userData.clerk_user_id,
      razorpay_payment_id: payment.id,
      razorpay_order_id: payment.order_id,
      razorpay_signature: '', // We don't have signature in webhook
      amount: payment.amount,
      currency: payment.currency,
      payment_status: payment.status,
      verification_status: 'verified',
      signature_valid: true,
      payment_method: payment.method,
      razorpay_fee: payment.fee || 0,
      payment_created_at: new Date(payment.created_at * 1000).toISOString(),
      verified_at: new Date().toISOString(),
      notes: { source: 'webhook' },
    })
    .select()
    .single();

  if (transactionError) {
    console.error('❌ Failed to create transaction:', transactionError);
    throw transactionError;
  }

  // Log verification
  await supabase.from('payment_verification_logs').insert({
    payment_transaction_id: transaction.id,
    verification_attempt: 1,
    signature_valid: true,
    razorpay_api_status: payment.status,
    razorpay_api_response: payment,
  });

  // Update user subscription status
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  await supabase
    .from('users')
    .update({
      is_premium: true,
      subscription_status: 'active',
      subscription_expires_at: expiresAt.toISOString(),
      stripe_customer_id: payment.id,
      stripe_subscription_id: payment.order_id,
    })
    .eq('id', userData.id);

  console.log('✅ User subscription activated via webhook');
}

/**
 * Handle payment.failed event
 */
async function handlePaymentFailed(
  supabase: any,
  payment: any
): Promise<void> {
  console.log('❌ Handling payment.failed event:', payment.id);

  // Check if transaction exists
  const { data: existingTransaction } = await supabase
    .from('payment_transactions')
    .select('id')
    .eq('razorpay_payment_id', payment.id)
    .single();

  if (existingTransaction) {
    // Update status to failed
    await supabase
      .from('payment_transactions')
      .update({
        payment_status: 'failed',
        verification_status: 'failed',
        updated_at: new Date().toISOString(),
        notes: {
          error_code: payment.error_code,
          error_description: payment.error_description,
          error_source: payment.error_source,
          error_step: payment.error_step,
          error_reason: payment.error_reason,
        },
      })
      .eq('id', existingTransaction.id);

    // Log failed verification
    await supabase.from('payment_verification_logs').insert({
      payment_transaction_id: existingTransaction.id,
      verification_attempt: 1,
      signature_valid: false,
      razorpay_api_status: payment.status,
      razorpay_api_response: payment,
      error_code: payment.error_code,
      error_message: payment.error_description,
    });

    console.log('✅ Updated transaction to failed status');
  } else {
    console.log('⚠️ Transaction not found for failed payment');
  }
}

/**
 * Handle payment.authorized event
 */
async function handlePaymentAuthorized(
  supabase: any,
  payment: any
): Promise<void> {
  console.log('🔐 Handling payment.authorized event:', payment.id);

  // Check if transaction exists
  const { data: existingTransaction } = await supabase
    .from('payment_transactions')
    .select('id')
    .eq('razorpay_payment_id', payment.id)
    .single();

  if (existingTransaction) {
    // Update status to authorized (payment captured but not yet settled)
    await supabase
      .from('payment_transactions')
      .update({
        payment_status: 'authorized',
        updated_at: new Date().toISOString(),
      })
      .eq('id', existingTransaction.id);

    console.log('✅ Updated transaction to authorized status');
  } else {
    console.log('⚠️ Transaction not found for authorized payment');
  }
}

/**
 * Handle refund events
 */
async function handleRefund(
  supabase: any,
  payment: any
): Promise<void> {
  console.log('💰 Handling refund event for payment:', payment.id);

  // Check if transaction exists
  const { data: existingTransaction } = await supabase
    .from('payment_transactions')
    .select('id, user_id')
    .eq('razorpay_payment_id', payment.id)
    .single();

  if (existingTransaction) {
    // Update transaction status
    await supabase
      .from('payment_transactions')
      .update({
        payment_status: 'refunded',
        updated_at: new Date().toISOString(),
        notes: {
          amount_refunded: payment.amount_refunded,
          refund_status: payment.refund_status,
        },
      })
      .eq('id', existingTransaction.id);

    // Downgrade user subscription
    await supabase
      .from('users')
      .update({
        is_premium: false,
        subscription_status: 'canceled',
        subscription_expires_at: new Date().toISOString(),
      })
      .eq('id', existingTransaction.user_id);

    console.log('✅ Refund processed, user downgraded');
  } else {
    console.log('⚠️ Transaction not found for refund');
  }
}

/**
 * Main handler
 */
serve(async (req) => {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Get webhook signature from header
    const signature = req.headers.get('X-Razorpay-Signature');
    if (!signature) {
      console.error('❌ Missing webhook signature');
      return new Response(
        JSON.stringify({ error: 'Missing signature' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get raw body for signature verification
    const body = await req.text();

    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature)) {
      console.error('❌ Invalid webhook signature');
      return new Response(
        JSON.stringify({ error: 'Invalid signature' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('✅ Webhook signature verified');

    // Parse webhook payload
    const payload: WebhookPayload = JSON.parse(body);
    const event = payload.event;
    const payment = payload.payload.payment.entity;

    console.log(`📨 Received webhook event: ${event}`);

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Handle different event types
    switch (event) {
      case 'payment.captured':
        await handlePaymentCaptured(supabase, payment);
        break;

      case 'payment.failed':
        await handlePaymentFailed(supabase, payment);
        break;

      case 'payment.authorized':
        await handlePaymentAuthorized(supabase, payment);
        break;

      case 'refund.created':
      case 'refund.processed':
        await handleRefund(supabase, payment);
        break;

      default:
        console.log(`ℹ️ Unhandled event type: ${event}`);
    }

    // Return success response
    return new Response(
      JSON.stringify({ success: true, event }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
        details: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
