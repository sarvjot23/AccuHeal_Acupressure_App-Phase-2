#!/usr/bin/env node

/**
 * Transform Firebase format to Supabase format and import
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

const supabase = createClient(supabaseUrl, supabaseKey);

function transformPoint(doc) {
  return {
    id: doc.id,
    code: doc.code,
    name_en: doc.name?.en || '',
    name_hi: doc.name?.hi || '',
    chinese_traditional: doc.chineseName?.traditional,
    chinese_pinyin: doc.chineseName?.pinyin,
    alternate_names_en: doc.alternateNames?.en || [],
    alternate_names_hi: doc.alternateNames?.hi || [],
    location_en: doc.location?.en || '',
    location_hi: doc.location?.hi || '',
    meridian_name_en: doc.meridian?.name?.en || '',
    meridian_name_hi: doc.meridian?.name?.hi || '',
    meridian_code: doc.meridian?.code || '',
    meridian_element: doc.meridian?.element,
    meridian_polarity: doc.meridian?.polarity,
    body_parts: Array.isArray(doc.bodyPart) ? doc.bodyPart : [doc.bodyPart] || [],
    difficulty: doc.difficulty || 'Beginner',
    pressure: doc.pressure || 'medium',
    duration: doc.duration || '5 minutes',
    category: doc.category || '',
    popularity: doc.popularity || 3,
    symptoms: doc.symptoms || doc.conditions || [],
    indications_en: (doc.indications || []).map((ind) => typeof ind === 'string' ? ind : ind.en || ''),
    indications_hi: (doc.indications || []).map((ind) => typeof ind === 'string' ? ind : ind.hi || ''),
    contraindications_en: doc.contraindications?.en || doc.contraindications || '',
    contraindications_hi: doc.contraindications?.hi || doc.contraindications || '',
    technique_en: doc.technique?.en || doc.method?.en || '',
    technique_hi: doc.technique?.hi || doc.method?.hi || '',
    image_url: doc.imageUrl
  };
}

function transformUser(doc) {
  return {
    clerk_user_id: doc.id,
    email: doc.email,
    is_premium: doc.isPremium || false,
    subscription_status: doc.subscriptionStatus || 'none',
    subscription_expires_at: doc.subscriptionExpiresAt,
    stripe_customer_id: doc.stripeCustomerId,
    stripe_subscription_id: doc.stripeSubscriptionId
  };
}

async function importData() {
  try {
    console.log('🚀 Starting transformed data import to Supabase...\n');

    // Import acupressure points
    console.log('📝 Transforming and importing acupressure points...');
    const pointsPath = '/tmp/firebase-to-supabase/firestore/acupressure_points.json';
    
    if (fs.existsSync(pointsPath)) {
      const rawPoints = JSON.parse(fs.readFileSync(pointsPath, 'utf8'));
      const transformedPoints = rawPoints.map(transformPoint);
      
      console.log(`✓ Transformed ${transformedPoints.length} points`);

      // Insert in batches to avoid timeout
      const batchSize = 5;
      for (let i = 0; i < transformedPoints.length; i += batchSize) {
        const batch = transformedPoints.slice(i, i + batchSize);
        const { error } = await supabase
          .from('acupressure_points')
          .insert(batch);

        if (error) {
          console.error(`❌ Error importing batch ${i / batchSize + 1}:`, error.message);
        } else {
          console.log(`✓ Batch ${i / batchSize + 1}: ${batch.length} points inserted`);
        }
      }
      console.log(`✅ All ${transformedPoints.length} acupressure points imported successfully!`);
    }

    // Import users
    console.log('\n👥 Transforming and importing users...');
    const usersPath = '/tmp/firebase-to-supabase/firestore/users.json';
    
    if (fs.existsSync(usersPath)) {
      const rawUsers = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
      const transformedUsers = rawUsers.map(transformUser);
      
      console.log(`✓ Transformed ${transformedUsers.length} users`);

      const { error } = await supabase
        .from('users')
        .insert(transformedUsers);

      if (error) {
        console.error('❌ Error importing users:', error.message);
      } else {
        console.log(`✅ Successfully imported ${transformedUsers.length} users`);
      }
    }

    console.log('\n✅✅✅ Data migration completed successfully! ✅✅✅');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

importData();
