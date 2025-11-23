#!/usr/bin/env node

/**
 * Test Razorpay Integration
 * Verifies API keys are configured and can connect to Razorpay
 */

const Razorpay = require('razorpay');
require('dotenv').config();

const keyId = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

console.log('🧪 Testing Razorpay Integration\n');
console.log('=' .repeat(50));

if (!keyId || !keySecret) {
  console.log('❌ ERROR: Razorpay credentials not found in environment variables');
  console.log('   Make sure EXPO_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are set');
  process.exit(1);
}

console.log('✅ Razorpay credentials found:');
console.log(`   Key ID: ${keyId.substring(0, 10)}...`);
console.log(`   Key Secret: ${keySecret.substring(0, 10)}...\n`);

try {
  const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  console.log('✅ Razorpay client initialized successfully');
  console.log('\n📋 Testing order creation...\n');

  // Test order creation
  razorpay.orders.create({
    amount: 49900, // ₹499 in paise
    currency: 'INR',
    receipt: `test_${Date.now()}`,
    payment_capture: 1,
  })
  .then(order => {
    console.log('✅ Order created successfully!');
    console.log('   Order ID:', order.id);
    console.log('   Amount:', order.amount / 100, 'INR');
    console.log('   Status:', order.status);
    console.log('\n🎉 Razorpay integration is working perfectly!\n');
    console.log('=' .repeat(50));
    console.log('Ready for production payments with:');
    console.log('  • Test mode API keys (development)');
    console.log('  • ₹499/month subscription plan');
    console.log('  • Real-time Supabase updates');
    console.log('=' .repeat(50));
  })
  .catch(error => {
    console.error('❌ Error creating test order:');
    console.error('   ', error.message);
    process.exit(1);
  });

} catch (error) {
  console.error('❌ Error initializing Razorpay client:');
  console.error('   ', error.message);
  process.exit(1);
}
