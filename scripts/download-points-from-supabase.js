#!/usr/bin/env node

/**
 * Download all points from Supabase and save to samplePoints.ts
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase credentials
const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
require('dotenv').config();
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Transform Supabase schema (snake_case) to app format (camelCase)
 */
function transformFromSupabase(dbPoint) {
  return {
    id: dbPoint.id,
    code: dbPoint.code,
    name: dbPoint.name,
    chineseName: dbPoint.chinese_name,
    location: dbPoint.location,
    meridian: dbPoint.meridian,
    indications: dbPoint.indications,
    contraindications: dbPoint.contraindications,
    technique: dbPoint.technique,
    duration: dbPoint.duration,
    pressure: dbPoint.pressure,
    bodyPart: dbPoint.body_part,
    symptoms: dbPoint.symptoms,
    difficulty: dbPoint.difficulty,
    category: dbPoint.category,
    popularity: dbPoint.popularity,
    method: dbPoint.method,
    conditions: dbPoint.conditions,
    images: dbPoint.images || [],
    ...(dbPoint.is_free === true && { isFree: true })
  };
}

async function downloadPoints() {
  try {
    console.log('📥 Downloading all points from Supabase...\n');

    const { data: points, error } = await supabase
      .from('acupressure_points')
      .select('*')
      .order('id');

    if (error) {
      throw error;
    }

    console.log(`✅ Downloaded ${points.length} points from Supabase\n`);

    // Transform to app format
    const appPoints = points.map(transformFromSupabase);

    // Generate TypeScript file content
    const fileContent = `import { AcupressurePoint } from '@types';

export const samplePoints: AcupressurePoint[] = ${JSON.stringify(appPoints, null, 2)};
`;

    // Write to file
    const filePath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');
    fs.writeFileSync(filePath, fileContent, 'utf8');

    console.log(`✅ Saved ${appPoints.length} points to ${filePath}\n`);

    // Count free vs premium
    const freeCount = appPoints.filter(p => p.isFree === true).length;
    const premiumCount = appPoints.length - freeCount;

    console.log('📊 Point distribution:');
    console.log(`   🆓 FREE: ${freeCount} points`);
    console.log(`   💎 PREMIUM: ${premiumCount} points`);
    console.log(`   📝 TOTAL: ${appPoints.length} points\n`);

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

downloadPoints();
