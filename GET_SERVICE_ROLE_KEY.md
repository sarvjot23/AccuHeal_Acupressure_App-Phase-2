# Get Supabase Service Role Key - Simple Steps

## Current Status
✅ Migration complete - `is_free` column exists in database
✅ Upsert script ready - `scripts/upsert-new-points.js`
✅ `.env` file prepared with placeholder
❌ **MISSING: Service Role Key** ← You are here

## What You Need to Do (2 minutes)

### Step 1: Get the Service Role Key

1. Open this URL in your browser:
   ```
   https://supabase.com/dashboard/project/ignobvlfgvcrgywkldbz/settings/api
   ```

2. Scroll down to the **"Project API keys"** section

3. Find the row labeled **"service_role"** (it says "secret" next to it)

4. Click the **"Reveal"** or eye icon button

5. Click **"Copy"** to copy the key to clipboard

### Step 2: Add Key to .env File

1. Open `F:\ai_projects\projects\accuheal\.env` in your text editor

2. Find this line (near line 46):
   ```
   SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY_HERE
   ```

3. Replace `YOUR_SERVICE_ROLE_KEY_HERE` with the key you copied (Ctrl+V)

4. Save the file

### Step 3: Run the Upsert Script

Open terminal and run:
```bash
node scripts/upsert-new-points.js
```

### Expected Success Output
```
✅ Successfully upserted: 106 points
📊 Total in database: 106
🆓 FREE tier points: 23
```

## Why This is Safe

- ✅ `.env` is in `.gitignore` - won't be committed to git
- ✅ Service role key is only used by local admin scripts
- ✅ Never exposed to client-side code (no `EXPO_PUBLIC_` prefix)
- ✅ Only you have access to this key

## After Success

1. Restart your Expo dev server
2. Open the app
3. Search for "ST37" or "SP5" - should show as FREE points
4. All 106 points should be visible

## If You Get Stuck

The service role key should look like:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzg4MTIwMSwiZXhwIjoyMDc5NDU3MjAxfQ.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Notice it has `"cm9sZSI6InNlcnZpY2Vfcm9sZSI` in it (service_role in base64).
