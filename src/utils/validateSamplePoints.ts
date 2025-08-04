import { samplePoints } from '../data/samplePoints';
import { validatePointsArray } from './dataValidation';

export function runSamplePointsValidation(): void {
  console.log('🔍 Validating sample points database...');
  console.log(`📊 Total points to validate: ${samplePoints.length}`);
  
  const result = validatePointsArray(samplePoints);
  
  if (result.isValid) {
    console.log('✅ All sample points are valid!');
    console.log(`📈 Successfully validated ${samplePoints.length} acupressure points`);
  } else {
    console.error('❌ Validation errors found:');
    result.errors.forEach((error, index) => {
      console.error(`${index + 1}. ${error}`);
    });
  }
  
  if (result.warnings.length > 0) {
    console.warn('⚠️ Validation warnings:');
    result.warnings.forEach((warning, index) => {
      console.warn(`${index + 1}. ${warning}`);
    });
  }
  
  console.log('\n📊 Database Statistics:');
  
  // Count by difficulty
  const difficultyCount = samplePoints.reduce((acc, point) => {
    acc[point.difficulty] = (acc[point.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  console.log('Difficulty Distribution:');
  Object.entries(difficultyCount).forEach(([difficulty, count]) => {
    const percentage = ((count / samplePoints.length) * 100).toFixed(1);
    console.log(`  ${difficulty}: ${count} points (${percentage}%)`);
  });
  
  // Count by category
  const categoryCount = samplePoints.reduce((acc, point) => {
    acc[point.category] = (acc[point.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  console.log('\nCategory Distribution:');
  Object.entries(categoryCount).forEach(([category, count]) => {
    const percentage = ((count / samplePoints.length) * 100).toFixed(1);
    console.log(`  ${category}: ${count} points (${percentage}%)`);
  });
  
  // Count by meridian
  const meridianCount = samplePoints.reduce((acc, point) => {
    acc[point.meridian.code] = (acc[point.meridian.code] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  console.log('\nMeridian Distribution:');
  Object.entries(meridianCount)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .forEach(([meridian, count]) => {
      console.log(`  ${meridian}: ${count} points`);
    });
  
  // Count pregnancy contraindications
  const pregnancyContraindications = samplePoints.filter(point => 
    point.contraindications.en.toLowerCase().includes('pregnancy')
  ).length;
  
  console.log(`\n🤰 Points with pregnancy contraindications: ${pregnancyContraindications}`);
  
  // Popular points (popularity 4-5)
  const popularPoints = samplePoints.filter(point => point.popularity && point.popularity >= 4).length;
  console.log(`⭐ High popularity points (4-5 rating): ${popularPoints}`);
  
  console.log('\n🎯 Validation complete!');
}

// Function to run validation with error handling
export function validateSamplePointsSafely(): boolean {
  try {
    runSamplePointsValidation();
    return true;
  } catch (error) {
    console.error('💥 Validation failed with error:', error);
    return false;
  }
}