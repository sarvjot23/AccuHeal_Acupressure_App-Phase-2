import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Platform } from 'react-native';
import { Colors } from '@constants';

interface WaveProgressRingProps {
  progress: number; // 0 to 1
  size: number;
  strokeWidth: number;
  color?: string;
  backgroundColor?: string;
  waveHeight?: number;
  waveSpeed?: number;
}

const WaveProgressRing: React.FC<WaveProgressRingProps> = ({
  progress,
  size,
  strokeWidth,
  color = Colors.primary[500],
  backgroundColor = Colors.neutral[200],
  waveHeight = 12,
  waveSpeed = 2500,
}) => {
  const wave1 = useRef(new Animated.Value(0)).current;
  const wave2 = useRef(new Animated.Value(0)).current;
  const wave3 = useRef(new Animated.Value(0)).current;
  
  const radius = (size - strokeWidth) / 2;
  const fillHeight = progress * (radius * 2);
  
  useEffect(() => {
    const createWaveAnimation = (animatedValue: Animated.Value, delay: number = 0) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: waveSpeed,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 }
      );
    };

    const anim1 = createWaveAnimation(wave1, 0);
    const anim2 = createWaveAnimation(wave2, waveSpeed * 0.33);
    const anim3 = createWaveAnimation(wave3, waveSpeed * 0.67);
    
    anim1.start();
    anim2.start();
    anim3.start();
    
    return () => {
      anim1.stop();
      anim2.stop();
      anim3.stop();
    };
  }, [waveSpeed]);

  // Create smooth wave using overlapping ellipses
  const WaveLayer: React.FC<{
    animation: Animated.Value;
    amplitude: number;
    frequency: number;
    phase: number;
    opacity: number;
  }> = ({ animation, amplitude, frequency, phase, opacity }) => {
    const numWaves = 6; // Fewer waves for better performance
    
    return (
      <View style={styles.waveContainer}>
        {Array.from({ length: numWaves }, (_, i) => {
          const waveWidth = size * 1.8;
          const wavePosition = (i / numWaves) * waveWidth - waveWidth / 2;
          
          return (
            <Animated.View
              key={i}
              style={[
                styles.waveEllipse,
                {
                  width: waveWidth / numWaves + 20, // Overlap for smoothness
                  height: waveHeight * amplitude,
                  backgroundColor: color,
                  opacity: opacity * (0.6 + 0.4 * Math.cos(i * 0.5)),
                  borderRadius: (waveHeight * amplitude) / 2,
                  left: wavePosition,
                  transform: [
                    {
                      translateX: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          -waveWidth * 0.2,
                          waveWidth * 0.2,
                        ],
                      }),
                    },
                    {
                      translateY: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          amplitude * waveHeight * Math.sin(i * frequency + phase) * 0.8,
                          amplitude * waveHeight * Math.sin(i * frequency + phase + Math.PI * 2) * 0.8,
                        ],
                      }),
                    },
                    {
                      scaleX: animation.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1, 1.3, 1],
                      }),
                    },
                    {
                      scaleY: animation.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1, 0.7, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Background ring */}
      <View
        style={[
          styles.backgroundRing,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: backgroundColor,
          },
        ]}
      />
      
      {/* Water container */}
      {progress > 0 && (
        <View
          style={[
            styles.waterContainer,
            {
              width: size - strokeWidth * 2,
              height: size - strokeWidth * 2,
              borderRadius: (size - strokeWidth * 2) / 2,
            },
          ]}
        >
          {/* Base water fill */}
          <View
            style={[
              styles.baseWater,
              {
                height: Math.max(4, fillHeight - waveHeight / 2),
                backgroundColor: color,
                opacity: 0.9,
              },
            ]}
          />
          
          {/* Wave surface area */}
          {fillHeight > waveHeight / 2 && (
            <View
              style={[
                styles.waveSurface,
                {
                  bottom: fillHeight - waveHeight / 2,
                  height: waveHeight * 2.5,
                },
              ]}
            >
              {/* Multiple wave layers */}
              <WaveLayer
                animation={wave1}
                amplitude={0.8}
                frequency={1.2}
                phase={0}
                opacity={0.6}
              />
              
              <WaveLayer
                animation={wave2}
                amplitude={0.6}
                frequency={1.0}
                phase={Math.PI}
                opacity={0.4}
              />
              
              <WaveLayer
                animation={wave3}
                amplitude={0.4}
                frequency={1.5}
                phase={Math.PI / 2}
                opacity={0.3}
              />
              
              {/* Surface shimmer */}
              <Animated.View
                style={[
                  styles.shimmer,
                  {
                    width: size * 0.7,
                    height: waveHeight / 3,
                    backgroundColor: '#ffffff',
                    borderRadius: waveHeight / 6,
                    opacity: wave1.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [0.1, 0.3, 0.1],
                    }),
                    transform: [
                      {
                        translateX: wave2.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-size * 0.15, size * 0.15],
                        }),
                      },
                      {
                        scaleX: wave3.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.6, 1.4],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          )}
        </View>
      )}
      
      {/* Progress border */}
      <View
        style={[
          styles.progressBorder,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: progress > 0.01 ? color : 'transparent',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundRing: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  progressBorder: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  waterContainer: {
    position: 'absolute',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  baseWater: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  waveSurface: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  waveContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveEllipse: {
    position: 'absolute',
    bottom: 0,
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
});

export default WaveProgressRing;