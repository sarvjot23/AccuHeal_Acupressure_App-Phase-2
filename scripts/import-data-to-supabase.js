#!/usr/bin/env node

/**
 * Import Firebase-exported data into Supabase
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function importData() {
  try {
    console.log('🚀 Starting data import to Supabase...\n');

    // Import acupressure points
    console.log('📝 Importing acupressure points...');
    const pointsPath = '/tmp/firebase-to-supabase/firestore/acupressure_points.json';
    
    if (fs.existsSync(pointsPath)) {
      const pointsData = JSON.parse(fs.readFileSync(pointsPath, 'utf8'));
      console.log(`Found ${pointsData.length} points to import`);

      if (pointsData.length > 0) {
        const { data, error } = await supabase
          .from('acupressure_points')
          .insert(pointsData);

        if (error) {
          console.error('❌ Error importing points:', error);
        } else {
          console.log(`✅ Successfully imported ${pointsData.length} acupressure points`);
        }
      }
    }

    // Import users
    console.log('\n👥 Importing users...');
    const usersPath = '/tmp/firebase-to-supabase/firestore/users.json';
    
    if (fs.existsSync(usersPath)) {
      const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
      console.log(`Found ${usersData.length} users to import`);

      if (usersData.length > 0) {
        const { data, error } = await supabase
          .from('users')
          .insert(usersData);

        if (error) {
          console.error('❌ Error importing users:', error);
        } else {
          console.log(`✅ Successfully imported ${usersData.length} users`);
        }
      }
    }

    console.log('\n✅ Data import completed!');
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importData();
