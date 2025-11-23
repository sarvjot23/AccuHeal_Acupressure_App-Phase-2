import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { Card, Button, PointCard, TopNavigationBar } from '@components';
import { RootStackParamList, AcupressurePoint } from '@types';
import { firestoreService } from '@services';
import { samplePoints } from '@data/samplePoints';
import { useSubscription } from '@contexts/SubscriptionContext';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();
  const { isPremium } = useSubscription();
  
  const [popularPoints, setPopularPoints] = useState<AcupressurePoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadPopularPoints();
  }, [isPremium]);

  const loadPopularPoints = async () => {
    try {
      // Filter points based on subscription status
      const availablePoints = isPremium 
        ? samplePoints 
        : samplePoints.filter(point => point.isFree === true);
      
      setPopularPoints(availablePoints.slice(0, 5));
    } catch (error) {
      console.error('Error loading popular points:', error);
      Alert.alert('Error', 'Failed to load popular points');
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    {
      id: 'headache',
      title: 'Headache Relief',
      subtitle: 'Quick acupressure for headaches',
      icon: 'body-outline' as keyof typeof Ionicons.glyphMap,
      action: () => navigation.navigate('Search', { initialQuery: 'headache' }),
    },
    {
      id: 'stress',
      title: 'Stress Relief',
      subtitle: 'Calm your mind and body',
      icon: 'heart-outline' as keyof typeof Ionicons.glyphMap,
      action: () => navigation.navigate('Search', { initialQuery: 'stress' }),
    },
    {
      id: 'sleep',
      title: 'Better Sleep',
      subtitle: 'Points for restful sleep',
      icon: 'moon-outline' as keyof typeof Ionicons.glyphMap,
      action: () => navigation.navigate('Search', { initialQuery: 'insomnia' }),
    },
  ];

  const renderQuickAction = ({ item }: { item: typeof quickActions[0] }) => (
    <Card variant="elevated" onPress={item.action} style={styles.quickActionCard}>
      <View style={styles.quickActionContent}>
        <View style={styles.quickActionIcon}>
          <Ionicons name={item.icon} size={24} color={Colors.primary[600]} />
        </View>
        <View style={styles.quickActionText}>
          <Text style={styles.quickActionTitle}>{item.title}</Text>
          <Text style={styles.quickActionSubtitle}>{item.subtitle}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
      </View>
    </Card>
  );

  const renderPopularPoint = ({ item }: { item: AcupressurePoint }) => (
    <PointCard
      point={item}
      onPress={() => navigation.navigate('PointDetail', { pointId: item.id })}
    />
  );

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };
  
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigation.navigate('Search', { initialQuery: searchQuery });
    }
  };

  return (
    <View style={styles.container}>
      <TopNavigationBar 
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
      />
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>{t('home.welcome')}</Text>
          <Text style={styles.welcomeSubtitle}>{t('home.subtitle')}</Text>
        </View>

        {/* Quick Start Button */}
        <Button
          title={t('home.quickStart')}
          onPress={() => navigation.navigate('Questionnaire')}
          size="lg"
          fullWidth
          style={styles.quickStartButton}
        />

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('home.findReliefFor')}</Text>
          <FlatList
            data={quickActions}
            renderItem={renderQuickAction}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            style={styles.quickActionsList}
          />
        </View>

        {/* Popular Points */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{t('home.popularPoints')}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search', {})}
              style={styles.seeAllButton}
            >
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="chevron-forward" size={16} color={Colors.primary[600]} />
            </TouchableOpacity>
          </View>
          
          {loading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>{t('common.loading')}</Text>
            </View>
          ) : (
            <FlatList
              data={popularPoints}
              renderItem={renderPopularPoint}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafb',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  content: {
    padding: Spacing.lg,
  },
  welcomeSection: {
    marginBottom: Spacing.xl,
    paddingTop: Spacing.md,
  },
  welcomeTitle: {
    ...Typography.h1,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
    fontSize: 28,
    fontWeight: '700',
  },
  welcomeSubtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    fontSize: 15,
    lineHeight: 22,
  },
  quickStartButton: {
    marginBottom: Spacing.xl,
    borderRadius: BorderRadius.full,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.h3,
    color: Colors.text.primary,
    fontWeight: '700',
    fontSize: 20,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
  },
  seeAllText: {
    ...Typography.body2,
    color: Colors.primary[600],
    marginRight: 4,
    fontWeight: '600',
    fontSize: 14,
  },
  quickActionsList: {
    gap: Spacing.md,
  },
  quickActionCard: {
    marginBottom: Spacing.sm,
    backgroundColor: '#ffffff',
    borderRadius: BorderRadius.xl,
    ...Shadows.sm,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  quickActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
  },
  quickActionIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  quickActionText: {
    flex: 1,
  },
  quickActionTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 16,
  },
  quickActionSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
    fontSize: 13,
  },
  loadingContainer: {
    padding: Spacing.xl,
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
});

export default HomeScreen;