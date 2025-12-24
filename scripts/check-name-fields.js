#!/usr/bin/env node

/**
 * Check which points have invalid name fields
 */

const fs = require('fs');
const path = require('path');

async function checkNameFields() {
  try {
    console.log('🔍 Checking for points with invalid name fields...\n');

    // Read samplePoints.ts
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');
    const content = fs.readFileSync(samplePointsPath, 'utf8');

    // Extract JSON array
    const match = content.match(/export const samplePoints: AcupressurePoint\[\] = (\[[\s\S]*\]);/);
    if (!match) {
      throw new Error('Could not parse samplePoints.ts');
    }

    const points = JSON.parse(match[1]);
    console.log(`✅ Loaded ${points.length} points\n`);

    // Check for invalid name fields
    const invalidPoints = points.filter(p => {
      return !p.name || typeof p.name !== 'object' || !p.name.en || !p.name.hi;
    });

    if (invalidPoints.length === 0) {
      console.log('✅ All points have valid name fields!\n');
    } else {
      console.log(`❌ Found ${invalidPoints.length} points with invalid name fields:\n`);
      invalidPoints.forEach(p => {
        console.log(`   Point: ${p.id} (${p.code})`);
        console.log(`   name value: ${JSON.stringify(p.name)}`);
        console.log(`   Has name: ${!!p.name}`);
        console.log(`   Has name.en: ${p.name ? !!p.name.en : 'N/A'}`);
        console.log(`   Has name.hi: ${p.name ? !!p.name.hi : 'N/A'}`);
        console.log();
      });
    }

    // Also check other required bilingual fields
    console.log('🔍 Checking other bilingual fields...\n');

    const requiredFields = ['location', 'indications', 'technique', 'chineseName'];

    for (const field of requiredFields) {
      const invalid = points.filter(p => {
        const value = p[field];
        if (field === 'chineseName') {
          return !value || typeof value !== 'object' || !value.traditional || !value.pinyin;
        } else {
          return !value || typeof value !== 'object' || !value.en || !value.hi;
        }
      });

      if (invalid.length > 0) {
        console.log(`❌ ${field}: ${invalid.length} invalid points`);
        invalid.slice(0, 3).forEach(p => {
          console.log(`   - ${p.id} (${p.code})`);
        });
        if (invalid.length > 3) {
          console.log(`   ... and ${invalid.length - 3} more`);
        }
        console.log();
      } else {
        console.log(`✅ ${field}: All valid`);
      }
    }

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

checkNameFields();
