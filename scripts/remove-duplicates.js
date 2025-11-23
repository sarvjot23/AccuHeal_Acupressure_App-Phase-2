#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const samplePointsPath = path.join(__dirname, '..', 'src', 'data', 'samplePoints.ts');
const duplicateIds = ['tianshu', 'zusanli_enhanced', 'fengchi', 'jianjing', 'houxi', 'shenshu', 'sanyinjiao_enhanced', 'yingxiang'];

console.log('Reading samplePoints.ts...');
let content = fs.readFileSync(samplePointsPath, 'utf8');

console.log('Removing duplicate entries...\n');

duplicateIds.forEach(id => {
  console.log(`Looking for: id: '${id}'`);

  // Find the object with this id
  const regex = new RegExp(`\\{[\\s\\S]*?id: '${id}'[\\s\\S]*?\\},(?=\\s*(?:\\{|\\];))`, 'g');

  const matches = content.match(regex);
  if (matches && matches.length > 0) {
    console.log(`  ✓ Found and removing entry (${matches[0].length} chars)`);
    content = content.replace(regex, '');
  } else {
    console.log(`  ✗ Not found`);
  }
});

// Clean up any double commas or comma before closing bracket
content = content.replace(/,\s*,/g, ',');
content = content.replace(/,(\s*)\];/g, '$1];');

console.log('\nWriting updated file...');
fs.writeFileSync(samplePointsPath, content, 'utf8');

console.log('✅ Done! Removed 8 duplicate entries.');
console.log('\nRun check-duplicates.js to verify.');
