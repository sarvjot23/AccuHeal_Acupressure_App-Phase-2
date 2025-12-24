#!/usr/bin/env node

/**
 * Fix popularity values > 5 by capping them at 5
 */

const fs = require('fs');
const path = require('path');

async function fixPopularity() {
  try {
    console.log('🔧 Fixing popularity values > 5...\n');

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

    // Fix invalid popularity values
    let fixedCount = 0;
    points.forEach(p => {
      if (p.popularity > 5) {
        console.log(`   Fixing ${p.code}: ${p.popularity} → 5`);
        p.popularity = 5;
        fixedCount++;
      }
    });

    console.log(`\n✅ Fixed ${fixedCount} points\n`);

    // Write back to file
    const fileContent = `import { AcupressurePoint } from '@types';

export const samplePoints: AcupressurePoint[] = ${JSON.stringify(points, null, 2)};
`;

    fs.writeFileSync(samplePointsPath, fileContent, 'utf8');
    console.log(`✅ Saved to ${samplePointsPath}\n`);

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

fixPopularity();
