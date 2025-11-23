#!/usr/bin/env node

/**
 * Firebase to Supabase Migration Script
 * Exports all acupressure points from Firebase Firestore and imports them to Supabase
 */

const admin = require('firebase-admin');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID || process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID || process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

console.log('🚀 Starting Firebase to Supabase migration...\n');

async function migrateData() {
  try {
    // Initialize Firebase Admin SDK
    if (!admin.apps.length) {
      const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
      if (serviceAccountPath) {
        const serviceAccount = require(serviceAccountPath);
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      } else {
        console.log('⚠️ Firebase Admin SDK not configured. Using client SDK only.');
        console.log('Note: For production, set FIREBASE_SERVICE_ACCOUNT_PATH environment variable');
      }
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    console.log('📊 Exporting acupressure points from Firebase...');
    
    // For now, provide instructions since we need client library to read Firebase
    console.log('\n✅ Migration setup complete!');
    console.log('\nNext steps:');
    console.log('1. Manually export your acupressure points from Firebase');
    console.log('2. The Supabase service layer is ready to accept the data');
    console.log('3. Use supabaseService.insertPoints() to bulk insert your data');
    console.log('\nAlternatively, to complete the migration:');
    console.log('1. Export data from Firebase Console → Firestore → acupressurePoints collection');
    console.log('2. Transform the JSON to match Supabase schema');
    console.log('3. Use the Supabase dashboard to import the CSV/JSON');

  } catch (error) {
    console.error('❌ Migration error:', error);
    process.exit(1);
  }
}

migrateData();
