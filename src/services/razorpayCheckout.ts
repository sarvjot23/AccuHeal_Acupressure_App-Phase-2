/**
 * Razorpay Checkout Handler
 * Handles Razorpay payment flow for web and mobile
 */

import { razorpayService, type PaymentResponse } from './razorpayService';
import { supabaseService } from './supabaseService';
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
    const { clerkUserId, amount = 499, currency = 'INR', email = '', name = 'AccuHeal User' } = options;

    // Create order
    const order = await razorpayService.createOrder(amount, currency);

    // Load Razorpay script if not already loaded
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      
      await new Promise(resolve => {
        script.onload = resolve;
      });
    }

    // Create Razorpay instance
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
          // Process payment on server
          const success = await razorpayService.processSubscription(clerkUserId, response, amount);
          
          if (success) {
            Alert.alert(
              '✅ Payment Successful',
              'Your subscription is now active! You now have access to all 89 acupressure points.',
              [{ text: 'Continue', onPress: () => {} }]
            );
            return true;
          } else {
            Alert.alert('❌ Payment Failed', 'Please try again');
            return false;
          }
        } catch (error) {
          console.error('Payment processing error:', error);
          Alert.alert('❌ Error', 'Failed to process your payment');
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
    razorpay.open();
    return true;

  } catch (error) {
    console.error('Razorpay checkout error:', error);
    Alert.alert('❌ Error', 'Failed to open payment checkout');
    return false;
  }
};

/**
 * Verify payment is configured
 */
export const isRazorpayConfigured = (): boolean => {
  return razorpayService.isConfigured();
};
