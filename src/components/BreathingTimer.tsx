import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Typography, Spacing, Shadows } from '@constants';

interface BreathingTimerProps {
  timeRemaining: number;
  totalDuration: number;
  isRunning: boolean;
  style?: ViewStyle;
}

export const BreathingTimer: React.FC<BreathingTimerProps> = ({
  timeRemaining,
  totalDuration,
  isRunning,
  style,
}) => {
  const breathingScale = useSharedValue(1);
  const breathingOpacity = useSharedValue(0.6);
  const pulseScale = useSharedValue(1);

  // Format time display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate progress percentage
  const progress = totalDuration > 0 ? (totalDuration - timeRemaining) / totalDuration : 0;

  useEffect(() => {
    if (isRunning) {
      // Breathing animation - inhale and exhale pattern
      breathingScale.value = withRepeat(
        withSequence(
          withTiming(1.15, {
            duration: 3000, // 3 seconds inhale
            easing: Easing.bezier(0.25, 0.46, 0.45, 0.94),
          }),
          withTiming(1, {
            duration: 3000, // 3 seconds exhale
            easing: Easing.bezier(0.55, 0.06, 0.68, 0.19),
          })
        ),
        -1,
        false
      );

      breathingOpacity.value = withRepeat(
        withSequence(
          withTiming(0.9, {
            duration: 3000,
            easing: Easing.bezier(0.25, 0.46, 0.45, 0.94),
          }),
          withTiming(0.6, {
            duration: 3000,
            easing: Easing.bezier(0.55, 0.06, 0.68, 0.19),
          })
        ),
        -1,
        false
      );

      // Subtle pulse animation
      pulseScale.value = withRepeat(
        withSequence(
          withTiming(1.02, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        false
      );
    } else {
      // Reset animations when paused
      breathingScale.value = withTiming(1, { duration: 500 });
      breathingOpacity.value = withTiming(0.6, { duration: 500 });
      pulseScale.value = withTiming(1, { duration: 500 });
    }
  }, [isRunning]);

  const breathingAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: breathingScale.value }],
    opacity: breathingOpacity.value,
  }));

  const pulseAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  const progressAnimatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(progress, [0, 1], [0, 360]);
    return {
      transform: [{ rotate: `${rotation}deg` }],
    };
  });

  return (
    <View style={[styles.container, style]}>
      {/* Background breathing circle */}
      <Animated.View style={[styles.breathingBackground, breathingAnimatedStyle]}>
        <LinearGradient
          colors={[
            'rgba(34, 197, 94, 0.1)',
            'rgba(34, 197, 94, 0.2)',
            'rgba(34, 197, 94, 0.3)',
            'rgba(34, 197, 94, 0.4)',
          ]}
          locations={[0, 0.3, 0.7, 1]}
          style={styles.breathingGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </Animated.View>

      {/* Progress ring */}
      <Animated.View style={[styles.progressRing, progressAnimatedStyle]}>
        <LinearGradient
          colors={[
            Colors.primary[400],
            Colors.primary[500],
            Colors.primary[600],
            Colors.primary[700],
          ]}
          locations={[0, 0.33, 0.66, 1]}
          style={styles.progressGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>

      {/* Main timer display */}
      <Animated.View style={[styles.timerContainer, pulseAnimatedStyle]}>
        <Text style={styles.timeDisplay}>{formatTime(timeRemaining)}</Text>
        {isRunning && (
          <Animated.View style={breathingAnimatedStyle}>
            <Text style={styles.breathingText}>
              {Math.floor((Date.now() / 6000) % 2) === 0 ? '✨ Inhale' : '🌿 Exhale'}
            </Text>
          </Animated.View>
        )}
      </Animated.View>

      {/* Ambient glow effect */}
      <View style={[styles.glowEffect, { opacity: isRunning ? 0.3 : 0.1 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    position: 'relative',
  } as ViewStyle,

  breathingBackground: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
  } as ViewStyle,

  breathingGradient: {
    flex: 1,
    borderRadius: 90,
  } as ViewStyle,

  progressRing: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 3,
    borderColor: 'transparent',
    overflow: 'hidden',
  } as ViewStyle,

  progressGradient: {
    flex: 1,
    borderRadius: 95,
  } as ViewStyle,

  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: 'rgba(34, 197, 94, 0.1)',
    ...Shadows.soft,
    shadowColor: Colors.primary[400],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  } as ViewStyle,

  timeDisplay: {
    ...Typography.display,
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary[700],
    marginBottom: 4,
  } as TextStyle,

  breathingText: {
    ...Typography.caption,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary[500],
    letterSpacing: 1,
    textTransform: 'uppercase',
  } as TextStyle,

  glowEffect: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: Colors.primary[400],
    ...Shadows.glow,
  } as ViewStyle,
});