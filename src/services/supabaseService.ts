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
  // SEARCH METHODS (Full-Text Search)
  // ============================================

  /**
   * Search acupressure points using PostgreSQL Full-Text Search
   * Supports typo tolerance via trigram similarity
   */
  async searchPointsWithFTS(
    query: string,
    filters?: {
      bodyPart?: string;
      difficulty?: string;
      meridian?: string;
      category?: string;
    },
    language: 'en' | 'hi' = 'en'
  ): Promise<AcupressurePoint[]> {
    try {
      let queryBuilder = supabase
        .from('acupressure_points')
        .select('*');

      // Apply filters first
      if (filters?.bodyPart) {
        queryBuilder = queryBuilder.contains('body_parts', [filters.bodyPart]);
      }
      if (filters?.difficulty) {
        queryBuilder = queryBuilder.eq('difficulty', filters.difficulty);
      }
      if (filters?.meridian) {
        queryBuilder = queryBuilder.eq('meridian_code', filters.meridian);
      }
      if (filters?.category) {
        queryBuilder = queryBuilder.eq('category', filters.category);
      }

      // If no query, just return filtered results
      if (!query || query.trim() === '' || query === '*') {
        const { data, error } = await queryBuilder.order('popularity', { ascending: false });

        if (error) throw error;
        return (data || []).map(row => this.convertFromSupabaseFormat(row));
      }

      // Full-text search with ranking
      const searchColumn = language === 'hi' ? 'search_vector_hi' : 'search_vector_en';
      const searchQuery = query.trim().split(/\s+/).join(' | '); // Convert to tsquery format

      // Use textSearch for full-text search
      queryBuilder = queryBuilder
        .textSearch(searchColumn, searchQuery, {
          type: 'websearch',
          config: language === 'hi' ? 'simple' : 'english'
        });

      const { data: ftsResults, error: ftsError } = await queryBuilder;

      if (ftsError) throw ftsError;

      // If FTS returns results, use them
      if (ftsResults && ftsResults.length > 0) {
        console.log(`✅ Supabase FTS found ${ftsResults.length} results`);
        return ftsResults.map(row => this.convertFromSupabaseFormat(row));
      }

      console.log('⚠️ FTS returned no results, trying fuzzy search fallback');

      // Fallback: Trigram similarity search for typo tolerance
      const nameColumn = language === 'hi' ? 'name_hi' : 'name_en';

      queryBuilder = supabase
        .from('acupressure_points')
        .select('*');

      // Re-apply filters
      if (filters?.bodyPart) {
        queryBuilder = queryBuilder.contains('body_parts', [filters.bodyPart]);
      }
      if (filters?.difficulty) {
        queryBuilder = queryBuilder.eq('difficulty', filters.difficulty);
      }

      // Use ILIKE for fuzzy matching as fallback
      queryBuilder = queryBuilder.or(
        `${nameColumn}.ilike.%${query}%,` +
        `code.ilike.%${query}%,` +
        `symptoms.cs.{${query}}`
      );

      const { data: fuzzyResults, error: fuzzyError } = await queryBuilder
        .order('popularity', { ascending: false })
        .limit(50);

      if (fuzzyError) throw fuzzyError;

      console.log(`✅ Fuzzy search found ${fuzzyResults?.length || 0} results`);
      return (fuzzyResults || []).map(row => this.convertFromSupabaseFormat(row));

    } catch (error) {
      console.error('❌ Supabase FTS search error:', error);
      throw error;
    }
  }

  /**
   * Get search suggestions using trigram similarity
   */
  async getSearchSuggestions(
    query: string,
    language: 'en' | 'hi' = 'en',
    limit: number = 10
  ): Promise<string[]> {
    try {
      if (query.length < 2) return [];

      const nameColumn = language === 'hi' ? 'name_hi' : 'name_en';

      const { data, error } = await supabase
        .from('acupressure_points')
        .select(`${nameColumn}, code, symptoms`)
        .ilike(nameColumn, `%${query}%`)
        .limit(limit);

      if (error) throw error;

      const suggestions = new Set<string>();

      data?.forEach((point: any) => {
        if (point[nameColumn]) suggestions.add(point[nameColumn]);
        if (point.code?.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(point.code);
        }
        point.symptoms?.forEach((symptom: string) => {
          if (symptom.toLowerCase().includes(query.toLowerCase())) {
            suggestions.add(symptom);
          }
        });
      });

      return Array.from(suggestions).slice(0, limit);
    } catch (error) {
      console.error('❌ Error getting suggestions:', error);
      return [];
    }
  }

  // ============================================
  // CONVERSION HELPERS
  // ============================================

  /**
   * Convert from Supabase format to app's AcupressurePoint format
   */
  private convertFromSupabaseFormat(row: AcupressurePointRow): AcupressurePoint {
    return {
      id: row.id || '',
      code: row.code || '',
      name: {
        en: row.name_en || '',
        hi: row.name_hi || '',
      },
      chineseName: row.chinese_traditional || row.chinese_pinyin ? {
        traditional: row.chinese_traditional || '',
        pinyin: row.chinese_pinyin || '',
      } : undefined,
      alternateNames: row.alternate_names_en || row.alternate_names_hi ? {
        en: row.alternate_names_en || [],
        hi: row.alternate_names_hi || [],
      } : undefined,
      location: {
        en: row.location_en || '',
        hi: row.location_hi || '',
      },
      meridian: {
        name: {
          en: row.meridian_name_en || '',
          hi: row.meridian_name_hi || '',
        },
        code: row.meridian_code || '',
        element: row.meridian_element || undefined,
        polarity: row.meridian_polarity || undefined,
      },
      bodyPart: row.body_parts || [],
      difficulty: row.difficulty || 'Beginner',
      pressure: row.pressure || 'Moderate',
      duration: row.duration || '1-3 minutes',
      symptoms: row.symptoms || [],
      conditions: row.symptoms || [], // For backwards compatibility
      indications: (row.indications_en || []).map((indication, index) => ({
        en: indication || '',
        hi: (row.indications_hi || [])[index] || indication || '',
      })),
      contraindications: {
        en: row.contraindications_en || '',
        hi: row.contraindications_hi || '',
      },
      technique: {
        en: row.technique_en || '',
        hi: row.technique_hi || '',
      },
      method: { // For backwards compatibility
        en: row.technique_en || '',
        hi: row.technique_hi || '',
      },
      category: row.category || 'Classical',
      popularity: row.popularity || 3,
      imageUrl: row.image_url || undefined,
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

  // ============================================
  // FAVORITES METHODS
  // ============================================

  /**
   * Add acupressure point to favorites
   */
  async addFavorite(clerkUserId: string, pointId: string): Promise<void> {
    try {
      // Ensure user exists in Supabase
      let user = await this.getUserByClerkId(clerkUserId);
      if (!user) {
        // Create user if doesn't exist
        user = await this.createOrUpdateUser({
          clerk_user_id: clerkUserId,
          email: null,
        });
      }

      const { error } = await supabase
        .from('favorites')
        .insert({ user_id: user.id, point_id: pointId });

      if (error) {
        if (error.code === '23505') {
          // Unique violation - already favorited, ignore
          return;
        }
        throw error;
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
      throw error;
    }
  }

  /**
   * Remove acupressure point from favorites
   */
  async removeFavorite(clerkUserId: string, pointId: string): Promise<void> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) return; // No user, nothing to remove

      const { error} = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('point_id', pointId);

      if (error && error.code !== 'PGRST116') { // Ignore "no rows deleted" error
        throw error;
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
      throw error;
    }
  }

  /**
   * Get all favorite points for a user
   */
  async getFavorites(clerkUserId: string): Promise<string[]> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) return [];

      const { data, error } = await supabase
        .from('favorites')
        .select('point_id')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return (data || []).map(fav => fav.point_id);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }
  }

  /**
   * Check if a point is favorited
   */
  async isFavorite(clerkUserId: string, pointId: string): Promise<boolean> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) return false;

      const { data, error } = await supabase
        .from('favorites')
        .select('id')
        .eq('user_id', user.id)
        .eq('point_id', pointId)
        .single();

      return !error && !!data;
    } catch (error) {
      return false;
    }
  }

  // ============================================
  // SESSION HISTORY METHODS
  // ============================================

  /**
   * Add session history entry
   */
  async addSessionHistory(
    clerkUserId: string,
    pointId: string,
    durationSeconds?: number,
    notes?: string
  ): Promise<void> {
    try {
      // Ensure user exists in Supabase
      let user = await this.getUserByClerkId(clerkUserId);
      if (!user) {
        user = await this.createOrUpdateUser({
          clerk_user_id: clerkUserId,
          email: null,
        });
      }

      const { error } = await supabase
        .from('session_history')
        .insert({
          user_id: user.id,
          point_id: pointId,
          duration_seconds: durationSeconds,
          notes,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error adding session history:', error);
      throw error;
    }
  }

  /**
   * Get session history for a user
   */
  async getSessionHistory(clerkUserId: string, limit: number = 20): Promise<any[]> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) return [];

      const { data, error } = await supabase
        .from('session_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return data || [];
    } catch (error) {
      console.error('Error fetching session history:', error);
      return [];
    }
  }

  // ============================================
  // REMINDERS METHODS
  // ============================================

  /**
   * Create a new reminder
   */
  async createReminder(
    clerkUserId: string,
    title: string,
    scheduledTime: Date,
    pointId?: string,
    message?: string,
    repeatPattern?: string
  ): Promise<void> {
    try {
      // Ensure user exists in Supabase
      let user = await this.getUserByClerkId(clerkUserId);
      if (!user) {
        user = await this.createOrUpdateUser({
          clerk_user_id: clerkUserId,
          email: null,
        });
      }

      const { error } = await supabase
        .from('reminders')
        .insert({
          user_id: user.id,
          point_id: pointId || null,
          title,
          message,
          scheduled_time: scheduledTime.toISOString(),
          repeat_pattern: repeatPattern,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error creating reminder:', error);
      throw error;
    }
  }

  /**
   * Get all active reminders for a user
   */
  async getReminders(clerkUserId: string): Promise<any[]> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) return [];

      const { data, error } = await supabase
        .from('reminders')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('scheduled_time', { ascending: true });

      if (error) throw error;

      return data || [];
    } catch (error) {
      console.error('Error fetching reminders:', error);
      return [];
    }
  }

  /**
   * Delete a reminder
   */
  async deleteReminder(clerkUserId: string, reminderId: string): Promise<void> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) throw new Error('User not found');

      const { error } = await supabase
        .from('reminders')
        .delete()
        .eq('id', reminderId)
        .eq('user_id', user.id);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting reminder:', error);
      throw error;
    }
  }

  /**
   * Toggle reminder active status
   */
  async toggleReminder(clerkUserId: string, reminderId: string, isActive: boolean): Promise<void> {
    try {
      const user = await this.getUserByClerkId(clerkUserId);
      if (!user) throw new Error('User not found');

      const { error } = await supabase
        .from('reminders')
        .update({ is_active: isActive })
        .eq('id', reminderId)
        .eq('user_id', user.id);

      if (error) throw error;
    } catch (error) {
      console.error('Error toggling reminder:', error);
      throw error;
    }
  }
}

export const supabaseService = new SupabaseService();
