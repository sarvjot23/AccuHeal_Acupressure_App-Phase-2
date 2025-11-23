import Razorpay from 'razorpay';
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
  private razorpay: Razorpay | null = null;
  private keyId: string = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID || '';
  private keySecret: string = process.env.RAZORPAY_KEY_SECRET || '';

  constructor() {
    if (this.keyId && this.keySecret) {
      this.razorpay = new Razorpay({
        key_id: this.keyId,
        key_secret: this.keySecret,
      });
    } else {
      console.warn('⚠️ Razorpay credentials not configured');
    }
  }

  /**
   * Create a Razorpay order for subscription
   */
  async createOrder(amount: number, currency: string = 'INR'): Promise<any> {
    if (!this.razorpay) {
      throw new Error('Razorpay not configured');
    }

    try {
      const order = await this.razorpay.orders.create({
        amount: amount * 100, // Convert to smallest currency unit (paise)
        currency,
        receipt: `order_${Date.now()}`,
        payment_capture: 1, // Auto-capture payment
      });

      console.log('✅ Order created:', order.id);
      return order;
    } catch (error) {
      console.error('❌ Error creating order:', error);
      throw error;
    }
  }

  /**
   * Verify payment signature
   */
  verifySignature(response: PaymentResponse): boolean {
    if (!this.razorpay) return false;

    try {
      const crypto = require('crypto');
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

      const body = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac('sha256', this.keySecret)
        .update(body)
        .digest('hex');

      const isValid = expectedSignature === razorpay_signature;
      console.log(isValid ? '✅ Signature verified' : '❌ Signature invalid');
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
   */
  async getPayment(paymentId: string): Promise<any> {
    if (!this.razorpay) {
      throw new Error('Razorpay not configured');
    }

    try {
      const payment = await this.razorpay.payments.fetch(paymentId);
      return payment;
    } catch (error) {
      console.error('❌ Error fetching payment:', error);
      throw error;
    }
  }

  /**
   * Check if credentials are configured
   */
  isConfigured(): boolean {
    return !!this.razorpay;
  }
}

export const razorpayService = new RazorpayPaymentService();
