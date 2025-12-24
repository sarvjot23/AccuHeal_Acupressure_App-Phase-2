#!/usr/bin/env node

/**
 * Check for invalid popularity values in samplePoints
 */

const path = require('path');

async function checkPopularity() {
  try {
    console.log('🔍 Checking popularity values in samplePoints.ts...\n');

    const { execSync } = require('child_process');
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');

    const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints));"`, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });

    const samplePoints = JSON.parse(result.trim());

    console.log(`Total points: ${samplePoints.length}\n`);

    const invalidPoints = samplePoints.filter(point => {
      const pop = point.popularity;
      return pop === undefined || pop === null || pop < 1 || pop > 5;
    });

    if (invalidPoints.length > 0) {
      console.log(`❌ Found ${invalidPoints.length} points with invalid popularity:\n`);
      invalidPoints.forEach(point => {
        console.log(`   - ${point.code} (${point.id}): popularity = ${point.popularity}`);
      });
    } else {
      console.log('✅ All points have valid popularity values (1-5)\n');
    }

    // Show distribution
    const distribution = {};
    samplePoints.forEach(point => {
      const pop = point.popularity || 'undefined';
      distribution[pop] = (distribution[pop] || 0) + 1;
    });

    console.log('Popularity distribution:');
    Object.keys(distribution).sort().forEach(key => {
      console.log(`   ${key}: ${distribution[key]} points`);
    });

  } catch (error) {
    console.error('💥 Error:', error.message);
  }
}

checkPopularity();
