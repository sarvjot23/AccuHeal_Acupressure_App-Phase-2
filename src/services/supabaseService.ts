import { supabase } from './supabase';
import type { AcupressurePointRow, UserRow, UserInsert, UserUpdate } from './supabase';
import { AcupressurePoint } from '@types';

export class SupabaseService {
  // ============================================
  // ACUPRESSURE POINTS METHODS
  // ============================================

  /**
   * Get a single acupressure point by ID
   */
  async getPoint(id: string): Promise<AcupressurePoint | null> {
    try {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (!data) return null;

      return this.convertFromSupabaseFormat(data);
    } catch (error) {
      console.error('Error fetching point:', error);
      throw error;
    }
  }

  /**
   * Get all acupressure points
   */
  async getAllPoints(): Promise<AcupressurePoint[]> {
    try {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('*')
        .order('code', { ascending: true });

      if (error) throw error;

      return (data || []).map(point => this.convertFromSupabaseFormat(point));
    } catch (error) {
      console.error('Error fetching all points:', error);
      throw error;
    }
  }

  /**
   * Get points by body part
   */
  async getPointsByBodyPart(bodyPart: string): Promise<AcupressurePoint[]> {
    try {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('*')
        .contains('body_parts', [bodyPart])
        .order('code', { ascending: true });

      if (error) throw error;

      return (data || []).map(point => this.convertFromSupabaseFormat(point));
    } catch (error) {
      console.error('Error fetching points by body part:', error);
      throw error;
    }
  }

  /**
   * Get points by symptom/condition
   */
  async getPointsByCondition(condition: string): Promise<AcupressurePoint[]> {
    try {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('*')
        .contains('symptoms', [condition])
        .order('code', { ascending: true });

      if (error) throw error;

      return (data || []).map(point => this.convertFromSupabaseFormat(point));
    } catch (error) {
      console.error('Error fetching points by condition:', error);
      throw error;
    }
  }

  /**
   * Get popular points (by popularity score)
   */
  async getPopularPoints(limit = 10): Promise<AcupressurePoint[]> {
    try {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('*')
        .order('popularity', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return (data || []).map(point => this.convertFromSupabaseFormat(point));
    } catch (error) {
      console.error('Error fetching popular points:', error);
      throw error;
    }
  }

  /**
   * Get points by difficulty level
   */
  async getPointsByDifficulty(difficulty: string): Promise<AcupressurePoint[]> {
    try {
      const { data, error } = await supabase
        .from('acupressure_points')
        .select('*')
        .eq('difficulty', difficulty)
        .order('code', { ascending: true });

      if (error) throw error;

      return (data || []).map(point => this.convertFromSupabaseFormat(point));
    } catch (error) {
      console.error('Error fetching points by difficulty:', error);
      throw error;
    }
  }

  /**
   * Search points with filters
   */
  async searchPoints(filters: {
    bodyPart?: string;
    difficulty?: string;
    meridian?: string;
    category?: string;
  }): Promise<AcupressurePoint[]> {
    try {
      let query = supabase.from('acupressure_points').select('*');

      if (filters.bodyPart) {
        query = query.contains('body_parts', [filters.bodyPart]);
      }

      if (filters.difficulty) {
        query = query.eq('difficulty', filters.difficulty);
      }

      if (filters.meridian) {
        query = query.eq('meridian_code', filters.meridian);
      }

      if (filters.category) {
        query = query.eq('category', filters.category);
      }

      query = query.order('code', { ascending: true });

      const { data, error } = await query;

      if (error) throw error;

      return (data || []).map(point => this.convertFromSupabaseFormat(point));
    } catch (error) {
      console.error('Error searching points:', error);
      throw error;
    }
  }

  /**
   * Insert a new acupressure point
   */
  async insertPoint(point: AcupressurePoint): Promise<void> {
    try {
      const supabasePoint = this.convertToSupabaseFormat(point);
      
      const { error } = await supabase
        .from('acupressure_points')
        .insert(supabasePoint);

      if (error) throw error;

      console.log(`✅ Inserted point: ${point.code}`);
    } catch (error) {
      console.error(`❌ Error inserting point ${point.code}:`, error);
      throw error;
    }
  }

  /**
   * Bulk insert acupressure points
   */
  async insertPoints(points: AcupressurePoint[]): Promise<void> {
    try {
      console.log(`📝 Inserting ${points.length} acupressure points...`);

      const supabasePoints = points.map(point => this.convertToSupabaseFormat(point));

      const { error } = await supabase
        .from('acupressure_points')
        .insert(supabasePoints);

      if (error) throw error;

      console.log(`✅ Successfully inserted ${points.length} points`);
    } catch (error) {
      console.error('❌ Error during bulk insert:', error);
      throw error;
    }
  }

  // ============================================
  // USER SUBSCRIPTION METHODS
  // ============================================

  /**
   * Get user by Clerk user ID
   */
  async getUserByClerkId(clerkUserId: string): Promise<UserRow | null> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', clerkUserId)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  /**
   * Create or update user document
   */
  async upsertUser(userData: UserInsert): Promise<UserRow> {
    try {
      const { data, error } = await supabase
        .from('users')
        .upsert(userData, {
          onConflict: 'clerk_user_id',
        })
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error upserting user:', error);
      throw error;
    }
  }

  /**
   * Update user subscription status
   */
  async updateUserSubscription(
    clerkUserId: string,
    updates: UserUpdate
  ): Promise<void> {
    try {
      const { error } = await supabase
        .from('users')
        .update(updates)
        .eq('clerk_user_id', clerkUserId);

      if (error) throw error;

      console.log(`✅ Updated subscription for user: ${clerkUserId}`);
    } catch (error) {
      console.error('Error updating user subscription:', error);
      throw error;
    }
  }

  /**
   * Subscribe to user changes in real-time
   */
  subscribeToUserChanges(
    clerkUserId: string,
    callback: (user: UserRow | null) => void
  ): () => void {
    const channel = supabase
      .channel(`user:${clerkUserId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'users',
          filter: `clerk_user_id=eq.${clerkUserId}`,
        },
        (payload) => {
          console.log('User change detected:', payload);
          callback(payload.new as UserRow);
        }
      )
      .subscribe();

    // Return unsubscribe function
    return () => {
      supabase.removeChannel(channel);
    };
  }

  // ============================================
  // STORAGE METHODS
  // ============================================

  /**
   * Upload an image to Supabase Storage
   */
  async uploadImage(
    file: Blob | File,
    filename: string
  ): Promise<string> {
    try {
      const { data, error } = await supabase.storage
        .from('acupressure-images')
        .upload(filename, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (error) throw error;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('acupressure-images')
        .getPublicUrl(data.path);

      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  /**
   * Get public URL for an image
   */
  getImageUrl(filename: string): string {
    const { data } = supabase.storage
      .from('acupressure-images')
      .getPublicUrl(filename);

    return data.publicUrl;
  }

  // ============================================
  // CONVERSION HELPERS
  // ============================================

  /**
   * Convert from Supabase format to app's AcupressurePoint format
   */
  private convertFromSupabaseFormat(row: AcupressurePointRow): AcupressurePoint {
    return {
      id: row.id,
      code: row.code,
      name: {
        en: row.name_en,
        hi: row.name_hi,
      },
      chineseName: row.chinese_traditional || row.chinese_pinyin ? {
        traditional: row.chinese_traditional,
        pinyin: row.chinese_pinyin,
      } : undefined,
      alternateNames: row.alternate_names_en || row.alternate_names_hi ? {
        en: row.alternate_names_en || [],
        hi: row.alternate_names_hi || [],
      } : undefined,
      location: {
        en: row.location_en,
        hi: row.location_hi,
      },
      meridian: {
        name: {
          en: row.meridian_name_en,
          hi: row.meridian_name_hi,
        },
        code: row.meridian_code,
        element: row.meridian_element,
        polarity: row.meridian_polarity,
      },
      bodyPart: row.body_parts,
      difficulty: row.difficulty,
      pressure: row.pressure,
      duration: row.duration,
      symptoms: row.symptoms,
      conditions: row.symptoms, // For backwards compatibility
      indications: row.indications_en.map((indication, index) => ({
        en: indication,
        hi: row.indications_hi[index] || indication,
      })),
      contraindications: {
        en: row.contraindications_en,
        hi: row.contraindications_hi,
      },
      technique: {
        en: row.technique_en,
        hi: row.technique_hi,
      },
      method: { // For backwards compatibility
        en: row.technique_en,
        hi: row.technique_hi,
      },
      category: row.category,
      popularity: row.popularity,
      imageUrl: row.image_url,
    } as AcupressurePoint;
  }

  /**
   * Convert from app's AcupressurePoint format to Supabase format
   */
  private convertToSupabaseFormat(point: AcupressurePoint): Omit<AcupressurePointRow, 'created_at' | 'updated_at'> {
    return {
      id: point.id,
      code: point.code,
      name_en: point.name.en,
      name_hi: point.name.hi,
      chinese_traditional: point.chineseName?.traditional,
      chinese_pinyin: point.chineseName?.pinyin,
      alternate_names_en: point.alternateNames?.en,
      alternate_names_hi: point.alternateNames?.hi,
      location_en: point.location.en,
      location_hi: point.location.hi,
      meridian_name_en: point.meridian.name.en,
      meridian_name_hi: point.meridian.name.hi,
      meridian_code: point.meridian.code,
      meridian_element: point.meridian.element,
      meridian_polarity: point.meridian.polarity,
      body_parts: Array.isArray(point.bodyPart) ? point.bodyPart : [point.bodyPart],
      difficulty: point.difficulty,
      pressure: point.pressure,
      duration: typeof point.duration === 'string' ? point.duration : `${point.duration} minutes`,
      symptoms: point.symptoms || point.conditions || [],
      indications_en: (point.indications || []).map((ind: any) => 
        typeof ind === 'string' ? ind : ind.en
      ),
      indications_hi: (point.indications || []).map((ind: any) => 
        typeof ind === 'string' ? ind : ind.hi
      ),
      contraindications_en: typeof point.contraindications === 'string' 
        ? point.contraindications 
        : point.contraindications?.en || '',
      contraindications_hi: typeof point.contraindications === 'string'
        ? point.contraindications
        : point.contraindications?.hi || '',
      technique_en: point.technique?.en || point.method?.en || '',
      technique_hi: point.technique?.hi || point.method?.hi || '',
      category: point.category,
      popularity: point.popularity ?? 3,
      image_url: point.imageUrl,
    };
  }
}

export const supabaseService = new SupabaseService();
