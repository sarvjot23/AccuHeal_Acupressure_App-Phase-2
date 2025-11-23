import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Supabase Configuration
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://ignobvlfgvcrgywkldbz.supabase.co';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnbm9idmxmZ3Zjcmd5d2tsZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4ODEyMDEsImV4cCI6MjA3OTQ1NzIwMX0.rViT4DY-WibGoKrrMJuR40Ry4gaCGsGA1Igu7DIZGNM';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase URL or API key is missing!');
}

// Create Supabase client with AsyncStorage for session persistence
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Database Types
export interface Database {
  public: {
    Tables: {
      acupressure_points: {
        Row: AcupressurePointRow;
        Insert: AcupressurePointInsert;
        Update: AcupressurePointUpdate;
      };
      users: {
        Row: UserRow;
        Insert: UserInsert;
        Update: UserUpdate;
      };
    };
  };
}

export interface AcupressurePointRow {
  id: string;
  code: string;
  name_en: string;
  name_hi: string;
  chinese_traditional?: string;
  chinese_pinyin?: string;
  alternate_names_en?: string[];
  alternate_names_hi?: string[];
  location_en: string;
  location_hi: string;
  meridian_name_en: string;
  meridian_name_hi: string;
  meridian_code: string;
  meridian_element?: string;
  meridian_polarity?: string;
  body_parts: string[];
  difficulty: string;
  pressure: string;
  duration: string;
  symptoms: string[];
  indications_en: string[];
  indications_hi: string[];
  contraindications_en: string;
  contraindications_hi: string;
  technique_en: string;
  technique_hi: string;
  category: string;
  popularity: number;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export type AcupressurePointInsert = Omit<AcupressurePointRow, 'created_at' | 'updated_at'>;
export type AcupressurePointUpdate = Partial<AcupressurePointInsert>;

export interface UserRow {
  id: string;
  clerk_user_id: string;
  email?: string;
  is_premium: boolean;
  subscription_status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'none';
  subscription_expires_at?: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  created_at?: string;
  updated_at?: string;
}

export type UserInsert = Omit<UserRow, 'created_at' | 'updated_at'>;
export type UserUpdate = Partial<UserInsert>;

export default supabase;
