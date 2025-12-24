#!/usr/bin/env node

/**
 * Add 8 new points to samplePoints.ts
 */

const fs = require('fs');
const path = require('path');

async function addNewPoints() {
  try {
    console.log('📝 Adding 8 new points to samplePoints.ts...\n');

    // Read current points
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');
    const currentContent = fs.readFileSync(samplePointsPath, 'utf8');

    // Extract current JSON array
    const match = currentContent.match(/export const samplePoints: AcupressurePoint\[\] = (\[[\s\S]*\]);/);
    if (!match) {
      throw new Error('Could not parse current samplePoints.ts');
    }

    const currentPoints = JSON.parse(match[1]);
    console.log(`✅ Current points: ${currentPoints.length}`);

    // Read new points
    const newPointsPath = path.join(__dirname, 'new-8-points.json');
    const newPoints = JSON.parse(fs.readFileSync(newPointsPath, 'utf8'));
    console.log(`✅ New points to add: ${newPoints.length}\n`);

    // Check for duplicates
    const existingIds = new Set(currentPoints.map(p => p.id));
    const duplicates = newPoints.filter(p => existingIds.has(p.id));
    if (duplicates.length > 0) {
      console.warn(`⚠️  Warning: Found ${duplicates.length} duplicate IDs:`);
      duplicates.forEach(p => console.warn(`   - ${p.id} (${p.code})`));
      console.log();
    }

    // Merge points
    const allPoints = [...currentPoints, ...newPoints.filter(p => !existingIds.has(p.id))];
    console.log(`✅ Total points after merge: ${allPoints.length}\n`);

    // Generate new file content
    const fileContent = `import { AcupressurePoint } from '@types';

export const samplePoints: AcupressurePoint[] = ${JSON.stringify(allPoints, null, 2)};
`;

    // Write to file
    fs.writeFileSync(samplePointsPath, fileContent, 'utf8');
    console.log(`✅ Saved ${allPoints.length} points to ${samplePointsPath}\n`);

    // Count free vs premium
    const freeCount = allPoints.filter(p => p.isFree === true).length;
    const premiumCount = allPoints.length - freeCount;

    console.log('📊 Final distribution:');
    console.log(`   🆓 FREE: ${freeCount} points`);
    console.log(`   💎 PREMIUM: ${premiumCount} points`);
    console.log(`   📝 TOTAL: ${allPoints.length} points\n`);

    console.log('✅ Successfully added 8 new points!\n');

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

addNewPoints();
