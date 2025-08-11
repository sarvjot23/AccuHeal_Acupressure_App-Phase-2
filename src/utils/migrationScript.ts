import { typesenseService } from '@services/typesense';
import { samplePoints } from '@data/samplePoints';

export async function initializeTypesense(): Promise<void> {
  console.log('🚀 Starting Typesense migration...');
  
  try {
    // Step 1: Check Typesense server health
    console.log('1️⃣ Checking Typesense server health...');
    const isHealthy = await typesenseService.healthCheck();
    if (!isHealthy) {
      throw new Error('Typesense server is not healthy. Please check if it\'s running on localhost:8108');
    }
    console.log('✅ Typesense server is healthy');

    // Step 2: Initialize the collection
    console.log('2️⃣ Initializing acupressure points collection...');
    await typesenseService.initializeCollection();

    // Step 3: Index existing points
    console.log('3️⃣ Migrating existing acupressure points...');
    await typesenseService.indexPoints(samplePoints);

    // Step 4: Get stats
    console.log('4️⃣ Getting collection statistics...');
    const stats = await typesenseService.getStats();
    if (stats) {
      console.log(`📊 Collection: ${stats.name}`);
      console.log(`📈 Documents: ${stats.num_documents}`);
      console.log(`📅 Created: ${new Date(stats.created_at * 1000).toLocaleString()}`);
    }

    console.log('🎉 Typesense migration completed successfully!');
    console.log('');
    console.log('🔍 Test searches you can try:');
    console.log('   - "headache" (with typo tolerance)');
    console.log('   - "LI4" (point code search)');
    console.log('   - "hand" (body part search)');
    console.log('   - "stress" (symptom search)');
    console.log('   - "Hegu" (Chinese name search)');
    console.log('');
    console.log('🎛️ Available filters:');
    console.log('   - difficulty: Beginner, Intermediate, Advanced');
    console.log('   - body_parts: hand, head, foot, leg, etc.');
    console.log('   - meridian_code: LI, ST, GV, GB, etc.');
    console.log('   - pressure: Light, Moderate, Firm');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED') || error.message.includes('fetch')) {
        console.error('');
        console.error('🔧 Troubleshooting steps:');
        console.error('   1. Ensure Typesense server is running: docker ps');
        console.error('   2. Check server health: http://localhost:8108/health');
        console.error('   3. Verify API key matches server configuration');
        console.error('   4. Restart Typesense server if needed');
      }
    }
    
    throw error;
  }
}

// Test search functionality
export async function testTypesenseSearch(): Promise<void> {
  console.log('🧪 Testing Typesense search functionality...');
  
  try {
    // Test 1: Basic search
    console.log('\n1️⃣ Testing basic search...');
    const basicResults = await typesenseService.searchPoints('headache');
    console.log(`✅ Basic search: Found ${basicResults.length} results for "headache"`);

    // Test 2: Typo tolerance
    console.log('\n2️⃣ Testing typo tolerance...');
    const typoResults = await typesenseService.searchPoints('headach'); // Missing 'e'
    console.log(`✅ Typo tolerance: Found ${typoResults.length} results for "headach"`);

    // Test 3: Point code search
    console.log('\n3️⃣ Testing point code search...');
    const codeResults = await typesenseService.searchPoints('LI4');
    console.log(`✅ Point code search: Found ${codeResults.length} results for "LI4"`);

    // Test 4: Filter search
    console.log('\n4️⃣ Testing filtered search...');
    const filteredResults = await typesenseService.searchPoints('*', { difficulty: 'Beginner' });
    console.log(`✅ Filtered search: Found ${filteredResults.length} beginner-level points`);

    // Test 5: Suggestions
    console.log('\n5️⃣ Testing search suggestions...');
    const suggestions = await typesenseService.getSuggestions('head');
    console.log(`✅ Suggestions: Found ${suggestions.length} suggestions for "head"`);
    if (suggestions.length > 0) {
      console.log(`   Suggestions: ${suggestions.slice(0, 3).join(', ')}`);
    }

    // Test 6: Meridian search
    console.log('\n6️⃣ Testing meridian search...');
    const meridianResults = await typesenseService.getPointsByMeridian('LI');
    console.log(`✅ Meridian search: Found ${meridianResults.length} Large Intestine meridian points`);

    console.log('\n🎉 All tests passed! Typesense is working correctly.');

  } catch (error) {
    console.error('❌ Search test failed:', error);
    throw error;
  }
}

// Export for easy usage
export const runMigration = initializeTypesense;
export const runTests = testTypesenseSearch;