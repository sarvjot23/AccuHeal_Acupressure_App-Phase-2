import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card, Button } from '@components';
import { RootStackParamList } from '@types';

type GuideScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const GuideScreen: React.FC = () => {
  const navigation = useNavigation<GuideScreenNavigationProp>();
  const { t } = useTranslation();

  const guideOptions = [
    {
      id: 'questionnaire',
      title: t('questionnaire.title'),
      subtitle: t('questionnaire.subtitle'),
      icon: 'help-circle-outline' as keyof typeof Ionicons.glyphMap,
      color: Colors.primary[500],
      onPress: () => navigation.navigate('Questionnaire'),
    },
    {
      id: 'body-parts',
      title: 'Browse by Body Parts',
      subtitle: 'Explore points organized by body regions',
      icon: 'body-outline' as keyof typeof Ionicons.glyphMap,
      color: Colors.secondary[500],
      onPress: () => navigation.navigate('Search', { initialQuery: '' }),
    },
    {
      id: 'common-conditions',
      title: 'Common Conditions',
      subtitle: 'Quick relief for everyday discomforts',
      icon: 'medical-outline' as keyof typeof Ionicons.glyphMap,
      color: Colors.primary[400],
      onPress: () => navigation.navigate('Search', { initialQuery: '' }),
    },
    {
      id: 'beginner-guide',
      title: 'Beginner\'s Guide',
      subtitle: 'Learn the basics of acupressure',
      icon: 'school-outline' as keyof typeof Ionicons.glyphMap,
      color: Colors.secondary[400],
      onPress: () => {},
    },
  ];

  const commonConditions = [
    { name: 'Headache', query: 'headache' },
    { name: 'Stress', query: 'stress' },
    { name: 'Back Pain', query: 'back pain' },
    { name: 'Insomnia', query: 'insomnia' },
    { name: 'Anxiety', query: 'anxiety' },
    { name: 'Neck Tension', query: 'neck pain' },
  ];

  const bodyParts = [
    { name: 'Head', query: 'head' },
    { name: 'Hand', query: 'hand' },
    { name: 'Foot', query: 'foot' },
    { name: 'Shoulder', query: 'shoulder' },
    { name: 'Leg', query: 'leg' },
    { name: 'Back', query: 'back' },
  ];

  const renderGuideOption = (option: typeof guideOptions[0]) => (
    <Card key={option.id} onPress={option.onPress} style={styles.guideCard}>
      <View style={styles.guideCardContent}>
        <View style={[styles.guideIcon, { backgroundColor: `${option.color}20` }]}>
          <Ionicons name={option.icon} size={32} color={option.color} />
        </View>
        <View style={styles.guideText}>
          <Text style={styles.guideTitle}>{option.title}</Text>
          <Text style={styles.guideSubtitle}>{option.subtitle}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={Colors.neutral[400]} />
      </View>
    </Card>
  );

  const renderConditionChip = (condition: typeof commonConditions[0]) => (
    <TouchableOpacity
      key={condition.name}
      style={styles.chip}
      onPress={() => navigation.navigate('Search', { initialQuery: condition.query })}
    >
      <Text style={styles.chipText}>{condition.name}</Text>
    </TouchableOpacity>
  );

  const renderBodyPartChip = (bodyPart: typeof bodyParts[0]) => (
    <TouchableOpacity
      key={bodyPart.name}
      style={styles.chip}
      onPress={() => navigation.navigate('Search', { initialQuery: bodyPart.query })}
    >
      <Text style={styles.chipText}>{bodyPart.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>How can we help you today?</Text>
          <Text style={styles.headerSubtitle}>
            Choose how you'd like to explore acupressure techniques
          </Text>
        </View>

        {/* Main Guide Options */}
        <View style={styles.section}>
          {guideOptions.map(renderGuideOption)}
        </View>

        {/* Quick Access: Common Conditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Conditions</Text>
          <Text style={styles.sectionSubtitle}>
            Quick access to relief for everyday discomforts
          </Text>
          <View style={styles.chipContainer}>
            {commonConditions.map(renderConditionChip)}
          </View>
        </View>

        {/* Quick Access: Body Parts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse by Body Part</Text>
          <Text style={styles.sectionSubtitle}>
            Find points specific to different areas of your body
          </Text>
          <View style={styles.chipContainer}>
            {bodyParts.map(renderBodyPartChip)}
          </View>
        </View>

        {/* Tips Section */}
        <Card style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Ionicons name="bulb-outline" size={24} color={Colors.secondary[600]} />
            <Text style={styles.tipsTitle}>Acupressure Tips</Text>
          </View>
          <View style={styles.tipsList}>
            <Text style={styles.tipItem}>• Apply steady, firm pressure for 1-3 minutes</Text>
            <Text style={styles.tipItem}>• Breathe deeply while applying pressure</Text>
            <Text style={styles.tipItem}>• Start gently and gradually increase pressure</Text>
            <Text style={styles.tipItem}>• Stop if you feel sharp pain or discomfort</Text>
            <Text style={styles.tipItem}>• Practice regularly for best results</Text>
          </View>
        </Card>
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
  header: {
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  headerTitle: {
    ...Typography.h2,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  headerSubtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 280,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  sectionSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginBottom: Spacing.md,
  },
  guideCard: {
    marginBottom: Spacing.md,
  },
  guideCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guideIcon: {
    width: 60,
    height: 60,
    borderRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  guideText: {
    flex: 1,
  },
  guideTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  guideSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.primary[100],
    borderRadius: BorderRadius.full,
    marginBottom: Spacing.sm,
  },
  chipText: {
    ...Typography.caption,
    color: Colors.primary[700],
    fontWeight: '500',
  },
  tipsCard: {
    backgroundColor: Colors.secondary[50],
    borderWidth: 1,
    borderColor: Colors.secondary[200],
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  tipsTitle: {
    ...Typography.h5,
    color: Colors.secondary[800],
    marginLeft: Spacing.sm,
  },
  tipsList: {
    gap: Spacing.sm,
  },
  tipItem: {
    ...Typography.body2,
    color: Colors.secondary[700],
    lineHeight: 20,
  },
});

export default GuideScreen;