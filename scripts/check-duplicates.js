#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');

const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints.map(p => ({ id: p.id, code: p.code }))));"`, {
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024
});

const points = JSON.parse(result.trim());

console.log('Total points:', points.length);

// Check for duplicate IDs
const ids = points.map(p => p.id);
const uniqueIds = new Set(ids);
console.log('Unique IDs:', uniqueIds.size);

if (ids.length !== uniqueIds.size) {
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  console.log('\n❌ DUPLICATE IDs found:', [...new Set(duplicateIds)]);
}

// Check for duplicate codes
const codes = points.map(p => p.code);
const uniqueCodes = new Set(codes);
console.log('Unique codes:', uniqueCodes.size);

if (codes.length !== uniqueCodes.size) {
  const duplicateCodes = codes.filter((code, index) => codes.indexOf(code) !== index);
  console.log('\n❌ DUPLICATE CODEs found:', [...new Set(duplicateCodes)]);

  // Show which points have the duplicate codes
  duplicateCodes.forEach(dupCode => {
    const matchingPoints = points.filter(p => p.code === dupCode);
    console.log(`  ${dupCode}:`, matchingPoints.map(p => p.id).join(', '));
  });
}

if (ids.length === uniqueIds.size && codes.length === uniqueCodes.size) {
  console.log('\n✅ No duplicates found!');
}
