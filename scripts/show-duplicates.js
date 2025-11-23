#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');

const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints.map(p => ({ id: p.id, code: p.code, name_en: p.name.en, popularity: p.popularity, isFree: p.isFree }))));"`, {
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024
});

const points = JSON.parse(result.trim());

const duplicateCodes = ['ST25', 'ST36', 'GB20', 'GB21', 'SI3', 'BL23', 'SP6', 'LI20'];

console.log('Duplicate point details:\n');

duplicateCodes.forEach(code => {
  const matches = points.filter(p => p.code === code);
  console.log(`\n${code}:`);
  matches.forEach(p => {
    console.log(`  ID: ${p.id}`);
    console.log(`  Name: ${p.name_en}`);
    console.log(`  Popularity: ${p.popularity || 'not set'}`);
    console.log(`  Free: ${p.isFree !== false ? 'yes' : 'no'}`);
    console.log('  ---');
  });
});

console.log('\n\nRecommendation: Keep the first occurrence of each, remove duplicates');
console.log('IDs to REMOVE:', points
  .filter(p => duplicateCodes.includes(p.code))
  .filter((p, index, arr) => arr.findIndex(x => x.code === p.code) !== index)
  .map(p => p.id)
  .join(', ')
);
