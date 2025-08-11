import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Typography, Spacing, BorderRadius } from '@constants';
import { Card, Button } from '@components';
import { RootStackParamList, QuestionnaireStep, QuestionnaireResponse, Recommendation } from '@types';
import { samplePoints } from '@data/samplePoints';

type QuestionnaireScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const QuestionnaireScreen: React.FC = () => {
  const navigation = useNavigation<QuestionnaireScreenNavigationProp>();
  const { t } = useTranslation();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<QuestionnaireResponse[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null);

  const questionnaireSteps: QuestionnaireStep[] = [
    {
      id: 'discomfort_type',
      question: {
        en: 'What type of discomfort are you experiencing?',
        hi: 'आप किस प्रकार की परेशानी महसूस कर रहे हैं?',
      },
      type: 'multiple',
      required: true,
      options: [
        { id: 'headache', label: { en: 'Headache', hi: 'सिरदर्द' }, value: 'headache' },
        { id: 'stress', label: { en: 'Stress/Anxiety', hi: 'तनाव/चिंता' }, value: 'stress' },
        { id: 'pain', label: { en: 'Body Pain', hi: 'शरीर दर्द' }, value: 'pain' },
        { id: 'sleep', label: { en: 'Sleep Issues', hi: 'नींद की समस्या' }, value: 'insomnia' },
        { id: 'digestive', label: { en: 'Digestive Issues', hi: 'पाचन संबंधी समस्या' }, value: 'digestive' },
      ],
    },
    {
      id: 'location',
      question: {
        en: 'Where is the discomfort located?',
        hi: 'परेशानी कहाँ स्थित है?',
      },
      type: 'single',
      required: true,
      options: [
        { id: 'head', label: { en: 'Head/Face', hi: 'सिर/चेहरा' }, value: 'head' },
        { id: 'neck', label: { en: 'Neck/Shoulders', hi: 'गर्दन/कंधे' }, value: 'neck' },
        { id: 'back', label: { en: 'Back', hi: 'पीठ' }, value: 'back' },
        { id: 'arms', label: { en: 'Arms/Hands', hi: 'बाहें/हाथ' }, value: 'hand' },
        { id: 'legs', label: { en: 'Legs/Feet', hi: 'पैर/पंजे' }, value: 'foot' },
        { id: 'general', label: { en: 'General/All over', hi: 'सामान्य/सभी जगह' }, value: 'general' },
      ],
    },
    {
      id: 'severity',
      question: {
        en: 'How severe is your discomfort?',
        hi: 'आपकी परेशानी कितनी गंभीर है?',
      },
      type: 'single',
      required: true,
      options: [
        { id: 'mild', label: { en: 'Mild (1-3)', hi: 'हल्की (1-3)' }, value: 'mild' },
        { id: 'moderate', label: { en: 'Moderate (4-6)', hi: 'मध्यम (4-6)' }, value: 'moderate' },
        { id: 'severe', label: { en: 'Severe (7-10)', hi: 'गंभीर (7-10)' }, value: 'severe' },
      ],
    },
    {
      id: 'duration',
      question: {
        en: 'How long have you been experiencing this?',
        hi: 'आप यह कितने समय से महसूस कर रहे हैं?',
      },
      type: 'single',
      required: false,
      options: [
        { id: 'minutes', label: { en: 'Minutes', hi: 'मिनट' }, value: 'minutes' },
        { id: 'hours', label: { en: 'Hours', hi: 'घंटे' }, value: 'hours' },
        { id: 'days', label: { en: 'Days', hi: 'दिन' }, value: 'days' },
        { id: 'weeks', label: { en: 'Weeks', hi: 'सप्ताह' }, value: 'weeks' },
      ],
    },
  ];

  const getCurrentStep = () => questionnaireSteps[currentStep];
  const isLastStep = () => currentStep >= questionnaireSteps.length - 1;

  const shouldSkipLocationStep = () => {
    // Skip location step if user selected headache (location is obvious)
    const discomfortResponse = responses.find(r => r.stepId === 'discomfort_type');
    if (discomfortResponse && Array.isArray(discomfortResponse.value)) {
      return discomfortResponse.value.includes('headache') && discomfortResponse.value.length === 1;
    }
    return false;
  };

  const handleOptionSelect = (optionValue: string) => {
    const currentStepData = getCurrentStep();
    const existingResponseIndex = responses.findIndex(r => r.stepId === currentStepData.id);
    
    if (currentStepData.type === 'single') {
      const newResponse: QuestionnaireResponse = {
        stepId: currentStepData.id,
        value: optionValue,
      };
      
      if (existingResponseIndex >= 0) {
        const newResponses = [...responses];
        newResponses[existingResponseIndex] = newResponse;
        setResponses(newResponses);
      } else {
        setResponses([...responses, newResponse]);
      }
    } else if (currentStepData.type === 'multiple') {
      const existingResponse = responses[existingResponseIndex];
      const currentValues = Array.isArray(existingResponse?.value) ? existingResponse.value : [];
      
      let newValues: string[];
      if (currentValues.includes(optionValue)) {
        newValues = currentValues.filter(v => v !== optionValue);
      } else {
        newValues = [...currentValues, optionValue];
      }
      
      const newResponse: QuestionnaireResponse = {
        stepId: currentStepData.id,
        value: newValues,
      };
      
      if (existingResponseIndex >= 0) {
        const newResponses = [...responses];
        newResponses[existingResponseIndex] = newResponse;
        setResponses(newResponses);
      } else {
        setResponses([...responses, newResponse]);
      }
    }
  };

  const isOptionSelected = (optionValue: string) => {
    const currentStepData = getCurrentStep();
    const response = responses.find(r => r.stepId === currentStepData.id);
    
    if (!response) return false;
    
    if (Array.isArray(response.value)) {
      return response.value.includes(optionValue);
    }
    
    return response.value === optionValue;
  };

  const canProceed = () => {
    const currentStepData = getCurrentStep();
    if (!currentStepData.required) return true;
    
    const response = responses.find(r => r.stepId === currentStepData.id);
    if (!response) return false;
    
    if (Array.isArray(response.value)) {
      return response.value.length > 0;
    }
    
    return !!response.value;
  };

  const generateRecommendations = (): Recommendation => {
    const discomfortTypes = responses.find(r => r.stepId === 'discomfort_type')?.value as string[] || [];
    const location = responses.find(r => r.stepId === 'location')?.value as string || '';
    const severity = responses.find(r => r.stepId === 'severity')?.value as string || '';
    
    // Simple recommendation logic based on responses
    const recommendedPoints: string[] = [];
    
    // Add points based on discomfort types
    if (discomfortTypes.includes('headache')) {
      recommendedPoints.push('li4', 'gv20', 'yin_tang');
    }
    if (discomfortTypes.includes('stress')) {
      recommendedPoints.push('yin_tang', 'lv3', 'sp6');
    }
    if (discomfortTypes.includes('pain')) {
      recommendedPoints.push('li4', 'gb21');
    }
    if (discomfortTypes.includes('insomnia')) {
      recommendedPoints.push('sp6', 'yin_tang');
    }
    
    // Remove duplicates and ensure we have valid points
    const uniquePoints = [...new Set(recommendedPoints)];
    let filteredPoints = samplePoints
      .filter(point => uniquePoints.includes(point.id))
      .map(point => point.id);
    
    // If no specific matches found, provide general wellness points
    if (filteredPoints.length === 0) {
      filteredPoints = ['li4', 'yin_tang', 'sp6'];
    }
    
    // Determine session details based on severity and number of conditions
    const issueCount = discomfortTypes.length;
    const sessionType = (severity === 'severe' || issueCount > 2) ? 'full' : 'quick';
    const duration = severity === 'severe' ? 20 : 
                    severity === 'moderate' ? 15 : 
                    issueCount > 1 ? 12 : 8;
    
    const pointCount = sessionType === 'full' ? Math.min(5, filteredPoints.length) : Math.min(3, filteredPoints.length);
    
    // Create personalized instructions
    const conditionText = discomfortTypes.length > 1 
      ? `Multiple conditions (${discomfortTypes.join(', ')})` 
      : discomfortTypes[0] || 'general wellness';
    
    return {
      points: filteredPoints.slice(0, pointCount),
      sessionType,
      duration,
      instructions: {
        en: `${conditionText} relief session with ${pointCount} targeted acupressure points (${duration} min)`,
        hi: `${pointCount} लक्षित एक्यूप्रेशर बिंदुओं के साथ ${duration} मिनट का राहत सत्र`,
      },
    };
  };

  const handleNext = () => {
    if (isLastStep()) {
      const recs = generateRecommendations();
      setRecommendations(recs);
    } else {
      let nextStep = currentStep + 1;
      
      // Skip location step if user selected only headache
      if (nextStep === 1 && shouldSkipLocationStep()) {
        // Auto-set head location for headache and skip to next step
        const headLocationResponse: QuestionnaireResponse = {
          stepId: 'location',
          value: 'head',
        };
        setResponses(prev => [...prev, headLocationResponse]);
        nextStep = 2; // Skip to severity step
      }
      
      setCurrentStep(nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      let prevStep = currentStep - 1;
      
      // Skip location step when going back if headache was selected
      if (currentStep === 2 && shouldSkipLocationStep()) {
        // Remove the auto-set head location response
        setResponses(prev => prev.filter(r => r.stepId !== 'location'));
        prevStep = 0; // Go back to discomfort type step
      }
      
      setCurrentStep(prevStep);
    }
  };

  const handleStartSession = (sessionType: 'quick' | 'full') => {
    if (!recommendations) return;
    
    const pointCount = sessionType === 'quick' ? Math.min(3, recommendations.points.length) : recommendations.points.length;
    const duration = sessionType === 'quick' ? Math.ceil(recommendations.duration * 0.6) : recommendations.duration;
    
    const discomfortTypes = responses.find(r => r.stepId === 'discomfort_type')?.value as string[] || [];
    const conditionText = discomfortTypes.length > 1 
      ? discomfortTypes.slice(0, 2).join(' & ') + (discomfortTypes.length > 2 ? ' and others' : '')
      : discomfortTypes[0] || 'general wellness';
    
    Alert.alert(
      `${sessionType === 'quick' ? 'Quick Relief' : 'Complete'} Session Ready`,
      `Perfect for ${conditionText}!\n\n• ${pointCount} targeted acupressure points\n• Estimated ${duration} minutes\n• Personalized for your needs`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Begin Session', 
          onPress: () => {
            // Navigate to first recommended point
            if (recommendations.points.length > 0) {
              navigation.navigate('PointDetail', { pointId: recommendations.points[0] });
            }
          }
        },
      ]
    );
  };

  if (recommendations) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.resultsHeader}>
            <Ionicons name="checkmark-circle" size={48} color={Colors.success} />
            <Text style={styles.resultsTitle}>Your Personalized Recommendations</Text>
            <Text style={styles.resultsSubtitle}>
              {recommendations.instructions.en}
            </Text>
          </View>

          {/* Recommended Points Preview */}
          <Card style={styles.pointsPreview}>
            <Text style={styles.pointsTitle}>Recommended Acupressure Points:</Text>
            <View style={styles.pointsList}>
              {recommendations.points.slice(0, 3).map((pointId, index) => {
                const point = samplePoints.find(p => p.id === pointId);
                return point ? (
                  <View key={pointId} style={styles.pointItem}>
                    <View style={styles.pointBadge}>
                      <Text style={styles.pointBadgeText}>{point.code}</Text>
                    </View>
                    <Text style={styles.pointName}>{point.name.en}</Text>
                  </View>
                ) : null;
              })}
              {recommendations.points.length > 3 && (
                <Text style={styles.morePoints}>+{recommendations.points.length - 3} more</Text>
              )}
            </View>
          </Card>

          <View style={styles.sessionOptions}>
            <Card onPress={() => handleStartSession('quick')} style={styles.sessionCard} variant="elevated">
              <View style={styles.sessionContent}>
                <View style={styles.sessionIcon}>
                  <Ionicons name="flash" size={24} color={Colors.primary[600]} />
                </View>
                <View style={styles.sessionText}>
                  <Text style={styles.sessionTitle}>Quick Relief</Text>
                  <Text style={styles.sessionSubtitle}>{Math.ceil(recommendations.duration * 0.6)} minutes • {Math.min(3, recommendations.points.length)} key points</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
              </View>
            </Card>

            <Card onPress={() => handleStartSession('full')} style={styles.sessionCard} variant="elevated">
              <View style={styles.sessionContent}>
                <View style={[styles.sessionIcon, { backgroundColor: Colors.secondary[100] }]}>
                  <Ionicons name="time" size={24} color={Colors.secondary[600]} />
                </View>
                <View style={styles.sessionText}>
                  <Text style={styles.sessionTitle}>Complete Session</Text>
                  <Text style={styles.sessionSubtitle}>{recommendations.duration} minutes • {recommendations.points.length} points</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
              </View>
            </Card>
          </View>

          <Button
            title="Start Over"
            variant="outline"
            onPress={() => {
              setCurrentStep(0);
              setResponses([]);
              setRecommendations(null);
            }}
            fullWidth
          />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentStep + 1) / questionnaireSteps.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {currentStep + 1} of {questionnaireSteps.length}
          </Text>
        </View>

        {/* Question */}
        <Card style={styles.questionCard}>
          <Text style={styles.questionText}>
            {getCurrentStep().question.en}
          </Text>
          {getCurrentStep().required && (
            <Text style={styles.requiredText}>* Required</Text>
          )}
        </Card>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {getCurrentStep().options?.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionCard,
                isOptionSelected(option.value) && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option.value)}
            >
              <View style={styles.optionContent}>
                <View style={[
                  styles.optionRadio,
                  isOptionSelected(option.value) && styles.selectedRadio,
                ]}>
                  {isOptionSelected(option.value) && (
                    <View style={styles.radioInner} />
                  )}
                </View>
                <Text style={[
                  styles.optionText,
                  isOptionSelected(option.value) && styles.selectedOptionText,
                ]}>
                  {option.label.en}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navigation}>
        <Button
          title={t('common.previous')}
          variant="outline"
          onPress={handlePrevious}
          disabled={currentStep === 0}
          style={styles.navButton}
        />
        <Button
          title={isLastStep() ? 'Get Recommendations' : t('common.next')}
          onPress={handleNext}
          disabled={!canProceed()}
          style={styles.navButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  content: {
    flex: 1,
    padding: Spacing.md,
  },
  progressContainer: {
    marginBottom: Spacing.xl,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.neutral[200],
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary[500],
    borderRadius: BorderRadius.sm,
  },
  progressText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  questionCard: {
    marginBottom: Spacing.lg,
  },
  questionText: {
    ...Typography.h3,
    color: Colors.text.primary,
    lineHeight: 32,
  },
  requiredText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacing.sm,
  },
  optionsContainer: {
    gap: Spacing.sm,
  },
  optionCard: {
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.border.light,
  },
  selectedOption: {
    borderColor: Colors.primary[500],
    backgroundColor: Colors.primary[50],
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionRadio: {
    width: 20,
    height: 20,
    borderRadius: BorderRadius.full,
    borderWidth: 2,
    borderColor: Colors.neutral[300],
    marginRight: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    borderColor: Colors.primary[500],
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary[500],
  },
  optionText: {
    ...Typography.body1,
    color: Colors.text.primary,
    flex: 1,
  },
  selectedOptionText: {
    color: Colors.primary[700],
    fontWeight: '500',
  },
  navigation: {
    flexDirection: 'row',
    padding: Spacing.md,
    gap: Spacing.md,
    backgroundColor: Colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
  },
  navButton: {
    flex: 1,
  },
  resultsHeader: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  resultsTitle: {
    ...Typography.h2,
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  resultsSubtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 280,
  },
  sessionOptions: {
    marginBottom: Spacing.xl,
    gap: Spacing.md,
  },
  sessionCard: {
    marginBottom: 0,
  },
  sessionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionIcon: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  sessionText: {
    flex: 1,
  },
  sessionTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  sessionSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  pointsPreview: {
    marginBottom: Spacing.lg,
  },
  pointsTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  pointsList: {
    gap: Spacing.sm,
  },
  pointItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  pointBadge: {
    backgroundColor: Colors.primary[500],
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    minWidth: 40,
    alignItems: 'center',
  },
  pointBadgeText: {
    ...Typography.caption,
    color: Colors.text.inverse,
    fontWeight: '600',
  },
  pointName: {
    ...Typography.body2,
    color: Colors.text.primary,
    flex: 1,
  },
  morePoints: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontStyle: 'italic',
    marginTop: Spacing.xs,
  },
});

export default QuestionnaireScreen;