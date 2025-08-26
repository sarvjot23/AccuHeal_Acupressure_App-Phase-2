import { samplePoints } from '@data/samplePoints';
import { typesenseService } from '@services/typesense';

/**
 * Update search index with current samplePoints data
 * Call this function to re-index all points including new ones
 */
export async function updateSearchIndex(): Promise<void> {
  console.log('🚀 Starting search index update...');
  
  try {
    // Step 1: Initialize Typesense connection and collection
    console.log('1️⃣ Initializing Typesense collection...');
    await typesenseService.initializeCollection();
    
    // Step 2: Index all points (this will replace existing data)
    console.log('2️⃣ Indexing acupressure points...');
    console.log(`   Processing ${samplePoints.length} points...`);
    
    await typesenseService.indexPoints(samplePoints);
    
    // Step 3: Test the search
    console.log('3️⃣ Testing updated search...');
    const testResults = await typesenseService.searchPoints('headache');
    console.log(`✅ Search test: Found ${testResults.length} results for "headache"`);
    
    // Test one of the new points
    const newPointTest = await typesenseService.searchPoints('Yintang');
    console.log(`✅ New point test: Found ${newPointTest.length} results for "Yintang"`);
    
    console.log('🎉 Search index updated successfully!');
    console.log(`📊 Total points indexed: ${samplePoints.length}`);
    
  } catch (error) {
    console.error('❌ Search index update failed:', error);
    throw error;
  }
}

/**
 * Quick test function to verify search is working with new points
 */
export async function testNewPoints(): Promise<void> {
  console.log('🧪 Testing new everyday essential points...');
  
  const newPointNames = [
    'Yintang', 'Anmian', 'Zhongwan', 'Tianshu', 'Fengchi', 
    'Jianjing', 'Qihai', 'Mingmen', 'Sanyinjiao', 'Yingxiang'
  ];
  
  for (const pointName of newPointNames) {
    try {
      const results = await typesenseService.searchPoints(pointName);
      console.log(`✅ ${pointName}: Found ${results.length} result(s)`);
    } catch (error) {
      console.error(`❌ ${pointName}: Search failed -`, error.message);
    }
  }
  
  console.log('🎉 New points test completed!');
}