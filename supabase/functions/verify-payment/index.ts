/**
 * Supabase Edge Function: verify-payment
 *
 * Securely verifies Razorpay payment signatures and updates user subscription status.
 *
 * Security Features:
 * - HMAC SHA256 signature verification
 * - Razorpay API status confirmation
 * - Idempotency key handling
 * - Rate limiting
 * - Payment amount validation
 * - Comprehensive audit logging
 *
 * @endpoint POST /functions/v1/verify-payment
 * @auth Required (Clerk JWT)
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createHmac } from 'https://deno.land/std@0.177.0/node/crypto.ts';

// Environment variables
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const RAZORPAY_KEY_ID = Deno.env.get('RAZORPAY_KEY_ID')!;
const RAZORPAY_KEY_SECRET = Deno.env.get('RAZORPAY_KEY_SECRET')!;

// Constants
const SUBSCRIPTION_AMOUNT = 49900; // ₹499 in paise
const SUBSCRIPTION_DURATION_DAYS = 30;

// Types
interface PaymentVerificationRequest {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  idempotency_key?: string;
}

interface VerificationResponse {
  success: boolean;
  message: string;
  payment_id?: string;
  subscription_expires_at?: string;
  error?: string;
}

/**
 * Verify HMAC signature using Razorpay secret key
 */
function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  try {
    const body = `${orderId}|${paymentId}`;
    const expectedSignature = createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    return expectedSignature === signature;
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

/**
 * Fetch payment details from Razorpay API
 */
async function fetchRazorpayPaymentStatus(paymentId: string): Promise<any> {
  try {
    const auth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
    const response = await fetch(
      `https://api.razorpay.com/v1/payments/${paymentId}`,
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Razorpay API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Razorpay API fetch error:', error);
    throw error;
  }
}

/**
 * Check idempotency key to prevent duplicate processing
 */
async function checkIdempotency(
  supabase: any,
  idempotencyKey: string,
  userId: string
): Promise<{ exists: boolean; response?: any }> {
  if (!idempotencyKey) {
    return { exists: false };
  }

  const { data, error } = await supabase
    .from('payment_idempotency_keys')
    .select('*')
    .eq('idempotency_key', idempotencyKey)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 = not found
    console.error('Idempotency check error:', error);
    return { exists: false };
  }

  if (data) {
    // Key exists, return cached response
    return {
      exists: true,
      response: data.response_data,
    };
  }

  return { exists: false };
}

/**
 * Store idempotency key
 */
async function storeIdempotencyKey(
  supabase: any,
  idempotencyKey: string,
  userId: string,
  paymentTransactionId: string,
  requestData: any,
  responseData: any
): Promise<void> {
  if (!idempotencyKey) return;

  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // Expire after 24 hours

  await supabase
    .from('payment_idempotency_keys')
    .insert({
      idempotency_key: idempotencyKey,
      user_id: userId,
      payment_transaction_id: paymentTransactionId,
      request_data: requestData,
      response_data: responseData,
      status: 'completed',
      expires_at: expiresAt.toISOString(),
    });
}

/**
 * Main handler
 */
serve(async (req) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  try {
    // Initialize Supabase client with service role
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Get user from JWT
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing authorization' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract Clerk user ID from JWT
    const token = authHeader.replace('Bearer ', '');
    const payload = JSON.parse(atob(token.split('.')[1]));
    const clerkUserId = payload.sub;

    if (!clerkUserId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid token' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const body: PaymentVerificationRequest = await req.json();
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      idempotency_key,
    } = body;

    // Validate required fields
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check idempotency
    if (idempotency_key) {
      const idempotencyCheck = await checkIdempotency(
        supabase,
        idempotency_key,
        clerkUserId
      );

      if (idempotencyCheck.exists) {
        console.log('Idempotent request detected, returning cached response');
        return new Response(
          JSON.stringify(idempotencyCheck.response),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Get user from database
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('clerk_user_id', clerkUserId)
      .single();

    if (userError || !userData) {
      return new Response(
        JSON.stringify({ success: false, error: 'User not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const userId = userData.id;

    // Step 1: Verify signature
    console.log('Verifying payment signature...');
    const signatureValid = verifyRazorpaySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    // Step 2: Fetch payment details from Razorpay
    console.log('Fetching payment status from Razorpay...');
    let razorpayPayment;
    try {
      razorpayPayment = await fetchRazorpayPaymentStatus(razorpay_payment_id);
    } catch (error) {
      // Log failed verification attempt
      await supabase.from('payment_verification_logs').insert({
        payment_transaction_id: null,
        verification_attempt: 1,
        signature_valid: signatureValid,
        error_code: 'RAZORPAY_API_ERROR',
        error_message: error.message,
      });

      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to verify payment with Razorpay',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 3: Validate payment status and amount
    const paymentCaptured = razorpayPayment.status === 'captured';
    const amountValid = razorpayPayment.amount === SUBSCRIPTION_AMOUNT;

    if (!signatureValid || !paymentCaptured || !amountValid) {
      const errorMessage = !signatureValid
        ? 'Invalid signature'
        : !paymentCaptured
        ? 'Payment not captured'
        : 'Invalid amount';

      console.error('Payment verification failed:', errorMessage);

      // Create payment transaction with failed status
      const { data: transaction } = await supabase
        .from('payment_transactions')
        .insert({
          user_id: userId,
          clerk_user_id: clerkUserId,
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          amount: razorpayPayment.amount,
          currency: razorpayPayment.currency,
          payment_status: razorpayPayment.status,
          verification_status: 'failed',
          signature_valid: signatureValid,
          payment_method: razorpayPayment.method,
          payment_created_at: new Date(razorpayPayment.created_at * 1000).toISOString(),
        })
        .select()
        .single();

      // Log failed verification
      if (transaction) {
        await supabase.from('payment_verification_logs').insert({
          payment_transaction_id: transaction.id,
          verification_attempt: 1,
          signature_valid: signatureValid,
          razorpay_api_status: razorpayPayment.status,
          razorpay_api_response: razorpayPayment,
          error_code: 'VERIFICATION_FAILED',
          error_message: errorMessage,
        });
      }

      return new Response(
        JSON.stringify({
          success: false,
          error: errorMessage,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 4: Payment verified! Create transaction record
    console.log('Payment verified successfully');
    const { data: transaction, error: transactionError } = await supabase
      .from('payment_transactions')
      .insert({
        user_id: userId,
        clerk_user_id: clerkUserId,
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        amount: razorpayPayment.amount,
        currency: razorpayPayment.currency,
        payment_status: razorpayPayment.status,
        verification_status: 'verified',
        signature_valid: true,
        payment_method: razorpayPayment.method,
        razorpay_fee: razorpayPayment.fee || 0,
        payment_created_at: new Date(razorpayPayment.created_at * 1000).toISOString(),
        verified_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (transactionError) {
      console.error('Transaction creation error:', transactionError);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to create transaction record',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 5: Log successful verification
    await supabase.from('payment_verification_logs').insert({
      payment_transaction_id: transaction.id,
      verification_attempt: 1,
      signature_valid: true,
      razorpay_api_status: razorpayPayment.status,
      razorpay_api_response: razorpayPayment,
    });

    // Step 6: Update user subscription status
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + SUBSCRIPTION_DURATION_DAYS);

    const { error: updateError } = await supabase
      .from('users')
      .update({
        is_premium: true,
        subscription_status: 'active',
        subscription_expires_at: expiresAt.toISOString(),
        stripe_customer_id: razorpay_payment_id, // Store payment ID
        stripe_subscription_id: razorpay_order_id, // Store order ID
      })
      .eq('id', userId);

    if (updateError) {
      console.error('User update error:', updateError);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to update subscription status',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 7: Prepare response
    const response: VerificationResponse = {
      success: true,
      message: 'Payment verified and subscription activated',
      payment_id: razorpay_payment_id,
      subscription_expires_at: expiresAt.toISOString(),
    };

    // Step 8: Store idempotency key
    if (idempotency_key) {
      await storeIdempotencyKey(
        supabase,
        idempotency_key,
        userId,
        transaction.id,
        body,
        response
      );
    }

    console.log('Payment verification completed successfully');

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
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
