/**
 * Script to mark essential beginner points as free
 */

const fs = require('fs');
const path = require('path');

// The 15 essential points available in free tier
const FREE_POINT_IDS = [
  'li4',    // Headache, stress, pain relief - Most popular
  'gv20',   // Mental clarity, focus
  'pc6',    // Nausea, anxiety, motion sickness
  'st36',   // Energy boost, digestive health
  'sp6',    // Women's health, insomnia
  'ht7',    // Anxiety, sleep, emotional balance
  'gb20',   // Headache, neck tension
  'li20',   // Sinus congestion
  'ki3',    // Lower back pain, fatigue
  'lu7',    // Cold, cough, headaches
  'li11',   // Fever, inflammation
  'bl23',   // Back pain, kidney health
  'cv6',    // Energy, digestive issues
  'cv17',   // Chest congestion, anxiety
  'gv14'    // Immune boost, fever
];

const filePath = path.join(__dirname, '../src/data/samplePoints.ts');
let content = fs.readFileSync(filePath, 'utf8');

// For each free point, add isFree: true if it doesn't exist
FREE_POINT_IDS.forEach(pointId => {
  // Find the point definition
  const pointRegex = new RegExp(
    `(\\s+id: '${pointId}',\\n[\\s\\S]*?)(\\s+(?:popularity|imageUrl|precautions|method|conditions|images): .+?\\n)(\\s+\\},?)`,
    'g'
  );
  
  // Check if isFree already exists for this point
  const pointMatch = content.match(new RegExp(`id: '${pointId}',[\\s\\S]*?\\},`, 'm'));
  
  if (pointMatch && !pointMatch[0].includes('isFree')) {
    // Add isFree: true before the closing brace
    content = content.replace(
      new RegExp(`(\\s+id: '${pointId}',\\n[\\s\\S]*?)(\\s+images: \\[.*?\\],\\n)(\\s+\\},)`),
      `$1$2    isFree: true,\n$3`
    );
  }
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Marked ${FREE_POINT_IDS.length} points as free tier`);
console.log(`Free points: ${FREE_POINT_IDS.join(', ')}`);
