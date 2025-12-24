#!/usr/bin/env node

/**
 * Inspect all columns for a new point to see what data is actually there
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspectPoint() {
  try {
    console.log('🔍 Inspecting LU4 point data in Supabase...\n');

    const { data, error } = await supabase
      .from('acupressure_points')
      .select('*')
      .eq('id', 'lu4')
      .single();

    if (error) {
      console.log(`❌ Error: ${error.message}`);
      return;
    }

    console.log('Full point data:');
    console.log(JSON.stringify(data, null, 2));

    console.log('\n📋 Column summary:');
    Object.keys(data).forEach(key => {
      const value = data[key];
      const type = Array.isArray(value) ? 'array' : typeof value;
      const preview = Array.isArray(value) ? `[${value.length} items]` :
                      typeof value === 'object' && value !== null ? JSON.stringify(value).substring(0, 50) + '...' :
                      String(value).substring(0, 50);
      console.log(`   ${key}: (${type}) ${preview}`);
    });

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

inspectPoint();
