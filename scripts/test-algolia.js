const algoliasearch = require('algoliasearch');
require('dotenv').config();

async function testAlgoliaSearch() {
  try {
    console.log('🔍 Testing Algolia search functionality...');
    
    const client = algoliasearch(process.env.EXPO_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);
    const index = client.initIndex('accuheal_acupressure_points_prod');
    
    // Wait for indexing to complete
    console.log('⏳ Waiting for indexing to complete...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Test search for "headache"
    console.log('🔍 Searching for "headache"...');
    const { hits: headacheHits, nbHits: headacheCount } = await index.search('headache', { hitsPerPage: 5 });
    console.log(`✅ Found ${headacheCount} results for "headache"`);
    
    if (headacheHits.length > 0) {
      console.log('📋 Sample results:');
      headacheHits.forEach((hit, i) => {
        console.log(`  ${i+1}. ${hit.name?.en || 'Unknown'} (${hit.code || 'N/A'})`);
      });
    }
    
    // Test search for "stress"
    console.log('\n🔍 Searching for "stress"...');
    const { hits: stressHits, nbHits: stressCount } = await index.search('stress', { hitsPerPage: 5 });
    console.log(`✅ Found ${stressCount} results for "stress"`);
    
    // Get total indexed count
    console.log('\n📊 Getting total indexed count...');
    const { nbHits: totalHits } = await index.search('', { hitsPerPage: 0 });
    console.log(`📊 Total indexed points: ${totalHits}/24`);
    
    if (totalHits === 24) {
      console.log('🎉 All points successfully indexed in Algolia!');
      return true;
    } else {
      console.log('⚠️  Some points may still be indexing...');
      return false;
    }
    
  } catch (error) {
    console.error('❌ Algolia test failed:', error.message);
    return false;
  }
}

testAlgoliaSearch();