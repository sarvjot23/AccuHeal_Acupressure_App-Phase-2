# How to Sync New 25 Points to Supabase

## Step 1: Add `is_free` Column to Database

1. Open Supabase Dashboard: https://supabase.com/dashboard/project/ignobvlfgvcrgywkldbz/editor
2. Click **SQL Editor** in the left sidebar
3. Click **"New query"**
4. Paste this SQL:

```sql
-- Add is_free column to acupressure_points table for freemium model
ALTER TABLE acupressure_points
ADD COLUMN IF NOT EXISTS is_free BOOLEAN DEFAULT FALSE;

-- Create index for faster FREE tier queries
CREATE INDEX IF NOT EXISTS idx_points_is_free ON acupressure_points(is_free) WHERE is_free = TRUE;

-- Add comment to document the column
COMMENT ON COLUMN acupressure_points.is_free IS 'TRUE if this point is available in the free tier, FALSE if premium-only';
```

5. Click **"Run"** (or press Ctrl/Cmd + Enter)
6. You should see: "Success. No rows returned"

## Step 2: Get Supabase Service Role Key

1. Open: https://supabase.com/dashboard/project/ignobvlfgvcrgywkldbz/settings/api
2. Scroll to **"Project API keys"**
3. Find **"service_role"** section (marked as "secret")
4. Click **"Reveal"** and copy the key
5. Add to your `.env` file:

```bash
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your_key_here
```

**Important**: This key bypasses Row-Level Security - never commit it to git!

## Step 3: Upload All Points (Including New Ones)

Run this command in your terminal:

```bash
node scripts/upsert-new-points.js
```

This will:
- Upload all 102 points from `samplePoints.ts` to Supabase
- Update existing points with any changes
- Add the 25 new points
- Set the `is_free` flag correctly for all points

## Expected Output

```
✅ Successfully upserted: 106 points
📊 Total in database: 106
🆓 FREE tier points: 23
```

## Step 3: Verify in App

1. Restart the Expo dev server if it's running
2. Open the app
3. Search for new points:
   - Search "ST37" - should show Shangjuxu (FREE)
   - Search "SP5" - should show Shangqiu (FREE)
   - Search "diarrhea" - should show ST37 as FREE
   - Search "nausea" - should show CV10 as FREE

## Troubleshooting

### If points still don't appear:
- Clear app cache: Stop dev server, delete `.expo` folder, restart
- Check Supabase table: Go to Table Editor → acupressure_points
- Verify row count matches 102+

### If FREE points show premium gate:
- Verify `is_free` column exists in Supabase
- Check that the specific point has `is_free = true`
- Sign out and sign in again in the app

##All 25 New Points

**FREE Tier (10 points)**:
1. LU6 - Kongzui - Sore throat
2. LU10 - Yuji - Sore throat, laryngitis
3. PC7 - Daling - Anxiety, insomnia
4. HT6 - Yinxi - Insomnia, night sweats
5. ST37 - Shangjuxu - Acute diarrhea
6. ST40 - Fenglong - Phlegm, throat mucus
7. LI10 - Shousanli - Tennis elbow
8. LI17 - Tianding - Sore throat, swallowing
9. SP5 - Shangqiu - Digestive issues, ankle pain
10. CV10 - Xiawan - Nausea, abdominal pain

**PREMIUM Tier (15 points)**:
1. LU2, LU3, LU8 - Lung meridian
2. PC3, PC9 - Pericardium
3. HT5, HT8 - Heart
4. ST34, ST44 - Stomach
5. LI5, LI6 - Large Intestine
6. SP8 - Spleen
7. CV9, CV13 - Conception Vessel
8. BL20 - Bladder
