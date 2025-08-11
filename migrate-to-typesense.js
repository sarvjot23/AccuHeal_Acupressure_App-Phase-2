// Simple Node.js script to run Typesense migration
// Run with: node migrate-to-typesense.js

const { createRequire } = require('module');
const require = createRequire(import.meta.url || __filename);

// This script will guide you through the migration process
console.log('🚀 AccuHeal Typesense Migration Script');
console.log('=====================================');
console.log('');
console.log('⚠️  IMPORTANT: Before running this migration:');
console.log('   1. Ensure your Typesense server is running on localhost:8108');
console.log('   2. Verify server health at: http://localhost:8108/health');
console.log('   3. Make sure the API key is set to: uPgH34r#');
console.log('');
console.log('💡 To run the actual migration:');
console.log('   1. Open Metro bundler: npm start');
console.log('   2. Open React Native debugger or browser console');
console.log('   3. Run the following in console:');
console.log('');
console.log('   // Import the migration script');
console.log('   import { runMigration, runTests } from "./src/utils/migrationScript";');
console.log('');
console.log('   // Run migration');
console.log('   runMigration().then(() => console.log("Migration complete!"));');
console.log('');
console.log('   // Test search functionality');
console.log('   runTests().then(() => console.log("Tests complete!"));');
console.log('');
console.log('🔧 Alternative: You can also run the migration from your app by adding:');
console.log('');
console.log('   // In your App.tsx or any component');
console.log('   import { runMigration } from "./src/utils/migrationScript";');
console.log('   ');
console.log('   useEffect(() => {');
console.log('     runMigration().catch(console.error);');
console.log('   }, []);');
console.log('');
console.log('📊 Expected Results:');
console.log('   ✅ Collection "acupressure_points" created');
console.log('   ✅ ~13+ points indexed successfully');
console.log('   ✅ Search tests pass with typo tolerance');
console.log('   ✅ Filter tests work (Beginner, hand, LI4, etc.)');
console.log('');
console.log('🎯 Once migration is complete, search will use Typesense!');

// Quick server check
const checkServer = async () => {
  try {
    const response = await fetch('http://localhost:8108/health');
    const data = await response.json();
    
    if (data.ok) {
      console.log('✅ Typesense server is running and healthy!');
      console.log('🚀 Ready for migration!');
    } else {
      console.log('❌ Typesense server responded but not healthy');
    }
  } catch (error) {
    console.log('❌ Cannot connect to Typesense server');
    console.log('   Make sure it\'s running on localhost:8108');
    console.log('   Run: docker run -p 8108:8108 typesense/typesense:26.0 --data-dir /tmp --api-key=uPgH34r# --enable-cors');
  }
};

// Check if running in Node.js environment
if (typeof fetch === 'undefined') {
  console.log('ℹ️  Server check requires fetch API. Install node-fetch or run in browser environment.');
} else {
  checkServer();
}