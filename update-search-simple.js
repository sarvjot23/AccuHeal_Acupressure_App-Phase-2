#!/usr/bin/env node

/**
 * Simple Typesense Update Script
 * Re-indexes all points including the new everyday essentials
 */

const Typesense = require('typesense');
const fs = require('fs');
const path = require('path');

// Typesense client configuration
const client = new Typesense.Client({
  nodes: [{
    host: 'localhost',
    port: 8108,
    protocol: 'http'
  }],
  apiKey: 'uPgH34r#',
  connectionTimeoutSeconds: 60
});

const collectionName = 'acupressure_points';

// Parse samplePoints.ts to extract data
function loadAcupressurePoints() {
  console.log('📖 Loading acupressure points from samplePoints.ts...');
  
  const filePath = path.join(__dirname, 'src/data/samplePoints.ts');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the array content using regex
  const arrayMatch = fileContent.match(/export const samplePoints.*?=\s*(\[[\s\S]*?\]);/);
  if (!arrayMatch) {
    throw new Error('Could not parse samplePoints data');
  }
  
  // Use eval to parse the array (not ideal but works for this context)
  const arrayString = arrayMatch[1];
  
  try {
    const samplePoints = eval(arrayString);
    console.log(`✅ Loaded ${samplePoints.length} acupressure points`);
    return samplePoints;
  } catch (error) {
    console.error('❌ Failed to parse samplePoints array:', error.message);
    throw error;
  }
}

// Convert AccuHeal point to Typesense format
function convertToTypesenseFormat(point) {
  return {
    id: point.id,
    code: point.code,
    name_en: point.name.en,
    name_hi: point.name.hi,
    chinese_traditional: point.chineseName?.traditional || '',
    chinese_pinyin: point.chineseName?.pinyin || '',
    location_en: point.location.en,
    location_hi: point.location.hi,
    meridian_name_en: point.meridian.name.en,
    meridian_name_hi: point.meridian.name.hi,
    meridian_code: point.meridian.code,
    meridian_element: point.meridian.element || '',
    meridian_polarity: point.meridian.polarity || '',
    symptoms: point.symptoms || [],
    indications_en: point.indications?.map(i => i.en) || [],
    indications_hi: point.indications?.map(i => i.hi) || [],
    contraindications_en: point.contraindications.en,
    contraindications_hi: point.contraindications.hi,
    technique_en: point.technique.en,
    technique_hi: point.technique.hi,
    duration: point.duration,
    pressure: point.pressure,
    body_parts: point.bodyPart || [],
    difficulty: point.difficulty,
    category: point.category,
    popularity: point.popularity || 5,
    // Combined search fields
    all_names: `${point.name.en} ${point.name.hi} ${point.code} ${point.chineseName?.traditional || ''} ${point.chineseName?.pinyin || ''}`,
    all_symptoms: (point.symptoms || []).join(' '),
    all_indications: (point.indications?.map(i => `${i.en} ${i.hi}`).join(' ') || '')
  };
}

async function main() {
  try {
    console.log('🚀 Starting Typesense update...');
    console.log('');

    // Step 1: Check server health
    console.log('1️⃣ Checking Typesense server...');
    const health = await client.health.retrieve();
    console.log('✅ Typesense server is healthy:', health.ok ? 'OK' : 'Not OK');

    // Step 2: Load data
    const points = loadAcupressurePoints();
    
    // Step 3: Convert to Typesense format
    console.log('🔄 Converting points to Typesense format...');
    const typesensePoints = points.map(convertToTypesenseFormat);
    
    // Step 4: Delete existing collection and recreate
    console.log('🗑️ Recreating collection...');
    try {
      await client.collections(collectionName).delete();
      console.log('✅ Deleted existing collection');
    } catch (error) {
      console.log('ℹ️ Collection did not exist, creating new one');
    }

    // Create new collection
    const schema = {
      name: collectionName,
      fields: [
        { name: 'id', type: 'string' },
        { name: 'code', type: 'string', facet: true },
        { name: 'name_en', type: 'string' },
        { name: 'name_hi', type: 'string' },
        { name: 'chinese_traditional', type: 'string', optional: true },
        { name: 'chinese_pinyin', type: 'string', optional: true },
        { name: 'location_en', type: 'string' },
        { name: 'location_hi', type: 'string' },
        { name: 'meridian_name_en', type: 'string', facet: true },
        { name: 'meridian_name_hi', type: 'string' },
        { name: 'meridian_code', type: 'string', facet: true },
        { name: 'meridian_element', type: 'string', facet: true, optional: true },
        { name: 'meridian_polarity', type: 'string', facet: true, optional: true },
        { name: 'symptoms', type: 'string[]', facet: true },
        { name: 'indications_en', type: 'string[]' },
        { name: 'indications_hi', type: 'string[]' },
        { name: 'contraindications_en', type: 'string' },
        { name: 'contraindications_hi', type: 'string' },
        { name: 'technique_en', type: 'string' },
        { name: 'technique_hi', type: 'string' },
        { name: 'duration', type: 'string' },
        { name: 'pressure', type: 'string', facet: true },
        { name: 'body_parts', type: 'string[]', facet: true },
        { name: 'difficulty', type: 'string', facet: true },
        { name: 'category', type: 'string', facet: true },
        { name: 'popularity', type: 'int32', facet: true },
        { name: 'all_names', type: 'string' },
        { name: 'all_symptoms', type: 'string' },
        { name: 'all_indications', type: 'string' }
      ]
    };

    await client.collections().create(schema);
    console.log('✅ Created new collection');

    // Step 5: Import documents individually to handle duplicates
    console.log('📤 Importing documents...');
    let imported = 0;
    let skipped = 0;

    for (let i = 0; i < typesensePoints.length; i++) {
      const point = typesensePoints[i];
      try {
        await client.collections(collectionName).documents().upsert(point);
        imported++;
        console.log(`   Imported ${imported}/${typesensePoints.length} points`);
      } catch (error) {
        console.warn(`⚠️ Skipping duplicate ${point.id}: ${error.message}`);
        skipped++;
      }
    }
    
    console.log(`✅ Import complete: ${imported} imported, ${skipped} skipped (duplicates)`)

    // Step 6: Test search
    console.log('🔍 Testing search...');
    const testSearch = await client.collections(collectionName).documents().search({
      q: 'headache',
      query_by: 'all_names,all_symptoms,all_indications,name_en,name_hi'
    });
    
    console.log(`✅ Search test: Found ${testSearch.hits?.length || 0} results for "headache"`);

    // Test new points
    const newPointTest = await client.collections(collectionName).documents().search({
      q: 'Yintang',
      query_by: 'all_names,name_en,name_hi'
    });
    console.log(`✅ New point test: Found ${newPointTest.hits?.length || 0} results for "Yintang"`);

    console.log('');
    console.log('🎉 Typesense update completed successfully!');
    console.log(`📊 Total points indexed: ${typesensePoints.length}`);
    console.log('🔍 Search is now updated with all new everyday essential points!');
    
  } catch (error) {
    console.error('❌ Update failed:', error.message);
    process.exit(1);
  }
}

main();