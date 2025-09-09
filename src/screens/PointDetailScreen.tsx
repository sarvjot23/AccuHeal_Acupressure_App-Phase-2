import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { BreathingTimer } from '../components/BreathingTimer';
import { Colors, Typography, Spacing, BorderRadius } from '../constants';
import { AcupressurePoint } from '../types';
import { samplePoints } from '../data/samplePoints';

type PointDetailScreenRouteProp = RouteProp<{
  PointDetail: { pointId: string };
}, 'PointDetail'>;

const PointDetailScreen = () => {
  const route = useRoute<PointDetailScreenRouteProp>();
  const navigation = useNavigation();
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
          <Card variant="glass" style={styles.contentCard}>
            <Text style={styles.contentTitle}>Point Location</Text>
            <Text style={styles.contentText}>
              {point.location[currentLanguage] || point.location.en}
            </Text>
            
            {/* Additional location details */}
            {point.meridian && (
              <View style={styles.locationDetails}>
                <View style={styles.detailItem}>
                  <Ionicons name="trail-sign-outline" size={16} color={Colors.primary[600]} />
                  <Text style={styles.detailText}>
                    Meridian: {point.meridian.name[currentLanguage] || point.meridian.name.en} ({point.meridian.code})
                  </Text>
                </View>
              </View>
            )}
            
            {point.images && point.images.length > 0 && (
              <View style={styles.imageContainer}>
                <Image
                  source={point.images[0].startsWith('@assets') 
                    ? require(`../../assets/acupressure_points/${point.images[0].split('/').pop()}`)
                    : { uri: point.images[0] }
                  }
                  style={styles.pointImage}
                  contentFit="cover"
                />
              </View>
            )}
          </Card>
        );
      case 'method':
        return (
          <Card variant="gradient" style={styles.contentCard}>
            <Text style={styles.contentTitle}>Application Method</Text>
            <Text style={styles.contentText}>
              {(point.technique && (point.technique[currentLanguage] || point.technique.en)) || 
               (point.method && (point.method[currentLanguage] || point.method.en)) ||
               'Apply gentle pressure for 1-2 minutes'}
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
        const benefits = point.indications || point.symptoms || point.conditions || [];
        return (
          <Card variant="floating" style={styles.contentCard}>
            <Text style={styles.contentTitle}>Health Benefits</Text>
            {benefits.length > 0 ? (
              benefits.map((benefit, index) => {
                const benefitText = typeof benefit === 'string' 
                  ? benefit 
                  : benefit[currentLanguage] || benefit.en;
                
                return (
                  <View key={index} style={styles.benefitItem}>
                    <Ionicons name="checkmark-circle" size={16} color={Colors.success} />
                    <Text style={styles.benefitText}>{benefitText}</Text>
                  </View>
                );
              })
            ) : (
              <Text style={styles.contentText}>No specific benefits listed for this point.</Text>
            )}
          </Card>
        );
      default:
        return null;
    }
  };

  if (Platform.OS === 'web') {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: '#f8fafc',
        overflowY: 'auto',
        padding: 0,
        margin: 0
      }}>
        {/* Navigation Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#22c55e',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 16,
          paddingRight: 16,
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <button 
            onClick={() => navigation.goBack()}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              marginRight: 16,
              padding: 8
            }}
          >
            ← Back
          </button>
          <span style={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>
            Point Details
          </span>
        </div>
        
        {/* Content Container */}
        <div style={{
          padding: 16,
          paddingBottom: 100
        }}>
        {/* Header Card */}
        <Card variant="gradient" style={styles.headerCard}>
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
        <Card variant="glass" style={styles.timerCard}>
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
              {!isTimerRunning && !isPaused && (
                <View style={styles.durationAdjustment}>
                  <TouchableOpacity
                    style={styles.adjustButton}
                    onPress={() => adjustTimer(-30)}
                  >
                    <Ionicons name="remove" size={16} color={Colors.primary[600]} />
                    <Text style={styles.adjustText}>30s</Text>
                  </TouchableOpacity>
                  <Text style={styles.durationText}>Duration</Text>
                  <TouchableOpacity
                    style={styles.adjustButton}
                    onPress={() => adjustTimer(30)}
                  >
                    <Ionicons name="add" size={16} color={Colors.primary[600]} />
                    <Text style={styles.adjustText}>30s</Text>
                  </TouchableOpacity>
                </View>
              )}
              
              <BreathingTimer
                timeRemaining={timeRemaining}
                totalDuration={timerDuration}
                isRunning={isTimerRunning}
                style={styles.breathingTimer}
              />
              
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
        
        </div>
      </div>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Card */}
        <Card variant="gradient" style={styles.headerCard}>
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
        <Card variant="glass" style={styles.timerCard}>
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
              
              <BreathingTimer
                timeRemaining={timeRemaining}
                totalDuration={timerDuration}
                isRunning={isTimerRunning}
                style={styles.breathingTimer}
              />
              
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
        
        {/* Debug: Add some test content to ensure scrolling works */}
        <Card variant="gradient" style={[styles.contentCard, { marginTop: Spacing.lg }]}>
          <Text style={styles.contentTitle}>Scroll Test</Text>
          <Text style={styles.contentText}>
            This is test content to ensure scrolling is working properly. If you can scroll down and see this text, then the scrolling mechanism is functioning correctly.
          </Text>
          <View style={{ height: 200, backgroundColor: Colors.primary[50], marginTop: Spacing.md, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.contentText}>Additional content to test scroll height</Text>
          </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: BorderRadius.xl,
    padding: Spacing.xs,
    shadowColor: Colors.primary[300],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.1)',
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
    backgroundColor: Colors.primary[100],
    shadowColor: Colors.primary[400],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
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
    flex: 1,
  },
  locationDetails: {
    marginTop: Spacing.md,
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  detailText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginLeft: Spacing.sm,
    flex: 1,
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
  breathingTimer: {
    marginVertical: Spacing.lg,
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
  
  tabContentContainer: {
    marginBottom: Spacing.lg,
  } as ViewStyle,
  
  durationText: {
    ...Typography.body2,
    color: Colors.text.primary,
    fontWeight: '600',
  } as TextStyle,
});

export default PointDetailScreen;