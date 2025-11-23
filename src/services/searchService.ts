import { typesenseService } from './typesense';
import { supabaseService } from './supabaseService';
import { AcupressurePoint } from '@types';

type SearchBackend = 'typesense' | 'supabase';

interface SearchFilters {
  bodyPart?: string;
  difficulty?: string;
  meridian?: string;
  category?: string;
}

class UnifiedSearchService {
  private activeBackend: SearchBackend;
  private typesenseAvailable: boolean = false;

  constructor() {
    // Read from environment variable, default to supabase
    const envBackend = process.env.EXPO_PUBLIC_SEARCH_BACKEND as SearchBackend;
    this.activeBackend = envBackend || 'supabase';
    console.log(`🔍 Search backend initialized: ${this.activeBackend}`);
  }

  /**
   * Set which search backend to use
   * Call this when you want to switch between Supabase and Typesense
   */
  setBackend(backend: SearchBackend) {
    console.log(`🔄 Switching search backend from ${this.activeBackend} to ${backend}`);
    this.activeBackend = backend;
  }

  /**
   * Get current active backend
   */
  getBackend(): SearchBackend {
    return this.activeBackend;
  }

  /**
   * Check if Typesense is available (optional health check)
   */
  async checkTypesenseHealth(): Promise<boolean> {
    try {
      this.typesenseAvailable = await typesenseService.healthCheck();
      console.log(`Typesense health check: ${this.typesenseAvailable ? '✅ Available' : '❌ Unavailable'}`);
      return this.typesenseAvailable;
    } catch (error) {
      console.warn('⚠️ Typesense health check failed:', error);
      this.typesenseAvailable = false;
      return false;
    }
  }

  /**
   * Unified search method - automatically uses configured backend
   */
  async search(
    query: string,
    filters: SearchFilters,
    language: 'en' | 'hi' = 'en'
  ): Promise<AcupressurePoint[]> {
    try {
      if (this.activeBackend === 'typesense') {
        console.log('🔍 Using Typesense search');
        return await typesenseService.searchPoints(query, filters, language);
      } else {
        console.log('🔍 Using Supabase FTS search');
        return await supabaseService.searchPointsWithFTS(query, filters, language);
      }
    } catch (error) {
      // If Typesense fails, fall back to Supabase
      if (this.activeBackend === 'typesense') {
        console.warn('⚠️ Typesense search failed, falling back to Supabase:', error);
        try {
          return await supabaseService.searchPointsWithFTS(query, filters, language);
        } catch (fallbackError) {
          console.error('❌ Supabase fallback also failed:', fallbackError);
          throw fallbackError;
        }
      }
      throw error;
    }
  }

  /**
   * Get search suggestions
   */
  async getSuggestions(
    query: string,
    language: 'en' | 'hi' = 'en'
  ): Promise<string[]> {
    try {
      if (this.activeBackend === 'typesense' && this.typesenseAvailable) {
        console.log('💡 Getting suggestions from Typesense');
        return await typesenseService.getSuggestions(query, language);
      } else {
        console.log('💡 Getting suggestions from Supabase');
        return await supabaseService.getSearchSuggestions(query, language);
      }
    } catch (error) {
      console.error('❌ Error getting suggestions:', error);
      // Return empty array on error rather than throwing
      return [];
    }
  }
}

// Export singleton instance
export const searchService = new UnifiedSearchService();

// For convenience, also export individual services
export { typesenseService, supabaseService };
