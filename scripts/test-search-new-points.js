#!/usr/bin/env node

/**
 * Test searching for the new points using Supabase
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSearch() {
  try {
    console.log('🔍 Testing search for new points...\n');

    // Test searching for "LU4"
    console.log('1. Searching for "LU4" (code):');
    const { data: lu4Code, error: lu4CodeError } = await supabase
      .from('acupressure_points')
      .select('id, code, name_en, is_free')
      .ilike('code', '%LU4%');

    if (lu4CodeError) {
      console.log(`   ❌ Error: ${lu4CodeError.message}`);
    } else {
      console.log(`   ✅ Found ${lu4Code.length} results`);
      lu4Code.forEach(p => console.log(`      - ${p.code} (${p.id}): ${p.name_en}`));
    }

    // Test searching for "Xiabai"
    console.log('\n2. Searching for "Xiabai" (name):');
    const { data: xiabai, error: xiabaiError } = await supabase
      .from('acupressure_points')
      .select('id, code, name_en, is_free')
      .ilike('name_en', '%Xiabai%');

    if (xiabaiError) {
      console.log(`   ❌ Error: ${xiabaiError.message}`);
    } else {
      console.log(`   ✅ Found ${xiabai.length} results`);
      xiabai.forEach(p => console.log(`      - ${p.code} (${p.id}): ${p.name_en}`));
    }

    // Test searching for "Tinghui" (GB2)
    console.log('\n3. Searching for "Tinghui" (GB2 name):');
    const { data: tinghui, error: tinghuiError } = await supabase
      .from('acupressure_points')
      .select('id, code, name_en, is_free')
      .ilike('name_en', '%Tinghui%');

    if (tinghuiError) {
      console.log(`   ❌ Error: ${tinghuiError.message}`);
    } else {
      console.log(`   ✅ Found ${tinghui.length} results`);
      tinghui.forEach(p => console.log(`      - ${p.code} (${p.id}): ${p.name_en} (${p.is_free ? 'FREE' : 'PREMIUM'})`));
    }

    // Test general search that should include new points
    console.log('\n4. General search for "chest pain":');
    const { data: chestPain, error: chestError } = await supabase
      .from('acupressure_points')
      .select('id, code, name_en')
      .or('name_en.ilike.%chest pain%,indications_en.cs.{"chest pain"}')
      .limit(5);

    if (chestError) {
      console.log(`   ❌ Error: ${chestError.message}`);
    } else {
      console.log(`   ✅ Found ${chestPain.length} results`);
      chestPain.forEach(p => console.log(`      - ${p.code} (${p.id}): ${p.name_en}`));
    }

    console.log('\n✅ Search test completed!');

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

testSearch();
