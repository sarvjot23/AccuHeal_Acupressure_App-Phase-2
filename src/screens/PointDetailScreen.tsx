import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Image } from 'expo-image';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Colors, Typography, Spacing, BorderRadius } from '../constants';
import { AcupressurePoint } from '../types';
import { samplePoints } from '../data/samplePoints';

type PointDetailScreenRouteProp = RouteProp<{
  PointDetail: { pointId: string };
}, 'PointDetail'>;

const PointDetailScreen = () => {
  const route = useRoute<PointDetailScreenRouteProp>();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'location' | 'method' | 'benefits'>('location');
  
  // Timer state
  const [showTimer, setShowTimer] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get pointId from route params
  const pointId = route.params?.pointId;
  
  // Look up the point by ID from sample data
  const point = samplePoints.find(p => p.id === pointId);

  // If no point found, show error
  if (!point) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={64} color={Colors.error} />
        <Text style={styles.errorTitle}>Point not found</Text>
        <Text style={styles.errorSubtitle}>Point ID: {pointId}</Text>
      </View>
    );
  }

  // Timer functions
  const startTimer = () => {
    const durationStr = point.duration || '2 minutes';
    let duration: number;
    
    if (typeof durationStr === 'string' && durationStr.includes('seconds')) {
      const match = durationStr.match(/(\d+)\s*seconds?/);
      duration = match ? parseInt(match[1]) : 120;
    } else {
      const match = typeof durationStr === 'string' ? durationStr.match(/(\d+)/) : null;
      duration = match ? parseInt(match[1]) * 60 : 120;
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

  const resetSession = () => {
    setIsTimerRunning(false);
    setIsPaused(false);
    setTimeRemaining(timerDuration);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const adjustTimer = (seconds: number) => {
    const newDuration = Math.max(30, timerDuration + seconds); // Minimum 30 seconds
    setTimerDuration(newDuration);
    if (!isTimerRunning) {
      setTimeRemaining(newDuration);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const tabs = [
    { id: 'location', label: 'Location', icon: 'location-outline' },
    { id: 'method', label: 'Method', icon: 'hand-left-outline' },
    { id: 'benefits', label: 'Benefits', icon: 'heart-outline' },
  ];

  const renderTabButton = (tab: typeof tabs[0]) => (
    <TouchableOpacity
      key={tab.id}
      style={[
        styles.tabButton,
        activeTab === tab.id && styles.activeTabButton,
      ]}
      onPress={() => setActiveTab(tab.id as any)}
    >
      <Ionicons 
        name={tab.icon as any} 
        size={20} 
        color={activeTab === tab.id ? Colors.primary[600] : Colors.text.secondary} 
      />
      <Text style={[
        styles.tabText,
        activeTab === tab.id && styles.activeTabText,
      ]}>
        {tab.label}
      </Text>
    </TouchableOpacity>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'location':
        return (
          <Card variant="elevated" style={styles.contentCard}>
            <Text style={styles.contentTitle}>Point Location</Text>
            <Text style={styles.contentText}>
              {point.location[currentLanguage] || point.location.en}
            </Text>
            {point.images && point.images.length > 0 && (
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: point.images[0] }}
                  style={styles.pointImage}
                  contentFit="cover"
                />
              </View>
            )}
          </Card>
        );
      case 'method':
        return (
          <Card variant="elevated" style={styles.contentCard}>
            <Text style={styles.contentTitle}>Application Method</Text>
            <Text style={styles.contentText}>
              {point.method[currentLanguage] || point.method.en}
            </Text>
            <View style={styles.metadataRow}>
              <View style={styles.metadataItem}>
                <Ionicons name="time-outline" size={16} color={Colors.primary[600]} />
                <Text style={styles.metadataText}>
                  Duration: {typeof point.duration === 'string' ? point.duration : `${point.duration} min`}
                </Text>
              </View>
              <View style={styles.metadataItem}>
                <Ionicons name="fitness-outline" size={16} color={Colors.primary[600]} />
                <Text style={styles.metadataText}>
                  Pressure: {point.pressure}
                </Text>
              </View>
            </View>
          </Card>
        );
      case 'benefits':
        return (
          <Card variant="elevated" style={styles.contentCard}>
            <Text style={styles.contentTitle}>Health Benefits</Text>
            {(point.symptoms || point.conditions)?.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Ionicons name="checkmark-circle" size={16} color={Colors.success} />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Card */}
        <Card variant="elevated" style={styles.headerCard}>
          <View style={styles.headerContent}>
            <View style={styles.pointIcon}>
              <Ionicons name="radio-button-on" size={32} color={Colors.primary[600]} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.pointName}>
                {point.name[currentLanguage] || point.name.en}
              </Text>
              <Text style={styles.pointCode}>{point.code}</Text>
            </View>
          </View>
        </Card>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          {tabs.map(renderTabButton)}
        </View>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Timer Section */}
        <Card variant="elevated" style={styles.timerCard}>
          <Text style={styles.timerTitle}>Practice Session</Text>
          {!showTimer ? (
            <Button
              title="Start Timer"
              onPress={startTimer}
              size="lg"
              fullWidth
              icon={<Ionicons name="play" size={20} color={Colors.text.inverse} />}
            />
          ) : (
            <View style={styles.timerContent}>
              {/* Duration Adjustment */}
              {!isTimerRunning && !isPaused && (
                <View style={styles.durationAdjustment}>
                  <TouchableOpacity
                    style={styles.adjustButton}
                    onPress={() => adjustTimer(-30)}
                  >
                    <Ionicons name="remove" size={16} color={Colors.primary[600]} />
                    <Text style={styles.adjustText}>30s</Text>
                  </TouchableOpacity>
                  <Text style={styles.durationLabel}>Duration</Text>
                  <TouchableOpacity
                    style={styles.adjustButton}
                    onPress={() => adjustTimer(30)}
                  >
                    <Ionicons name="add" size={16} color={Colors.primary[600]} />
                    <Text style={styles.adjustText}>30s</Text>
                  </TouchableOpacity>
                </View>
              )}
              
              <Text style={styles.timerDisplay}>{formatTime(timeRemaining)}</Text>
              
              <View style={styles.timerControls}>
                {!isTimerRunning && !isPaused && (
                  <Button title="Start" onPress={startSession} size="sm" />
                )}
                {isTimerRunning && (
                  <Button title="Pause" onPress={pauseSession} size="sm" variant="outline" />
                )}
                {isPaused && (
                  <Button title="Resume" onPress={startSession} size="sm" />
                )}
                <Button title="Reset" onPress={resetSession} size="sm" variant="outline" />
              </View>
            </View>
          )}
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  scrollView: {
    flex: 1,
    padding: Spacing.md,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  errorTitle: {
    ...Typography.h4,
    color: Colors.error,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  errorSubtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  headerCard: {
    marginBottom: Spacing.lg,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  headerText: {
    flex: 1,
  },
  pointName: {
    ...Typography.h3,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  pointCode: {
    ...Typography.body1,
    color: Colors.primary[600],
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: Spacing.lg,
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xs,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.lg,
  },
  activeTabButton: {
    backgroundColor: Colors.primary[50],
  },
  tabText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginLeft: Spacing.xs,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.primary[600],
    fontWeight: '600',
  },
  contentCard: {
    marginBottom: Spacing.lg,
  },
  contentTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  contentText: {
    ...Typography.body1,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  imageContainer: {
    marginTop: Spacing.md,
    alignItems: 'center',
  },
  pointImage: {
    width: 200,
    height: 200,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary[50],
  },
  metadataRow: {
    flexDirection: 'row',
    marginTop: Spacing.md,
    gap: Spacing.lg,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  metadataText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginLeft: Spacing.sm,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  benefitText: {
    ...Typography.body1,
    color: Colors.text.secondary,
    marginLeft: Spacing.sm,
  },
  timerCard: {
    marginBottom: Spacing.xl,
  },
  timerTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  timerContent: {
    alignItems: 'center',
  },
  timerDisplay: {
    ...Typography.display,
    color: Colors.primary[600],
    marginBottom: Spacing.lg,
  },
  timerControls: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  durationAdjustment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
    gap: Spacing.lg,
  },
  adjustButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.primary[200],
    backgroundColor: Colors.primary[50],
  },
  adjustText: {
    ...Typography.caption,
    color: Colors.primary[600],
    fontWeight: '600',
    marginLeft: Spacing.xs,
  },
  durationLabel: {
    ...Typography.body2,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
});

export default PointDetailScreen;