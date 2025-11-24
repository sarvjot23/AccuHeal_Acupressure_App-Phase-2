/**
 * Razorpay Checkout Handler
 * Handles Razorpay payment flow for web and mobile
 * Now with secure server-side verification via Supabase Edge Functions
 */

import { razorpayService, type PaymentResponse, type PaymentVerificationResult } from './razorpayService';
import { Alert } from 'react-native';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface CheckoutOptions {
  clerkUserId: string;
  amount?: number;
  currency?: string;
  email?: string;
  name?: string;
}

/**
 * Open Razorpay Checkout for web
 */
export const openRazorpayCheckout = async (options: CheckoutOptions): Promise<boolean> => {
  try {
    console.log('🚀 Starting Razorpay checkout with options:', {
      clerkUserId: options.clerkUserId,
      amount: options.amount,
      email: options.email
    });

    const { clerkUserId, amount = 499, currency = 'INR', email = '', name = 'AccuHeal User' } = options;

    // Create order via Edge Function
    console.log('📦 Creating order...');
    const order = await razorpayService.createOrder(amount, currency);
    console.log('✅ Order created:', order);

    // Load Razorpay script if not already loaded
    if (!window.Razorpay) {
      console.log('📜 Loading Razorpay script...');
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      await new Promise((resolve, reject) => {
        script.onload = () => {
          console.log('✅ Razorpay script loaded successfully');
          resolve(true);
        };
        script.onerror = () => {
          console.error('❌ Failed to load Razorpay script');
          reject(new Error('Failed to load Razorpay script'));
        };
      });
    } else {
      console.log('✅ Razorpay script already loaded');
    }

    // Create Razorpay instance with real order
    console.log('🎨 Creating Razorpay instance with key:', process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID);
    const razorpay = new window.Razorpay({
      key: process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      name: 'AccuHeal',
      description: 'Premium Monthly Subscription',
      image: 'https://ignobvlfgvcrgywkldbz.supabase.co/storage/v1/object/public/acupressure-images/logo.png',
      prefill: {
        email,
        contact: '',
        name,
      },
      handler: async (response: PaymentResponse) => {
        try {
          console.log('💳 Payment completed, verifying...');
          console.log('📝 Payment response:', response);

          // Process payment with secure server-side verification
          const result: PaymentVerificationResult = await razorpayService.processSubscription(
            clerkUserId,
            response,
            amount
          );

          if (result.success) {
            const expiryDate = new Date(result.subscription_expires_at!);
            const formattedDate = expiryDate.toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            });

            Alert.alert(
              '🎉 Payment Successful!',
              `Your subscription is now active! You now have access to all 89 acupressure points.\n\nExpires on: ${formattedDate}`,
              [{ text: 'Continue', onPress: () => {} }]
            );
            return true;
          } else {
            // This shouldn't happen as errors are thrown, but just in case
            Alert.alert(
              '❌ Payment Verification Failed',
              result.error || 'Unable to verify your payment. Please contact support.',
              [{ text: 'OK' }]
            );
            return false;
          }
        } catch (error: any) {
          console.error('Payment processing error:', error);

          // User-friendly error messages based on error type
          let errorTitle = '❌ Payment Error';
          let errorMessage = 'Failed to process your payment. Please try again.';

          if (error.message.includes('signature')) {
            errorTitle = '🔐 Security Verification Failed';
            errorMessage = 'Payment signature verification failed. Please try again or contact support.';
          } else if (error.message.includes('session')) {
            errorTitle = '🔒 Session Expired';
            errorMessage = 'Your session has expired. Please sign in again and retry.';
          } else if (error.message.includes('captured')) {
            errorTitle = '💳 Payment Not Confirmed';
            errorMessage = 'Payment was not confirmed by your bank. Please check your account and try again.';
          } else if (error.message.includes('amount')) {
            errorTitle = '💰 Amount Mismatch';
            errorMessage = 'Payment amount does not match subscription price. Please try again.';
          }

          Alert.alert(errorTitle, errorMessage, [{ text: 'OK' }]);
          return false;
        }
      },
      modal: {
        ondismiss: () => {
          console.log('Payment modal closed');
        },
      },
      theme: {
        color: '#4ade80', // AccuHeal green
      },
    });

    // Open Razorpay modal
    console.log('🚪 Opening Razorpay modal...');
    razorpay.open();
    console.log('✅ Razorpay modal opened');
    return true;

  } catch (error) {
    console.error('❌ Razorpay checkout error:', error);
    Alert.alert('❌ Error', 'Failed to open payment checkout. Check console for details.');
    return false;
  }
};

/**
 * Verify payment is configured
 */
export const isRazorpayConfigured = (): boolean => {
  return razorpayService.isConfigured();
};
