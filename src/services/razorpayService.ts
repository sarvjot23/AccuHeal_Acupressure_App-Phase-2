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

class RazorpayPaymentService {
  private keyId: string = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID || '';
  private keySecret: string = process.env.RAZORPAY_KEY_SECRET || '';

  constructor() {
    if (!this.keyId || !this.keySecret) {
      console.warn('⚠️ Razorpay credentials not configured');
    }
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
   * Verify payment signature (client-side basic check)
   * In production, signature verification MUST be done on the backend
   */
  verifySignature(response: PaymentResponse): boolean {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

      // For now, just check if all required fields are present
      // In production, you MUST verify the signature on your backend
      const isValid = !!(razorpay_order_id && razorpay_payment_id && razorpay_signature);
      console.log(isValid ? '✅ Payment data received' : '❌ Incomplete payment data');
      return isValid;
    } catch (error) {
      console.error('❌ Error verifying signature:', error);
      return false;
    }
  }

  /**
   * Process subscription payment and update user in Supabase
   */
  async processSubscription(
    clerkUserId: string,
    paymentResponse: PaymentResponse,
    amount: number = 499 // ₹499/month default
  ): Promise<boolean> {
    try {
      // Verify signature first
      if (!this.verifySignature(paymentResponse)) {
        throw new Error('Payment verification failed');
      }

      // Calculate expiry date (30 days from now)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);

      // Update user in Supabase
      await supabaseService.updateUserSubscription(clerkUserId, {
        is_premium: true,
        subscription_status: 'active',
        subscription_expires_at: expiryDate.toISOString(),
        stripe_customer_id: paymentResponse.razorpay_payment_id,
        stripe_subscription_id: paymentResponse.razorpay_order_id,
      });

      console.log('✅ Subscription activated for user:', clerkUserId);
      return true;
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
   */
  isConfigured(): boolean {
    return !!(this.keyId && this.keySecret);
  }
}

export const razorpayService = new RazorpayPaymentService();
