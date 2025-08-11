import Typesense from 'typesense';
import { AcupressurePoint, SearchResult } from '@types';

export interface TypesenseConfig {
  apiKey: string;
  nodes: Array<{
    host: string;
    port: number;
    protocol: string;
  }>;
  connectionTimeoutSeconds: number;
}

export interface TypesensePoint {
  id: string;
  code: string;
  name_en: string;
  name_hi: string;
  chinese_traditional?: string;
  chinese_pinyin?: string;
  alternate_names?: string[];
  location_en: string;
  location_hi: string;
  meridian_name_en: string;
  meridian_name_hi: string;
  meridian_code: string;
  meridian_element?: string;
  meridian_polarity?: string;
  symptoms: string[];
  indications_en: string[];
  indications_hi: string[];
  contraindications_en: string;
  contraindications_hi: string;
  technique_en: string;
  technique_hi: string;
  duration: string;
  pressure: string;
  body_parts: string[];
  difficulty: string;
  category: string;
  popularity: number;
  // Combined search fields for better relevance
  all_names: string;
  all_symptoms: string;
  all_indications: string;
}

class TypesenseService {
  private client: Typesense.Client;
  private collectionName = 'acupressure_points';

  constructor(config: TypesenseConfig) {
    this.client = new Typesense.Client(config);
  }

  // Initialize the collection with optimized schema
  async initializeCollection(): Promise<void> {
    try {
      // Check if collection exists
      await this.client.collections(this.collectionName).retrieve();
      console.log('✅ Collection already exists');
    } catch (error) {
      // Collection doesn't exist, create it
      console.log('📝 Creating acupressure points collection...');
      
      const schema = {
        name: this.collectionName,
        fields: [
          // Primary identifiers
          { name: 'id', type: 'string' },
          { name: 'code', type: 'string', facet: true },
          
          // Multilingual names
          { name: 'name_en', type: 'string' },
          { name: 'name_hi', type: 'string' },
          
          // Chinese names for enhanced search
          { name: 'chinese_traditional', type: 'string', optional: true },
          { name: 'chinese_pinyin', type: 'string', optional: true },
          { name: 'alternate_names', type: 'string[]', optional: true },
          
          // Location descriptions
          { name: 'location_en', type: 'string' },
          { name: 'location_hi', type: 'string' },
          
          // Meridian information
          { name: 'meridian_name_en', type: 'string', facet: true },
          { name: 'meridian_name_hi', type: 'string', facet: true },
          { name: 'meridian_code', type: 'string', facet: true },
          { name: 'meridian_element', type: 'string', facet: true, optional: true },
          { name: 'meridian_polarity', type: 'string', facet: true, optional: true },
          
          // Therapeutic information
          { name: 'symptoms', type: 'string[]' },
          { name: 'indications_en', type: 'string[]' },
          { name: 'indications_hi', type: 'string[]' },
          { name: 'contraindications_en', type: 'string' },
          { name: 'contraindications_hi', type: 'string' },
          
          // Application details
          { name: 'technique_en', type: 'string' },
          { name: 'technique_hi', type: 'string' },
          { name: 'duration', type: 'string' },
          { name: 'pressure', type: 'string', facet: true },
          
          // Classification
          { name: 'body_parts', type: 'string[]', facet: true },
          { name: 'difficulty', type: 'string', facet: true },
          { name: 'category', type: 'string', facet: true },
          { name: 'popularity', type: 'int32' },
          
          // Combined search fields for better relevance
          { name: 'all_names', type: 'string' },
          { name: 'all_symptoms', type: 'string' },
          { name: 'all_indications', type: 'string' },
        ],
        default_sorting_field: 'popularity',
      };

      await this.client.collections().create(schema);
      console.log('✅ Collection created successfully');
    }
  }

  // Convert AccuHeal point to Typesense format
  private convertToTypesenseFormat(point: AcupressurePoint): TypesensePoint {
    // Helper function to safely extract localized text
    const safeText = (localizedText: any, lang: 'en' | 'hi'): string => {
      return localizedText?.[lang] || '';
    };

    // Helper function to extract array of localized texts
    const safeLocalizedArray = (array: any[], lang: 'en' | 'hi'): string[] => {
      return Array.isArray(array) ? array.map(item => safeText(item, lang)).filter(Boolean) : [];
    };

    // Create combined search fields
    const allNames = [
      safeText(point.name, 'en'),
      safeText(point.name, 'hi'),
      point.chineseName?.traditional || '',
      point.chineseName?.pinyin || '',
      ...(point.alternateNames?.en || []),
      ...(point.alternateNames?.hi || [])
    ].filter(Boolean).join(' ');

    const allSymptoms = [
      ...(point.symptoms || []),
      ...(point.conditions || []) // Legacy support
    ].filter(Boolean).join(' ');

    const allIndications = [
      ...safeLocalizedArray(point.indications || [], 'en'),
      ...safeLocalizedArray(point.indications || [], 'hi')
    ].filter(Boolean).join(' ');

    return {
      id: point.id,
      code: point.code,
      name_en: safeText(point.name, 'en'),
      name_hi: safeText(point.name, 'hi'),
      chinese_traditional: point.chineseName?.traditional,
      chinese_pinyin: point.chineseName?.pinyin,
      alternate_names: [...(point.alternateNames?.en || []), ...(point.alternateNames?.hi || [])],
      location_en: safeText(point.location, 'en'),
      location_hi: safeText(point.location, 'hi'),
      meridian_name_en: safeText(point.meridian?.name, 'en'),
      meridian_name_hi: safeText(point.meridian?.name, 'hi'),
      meridian_code: point.meridian?.code || '',
      meridian_element: point.meridian?.element,
      meridian_polarity: point.meridian?.polarity,
      symptoms: point.symptoms || point.conditions || [],
      indications_en: safeLocalizedArray(point.indications || [], 'en'),
      indications_hi: safeLocalizedArray(point.indications || [], 'hi'),
      contraindications_en: safeText(point.contraindications, 'en'),
      contraindications_hi: safeText(point.contraindications, 'hi'),
      technique_en: safeText(point.technique || point.method, 'en'), // Support legacy 'method'
      technique_hi: safeText(point.technique || point.method, 'hi'),
      duration: typeof point.duration === 'string' ? point.duration : `${point.duration} minutes`,
      pressure: point.pressure,
      body_parts: Array.isArray(point.bodyPart) ? point.bodyPart : [point.bodyPart],
      difficulty: point.difficulty,
      category: point.category,
      popularity: point.popularity ?? 3, // Default to 3 (medium popularity) if not specified
      all_names: allNames,
      all_symptoms: allSymptoms,
      all_indications: allIndications,
    };
  }

  // Index a single point
  async indexPoint(point: AcupressurePoint): Promise<void> {
    try {
      const typesensePoint = this.convertToTypesenseFormat(point);
      await this.client.collections(this.collectionName).documents().upsert(typesensePoint);
      console.log(`✅ Indexed point: ${point.code}`);
    } catch (error) {
      console.error(`❌ Error indexing point ${point.code}:`, error);
      throw error;
    }
  }

  // Index multiple points in batch
  async indexPoints(points: AcupressurePoint[]): Promise<void> {
    try {
      console.log(`📝 Indexing ${points.length} acupressure points...`);
      
      const typesensePoints = points.map(point => this.convertToTypesenseFormat(point));
      
      // Import documents in batch
      const results = await this.client.collections(this.collectionName)
        .documents()
        .import(typesensePoints, { action: 'upsert' });
      
      console.log('✅ Batch indexing completed');
      console.log(`📊 Successfully indexed: ${results.filter((r: any) => r.success).length} points`);
      
      // Log any failures
      const failures = results.filter((r: any) => !r.success);
      if (failures.length > 0) {
        console.warn(`⚠️ Failed to index ${failures.length} points:`, failures);
      }
    } catch (error) {
      console.error('❌ Error during batch indexing:', error);
      throw error;
    }
  }

  // Search points with advanced features
  async searchPoints(
    query: string,
    filters?: {
      bodyPart?: string;
      difficulty?: string;
      meridian?: string;
      category?: string;
      element?: string;
      polarity?: string;
      pressure?: string;
    },
    language: 'en' | 'hi' = 'en'
  ): Promise<SearchResult[]> {
    try {
      console.log('🔍 Typesense searching:', query, 'filters:', filters);

      // Build query fields based on language preference
      const queryBy = language === 'hi' 
        ? 'name_hi,all_symptoms,all_indications,location_hi,meridian_name_hi,chinese_pinyin'
        : 'name_en,all_symptoms,all_indications,location_en,meridian_name_en,chinese_pinyin,code';

      // Build filter string
      const filterParts: string[] = [];
      
      if (filters?.bodyPart) {
        filterParts.push(`body_parts:${filters.bodyPart}`);
      }
      if (filters?.difficulty) {
        filterParts.push(`difficulty:${filters.difficulty}`);
      }
      if (filters?.meridian) {
        filterParts.push(`meridian_code:${filters.meridian}`);
      }
      if (filters?.category) {
        filterParts.push(`category:${filters.category}`);
      }
      if (filters?.element) {
        filterParts.push(`meridian_element:${filters.element}`);
      }
      if (filters?.polarity) {
        filterParts.push(`meridian_polarity:${filters.polarity}`);
      }
      if (filters?.pressure) {
        filterParts.push(`pressure:${filters.pressure}`);
      }

      const searchParams: any = {
        q: query || '*',
        query_by: queryBy,
        limit: 50,
        page: 1,
        typo_tokens_threshold: 2, // Enable typo tolerance
        drop_tokens_threshold: 2, // Enable dropping tokens for better recall
        highlight_full_fields: 'name_en,name_hi,all_symptoms',
        snippet_threshold: 30,
        per_page: 50
      };

      if (filterParts.length > 0) {
        searchParams.filter_by = filterParts.join(' && ');
      }

      const results = await this.client.collections(this.collectionName)
        .documents()
        .search(searchParams);

      console.log(`✅ Found ${results.hits?.length || 0} results`);

      // Convert to SearchResult format
      return (results.hits || []).map((hit: any) => ({
        id: hit.document.id,
        title: hit.document[`name_${language}`] || hit.document.name_en,
        subtitle: `${hit.document.code} • ${hit.document[`meridian_name_${language}`] || hit.document.meridian_name_en}`,
        type: 'point' as const,
        relevanceScore: hit.text_match_info?.score || 0,
      }));

    } catch (error) {
      console.error('❌ Typesense search error:', error);
      throw error;
    }
  }

  // Get search suggestions with typo tolerance
  async getSuggestions(query: string, language: 'en' | 'hi' = 'en'): Promise<string[]> {
    try {
      if (query.length < 2) return [];

      const queryBy = language === 'hi' 
        ? 'name_hi,all_symptoms,meridian_name_hi'
        : 'name_en,all_symptoms,meridian_name_en,code';

      const results = await this.client.collections(this.collectionName)
        .documents()
        .search({
          q: query,
          query_by: queryBy,
          limit: 10,
          typo_tokens_threshold: 1,
          prefix: true // Enable prefix matching for suggestions
        });

      const suggestions = new Set<string>();
      
      results.hits?.forEach((hit: any) => {
        const doc = hit.document;
        // Add names
        if (doc[`name_${language}`]) suggestions.add(doc[`name_${language}`]);
        // Add symptoms
        doc.symptoms?.forEach((symptom: string) => {
          if (symptom.toLowerCase().includes(query.toLowerCase())) {
            suggestions.add(symptom);
          }
        });
        // Add codes
        if (doc.code?.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(doc.code);
        }
      });

      return Array.from(suggestions).slice(0, 10);
    } catch (error) {
      console.error('❌ Error getting suggestions:', error);
      return [];
    }
  }

  // Get points by meridian with faceting
  async getPointsByMeridian(meridianCode: string, language: 'en' | 'hi' = 'en'): Promise<SearchResult[]> {
    return this.searchPoints('*', { meridian: meridianCode }, language);
  }

  // Health check
  async healthCheck(): Promise<boolean> {
    try {
      const health = await this.client.health.retrieve();
      return health.ok === true;
    } catch (error) {
      console.error('❌ Typesense health check failed:', error);
      return false;
    }
  }

  // Get collection stats
  async getStats(): Promise<any> {
    try {
      const collection = await this.client.collections(this.collectionName).retrieve();
      return {
        name: collection.name,
        num_documents: collection.num_documents,
        created_at: collection.created_at
      };
    } catch (error) {
      console.error('❌ Error getting stats:', error);
      return null;
    }
  }
}

// Create default instance
const defaultConfig: TypesenseConfig = {
  apiKey: 'uPgH34r#', // Development API key
  nodes: [
    {
      host: 'localhost',
      port: 8108,
      protocol: 'http'
    }
  ],
  connectionTimeoutSeconds: 2
};

export const typesenseService = new TypesenseService(defaultConfig);
export default TypesenseService;