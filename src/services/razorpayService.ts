import { supabase } from './supabase';
import { supabaseService } from './supabaseService';

export interface RazorpayConfig {
  keyId: string;
  keySecret: string;
}

export interface PaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface PaymentVerificationResult {
  success: boolean;
  message: string;
  payment_id?: string;
  subscription_expires_at?: string;
  error?: string;
}

class RazorpayPaymentService {
  private keyId: string = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID || '';

  constructor() {
    if (!this.keyId) {
      console.warn('⚠️ Razorpay Key ID not configured');
    }
    console.log('🔑 Razorpay Key ID:', this.keyId ? `${this.keyId.substring(0, 15)}...` : 'NOT SET');
  }

  /**
   * Create a Razorpay order via Supabase Edge Function
   * This is done server-side to keep the API secret secure
   */
  async createOrder(
    amount: number,
    currency: string = 'INR',
    authToken?: string
  ): Promise<any> {
    if (!this.keyId) {
      throw new Error('Razorpay not configured');
    }

    try {
      console.log('📞 Calling create-order Edge Function...');

      // Use provided token or try to get Supabase session
      let token = authToken;

      if (!token) {
        const { data: { session } } = await supabase.auth.getSession();
        token = session?.access_token;
      }

      if (!token) {
        throw new Error('No active session. Please sign in again.');
      }

      console.log('🔑 Using Supabase-compatible JWT from Clerk');

      // Use direct fetch to see actual error response
      const edgeFunctionUrl = `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/create-order`;
      const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

      const fetchResponse = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'apikey': supabaseAnonKey || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
        }),
      });

      console.log('📊 Response status:', fetchResponse.status);

      const responseText = await fetchResponse.text();
      console.log('📄 Response body:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('❌ Failed to parse response as JSON');
        throw new Error(`Invalid response from server: ${responseText}`);
      }

      if (!fetchResponse.ok) {
        console.error('❌ Server returned error:', data);
        console.error('Error details:', data.details);
        console.error('Error stack:', data.stack);
        throw new Error(data.details || data.error || `Server error: ${fetchResponse.status}`);
      }

      if (!data.success || !data.order) {
        console.error('❌ Order creation failed:', data);
        throw new Error(data.error || data.details || 'Failed to create order');
      }

      console.log('✅ Order created:', data.order.id);
      return data.order;
    } catch (error) {
      console.error('❌ Error creating order:', error);
      throw error;
    }
  }

  /**
   * Verify payment and process subscription via Supabase Edge Function
   * This provides secure server-side verification with HMAC signature validation
   */
  async processSubscription(
    clerkUserId: string,
    paymentResponse: PaymentResponse,
    amount: number = 499, // ₹499/month default
    authToken?: string
  ): Promise<PaymentVerificationResult> {
    try {
      console.log('🔐 Sending payment for verification...');

      // Use provided token or try to get Supabase session
      let token = authToken;

      if (!token) {
        const { data: { session } } = await supabase.auth.getSession();
        token = session?.access_token;
      }

      if (!token) {
        throw new Error('No active session. Please sign in again.');
      }

      // Generate idempotency key to prevent duplicate processing
      const idempotencyKey = `${paymentResponse.razorpay_payment_id}_${Date.now()}`;

      // Call Supabase Edge Function for secure verification
      const { data, error } = await supabase.functions.invoke('verify-payment', {
        body: {
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_signature: paymentResponse.razorpay_signature,
          idempotency_key: idempotencyKey,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (error) {
        console.error('❌ Edge Function error:', error);
        throw new Error(error.message || 'Payment verification failed');
      }

      const result = data as PaymentVerificationResult;

      if (!result.success) {
        console.error('❌ Payment verification failed:', result.error);
        throw new Error(result.error || 'Payment verification failed');
      }

      console.log('✅ Payment verified successfully!');
      console.log('📅 Subscription expires at:', result.subscription_expires_at);

      return result;
    } catch (error) {
      console.error('❌ Error processing subscription:', error);
      throw error;
    }
  }

  /**
   * Get payment details (for webhook/verification)
   * This should be done on the backend in production
   */
  async getPayment(paymentId: string): Promise<any> {
    if (!this.keyId) {
      throw new Error('Razorpay not configured');
    }

    try {
      // In production, call your backend API to fetch payment details
      console.log('📋 Payment ID:', paymentId);
      return { id: paymentId, status: 'captured' };
    } catch (error) {
      console.error('❌ Error fetching payment:', error);
      throw error;
    }
  }

  /**
   * Check if credentials are configured
   * Note: Only keyId is checked because keySecret should only exist server-side
   */
  isConfigured(): boolean {
    return !!this.keyId;
  }
}

export const razorpayService = new RazorpayPaymentService();
