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
   * Create a Razorpay order for subscription (client-side mock for now)
   * In production, this should be done on the backend
   */
  async createOrder(amount: number, currency: string = 'INR'): Promise<any> {
    if (!this.keyId) {
      throw new Error('Razorpay not configured');
    }

    try {
      // For now, create a mock order ID
      // In production, you'd call your backend API to create the order
      const order = {
        id: `order_${Date.now()}`,
        amount: amount * 100, // Convert to smallest currency unit (paise)
        currency,
        receipt: `receipt_${Date.now()}`,
      };

      console.log('✅ Order created:', order.id);
      return order;
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
    amount: number = 499 // ₹499/month default
  ): Promise<PaymentVerificationResult> {
    try {
      console.log('🔐 Sending payment for verification...');

      // Get current session for auth
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
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
          Authorization: `Bearer ${session.access_token}`,
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
