#!/usr/bin/env node

/**
 * Typesense Migration Script
 * Updates the search index with latest samplePoints data
 */

const { updateSearchIndex, testNewPoints } = require('../src/utils/updateSearchIndex');

async function main() {
  console.log('🚀 Starting Typesense update with new everyday essential points...');
  console.log('');
  
  try {
    // Run the migration to update search index
    await updateSearchIndex();
    
    console.log('');
    console.log('🧪 Running search tests...');
    
    // Test the updated search functionality
    await testNewPoints();
    
    console.log('');
    console.log('✅ Typesense update completed successfully!');
    console.log('🎉 All 69 points (including 16 new everyday essentials) are now searchable!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('');
      console.error('🔧 Troubleshooting:');
      console.error('   1. Make sure Typesense Docker is running:');
      console.error('      docker run -d -p 8108:8108 -v "F:\\ai_projects\\typesense-data:/data" typesense/typesense:26.0 --data-dir /data --api-key=uPgH34r# --enable-cors');
      console.error('   2. Check if server is healthy: http://localhost:8108/health');
    }
    
    process.exit(1);
  }
}

main();