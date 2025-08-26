import { samplePoints } from './src/data/samplePoints';
import * as fs from 'fs';

// Export the points data to JSON
console.log('Exporting', samplePoints.length, 'points to JSON...');
fs.writeFileSync('points-data.json', JSON.stringify(samplePoints, null, 2));
console.log('Export complete!');