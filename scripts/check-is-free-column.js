#!/usr/bin/env node

/**
 * Quick script to check if is_free column exists in Supabase
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColumn() {
  try {
    console.log('🔍 Checking if is_free column exists...\n');

    const { data, error } = await supabase
      .from('acupressure_points')
      .select('id, code, is_free')
      .limit(1);

    if (error) {
      if (error.message.includes('is_free')) {
        console.log('❌ is_free column does NOT exist');
        console.log('   Error:', error.message);
        console.log('\n📋 Next step: Run the SQL migration in Supabase Dashboard');
        console.log('   File: supabase/migrations/007_add_is_free_column.sql');
        console.log('   URL: https://supabase.com/dashboard/project/ignobvlfgvcrgywkldbz/editor\n');
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    } else {
      console.log('✅ is_free column EXISTS!');
      console.log('   Sample data:', data);
      console.log('\n📋 Next step: Add SUPABASE_SERVICE_ROLE_KEY to .env\n');
    }
  } catch (err) {
    console.error('💥 Error:', err);
  }
}

checkColumn();
