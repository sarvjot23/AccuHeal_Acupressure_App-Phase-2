#!/usr/bin/env node

/**
 * Script to upsert NEW acupressure points from samplePoints.ts into Supabase
 * This will add new points or update existing ones (upsert operation)
 */

const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Supabase credentials
const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';

// Try to use service role key from .env, fallback to anon key
require('dotenv').config();
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('⚠️  WARNING: SUPABASE_SERVICE_ROLE_KEY not found in .env');
  console.warn('   Using anon key - this may fail due to RLS policies');
  console.warn('   Get your service role key from: https://supabase.com/dashboard/project/ignobvlfgvcrgywkldbz/settings/api');
  console.warn('   Add to .env: SUPABASE_SERVICE_ROLE_KEY=your_key_here\n');
}

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Transform the app's AcupressurePoint format to Supabase table schema
 */
function transformPointForSupabase(point) {
  return {
    id: point.id,
    code: point.code,

    // Bilingual fields
    name_en: point.name.en,
    name_hi: point.name.hi,
    location_en: point.location.en,
    location_hi: point.location.hi,
    technique_en: point.technique.en,
    technique_hi: point.technique.hi,
    contraindications_en: point.contraindications?.en || '',
    contraindications_hi: point.contraindications?.hi || '',

    // Chinese name
    chinese_traditional: point.chineseName?.traditional || null,
    chinese_pinyin: point.chineseName?.pinyin || null,

    // Meridian info
    meridian_name_en: point.meridian?.name?.en || 'Unknown',
    meridian_name_hi: point.meridian?.name?.hi || 'अज्ञात',
    meridian_code: point.meridian?.code || 'UNK',
    meridian_element: point.meridian?.element || null,
    meridian_polarity: point.meridian?.polarity || null,

    // Arrays
    indications_en: point.indications?.map(ind => ind.en) || [],
    indications_hi: point.indications?.map(ind => ind.hi) || [],
    body_parts: point.bodyPart || [],
    symptoms: point.symptoms || [],

    // Metadata
    duration: point.duration || '1-3 minutes',
    pressure: point.pressure || 'Moderate',
    difficulty: point.difficulty || 'Beginner',
    category: point.category || 'Classical',
    popularity: point.popularity || 3,

    // FREE tier flag
    is_free: point.isFree === true,

    // Image
    image_url: point.images && point.images.length > 0 ? point.images[0] : null,
  };
}

async function upsertPoints() {
  try {
    console.log('🚀 Starting upsert to Supabase...\n');

    // Step 1: Check current database count
    console.log('📊 Checking current database...');
    const { count: existingCount, error: countError } = await supabase
      .from('acupressure_points')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Error checking database:', countError);
      return;
    }

    console.log(`   Current points in database: ${existingCount}\n`);

    // Step 2: Load sample points
    console.log('📖 Loading samplePoints.ts...');
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');

    let samplePoints;
    try {
      const { execSync } = require('child_process');
      const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints));"`, {
        encoding: 'utf8',
        maxBuffer: 50 * 1024 * 1024
      });
      samplePoints = JSON.parse(result.trim());
    } catch (error) {
      console.error('❌ Error loading TypeScript file. Make sure tsx is installed:');
      console.error('   npm install -D tsx');
      return;
    }

    console.log(`   Found ${samplePoints.length} points in samplePoints.ts\n`);

    // Step 3: Transform data
    console.log('🔄 Transforming data...');
    const transformedPoints = samplePoints.map(transformPointForSupabase);
    console.log(`   Transformed ${transformedPoints.length} points\n`);

    // Step 4: Upsert with batching
    console.log('💾 Upserting points (will add new, update existing)...');
    const BATCH_SIZE = 50;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < transformedPoints.length; i += BATCH_SIZE) {
      const batch = transformedPoints.slice(i, i + BATCH_SIZE);
      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(transformedPoints.length / BATCH_SIZE);

      console.log(`   Batch ${batchNumber}/${totalBatches}: Processing ${batch.length} points...`);

      const { data, error } = await supabase
        .from('acupressure_points')
        .upsert(batch, { onConflict: 'id' })
        .select();

      if (error) {
        console.error(`   ❌ Error in batch ${batchNumber}:`, error.message);
        errorCount += batch.length;
      } else {
        console.log(`   ✅ Batch ${batchNumber} completed: ${data.length} points upserted`);
        successCount += data.length;
      }
    }

    // Step 5: Verify final count
    console.log('\n📊 Verifying final database...');
    const { count: finalCount, error: finalCountError } = await supabase
      .from('acupressure_points')
      .select('*', { count: 'exact', head: true });

    if (!finalCountError) {
      console.log(`   Final points in database: ${finalCount}`);
      console.log(`   Points added/updated: ${finalCount - existingCount}`);
    }

    // Step 6: Verify FREE tier points
    console.log('\n🆓 Checking FREE tier points...');
    const { count: freeCount, error: freeCountError } = await supabase
      .from('acupressure_points')
      .select('*', { count: 'exact', head: true })
      .eq('is_free', true);

    if (!freeCountError) {
      console.log(`   FREE tier points: ${freeCount}`);
    }

    // Step 7: Summary
    console.log('\n' + '='.repeat(60));
    console.log('📈 Upsert Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully upserted: ${successCount} points`);
    if (errorCount > 0) {
      console.log(`❌ Failed to upsert: ${errorCount} points`);
    }
    console.log(`📊 Total in database: ${finalCount || '?'}`);
    console.log(`🆓 FREE tier points: ${freeCount || '?'}`);
    console.log('='.repeat(60));

    console.log('\n✨ Upsert complete! New points should now appear in the app.\n');

  } catch (error) {
    console.error('💥 Unexpected error:', error);
    process.exit(1);
  }
}

// Run the upsert
upsertPoints();
