import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { SearchInput, Card, PointCard } from '@components';
import { RootStackParamList, AcupressurePoint, SearchResult } from '@types';
import { algoliaService } from '@services';
import { samplePoints } from '@data/samplePoints';
import { useLanguage } from '@contexts/LanguageContext';

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

// Helper functions for search logic
const safeStringIncludes = (str: string | undefined, searchTerm: string): boolean => {
  return str ? str.toLowerCase().includes(searchTerm) : false;
};

const safeArrayIncludes = (arr: string[] | undefined, searchTerm: string): boolean => {
  return Array.isArray(arr) && arr.some(item => item && item.toLowerCase().includes(searchTerm));
};

const searchPointsByText = (point: AcupressurePoint, searchTerm: string, language: string): boolean => {
  return (
    safeStringIncludes(point.name?.[language], searchTerm) ||
    safeStringIncludes(point.code, searchTerm) ||
    safeArrayIncludes(point.symptoms, searchTerm) ||
    safeArrayIncludes(point.conditions, searchTerm) ||
    searchInBodyPart(point.bodyPart, searchTerm) ||
    safeStringIncludes(point.location?.[language], searchTerm) ||
    searchInIndications(point.indications, searchTerm, language) ||
    searchInChineseNames(point.chineseName, searchTerm)
  );
};

const searchInBodyPart = (bodyPart: string | string[] | undefined, searchTerm: string): boolean => {
  if (!bodyPart) return false;
  return Array.isArray(bodyPart) 
    ? bodyPart.some(bp => bp && bp.toLowerCase().includes(searchTerm))
    : bodyPart.toLowerCase().includes(searchTerm);
};

const searchInIndications = (indications: any[] | undefined, searchTerm: string, language: string): boolean => {
  return Array.isArray(indications) && indications.some(indication => 
    indication && indication[language] && indication[language].toLowerCase().includes(searchTerm)
  );
};

const searchInChineseNames = (chineseName: any, searchTerm: string): boolean => {
  return chineseName && (
    (chineseName.traditional && chineseName.traditional.includes(searchTerm)) ||
    (chineseName.pinyin && chineseName.pinyin.toLowerCase().includes(searchTerm))
  );
};

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const route = useRoute<SearchScreenRouteProp>();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  const [searchQuery, setSearchQuery] = useState(route.params?.initialQuery || '');
  const [searchResults, setSearchResults] = useState<AcupressurePoint[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Separate effect for search query changes
  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else if (!activeFilter) {
      setSearchResults([]);
    }
  }, [searchQuery, currentLanguage]);

  // Separate effect for filter changes
  useEffect(() => {
    if (activeFilter) {
      handleSearch(searchQuery);
    } else if (!searchQuery) {
      setSearchResults([]);
    }
  }, [activeFilter, currentLanguage]);

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim() && !activeFilter) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      console.log('🔍 Starting search with query:', query, 'filter:', activeFilter);
      
      // For now, use local search. In production, use Algolia
      let filteredPoints = samplePoints.filter(point => {
        try {
          // Safety check for required fields
          if (!point || !point.name || !point.location) {
            console.warn('⚠️ Skipping invalid point:', point?.id || 'unknown');
            return false;
          }
          
          // If no search query, don't filter by text
          const matchesSearch = !query.trim() || searchPointsByText(point, query.toLowerCase(), currentLanguage);
          
          return matchesSearch;
        } catch (pointError) {
          console.error('❌ Error processing point:', point?.id, pointError);
          return false;
        }
      });

      // Apply active filter with safety checks
      if (activeFilter) {
        filteredPoints = filteredPoints.filter(point => {
          try {
            switch (activeFilter) {
              case 'beginner':
                return point.difficulty && point.difficulty.toLowerCase() === 'beginner';
              case 'head':
                return point.bodyPart && (
                  Array.isArray(point.bodyPart) 
                    ? point.bodyPart.some(bp => bp && bp.toLowerCase().includes('head'))
                    : point.bodyPart.toLowerCase().includes('head')
                );
              case 'hand':
                return point.bodyPart && (
                  Array.isArray(point.bodyPart)
                    ? point.bodyPart.some(bp => bp && bp.toLowerCase().includes('hand'))
                    : point.bodyPart.toLowerCase().includes('hand')
                );
              case 'foot':
                return point.bodyPart && (
                  Array.isArray(point.bodyPart)
                    ? point.bodyPart.some(bp => bp && bp.toLowerCase().includes('foot'))
                    : point.bodyPart.toLowerCase().includes('foot')
                );
              default:
                return true;
            }
          } catch (filterError) {
            console.error('❌ Error applying filter:', activeFilter, 'to point:', point?.id, filterError);
            return false;
          }
        });
      }
      
      console.log('✅ Search completed. Found', filteredPoints.length, 'points');
      
      setSearchResults(filteredPoints);
    } catch (error) {
      console.error('💥 Search error:', error);
      console.error('Query:', query, 'Filter:', activeFilter, 'Language:', currentLanguage);
      
      // Provide helpful error message to user
      Alert.alert(
        'Search Error', 
        'There was an issue searching points. Please try a different search term.',
        [{ text: 'OK', onPress: () => setSearchResults([]) }]
      );
    } finally {
      setLoading(false);
    }
  }, [currentLanguage, activeFilter]);

  const handleSuggestionPress = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSuggestions([]);
  };

  const filters = [
    { id: 'beginner', label: 'Beginner', type: 'difficulty' },
    { id: 'head', label: 'Head', type: 'bodyPart' },
    { id: 'hand', label: 'Hand', type: 'bodyPart' },
    { id: 'foot', label: 'Foot', type: 'bodyPart' },
  ];

  const renderFilter = ({ item }: { item: typeof filters[0] }) => (
    <TouchableOpacity
      style={[
        styles.filterChip,
        activeFilter === item.id && styles.activeFilterChip,
      ]}
      onPress={() => {
        const newFilter = activeFilter === item.id ? null : item.id;
        setActiveFilter(newFilter);
      }}
    >
      <Text
        style={[
          styles.filterText,
          activeFilter === item.id && styles.activeFilterText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderSuggestion = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionPress(item)}
    >
      <Ionicons name="search" size={16} color={Colors.neutral[400]} />
      <Text style={styles.suggestionText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderSearchResult = ({ item }: { item: AcupressurePoint }) => (
    <View style={styles.resultItem}>
      <PointCard
        point={item}
        onPress={() => navigation.navigate('PointDetail', { pointId: item.id })}
      />
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={64} color={Colors.neutral[300]} />
      <Text style={styles.emptyStateTitle}>
        {searchQuery ? t('search.noResults') : 'Start searching'}
      </Text>
      <Text style={styles.emptyStateSubtitle}>
        {searchQuery 
          ? 'Try different keywords or browse categories'
          : 'Search for symptoms, body parts, or point codes'
        }
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <SearchInput
          placeholder={t('search.placeholder')}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={clearSearch}
          style={styles.searchInput}
        />
        
        {/* Filters */}
        <FlatList
          data={filters}
          renderItem={renderFilter}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersList}
          contentContainerStyle={styles.filtersContent}
        />
      </View>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <Card style={styles.suggestionsCard}>
          <FlatList
            data={suggestions}
            renderItem={renderSuggestion}
            keyExtractor={(item, index) => `${item}-${index}`}
            scrollEnabled={false}
          />
        </Card>
      )}

      {/* Search Results */}
      <FlatList
        data={searchResults}
        renderItem={renderSearchResult}
        keyExtractor={item => item.id}
        style={styles.resultsList}
        contentContainerStyle={styles.resultsContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
        refreshing={loading}
        onRefresh={() => handleSearch(searchQuery)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  searchHeader: {
    backgroundColor: Colors.background.primary,
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  searchInput: {
    marginBottom: Spacing.md,
  },
  filtersList: {
    marginBottom: Spacing.sm,
  },
  filtersContent: {
    paddingRight: Spacing.md,
  },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.neutral[100],
    marginRight: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  activeFilterChip: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  filterText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
  activeFilterText: {
    color: Colors.text.inverse,
  },
  suggestionsCard: {
    margin: Spacing.md,
    marginBottom: 0,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  suggestionText: {
    ...Typography.body2,
    color: Colors.text.primary,
    marginLeft: Spacing.sm,
  },
  resultsList: {
    flex: 1,
  },
  resultsContent: {
    padding: Spacing.md,
    paddingTop: Spacing.md,
  },
  resultItem: {
    marginBottom: Spacing.md,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing['4xl'],
  },
  emptyStateTitle: {
    ...Typography.h4,
    color: Colors.text.secondary,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  emptyStateSubtitle: {
    ...Typography.body2,
    color: Colors.text.tertiary,
    textAlign: 'center',
    maxWidth: 280,
  },
});

export default SearchScreen;