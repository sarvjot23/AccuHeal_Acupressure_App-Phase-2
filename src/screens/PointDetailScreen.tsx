import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import { Image } from 'expo-image';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AcupressurePoint } from '../types';
import { samplePoints } from '../data/samplePoints';

// Simple theme constants
const Colors = {
  primary: { 600: '#10B981', 100: '#D1FAE5' },
  background: { primary: '#FFFFFF', secondary: '#F9FAFB' },
  text: { primary: '#111827', secondary: '#6B7280', inverse: '#FFFFFF' },
  neutral: { 400: '#9CA3AF', 500: '#6B7280' },
  success: '#10B981',
  warning: '#F59E0B',
};

const Typography = {
  h3: { fontSize: 24, fontWeight: 'bold' as const },
  h5: { fontSize: 18, fontWeight: '600' as const },
  h6: { fontSize: 16, fontWeight: '600' as const },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  caption: { fontSize: 12 },
};

const Spacing = {
  xs: 4, sm: 8, md: 16, lg: 24, xl: 32,
};

type PointDetailScreenRouteProp = RouteProp<{
  PointDetail: { pointId: string };
}, 'PointDetail'>;

export const PointDetailScreen = () => {
  const route = useRoute<PointDetailScreenRouteProp>();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'location' | 'method' | 'conditions'>('location');
  
  // Timer state
  const [showTimer, setShowTimer] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get pointId from route params
  const pointId = route.params?.pointId;
  const { height: screenHeight } = Dimensions.get('window');
  
  // Look up the point by ID from sample data
  const point = samplePoints.find(p => p.id === pointId);

  // If no point found, show error
  if (!point) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 18, color: '#EF4444', textAlign: 'center' }}>
          Point not found
        </Text>
        <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center', marginTop: 10 }}>
          Point ID: {pointId}
        </Text>
      </View>
    );
  }

  // Timer functions
  const startTimer = () => {
    // Parse duration string like "30 seconds-1 minute" or "1-2 minutes"
    const durationStr = point.duration || '2 minutes';
    let duration: number;
    
    if (durationStr.includes('seconds')) {
      // Extract seconds (e.g., "30 seconds-1 minute" -> 30 seconds)
      const match = durationStr.match(/(\d+)\s*seconds?/);
      duration = match ? parseInt(match[1]) : 120; // Default to 2 minutes in seconds
    } else {
      // Extract minutes (e.g., "1-2 minutes" -> 1 minute)
      const match = durationStr.match(/(\d+)/);
      duration = match ? parseInt(match[1]) * 60 : 120; // Convert minutes to seconds
    }
    
    setTimerDuration(duration);
    setTimeRemaining(duration);
    setShowTimer(true);
  };

  const startSession = () => {
    setIsTimerRunning(true);
    setIsPaused(false);
    
    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseSession = () => {
    setIsTimerRunning(false);
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeSession = () => {
    setIsTimerRunning(true);
    setIsPaused(false);
    
    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetSession = () => {
    setIsTimerRunning(false);
    setIsPaused(false);
    setTimeRemaining(timerDuration);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const adjustTimer = (seconds: number) => {
    const newDuration = Math.max(30, timerDuration + seconds);
    setTimerDuration(newDuration);
    setTimeRemaining(newDuration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const tabs = [
    { id: 'location' as const, title: 'Location', icon: 'location-outline' },
    { id: 'method' as const, title: 'Method', icon: 'hand-left-outline' },
    { id: 'conditions' as const, title: 'Conditions', icon: 'medical-outline' },
  ];
  
  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}
      scrollEnabled={true}
      bounces={true}
    >
      {/* Header Image */}
      {point.images && point.images.length > 0 && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: point.images[0] || '' }}
            style={styles.headerImage}
            contentFit="cover"
          />
        </View>
      )}

      {/* Point Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.pointName}>
            {point.name?.[currentLanguage] || point.name?.en || 'Point Name'}
          </Text>
          <View style={styles.codeContainer}>
            <Text style={styles.pointCode}>{point.code || 'N/A'}</Text>
          </View>
        </View>
        
        {/* Metadata */}
        <View style={styles.metadata}>
          <View style={styles.metadataItem}>
            <Ionicons name="time-outline" size={16} color={Colors.neutral[500]} />
            <Text style={styles.metadataText}>{point.duration || '2 min'}</Text>
          </View>
          <View style={styles.metadataItem}>
            <Ionicons name="finger-print-outline" size={16} color={Colors.neutral[500]} />
            <Text style={styles.metadataText}>{point.pressure || 'Moderate'}</Text>
          </View>
          <View style={styles.metadataItem}>
            <Ionicons name="trending-up-outline" size={16} color={Colors.primary[600]} />
            <Text style={styles.metadataText}>{point.difficulty || 'Beginner'}</Text>
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
            <Text style={styles.sectionTitle}>Location</Text>
            <Text style={styles.contentText}>
              {point.location?.[currentLanguage] || point.location?.en || 'Location information not available'}
            </Text>
          </View>
        )}

        {activeTab === 'method' && (
          <View>
            <Text style={styles.sectionTitle}>Method</Text>
            <Text style={styles.contentText}>
              {point.method?.[currentLanguage] || point.method?.en || 'Apply gentle pressure to the point.'}
            </Text>
            
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
                <Text style={styles.stepText}>Apply {point.pressure || 'moderate'} pressure for {point.duration || '2'} minutes</Text>
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
              {(point.conditions || []).map((condition, index) => (
                <View key={`condition-${index}`} style={styles.conditionItem}>
                  <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
                  <Text style={styles.conditionText}>{condition}</Text>
                </View>
              ))}
            </View>
            
            {point.contraindications?.[currentLanguage] && (
              <View style={styles.warningContainer}>
                <View style={styles.warningHeader}>
                  <Ionicons name="warning" size={20} color={Colors.warning} />
                  <Text style={styles.warningTitle}>Contraindications</Text>
                </View>
                <Text style={styles.warningText}>{point.contraindications[currentLanguage]}</Text>
              </View>
            )}
          </View>
        )}
      </Card>

      {/* Fixed Button at Bottom */}
      <View style={styles.buttonContainer}>
        <Button
          title="Start Session"
          onPress={startTimer}
          size="lg"
          fullWidth
          icon={<Ionicons name="play-circle" size={20} color={Colors.text.inverse} />}
          style={styles.actionButton}
        />
      </View>

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
            <Text style={styles.timerTitle}>{point.name?.[currentLanguage] || point.name?.en} Session</Text>
            <View style={styles.placeholder} />
          </View>

          <ScrollView contentContainerStyle={styles.timerContent}>
            {/* Point Info */}
            <Card style={styles.sessionInfoCard}>
              <View style={styles.sessionInfoHeader}>
                <View style={styles.pointCodeBadge}>
                  <Text style={styles.pointCodeText}>{point.code}</Text>
                </View>
                <View style={styles.sessionMeta}>
                  <Text style={styles.pressureInfo}>
                    Pressure: {point.pressure || 'Moderate'}
                  </Text>
                </View>
              </View>
              <Text style={styles.sessionInstruction}>
                {point.method?.[currentLanguage] || point.method?.en || 'Apply gentle pressure to the point.'}
              </Text>
            </Card>

            {/* Timer Display */}
            <View style={styles.timerDisplay}>
              <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
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
                  icon={<Ionicons name="refresh" size={18} color={Colors.neutral[400]} />}
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
                  icon={<Ionicons name="refresh" size={18} color={Colors.neutral[400]} />}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // CRITICAL: Absolute positioning to bypass navigation constraints
  scrollView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.background.secondary,
  },
  scrollContent: {
    paddingBottom: 100, // Space for the button
  },
  imageContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    padding: Spacing.lg,
    backgroundColor: Colors.background.primary,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  pointName: {
    ...Typography.h3,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.md,
  },
  codeContainer: {
    backgroundColor: Colors.primary[600],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 20,
  },
  pointCode: {
    ...Typography.caption,
    color: Colors.text.inverse,
    fontWeight: 'bold',
  },
  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  metadataText: {
    ...Typography.caption,
    color: Colors.text.secondary,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.background.primary,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.md,
    borderRadius: 12,
    padding: Spacing.xs,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    borderRadius: 8,
    gap: Spacing.xs,
  },
  activeTab: {
    backgroundColor: Colors.background.secondary,
  },
  tabText: {
    ...Typography.caption,
    color: Colors.neutral[400],
  },
  activeTabText: {
    color: Colors.primary[600],
  },
  tabContent: {
    margin: Spacing.md,
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
    gap: Spacing.md,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    ...Typography.caption,
    color: Colors.primary[600],
    fontWeight: 'bold',
  },
  stepText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    flex: 1,
    lineHeight: 20,
  },
  conditionsList: {
    gap: Spacing.sm,
  },
  conditionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  conditionText: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  warningContainer: {
    backgroundColor: Colors.warning + '10',
    borderRadius: 8,
    padding: Spacing.md,
    marginTop: Spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: Colors.warning,
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
  buttonContainer: {
    padding: Spacing.md,
    backgroundColor: Colors.background.primary,
  },
  actionButton: {
    marginTop: Spacing.lg,
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
    padding: Spacing.lg,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  timerContent: {
    padding: Spacing.lg,
  },
  sessionInfoCard: {
    marginBottom: Spacing.lg,
  },
  sessionInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  pointCodeBadge: {
    backgroundColor: Colors.primary[600],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 16,
    marginRight: Spacing.md,
  },
  pointCodeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.text.inverse,
  },
  sessionMeta: {
    flex: 1,
  },
  pressureInfo: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  sessionInstruction: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  timerDisplay: {
    alignItems: 'center',
    marginVertical: Spacing.xl * 2,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.primary[600],
    marginBottom: Spacing.lg,
  },
  adjustmentCard: {
    marginBottom: Spacing.lg,
  },
  adjustmentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  adjustmentControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xl,
  },
  adjustButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary[100],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 8,
    gap: Spacing.xs,
  },
  adjustButtonText: {
    fontSize: 12,
    color: Colors.primary[600],
    fontWeight: '600',
  },
  currentDuration: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  statusCard: {
    marginBottom: Spacing.lg,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginLeft: Spacing.md,
  },
  statusSubtext: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  timerControls: {
    padding: Spacing.lg,
    backgroundColor: Colors.background.primary,
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