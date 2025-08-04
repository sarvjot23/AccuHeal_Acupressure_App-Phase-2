import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';
import Constants from 'expo-constants';
import { AcupressurePoint, SearchResult } from '@types';

class AlgoliaService {
  private client: SearchClient;
  private pointsIndex: SearchIndex;

  constructor() {
    // Production Algolia configuration with fallback for development
    const appId = Constants.expoConfig?.extra?.algoliaAppId || 
                 process.env.EXPO_PUBLIC_ALGOLIA_APP_ID || 
                 'accuheal-algolia-prod';
    const apiKey = Constants.expoConfig?.extra?.algoliaSearchKey || 
                  process.env.EXPO_PUBLIC_ALGOLIA_SEARCH_KEY || 
                  'your-search-api-key';
    
    this.client = algoliasearch(appId, apiKey);
    this.pointsIndex = this.client.initIndex('accuheal_acupressure_points_prod');
  }

  // Search for acupressure points
  async searchPoints(
    query: string,
    filters?: {
      bodyPart?: string;
      difficulty?: string;
      conditions?: string[];
    },
    language: 'en' | 'hi' = 'en'
  ): Promise<SearchResult[]> {
    try {
      let filterString = '';
      
      if (filters) {
        const filterParts: string[] = [];
        
        if (filters.bodyPart) {
          filterParts.push(`bodyPart:"${filters.bodyPart}"`);
        }
        
        if (filters.difficulty) {
          filterParts.push(`difficulty:"${filters.difficulty}"`);
        }
        
        if (filters.conditions && filters.conditions.length > 0) {
          const conditionFilters = filters.conditions.map(c => `conditions:"${c}"`);
          filterParts.push(`(${conditionFilters.join(' OR ')})`);
        }
        
        filterString = filterParts.join(' AND ');
      }

      const searchParams: any = {
        query,
        hitsPerPage: 50,
        attributesToSearchOn: [
          `name.${language}`,
          'code',
          'conditions',
          'bodyPart',
          `location.${language}`,
        ],
        attributesToRetrieve: [
          'objectID',
          'code',
          `name.${language}`,
          `location.${language}`,
          'conditions',
          'bodyPart',
          'difficulty',
          'images',
        ],
        attributesToHighlight: [
          `name.${language}`,
          'conditions',
          'bodyPart',
        ],
      };

      if (filterString) {
        searchParams.filters = filterString;
      }

      const { hits } = await this.pointsIndex.search(query, searchParams);

      return hits.map((hit: any) => ({
        id: hit.objectID,
        title: hit[`name.${language}`] || hit.name?.en || hit.code,
        subtitle: this.formatSubtitle(hit, language),
        type: this.determineResultType(query, hit),
        relevanceScore: hit._rankingInfo?.words || 0,
      }));
    } catch (error) {
      console.error('Algolia search error:', error);
      throw error;
    }
  }

  // Get search suggestions for autocomplete
  async getSuggestions(
    query: string,
    language: 'en' | 'hi' = 'en'
  ): Promise<string[]> {
    try {
      if (query.length < 2) return [];

      const { hits } = await this.pointsIndex.search(query, {
        hitsPerPage: 10,
        attributesToRetrieve: [`name.${language}`, 'conditions', 'bodyPart'],
        attributesToHighlight: [],
      });

      const suggestions = new Set<string>();

      hits.forEach((hit: any) => {
        // Add point names
        const pointName = hit[`name.${language}`] || hit.name?.en;
        if (pointName && pointName.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(pointName);
        }

        // Add conditions
        if (hit.conditions) {
          hit.conditions.forEach((condition: string) => {
            if (condition.toLowerCase().includes(query.toLowerCase())) {
              suggestions.add(condition);
            }
          });
        }

        // Add body parts
        if (hit.bodyPart && hit.bodyPart.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(hit.bodyPart);
        }
      });

      return Array.from(suggestions).slice(0, 8);
    } catch (error) {
      console.error('Algolia suggestions error:', error);
      return [];
    }
  }

  // Search by specific categories
  async searchByCategory(
    category: 'symptoms' | 'bodyParts' | 'pointCodes',
    query: string,
    language: 'en' | 'hi' = 'en'
  ): Promise<SearchResult[]> {
    try {
      let searchParams: any = {
        query,
        hitsPerPage: 20,
      };

      switch (category) {
        case 'symptoms':
          searchParams.attributesToSearchOn = ['conditions'];
          searchParams.filters = `conditions:"${query}"`;
          break;
        case 'bodyParts':
          searchParams.attributesToSearchOn = ['bodyPart'];
          searchParams.filters = `bodyPart:"${query}"`;
          break;
        case 'pointCodes':
          searchParams.attributesToSearchOn = ['code'];
          break;
      }

      const { hits } = await this.pointsIndex.search(query, searchParams);

      return hits.map((hit: any) => ({
        id: hit.objectID,
        title: hit[`name.${language}`] || hit.name?.en || hit.code,
        subtitle: this.formatSubtitle(hit, language),
        type: 'point',
        relevanceScore: hit._rankingInfo?.words || 0,
      }));
    } catch (error) {
      console.error('Algolia category search error:', error);
      throw error;
    }
  }

  // Helper method to determine result type
  private determineResultType(query: string, hit: any): 'point' | 'condition' | 'bodypart' {
    const lowerQuery = query.toLowerCase();
    
    if (hit.conditions?.some((c: string) => c.toLowerCase().includes(lowerQuery))) {
      return 'condition';
    }
    
    if (hit.bodyPart?.toLowerCase().includes(lowerQuery)) {
      return 'bodypart';
    }
    
    return 'point';
  }

  // Helper method to format subtitle
  private formatSubtitle(hit: any, language: 'en' | 'hi'): string {
    const parts: string[] = [];
    
    if (hit.code) {
      parts.push(hit.code);
    }
    
    if (hit.bodyPart) {
      parts.push(hit.bodyPart);
    }
    
    if (hit.conditions && hit.conditions.length > 0) {
      parts.push(hit.conditions.slice(0, 2).join(', '));
    }
    
    return parts.join(' • ');
  }

  // Sync local data to Algolia (for development/admin use)
  async syncPointsToAlgolia(points: AcupressurePoint[]): Promise<void> {
    try {
      const records = points.map(point => ({
        objectID: point.id,
        ...point,
      }));

      await this.pointsIndex.saveObjects(records);
      console.log(`Synced ${records.length} points to Algolia`);
    } catch (error) {
      console.error('Error syncing to Algolia:', error);
      throw error;
    }
  }
}

export const algoliaService = new AlgoliaService();