#!/usr/bin/env node

/**
 * Generate SQL INSERT statements for importing samplePoints.ts data
 * This can be run directly in Supabase SQL Editor
 */

const path = require('path');

function escapeSQL(str) {
  if (str === null || str === undefined) return 'NULL';
  if (typeof str === 'number') return str.toString();
  if (typeof str === 'boolean') return str ? 'TRUE' : 'FALSE';
  // Escape single quotes by doubling them
  return "'" + str.toString().replace(/'/g, "''") + "'";
}

function arrayToSQL(arr) {
  if (!arr || arr.length === 0) return 'ARRAY[]::TEXT[]';
  const escaped = arr.map(item => escapeSQL(item));
  return 'ARRAY[' + escaped.join(', ') + ']';
}

function transformPointForSupabase(point) {
  // Clamp popularity to valid range (1-5)
  let popularity = point.popularity || 3;
  if (popularity < 1) popularity = 1;
  if (popularity > 5) popularity = 5;

  return {
    id: point.id,
    code: point.code,
    name_en: point.name.en,
    name_hi: point.name.hi,
    location_en: point.location.en,
    location_hi: point.location.hi,
    technique_en: point.technique.en,
    technique_hi: point.technique.hi,
    contraindications_en: point.contraindications?.en || '',
    contraindications_hi: point.contraindications?.hi || '',
    chinese_traditional: point.chineseName?.traditional || null,
    chinese_pinyin: point.chineseName?.pinyin || null,
    meridian_name_en: point.meridian?.name?.en || 'Unknown',
    meridian_name_hi: point.meridian?.name?.hi || 'अज्ञात',
    meridian_code: point.meridian?.code || 'UNK',
    meridian_element: point.meridian?.element || null,
    meridian_polarity: point.meridian?.polarity || null,
    indications_en: point.indications?.map(ind => ind.en) || [],
    indications_hi: point.indications?.map(ind => ind.hi) || [],
    body_parts: point.bodyPart || [],
    symptoms: point.symptoms || [],
    duration: point.duration || '1-3 minutes',
    pressure: point.pressure || 'Moderate',
    difficulty: point.difficulty || 'Beginner',
    category: point.category || 'Classical',
    popularity: popularity,
    image_url: point.images && point.images.length > 0 ? point.images[0] : null,
  };
}

function generateInsertSQL(point) {
  const p = transformPointForSupabase(point);

  return `INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  ${escapeSQL(p.id)}, ${escapeSQL(p.code)}, ${escapeSQL(p.name_en)}, ${escapeSQL(p.name_hi)},
  ${escapeSQL(p.location_en)}, ${escapeSQL(p.location_hi)},
  ${escapeSQL(p.technique_en)}, ${escapeSQL(p.technique_hi)},
  ${escapeSQL(p.contraindications_en)}, ${escapeSQL(p.contraindications_hi)},
  ${p.chinese_traditional ? escapeSQL(p.chinese_traditional) : 'NULL'},
  ${p.chinese_pinyin ? escapeSQL(p.chinese_pinyin) : 'NULL'},
  ${escapeSQL(p.meridian_name_en)}, ${escapeSQL(p.meridian_name_hi)},
  ${escapeSQL(p.meridian_code)},
  ${p.meridian_element ? escapeSQL(p.meridian_element) : 'NULL'},
  ${p.meridian_polarity ? escapeSQL(p.meridian_polarity) : 'NULL'},
  ${arrayToSQL(p.body_parts)}, ${arrayToSQL(p.symptoms)},
  ${arrayToSQL(p.indications_en)}, ${arrayToSQL(p.indications_hi)},
  ${escapeSQL(p.duration)}, ${escapeSQL(p.pressure)},
  ${escapeSQL(p.difficulty)}, ${escapeSQL(p.category)},
  ${p.popularity}, ${p.image_url ? escapeSQL(p.image_url) : 'NULL'}
);`;
}

async function generateSQL() {
  try {
    console.log('📖 Reading samplePoints.ts...');
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');

    // Load TypeScript file using tsx
    const { execSync } = require('child_process');
    const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints));"`, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });
    const samplePoints = JSON.parse(result.trim());

    console.log(`   Found ${samplePoints.length} points\n`);
    console.log('🔧 Generating SQL statements...\n');

    // Generate header
    let sql = `-- AccuHeal Acupressure Points Import\n`;
    sql += `-- Generated: ${new Date().toISOString()}\n`;
    sql += `-- Total points: ${samplePoints.length}\n\n`;
    sql += `-- NOTE: Run this in Supabase SQL Editor\n`;
    sql += `-- Make sure you're logged into your Supabase dashboard first\n\n`;

    // Generate INSERT statements
    for (const point of samplePoints) {
      sql += generateInsertSQL(point) + '\n\n';
    }

    // Add verification query at the end
    sql += `-- Verify import\n`;
    sql += `SELECT COUNT(*) as total_points FROM acupressure_points;\n`;
    sql += `SELECT code, name_en, difficulty FROM acupressure_points ORDER BY code LIMIT 10;\n`;

    // Write to file
    const fs = require('fs');
    const outputPath = path.join(__dirname, 'import-acupressure-points.sql');
    fs.writeFileSync(outputPath, sql, 'utf8');

    console.log('✅ SQL file generated successfully!');
    console.log(`📄 File: ${outputPath}`);
    console.log(`📊 Contains ${samplePoints.length} INSERT statements\n`);
    console.log('📋 Next steps:');
    console.log('1. Go to Supabase Dashboard: https://supabase.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Navigate to: SQL Editor');
    console.log('4. Copy the contents of: scripts/import-acupressure-points.sql');
    console.log('5. Paste and run in SQL Editor');
    console.log('6. Verify the import completed successfully\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

generateSQL();
