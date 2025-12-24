#!/usr/bin/env node

/**
 * Inspect the actual schema of a point from Supabase
 */

const fs = require('fs');
const path = require('path');

async function inspectSchema() {
  try {
    // Read samplePoints.ts
    const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');
    const content = fs.readFileSync(samplePointsPath, 'utf8');

    // Extract JSON array
    const match = content.match(/export const samplePoints: AcupressurePoint\[\] = (\[[\s\S]*\]);/);
    if (!match) {
      throw new Error('Could not parse samplePoints.ts');
    }

    const points = JSON.parse(match[1]);

    // Show first point from Supabase (should be one without name)
    const supabasePoint = points.find(p => !p.name);
    console.log('Example Supabase point (first one without name):');
    console.log(JSON.stringify(supabasePoint, null, 2));
    console.log('\n---\n');

    // Show one of the new 8 points (should have name)
    const newPoint = points.find(p => p.id === 'lu4');
    console.log('Example new point (LU4):');
    console.log(JSON.stringify(newPoint, null, 2));

  } catch (error) {
    console.error('💥 Error:', error.message);
    process.exit(1);
  }
}

inspectSchema();
