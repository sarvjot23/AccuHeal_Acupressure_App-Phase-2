#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');
const duplicateIds = ['tianshu', 'zusanli_enhanced', 'fengchi', 'jianjing', 'houxi', 'shenshu', 'sanyinjiao_enhanced', 'yingxiang'];

console.log('Loading samplePoints data...');

// Load the actual TypeScript data
const result = execSync(`npx tsx -e "import { samplePoints } from '${samplePointsPath.replace(/\\/g, '/')}'; console.log(JSON.stringify(samplePoints));"`, {
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024
});

const allPoints = JSON.parse(result.trim());

// Filter out the duplicates
const filteredPoints = allPoints.filter(p => !duplicateIds.includes(p.id));

console.log(`Original points: ${allPoints.length}`);
console.log(`After removing duplicates: ${filteredPoints.length}`);
console.log(`Removed: ${allPoints.length - filteredPoints.length} points\n`);

// Generate the new TypeScript file content
let newContent = `import { AcupressurePoint } from '@types';\n\n`;
newContent += `export const samplePoints: AcupressurePoint[] = ${JSON.stringify(filteredPoints, null, 2)};\n`;

// Write the new file
const backupPath = samplePointsPath + '.backup';
console.log('Creating backup...');
fs.copyFileSync(samplePointsPath, backupPath);
console.log(`Backup created: ${backupPath}`);

console.log('\nWriting new file...');
fs.writeFileSync(samplePointsPath, newContent, 'utf8');

console.log('✅ Done! File updated successfully.');
console.log('\n⚠️  Note: The file has been reformatted to JSON.');
console.log('If you need to restore, use: ' + backupPath);
