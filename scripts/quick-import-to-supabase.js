#!/usr/bin/env node

/**
 * Quick script to import samplePoints.ts data into Supabase
 */

const { createClient } = require('@supabase/supabase-js');

// Your Supabase credentials from .env
const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

const supabase = createClient(supabaseUrl, supabaseKey);

// Import the TypeScript data (requires ts-node or we need to check compiled JS)
// For now, we'll use a workaround - you can manually copy-paste or we use the local data

async function importSampleData() {
  try {
    console.log('🚀 Starting quick import to Supabase...\n');

    // First, check if data already exists
    const { count, error: countError } = await supabase
      .from('acupressure_points')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Error checking existing data:', countError);
      return;
    }

    console.log(`📊 Current points in database: ${count}`);

    if (count > 0) {
      console.log('\n⚠️  Database already has data!');
      console.log('Options:');
      console.log('1. Delete existing data first: DELETE FROM acupressure_points;');
      console.log('2. Or skip this import');
      console.log('\nRun this SQL in Supabase dashboard first if you want to reimport.\n');
      return;
    }

    // Since we can't easily import .ts file, let's fetch from the running app
    console.log('\n📝 To import your data:');
    console.log('\n1. Go to Supabase Dashboard SQL Editor:');
    console.log('   https://supabase.com/dashboard/project/ignobvlfgvcrgywkldbz/sql\n');
    console.log('2. Run this query to see if you have data:');
    console.log('   SELECT COUNT(*) FROM acupressure_points;\n');
    console.log('3. If 0, you need to import. Use the bulk insert from your backup or Firebase.\n');
    console.log('4. Or use the Supabase service in your app to bulk insert from samplePoints.ts\n');

    // Alternative: Use supabaseService.bulkInsertPoints() from the app
    console.log('💡 Quick Solution:');
    console.log('   Use the existing supabaseService.bulkInsertPoints() method');
    console.log('   from your app code with the samplePoints data.\n');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

importSampleData();
