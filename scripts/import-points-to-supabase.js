#!/usr/bin/env node

/**
 * Script to import acupressure points from samplePoints.ts into Supabase
 * This reads the TypeScript data and bulk inserts into the database
 */

const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const fs = require('fs');

// Supabase credentials from .env
const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

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

    // Chinese name (fixed column names)
    chinese_traditional: point.chineseName?.traditional || null,
    chinese_pinyin: point.chineseName?.pinyin || null,

    // Meridian info
    meridian_name_en: point.meridian?.name?.en || 'Unknown',
    meridian_name_hi: point.meridian?.name?.hi || 'अज्ञात',
    meridian_code: point.meridian?.code || 'UNK',
    meridian_element: point.meridian?.element || null,
    meridian_polarity: point.meridian?.polarity || null,

    // Arrays - convert indication objects to string arrays
    indications_en: point.indications?.map(ind => ind.en) || [],
    indications_hi: point.indications?.map(ind => ind.hi) || [],
    body_parts: point.bodyPart || [],
    symptoms: point.symptoms || [],

    // Metadata (all required by schema)
    duration: point.duration || '1-3 minutes',
    pressure: point.pressure || 'Moderate',
    difficulty: point.difficulty || 'Beginner',
    category: point.category || 'Classical',
    popularity: point.popularity || 3,

    // Image - single URL instead of array
    image_url: point.images && point.images.length > 0 ? point.images[0] : null,

    // Timestamps - let Supabase handle created_at/updated_at with defaults
  };
}

async function importPoints() {
  try {
    console.log('🚀 Starting import to Supabase...\n');

    // Step 1: Check existing data
    console.log('📊 Checking existing data in database...');
    const { count: existingCount, error: countError } = await supabase
      .from('acupressure_points')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Error checking existing data:', countError);
      return;
    }

    console.log(`   Found ${existingCount} existing points in database\n`);

    if (existingCount > 0) {
      console.log('⚠️  Database already contains data!');
      console.log('   To reimport:');
      console.log('   1. Go to Supabase Dashboard SQL Editor');
      console.log('   2. Run: DELETE FROM acupressure_points;');
      console.log('   3. Then run this script again\n');

      // Ask for confirmation (in Node.js we'll just exit)
      console.log('   Exiting to prevent duplicates...');
      return;
    }

    // Step 2: Read and parse the TypeScript file
    console.log('📖 Reading samplePoints.ts...');
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');

    // Since we can't directly import .ts in Node, we'll use a dynamic import trick
    // First, let's try using tsx or ts-node if available
    let samplePoints;
    try {
      // Try to use tsx to load TypeScript file
      const { execSync } = require('child_process');
      const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints));"`, {
        encoding: 'utf8',
        maxBuffer: 50 * 1024 * 1024 // 50MB buffer for large data
      });
      samplePoints = JSON.parse(result.trim());
    } catch (error) {
      console.error('❌ Error loading TypeScript file. Make sure tsx is installed:');
      console.error('   npm install -g tsx');
      console.error('\n   Or alternatively, install ts-node:');
      console.error('   npm install -g ts-node');
      return;
    }

    console.log(`   Found ${samplePoints.length} points to import\n`);

    // Step 3: Transform data
    console.log('🔄 Transforming data for Supabase schema...');
    const transformedPoints = samplePoints.map(transformPointForSupabase);
    console.log(`   Transformed ${transformedPoints.length} points\n`);

    // Step 4: Bulk insert with batching (Supabase has limits)
    console.log('💾 Inserting points into database...');
    const BATCH_SIZE = 50;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < transformedPoints.length; i += BATCH_SIZE) {
      const batch = transformedPoints.slice(i, i + BATCH_SIZE);
      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(transformedPoints.length / BATCH_SIZE);

      console.log(`   Batch ${batchNumber}/${totalBatches}: Inserting ${batch.length} points...`);

      const { data, error } = await supabase
        .from('acupressure_points')
        .insert(batch)
        .select();

      if (error) {
        console.error(`   ❌ Error in batch ${batchNumber}:`, error.message);
        errorCount += batch.length;
      } else {
        console.log(`   ✅ Batch ${batchNumber} completed: ${data.length} points inserted`);
        successCount += data.length;
      }
    }

    // Step 5: Summary
    console.log('\n' + '='.repeat(60));
    console.log('📈 Import Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully imported: ${successCount} points`);
    if (errorCount > 0) {
      console.log(`❌ Failed to import: ${errorCount} points`);
    }
    console.log('='.repeat(60));

    // Step 6: Verify search vectors were created
    console.log('\n🔍 Verifying search vectors...');
    const { data: samplePoint, error: verifyError } = await supabase
      .from('acupressure_points')
      .select('id, code, name_en, search_vector_en, search_vector_hi')
      .limit(1)
      .single();

    if (verifyError) {
      console.error('❌ Error verifying search vectors:', verifyError);
    } else {
      const hasEnVector = samplePoint.search_vector_en !== null;
      const hasHiVector = samplePoint.search_vector_hi !== null;

      if (hasEnVector && hasHiVector) {
        console.log('✅ Search vectors are being generated correctly!');
        console.log(`   Sample: ${samplePoint.code} - ${samplePoint.name_en}`);
      } else {
        console.warn('⚠️  Search vectors may not be generated properly');
        console.warn('   Make sure migration 003_add_fulltext_search.sql was run');
      }
    }

    console.log('\n✨ Import complete! You can now test search functionality.\n');

  } catch (error) {
    console.error('💥 Unexpected error:', error);
    process.exit(1);
  }
}

// Run the import
importPoints();
