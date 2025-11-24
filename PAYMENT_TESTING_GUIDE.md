# AccuHeal Payment Testing Guide

Complete guide for testing the Razorpay payment integration with test cards and scenarios.

---

## Table of Contents
1. [Test Mode Setup](#test-mode-setup)
2. [Razorpay Test Cards](#razorpay-test-cards)
3. [Testing Scenarios](#testing-scenarios)
4. [Edge Function Testing](#edge-function-testing)
5. [Webhook Testing](#webhook-testing)
6. [Database Verification](#database-verification)
7. [Troubleshooting](#troubleshooting)

---

## Test Mode Setup

### 1. Verify Test Mode is Enabled

**In Razorpay Dashboard:**
- Bottom left corner should show **"Test Mode"** toggle
- If not visible, click the toggle to switch to test mode
- Test mode uses separate API keys (starts with `rzp_test_`)

### 2. Get Test API Keys

**Location:** Razorpay Dashboard → Settings → API Keys (Test Mode)

You should see:
```
Key ID: rzp_test_xxxxxxxxxxxxxxxxxx
Key Secret: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Verify Keys in Your App

**Check `.env` file:**
```bash
EXPO_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_test_secret
```

**Verify in Supabase:**
```bash
supabase secrets list
# Should show RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET
```

---

## Razorpay Test Cards

### Successful Payment Cards

These cards will **always succeed** in test mode:

| Card Number | Card Type | CVV | Expiry | 3D Secure | Expected Result |
|-------------|-----------|-----|--------|-----------|-----------------|
| `4111 1111 1111 1111` | Visa | Any 3 digits | Any future date | No | ✅ Success (Captured) |
| `5555 5555 5555 4444` | Mastercard | Any 3 digits | Any future date | No | ✅ Success (Captured) |
| `4012 8888 8888 1881` | Visa | Any 3 digits | Any future date | Yes | ✅ Success with 3DS |
| `5555 5555 5555 5557` | Mastercard | Any 3 digits | Any future date | Yes | ✅ Success with 3DS |

**Usage Example:**
```
Card Number: 4111 1111 1111 1111
Cardholder Name: Test User
CVV: 123
Expiry: 12/25
```

### Failed Payment Cards

These cards will **always fail** with specific errors:

| Card Number | Error Type | Error Code | Description |
|-------------|------------|------------|-------------|
| `4000 0000 0000 0002` | Card Declined | CARD_DECLINED | Generic card decline |
| `4000 0000 0000 9995` | Insufficient Funds | INSUFFICIENT_FUNDS | Not enough balance |
| `4000 0000 0000 0069` | Expired Card | CARD_EXPIRED | Card has expired |
| `4000 0000 0000 0127` | Invalid CVV | INVALID_CVV | Wrong CVV entered |
| `4000 0000 0000 0119` | Processing Error | PROCESSING_ERROR | Gateway processing error |

### International Cards

| Card Number | Country | Currency | Expected Result |
|-------------|---------|----------|-----------------|
| `4242 4242 4242 4242` | US | USD | ✅ Success |
| `3782 822463 10005` | Amex | Any | ✅ Success |

### Specific Test Scenarios

**Test Auto-Capture:**
- Card: `4111 1111 1111 1111`
- Payment will be automatically captured (status: `captured`)

**Test Authorization Only:**
- Card: `5104 0600 0000 0008`
- Payment will be authorized but not captured (status: `authorized`)
- Manual capture required

**Test 3D Secure Flow:**
- Card: `4012 8888 8888 1881`
- Will trigger 3D Secure authentication popup
- Use any password to authenticate

---

## Testing Scenarios

### Scenario 1: Successful Payment Flow

**Steps:**
1. Open AccuHeal app (web or mobile)
2. Navigate to Subscription screen
3. Click "Subscribe Now" button
4. Razorpay checkout modal opens
5. Enter test card: `4111 1111 1111 1111`
6. Enter any CVV (e.g., 123)
7. Enter any future expiry (e.g., 12/25)
8. Click "Pay ₹499"

**Expected Results:**
- ✅ Payment modal closes
- ✅ Alert shows: "🎉 Payment Successful!"
- ✅ Message includes expiry date (30 days from now)
- ✅ User redirected to account/home
- ✅ Premium features unlocked
- ✅ Database updated with payment record

**Console Logs to Verify:**
```
💳 Payment completed, verifying...
🔐 Sending payment for verification...
✅ Payment verified successfully!
📅 Subscription expires at: 2025-02-23T...
```

---

### Scenario 2: Failed Payment (Declined Card)

**Steps:**
1. Open Subscription screen
2. Click "Subscribe Now"
3. Enter declined card: `4000 0000 0000 0002`
4. Enter CVV: 123, Expiry: 12/25
5. Click "Pay ₹499"

**Expected Results:**
- ❌ Payment fails
- ❌ Alert shows: "💳 Payment Not Confirmed"
- ❌ Error message about bank declining
- ❌ User remains on subscription screen
- ❌ No database entry created
- ❌ User still has free access only

**Console Logs:**
```
💳 Payment completed, verifying...
❌ Edge Function error: Payment not captured
❌ Payment processing error: ...
```

---

### Scenario 3: Invalid Signature Test

**This requires manual manipulation - for security testing only**

**Setup:**
1. Open browser DevTools
2. Set breakpoint in `razorpayCheckout.ts` handler
3. Modify `razorpay_signature` value before sending to Edge Function

**Expected Results:**
- ❌ Alert shows: "🔐 Security Verification Failed"
- ❌ Payment signature verification failed message
- ❌ No database entry created
- ❌ Verification log shows `signature_valid: false`

---

### Scenario 4: Duplicate Payment Prevention

**Steps:**
1. Complete successful payment with card `4111 1111 1111 1111`
2. Note the `razorpay_payment_id` from console
3. Try to submit same payment response again (requires dev manipulation)

**Expected Results:**
- ✅ Edge Function detects idempotency key
- ✅ Returns cached response
- ✅ No duplicate database entry
- ✅ Console shows: "Idempotent request detected"

---

### Scenario 5: Session Expired

**Steps:**
1. Start payment flow
2. Sign out in another tab (clear auth session)
3. Complete payment in first tab

**Expected Results:**
- ❌ Alert shows: "🔒 Session Expired"
- ❌ Error: "No active session. Please sign in again."
- ❌ User prompted to sign in again

---

### Scenario 6: Amount Mismatch

**This is prevented by current implementation, but can be tested via webhook**

**Expected Results:**
- ❌ Payment rejected
- ❌ Alert shows: "💰 Amount Mismatch"
- ❌ Verification log shows amount validation failure

---

## Edge Function Testing

### Test verify-payment Function

**Using curl:**

```bash
# Get your JWT token (from browser DevTools → Application → Local Storage)
JWT_TOKEN="your_clerk_jwt_token"

# Make test request
curl -X POST \
  https://ignobvlfgvcrgywkldbz.supabase.co/functions/v1/verify-payment \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "razorpay_payment_id": "pay_test_12345",
    "razorpay_order_id": "order_test_67890",
    "razorpay_signature": "test_signature_abcdef",
    "idempotency_key": "test_key_123"
  }'
```

**Expected Response (Failure - invalid signature):**
```json
{
  "success": false,
  "error": "Invalid signature"
}
```

**With Valid Payment:**
- Use actual payment IDs from Razorpay test mode
- Should return success with subscription expiry date

---

### Test locally (Optional)

```bash
# Start Supabase locally
supabase start

# Serve function locally
supabase functions serve verify-payment --env-file .env.local

# Test at http://localhost:54321/functions/v1/verify-payment
```

---

## Webhook Testing

### Setup Webhook in Razorpay Dashboard

**Test Mode Webhook:**
1. Go to: Settings → Webhooks → Add Webhook URL (Test Mode)
2. URL: `https://ignobvlfgvcrgywkldbz.supabase.co/functions/v1/razorpay-webhook`
3. Secret: Generate and save (you'll need to add this to Supabase secrets)
4. Active Events:
   - ✅ `payment.captured`
   - ✅ `payment.failed`
   - ✅ `payment.authorized`
   - ✅ `refund.created`
   - ✅ `refund.processed`
5. Click "Create Webhook"

### Add Webhook Secret to Supabase

```bash
supabase secrets set RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

### Test Webhook Delivery

**Method 1: Use Razorpay Dashboard**
1. Go to: Webhooks → View Details → Send Test Webhook
2. Select event: `payment.captured`
3. Click "Send Test Webhook"
4. Check response (should be 200 OK)

**Method 2: Make Test Payment**
1. Complete payment with test card
2. Check webhook logs in Razorpay dashboard
3. Verify delivery status

**Method 3: Use webhook.site for debugging**
1. Go to https://webhook.site
2. Get unique URL
3. Temporarily set as webhook URL in Razorpay
4. Make test payment
5. See raw webhook payload

---

## Database Verification

### Check Payment Transactions

```sql
-- View all transactions
SELECT
  id,
  razorpay_payment_id,
  amount / 100 as amount_rupees,
  payment_status,
  verification_status,
  created_at
FROM payment_transactions
ORDER BY created_at DESC
LIMIT 10;
```

### Check Verification Logs

```sql
-- View verification attempts
SELECT
  pt.razorpay_payment_id,
  pvl.verification_attempt,
  pvl.signature_valid,
  pvl.razorpay_api_status,
  pvl.error_message,
  pvl.created_at
FROM payment_verification_logs pvl
JOIN payment_transactions pt ON pvl.payment_transaction_id = pt.id
ORDER BY pvl.created_at DESC
LIMIT 10;
```

### Check User Subscription Status

```sql
-- View user subscription after payment
SELECT
  email,
  is_premium,
  subscription_status,
  subscription_expires_at,
  stripe_customer_id as razorpay_payment_id
FROM users
WHERE is_premium = true
ORDER BY subscription_expires_at DESC;
```

### Check Idempotency Keys

```sql
-- View idempotency keys (for duplicate prevention)
SELECT
  idempotency_key,
  status,
  expires_at,
  created_at
FROM payment_idempotency_keys
ORDER BY created_at DESC
LIMIT 10;
```

---

## Troubleshooting

### Issue: Payment Modal Doesn't Open

**Possible Causes:**
- Razorpay script not loaded
- Invalid API key
- Browser blocking popup

**Solutions:**
1. Check browser console for errors
2. Verify `EXPO_PUBLIC_RAZORPAY_KEY_ID` in .env
3. Check popup blocker settings
4. Try in incognito mode

---

### Issue: Payment Succeeds but Verification Fails

**Symptoms:**
- Payment completes in Razorpay
- Alert shows "Payment Error"
- User doesn't get premium access

**Debug Steps:**
1. Check browser console for Edge Function errors
2. View Edge Function logs:
   ```bash
   supabase functions logs verify-payment --follow
   ```
3. Check if JWT token is valid
4. Verify Edge Function is deployed:
   ```bash
   supabase functions list
   ```

**Common Causes:**
- Edge Function not deployed
- Wrong Razorpay secret key
- JWT token expired
- Edge Function env variables not set

---

### Issue: Webhook Not Receiving Events

**Debug Steps:**
1. Check webhook status in Razorpay dashboard
2. Verify webhook URL is correct
3. Check webhook secret is set in Supabase
4. View webhook logs in Razorpay dashboard

**Test Webhook Signature:**
```bash
# In Edge Function logs, you should see:
✅ Webhook signature verified
📨 Received webhook event: payment.captured
```

---

### Issue: Database Not Updating

**Possible Causes:**
- RLS policies blocking updates
- User not found in database
- Database connection issue

**Solutions:**
1. Check RLS policies are correct
2. Verify user exists in `users` table
3. Check Supabase logs
4. Test with service role key

---

## Test Checklist

Use this checklist when testing:

### Basic Flow
- [ ] Payment modal opens successfully
- [ ] Can enter test card details
- [ ] Payment processes without errors
- [ ] Success alert appears
- [ ] User gets premium access
- [ ] Database record created

### Error Handling
- [ ] Declined card shows error message
- [ ] Insufficient funds shows error
- [ ] Expired card shows error
- [ ] Invalid CVV shows error
- [ ] Session expired shows error

### Security
- [ ] Invalid signature rejected
- [ ] Duplicate payment prevented
- [ ] Amount validation works
- [ ] Unauthorized access blocked

### Webhooks
- [ ] Webhook receives payment.captured
- [ ] Webhook signature verified
- [ ] Database updates from webhook
- [ ] Failed payments logged

### Database
- [ ] Transaction record created
- [ ] Verification log created
- [ ] User subscription updated
- [ ] Idempotency key stored

---

## Next Steps After Testing

Once all tests pass:

1. **Complete Razorpay KYC**
   - Submit business documents
   - Verify bank account
   - Activate live mode

2. **Switch to Live Keys**
   - Get live API keys from Razorpay
   - Update Supabase secrets
   - Update webhook URLs

3. **Production Deployment**
   - Deploy app to production
   - Update website URL in Razorpay
   - Monitor first live transactions

4. **Monitoring Setup**
   - Set up payment alerts
   - Monitor Edge Function logs
   - Track failed payments
   - Review webhook delivery

---

## Support & Resources

- **Razorpay Test Cards:** https://razorpay.com/docs/payments/payments/test-card-details/
- **Razorpay API Docs:** https://razorpay.com/docs/api/
- **Supabase Edge Functions:** https://supabase.com/docs/guides/functions
- **AccuHeal Docs:** See `supabase/functions/README.md`

---

**Happy Testing! 🧪**
