#!/usr/bin/env node

/**
 * Verify the 8 new points exist in Supabase database
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const newPointIds = ['lu4', 'pc4', 'ht4', 'si18', 'gb2', 'li14', 'st43', 'bl18'];

async function verifyNewPoints() {
  try {
    console.log('🔍 Checking if new points exist in Supabase...\n');

    for (const pointId of newPointIds) {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('id, code, is_free')
        .eq('id', pointId)
        .single();

      if (error) {
        console.log(`❌ ${pointId.toUpperCase()}: NOT FOUND - ${error.message}`);
      } else {
        const tier = data.is_free ? 'FREE' : 'PREMIUM';
        console.log(`✅ ${pointId.toUpperCase()} (${data.code}): Found - ${tier}`);
      }
    }

    console.log('\n📊 Checking total point count...');
    const { count, error: countError } = await supabase
      .from('acupressure_points')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log(`❌ Error counting points: ${countError.message}`);
    } else {
      console.log(`Total points in database: ${count}`);
    }

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

verifyNewPoints();
