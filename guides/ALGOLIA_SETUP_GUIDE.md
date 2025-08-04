# Algolia Search Setup Guide

## Step 1: Create Algolia Account

1. **Sign up for Algolia**
   - Visit: https://www.algolia.com/
   - Click "Start free" or "Sign up"
   - Use your email to create account
   - **Choose the FREE plan** (sufficient for our needs)

2. **Verify Your Email**
   - Check your email for verification link
   - Click to verify your account

## Step 2: Create Application

1. **Create New Application**
   - After login, you'll be prompted to create an application
   - Application name: `AccuHeal Production`
   - Select region: Choose closest to your users
     - **For India/Asia**: `Singapore (Southeast Asia)`
     - **For Global**: `US East (Virginia)`

2. **Complete Onboarding**
   - Skip the tutorial/walkthrough
   - Go directly to Dashboard

## Step 3: Get API Credentials

1. **Go to API Keys**
   - In the left sidebar, click "API Keys"
   - You'll see your application credentials

2. **Copy These Values:**
   ```
   Application ID: ABC123DEF (example)
   Search-Only API Key: def456ghi789 (example)
   Admin API Key: xyz789abc123 (example) - Keep this PRIVATE
   ```

3. **Important Notes:**
   - **Search-Only API Key**: Safe to use in mobile app (public)
   - **Admin API Key**: Only for backend/server use (PRIVATE)
   - We'll only use the Search-Only key in the app

## Step 4: Create Search Index

1. **Go to Indices**
   - Click "Indices" in the left sidebar
   - Click "Create Index"

2. **Index Configuration**
   - Index name: `accuheal_acupressure_points_prod`
   - Click "Create"

3. **Configure Index Settings**
   - Click on your newly created index
   - Go to "Configuration" tab
   - Click "Searchable attributes"
   - Add these attributes in order:
     ```
     1. name.en
     2. name.hi
     3. code
     4. conditions
     5. bodyPart
     6. location.en
     7. location.hi
     ```

4. **Configure Ranking**
   - In "Ranking" tab, set these criteria (in order):
     ```
     1. typo
     2. geo
     3. words
     4. filters
     5. proximity
     6. attribute
     7. exact
     8. custom
     ```

## Step 5: Set Up Facets (Filters)

1. **Go to Facets**
   - In your index, click "Configuration" → "Facets"
   - Add these facets for filtering:
     ```
     - bodyPart (searchable)
     - difficulty (searchable)
     - conditions (searchable)
     - pressure (searchable)
     ```

2. **Save Configuration**
   - Click "Review and Save Settings"
   - Confirm the changes

## Step 6: Provide Credentials to Developer

**Please provide these values:**

```
ALGOLIA_APP_ID=your_application_id_here
ALGOLIA_SEARCH_KEY=your_search_only_api_key_here
```

**⚠️ Do NOT share the Admin API Key - keep it private!**

## Step 7: Monitor Usage (Optional)

1. **Check Analytics**
   - Go to "Analytics" to see search usage
   - Monitor search queries and popular results

2. **Usage Limits**
   - Free plan includes:
     - 10,000 search requests/month
     - 10,000 records
     - 1GB storage
   - More than enough for AccuHeal's needs

## Verification

After providing credentials, I will:
1. Connect the app to your Algolia index
2. Upload all 24 acupressure points
3. Test search functionality
4. Configure autocomplete and suggestions

## Free Tier Limits

Algolia's free tier is perfect for AccuHeal:
- ✅ **10K searches/month** (plenty for initial users)
- ✅ **10K records** (we have 24 points, room for growth)
- ✅ **All features included**

## Upgrade Path

If we exceed limits later:
- **Essential Plan**: $50/month for 50K searches
- **Growth Plan**: $150/month for 200K searches
- Can upgrade anytime based on actual usage

## Estimated Time: 10-15 minutes

---

**Questions?** Let me know if you need help with any step!

**Next:** Once you provide the API credentials, I'll handle all the technical integration!