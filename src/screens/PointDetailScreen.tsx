import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  Modal,
  Vibration,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { Card, Button } from '@components';
import { RootStackParamList, AcupressurePoint } from '@types';
import { samplePoints } from '@data/samplePoints';
import { useLanguage } from '@contexts/LanguageContext';

type PointDetailScreenRouteProp = RouteProp<RootStackParamList, 'PointDetail'>;

const { width: screenWidth } = Dimensions.get('window');

const PointDetailScreen: React.FC = () => {
  const route = useRoute<PointDetailScreenRouteProp>();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  const [point, setPoint] = useState<AcupressurePoint | null>(null);
  const [activeTab, setActiveTab] = useState<'location' | 'method' | 'conditions'>('location');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(180); // in seconds
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadPoint();
  }, [route.params.pointId]);

  const loadPoint = async () => {
    try {
      // For now, use sample data. In production, fetch from Firestore
      const foundPoint = samplePoints.find(p => p.id === route.params.pointId);
      if (foundPoint) {
        setPoint(foundPoint);
      } else {
        Alert.alert('Error', 'Point not found');
      }
    } catch (error) {
      console.error('Error loading point:', error);
      Alert.alert('Error', 'Failed to load point details');
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In production, save to user preferences
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return Colors.success;
      case 'intermediate':
        return Colors.warning;
      case 'advanced':
        return Colors.error;
      default:
        return Colors.neutral[500];
    }
  };

  const getPressureIntensity = (pressure: string) => {
    switch (pressure) {
      case 'light':
        return '●○○';
      case 'medium':
        return '●●○';
      case 'firm':
        return '●●●';
      default:
        return '●○○';
    }
  };

  const parseDurationFromMethod = (methodText: string): { min: number; max: number } => {
    // Parse text like "1-3 minutes", "2-3 minutes", "3 minutes"
    const rangeMatch = methodText.match(/(\d+)-(\d+)\s*minutes?/i);
    const singleMatch = methodText.match(/(\d+)\s*minutes?/i);
    
    if (rangeMatch) {
      return {
        min: parseInt(rangeMatch[1]) * 60,
        max: parseInt(rangeMatch[2]) * 60
      };
    } else if (singleMatch) {
      const minutes = parseInt(singleMatch[1]);
      return {
        min: minutes * 60,
        max: minutes * 60
      };
    }
    
    // Default fallback
    return { min: 120, max: 180 };
  };

  const startTimer = () => {
    const duration = parseDurationFromMethod(point?.method[currentLanguage] || '');
    const defaultDuration = duration.max; // Default to higher end
    
    setTimerDuration(defaultDuration);
    setTimeRemaining(defaultDuration);
    setShowTimer(true);
  };

  const startSession = () => {
    setIsTimerRunning(true);
    setIsPaused(false);
    
    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Timer finished
          setIsTimerRunning(false);
          setIsPaused(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          
          // Vibrate to signal completion
          Vibration.vibrate([500, 200, 500]);
          
          Alert.alert(
            'Session Complete!',
            'Great job! Your acupressure session is finished.',
            [{ text: 'OK', onPress: () => setShowTimer(false) }]
          );
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseSession = () => {
    setIsPaused(true);
    setIsTimerRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeSession = () => {
    setIsPaused(false);
    startSession();
  };

  const resetSession = () => {
    setIsTimerRunning(false);
    setIsPaused(false);
    setTimeRemaining(timerDuration);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const adjustTimer = (seconds: number) => {
    const newDuration = Math.max(30, timerDuration + seconds); // Minimum 30 seconds
    setTimerDuration(newDuration);
    if (!isTimerRunning && !isPaused) {
      setTimeRemaining(newDuration);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!point) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>{t('common.loading')}</Text>
      </View>
    );
  }

  const tabs = [
    { id: 'location' as const, title: t('pointDetail.location'), icon: 'location-outline' },
    { id: 'method' as const, title: t('pointDetail.method'), icon: 'hand-left-outline' },
    { id: 'conditions' as const, title: t('pointDetail.conditions'), icon: 'medical-outline' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      {point.images.length > 0 && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: point.images[0] }}
            style={styles.headerImage}
            contentFit="cover"
          />
          <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorite ? Colors.error : Colors.text.inverse}
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>
        {/* Point Header */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.pointName}>{point.name[currentLanguage]}</Text>
            <View style={styles.codeContainer}>
              <Text style={styles.pointCode}>{point.code}</Text>
            </View>
          </View>
          
          {/* Metadata */}
          <View style={styles.metadata}>
            <View style={styles.metadataItem}>
              <Ionicons name="time-outline" size={16} color={Colors.neutral[500]} />
              <Text style={styles.metadataText}>{point.duration} min</Text>
            </View>
            <View style={styles.metadataItem}>
              <Ionicons name="finger-print-outline" size={16} color={Colors.neutral[500]} />
              <Text style={styles.metadataText}>
                {point.pressure} {getPressureIntensity(point.pressure)}
              </Text>
            </View>
            <View style={styles.metadataItem}>
              <Ionicons name="trending-up-outline" size={16} color={getDifficultyColor(point.difficulty)} />
              <Text style={[styles.metadataText, { color: getDifficultyColor(point.difficulty) }]}>
                {point.difficulty}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, activeTab === tab.id && styles.activeTab]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Ionicons
                name={tab.icon as keyof typeof Ionicons.glyphMap}
                size={20}
                color={activeTab === tab.id ? Colors.primary[600] : Colors.neutral[400]}
              />
              <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <Card style={styles.tabContent}>
          {activeTab === 'location' && (
            <View>
              <Text style={styles.sectionTitle}>{t('pointDetail.location')}</Text>
              <Text style={styles.contentText}>{point.location[currentLanguage]}</Text>
            </View>
          )}

          {activeTab === 'method' && (
            <View>
              <Text style={styles.sectionTitle}>{t('pointDetail.method')}</Text>
              <Text style={styles.contentText}>{point.method[currentLanguage]}</Text>
              
              <View style={styles.instructionSteps}>
                <View style={styles.step}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>1</Text>
                  </View>
                  <Text style={styles.stepText}>Locate the point using the description above</Text>
                </View>
                <View style={styles.step}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>2</Text>
                  </View>
                  <Text style={styles.stepText}>Apply {point.pressure} pressure for {point.duration} minutes</Text>
                </View>
                <View style={styles.step}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>3</Text>
                  </View>
                  <Text style={styles.stepText}>Breathe deeply and relax during application</Text>
                </View>
              </View>
            </View>
          )}

          {activeTab === 'conditions' && (
            <View>
              <Text style={styles.sectionTitle}>Helps With</Text>
              <View style={styles.conditionsList}>
                {point.conditions.map((condition, index) => (
                  <View key={index} style={styles.conditionItem}>
                    <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
                    <Text style={styles.conditionText}>{condition}</Text>
                  </View>
                ))}
              </View>
              
              {point.contraindications[currentLanguage] && (
                <View style={styles.warningContainer}>
                  <View style={styles.warningHeader}>
                    <Ionicons name="warning" size={20} color={Colors.warning} />
                    <Text style={styles.warningTitle}>{t('pointDetail.contraindications')}</Text>
                  </View>
                  <Text style={styles.warningText}>{point.contraindications[currentLanguage]}</Text>
                </View>
              )}
            </View>
          )}
        </Card>

        {/* Action Button */}
        <Button
          title="Start Session"
          onPress={startTimer}
          size="lg"
          fullWidth
          icon={<Ionicons name="play-circle" size={20} color={Colors.text.inverse} />}
          style={styles.actionButton}
        />

        {/* Timer Modal */}
        <Modal
          visible={showTimer}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setShowTimer(false);
            setIsTimerRunning(false);
            setIsPaused(false);
          }}
        >
          <View style={styles.timerContainer}>
            <View style={styles.timerHeader}>
              <TouchableOpacity
                onPress={() => {
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                  }
                  setShowTimer(false);
                  setIsTimerRunning(false);
                  setIsPaused(false);
                }}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color={Colors.text.primary} />
              </TouchableOpacity>
              <Text style={styles.timerTitle}>{point?.name[currentLanguage]} Session</Text>
              <View style={styles.placeholder} />
            </View>

            <ScrollView contentContainerStyle={styles.timerContent}>
              {/* Point Info */}
              <Card style={styles.sessionInfoCard}>
                <View style={styles.sessionInfoHeader}>
                  <View style={styles.pointCodeBadge}>
                    <Text style={styles.pointCodeText}>{point?.code}</Text>
                  </View>
                  <View style={styles.sessionMeta}>
                    <Text style={styles.pressureInfo}>
                      Pressure: {point?.pressure} {getPressureIntensity(point?.pressure || '')}
                    </Text>
                  </View>
                </View>
                <Text style={styles.sessionInstruction}>
                  {point?.method[currentLanguage]}
                </Text>
              </Card>

              {/* Timer Display */}
              <View style={styles.timerDisplay}>
                <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
                <View style={styles.progressRing}>
                  <View 
                    style={[
                      styles.progressFill,
                      {
                        height: `${((timerDuration - timeRemaining) / timerDuration) * 100}%`
                      }
                    ]}
                  />
                </View>
              </View>

              {/* Timer Adjustment */}
              {!isTimerRunning && !isPaused && (
                <Card style={styles.adjustmentCard}>
                  <Text style={styles.adjustmentTitle}>Adjust Duration</Text>
                  <View style={styles.adjustmentControls}>
                    <TouchableOpacity
                      style={styles.adjustButton}
                      onPress={() => adjustTimer(-30)}
                    >
                      <Ionicons name="remove" size={20} color={Colors.primary[600]} />
                      <Text style={styles.adjustButtonText}>-30s</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.currentDuration}>{formatTime(timerDuration)}</Text>
                    
                    <TouchableOpacity
                      style={styles.adjustButton}
                      onPress={() => adjustTimer(30)}
                    >
                      <Ionicons name="add" size={20} color={Colors.primary[600]} />
                      <Text style={styles.adjustButtonText}>+30s</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              )}

              {/* Session Status */}
              {(isTimerRunning || isPaused) && (
                <Card style={styles.statusCard}>
                  <View style={styles.statusHeader}>
                    <Ionicons 
                      name={isTimerRunning ? "pulse" : "pause"} 
                      size={24} 
                      color={isTimerRunning ? Colors.success : Colors.warning} 
                    />
                    <Text style={styles.statusText}>
                      {isTimerRunning ? 'Session Active' : 'Session Paused'}
                    </Text>
                  </View>
                  <Text style={styles.statusSubtext}>
                    {isTimerRunning 
                      ? 'Apply gentle pressure and breathe deeply' 
                      : 'Tap resume to continue your session'
                    }
                  </Text>
                </Card>
              )}
            </ScrollView>

            {/* Timer Controls */}
            <View style={styles.timerControls}>
              {!isTimerRunning && !isPaused && (
                <Button
                  title="Start Session"
                  onPress={startSession}
                  size="lg"
                  fullWidth
                  icon={<Ionicons name="play" size={20} color={Colors.text.inverse} />}
                />
              )}
              
              {isTimerRunning && (
                <View style={styles.controlRow}>
                  <Button
                    title="Pause"
                    onPress={pauseSession}
                    variant="outline"
                    style={styles.controlButton}
                    icon={<Ionicons name="pause" size={18} color={Colors.primary[600]} />}
                  />
                  <Button
                    title="Reset"
                    onPress={resetSession}
                    variant="outline"
                    style={styles.controlButton}
                    icon={<Ionicons name="refresh" size={18} color={Colors.neutral[600]} />}
                  />
                </View>
              )}
              
              {isPaused && (
                <View style={styles.controlRow}>
                  <Button
                    title="Resume"
                    onPress={resumeSession}
                    style={styles.controlButton}
                    icon={<Ionicons name="play" size={18} color={Colors.text.inverse} />}
                  />
                  <Button
                    title="Reset"
                    onPress={resetSession}
                    variant="outline"
                    style={styles.controlButton}
                    icon={<Ionicons name="refresh" size={18} color={Colors.neutral[600]} />}
                  />
                </View>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.body1,
    color: Colors.text.secondary,
  },
  imageContainer: {
    position: 'relative',
    height: 250,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    width: 44,
    height: 44,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: Spacing.md,
  },
  header: {
    marginBottom: Spacing.xl,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  pointName: {
    ...Typography.h2,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.md,
  },
  codeContainer: {
    backgroundColor: Colors.primary[500],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  pointCode: {
    ...Typography.h6,
    color: Colors.text.inverse,
    fontWeight: '700',
  },
  metadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  metadataText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xs,
    marginBottom: Spacing.md,
    ...Shadows.sm,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.md,
    gap: Spacing.xs,
  },
  activeTab: {
    backgroundColor: Colors.primary[50],
  },
  tabText: {
    ...Typography.caption,
    color: Colors.neutral[400],
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.primary[600],
  },
  tabContent: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  contentText: {
    ...Typography.body1,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  instructionSteps: {
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
    marginTop: 2,
  },
  stepNumberText: {
    ...Typography.caption,
    color: Colors.text.inverse,
    fontWeight: '600',
  },
  stepText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    flex: 1,
    lineHeight: 20,
  },
  conditionsList: {
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  conditionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  conditionText: {
    ...Typography.body1,
    color: Colors.text.primary,
    textTransform: 'capitalize',
  },
  warningContainer: {
    backgroundColor: Colors.warning + '10',
    borderWidth: 1,
    borderColor: Colors.warning + '30',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  warningTitle: {
    ...Typography.h6,
    color: Colors.warning,
    marginLeft: Spacing.sm,
  },
  warningText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  actionButton: {
    marginBottom: Spacing.xl,
  },
  // Timer Modal Styles
  timerContainer: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  timerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.md,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  closeButton: {
    padding: Spacing.sm,
  },
  timerTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 40,
  },
  timerContent: {
    padding: Spacing.md,
    paddingBottom: Spacing.xl,
  },
  sessionInfoCard: {
    marginBottom: Spacing.lg,
  },
  sessionInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  pointCodeBadge: {
    backgroundColor: Colors.primary[500],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  pointCodeText: {
    ...Typography.h6,
    color: Colors.text.inverse,
    fontWeight: '700',
  },
  sessionMeta: {
    alignItems: 'flex-end',
  },
  pressureInfo: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
  sessionInstruction: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  timerDisplay: {
    alignItems: 'center',
    marginVertical: Spacing.xl,
    position: 'relative',
  },
  timerText: {
    ...Typography.display,
    fontSize: 72,
    fontWeight: '300',
    color: Colors.primary[600],
    marginBottom: Spacing.lg,
  },
  progressRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderColor: Colors.neutral[200],
    position: 'relative',
    overflow: 'hidden',
  },
  progressFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.primary[500],
    borderRadius: 100,
  },
  adjustmentCard: {
    marginBottom: Spacing.lg,
  },
  adjustmentTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  adjustmentControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adjustButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary[50],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.primary[200],
    gap: Spacing.xs,
  },
  adjustButtonText: {
    ...Typography.caption,
    color: Colors.primary[600],
    fontWeight: '600',
  },
  currentDuration: {
    ...Typography.h4,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  statusCard: {
    backgroundColor: Colors.success + '10',
    borderWidth: 1,
    borderColor: Colors.success + '30',
    marginBottom: Spacing.lg,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  statusText: {
    ...Typography.h6,
    color: Colors.success,
  },
  statusSubtext: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  timerControls: {
    padding: Spacing.md,
    backgroundColor: Colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
  },
  controlRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  controlButton: {
    flex: 1,
  },
});

export default PointDetailScreen;