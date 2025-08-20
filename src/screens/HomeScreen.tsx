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

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card, Button, PointCard } from '@components';
import { RootStackParamList, AcupressurePoint } from '@types';
import { firestoreService } from '@services';
import { samplePoints } from '@data/samplePoints';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();
  
  const [popularPoints, setPopularPoints] = useState<AcupressurePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPopularPoints();
  }, []);

  const loadPopularPoints = async () => {
    try {
      // For now, use sample data. In production, fetch from Firestore
      setPopularPoints(samplePoints.slice(0, 5));
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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  content: {
    padding: Spacing.md,
  },
  welcomeSection: {
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  welcomeTitle: {
    ...Typography.h2,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  welcomeSubtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  quickStartButton: {
    marginBottom: Spacing.xl,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    ...Typography.link,
    color: Colors.primary[600],
    marginRight: Spacing.xs,
  },
  quickActionsList: {
    gap: Spacing.sm,
  },
  quickActionCard: {
    marginBottom: Spacing.sm,
  },
  quickActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
    marginBottom: Spacing.xs,
  },
  quickActionSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
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