/**
 * AccuHeal Production Data Sync Script
 * 
 * This script syncs all acupressure points data to:
 * 1. Firebase Firestore (for app data)
 * 2. Algolia Search (for search functionality)
 * 
 * Run this after setting up production Firebase and Algolia credentials
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc, getDocs } = require('firebase/firestore');
const algoliasearch = require('algoliasearch');
require('dotenv').config();

// Import our acupressure points data (we'll load it from the TypeScript file)
const fs = require('fs');
const path = require('path');

// Read the TypeScript file and extract the data
function loadAcupressurePoints() {
  const filePath = path.join(__dirname, '../src/data/samplePoints.ts');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the array content (simple regex parsing for now)
  const arrayMatch = fileContent.match(/export const samplePoints.*?=\s*(\[[\s\S]*?\]);/);
  if (!arrayMatch) {
    throw new Error('Could not parse acupressure points data');
  }
  
  // Convert TypeScript to JavaScript format
  const jsContent = arrayMatch[1]
    .replace(/'/g, '"')  // Single quotes to double quotes
    .replace(/(\w+):/g, '"$1":')  // Object keys to quoted format
    .replace(/,\s*\]/g, ']')  // Remove trailing commas
    .replace(/,\s*\}/g, '}');  // Remove trailing commas
  
  try {
    return JSON.parse(jsContent);
  } catch (error) {
    console.error('Error parsing points data:', error.message);
    // Fallback: return a minimal set for testing
    return [];
  }
}

// Production configuration (will use environment variables)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const algoliaConfig = {
  appId: process.env.EXPO_PUBLIC_ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY, // Admin key for data upload
  indexName: 'accuheal_acupressure_points_prod'
};

class ProductionDataSync {
  constructor() {
    this.firebase = null;
    this.firestore = null;
    this.algolia = null;
    this.algoliaIndex = null;
    this.errors = [];
    this.syncResults = {
      firebase: { success: 0, failed: 0 },
      algolia: { success: 0, failed: 0 }
    };
    this.samplePoints = [];
  }

  async initialize() {
    try {
      console.log('🚀 Initializing AccuHeal Production Data Sync...\n');
      
      // Load acupressure points data
      console.log('📊 Loading acupressure points data...');
      this.samplePoints = loadAcupressurePoints();
      console.log(`✅ Loaded ${this.samplePoints.length} acupressure points`);
      
      // Validate environment variables
      this.validateEnvironment();
      
      // Initialize Firebase
      this.firebase = initializeApp(firebaseConfig);
      this.firestore = getFirestore(this.firebase);
      console.log('✅ Firebase initialized successfully');
      
      // Initialize Algolia
      this.algolia = algoliasearch(algoliaConfig.appId, algoliaConfig.apiKey);
      this.algoliaIndex = this.algolia.initIndex(algoliaConfig.indexName);
      console.log('✅ Algolia initialized successfully\n');
      
    } catch (error) {
      console.error('❌ Initialization failed:', error.message);
      throw error;
    }
  }

  validateEnvironment() {
    const requiredVars = [
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN', 
      'FIREBASE_PROJECT_ID',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGING_SENDER_ID',
      'FIREBASE_APP_ID',
      'EXPO_PUBLIC_ALGOLIA_APP_ID',
      'ALGOLIA_ADMIN_KEY'
    ];

    const missing = requiredVars.filter(varName => !process.env[varName]);
    
    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }

    console.log('✅ Environment variables validated');
  }

  async syncToFirestore() {
    console.log('📁 Syncing acupressure points to Firestore...');
    
    try {
      const pointsCollection = collection(this.firestore, 'acupressure_points');
      
      for (const point of this.samplePoints) {
        try {
          await setDoc(doc(pointsCollection, point.id), {
            ...point,
            createdAt: new Date(),
            updatedAt: new Date(),
            version: '1.0.0'
          });
          
          this.syncResults.firebase.success++;
          console.log(`  ✅ ${point.code} - ${point.name.en}`);
          
        } catch (error) {
          this.syncResults.firebase.failed++;
          this.errors.push(`Firebase - ${point.id}: ${error.message}`);
          console.log(`  ❌ ${point.code} - Failed: ${error.message}`);
        }
      }

      // Create app configuration document
      await setDoc(doc(this.firestore, 'app_config', 'main'), {
        version: '1.0.0',
        totalPoints: this.samplePoints.length,
        lastSync: new Date(),
        supportedLanguages: ['en', 'hi'],
        minimumAppVersion: '1.0.0'
      });

      console.log(`\n📊 Firestore Sync Results:`);
      console.log(`  ✅ Success: ${this.syncResults.firebase.success} points`);
      console.log(`  ❌ Failed: ${this.syncResults.firebase.failed} points`);
      
    } catch (error) {
      console.error('❌ Firestore sync failed:', error.message);
      throw error;
    }
  }

  async syncToAlgolia() {
    console.log('\n🔍 Syncing acupressure points to Algolia...');
    
    try {
      // Prepare records for Algolia
      const algoliaRecords = this.samplePoints.map(point => ({
        objectID: point.id,
        ...point,
        // Add searchable combinations
        searchableText: [
          point.name.en,
          point.name.hi,
          point.code,
          ...point.conditions,
          point.bodyPart,
          point.location.en,
          point.location.hi
        ].join(' ').toLowerCase(),
        
        // Add facets for filtering
        difficultyLevel: point.difficulty,
        pressureType: point.pressure,
        sessionDuration: point.duration,
        
        // Add metadata
        syncedAt: new Date().toISOString(),
        version: '1.0.0'
      }));

      // Upload to Algolia
      const { objectIDs } = await this.algoliaIndex.saveObjects(algoliaRecords);
      
      this.syncResults.algolia.success = objectIDs.length;
      console.log(`  ✅ Successfully uploaded ${objectIDs.length} records`);

      // Configure index settings
      await this.configureAlgoliaIndex();
      
      console.log(`\n📊 Algolia Sync Results:`);
      console.log(`  ✅ Success: ${this.syncResults.algolia.success} points`);
      console.log(`  ❌ Failed: ${this.syncResults.algolia.failed} points`);
      
    } catch (error) {
      console.error('❌ Algolia sync failed:', error.message);
      this.syncResults.algolia.failed = this.samplePoints.length;
      throw error;
    }
  }

  async configureAlgoliaIndex() {
    console.log('⚙️  Configuring Algolia index settings...');
    
    try {
      await this.algoliaIndex.setSettings({
        // Searchable attributes (in order of importance)
        searchableAttributes: [
          'name.en',
          'name.hi', 
          'code',
          'conditions',
          'bodyPart',
          'location.en',
          'location.hi',
          'searchableText'
        ],
        
        // Attributes for faceting (filtering)
        attributesForFaceting: [
          'searchable(bodyPart)',
          'searchable(difficulty)',
          'searchable(conditions)',
          'searchable(pressure)',
          'searchable(difficultyLevel)',
          'searchable(pressureType)'
        ],
        
        // Ranking criteria
        ranking: [
          'typo',
          'geo', 
          'words',
          'filters',
          'proximity',
          'attribute',
          'exact',
          'custom'
        ],
        
        // Custom ranking attributes
        customRanking: [
          'desc(sessionDuration)', // Prefer longer sessions
          'asc(difficulty)' // Prefer beginner points
        ],
        
        // Highlighting
        attributesToHighlight: [
          'name.en',
          'name.hi',
          'conditions',
          'bodyPart'
        ],
        
        // Snippeting
        attributesToSnippet: [
          'location.en:20',
          'location.hi:20'
        ],
        
        // Typo tolerance
        minWordSizefor1Typo: 4,
        minWordSizefor2Typos: 8,
        
        // Language-specific settings
        ignorePlurals: ['en', 'hi'],
        
        // Pagination
        hitsPerPage: 20,
        maxValuesPerFacet: 10
      });
      
      console.log('  ✅ Index settings configured successfully');
      
    } catch (error) {
      console.error('❌ Failed to configure index settings:', error.message);
      throw error;
    }
  }

  async verifySync() {
    console.log('\n🔍 Verifying sync results...');
    
    try {
      // Verify Firestore
      const firestoreSnapshot = await getDocs(collection(this.firestore, 'acupressure_points'));
      const firestoreCount = firestoreSnapshot.size;
      
      // Verify Algolia
      const algoliaStats = await this.algoliaIndex.getSettings();
      const { nbHits } = await this.algoliaIndex.search('', { hitsPerPage: 0 });
      
      console.log(`📊 Verification Results:`);
      console.log(`  Firebase: ${firestoreCount}/${this.samplePoints.length} points`);
      console.log(`  Algolia: ${nbHits}/${this.samplePoints.length} points`);
      
      if (firestoreCount === this.samplePoints.length && nbHits === this.samplePoints.length) {
        console.log('  ✅ All data synced successfully!');
        return true;
      } else {
        console.log('  ⚠️  Some data may be missing');
        return false;
      }
      
    } catch (error) {
      console.error('❌ Verification failed:', error.message);
      return false;
    }
  }

  async run() {
    const startTime = Date.now();
    
    try {
      await this.initialize();
      await this.syncToFirestore();
      await this.syncToAlgolia();
      
      const verified = await this.verifySync();
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      
      console.log(`\n🎉 Production data sync completed in ${duration}s`);
      
      if (this.errors.length > 0) {
        console.log(`\n⚠️  Errors encountered:`);
        this.errors.forEach(error => console.log(`  - ${error}`));
      }
      
      if (verified) {
        console.log('\n✅ AccuHeal is ready for production deployment!');
        console.log('\nNext steps:');
        console.log('1. Test the app with production credentials');
        console.log('2. Generate app store screenshots');  
        console.log('3. Submit to app stores');
      }
      
    } catch (error) {
      console.error('\n❌ Sync failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the sync if called directly
if (require.main === module) {
  const sync = new ProductionDataSync();
  sync.run().catch(console.error);
}

module.exports = ProductionDataSync;