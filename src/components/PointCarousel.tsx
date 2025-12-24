/**
 * PointCarousel Component
 *
 * Horizontal carousel for featured acupressure points on HomeScreen.
 * Features:
 * - Snap-to-interval scrolling with momentum
 * - Center card scaling effect (1.05 scale)
 * - Auto-play with configurable interval
 * - Progress dots with active animation
 * - Uses meridian-colored PointCard components
 * - Responsive to screen width
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Platform,
  ViewStyle,
  TextStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {
  Colors,
  Spacing,
  AnimationPresets,
  BorderRadius,
} from '@constants';
import { AcupressurePoint } from '@types';
import { PointCard } from './PointCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.85; // 85% of screen width
const CARD_SPACING = Spacing.md;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

export interface PointCarouselProps {
  /** Array of featured points to display */
  points: AcupressurePoint[];

  /** Callback when a point card is pressed */
  onPointPress: (point: AcupressurePoint) => void;

  /** Enable auto-play carousel */
  autoPlay?: boolean;

  /** Auto-play interval in milliseconds */
  autoPlayInterval?: number;

  /** Show pagination dots */
  showPagination?: boolean;

  /** Custom card variant */
  cardVariant?: 'default' | 'compact' | 'featured' | 'premium';
}

export const PointCarousel: React.FC<PointCarouselProps> = ({
  points,
  onPointPress,
  autoPlay = false,
  autoPlayInterval = 5000,
  showPagination = true,
  cardVariant = 'featured',
}) => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play logic
  useEffect(() => {
    if (autoPlay && points.length > 1) {
      autoPlayTimerRef.current = setInterval(() => {
        const nextIndex = (activeIndex + 1) % points.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }, autoPlayInterval);

      return () => {
        if (autoPlayTimerRef.current) {
          clearInterval(autoPlayTimerRef.current);
        }
      };
    }
  }, [autoPlay, activeIndex, points.length, autoPlayInterval]);

  // Handle scroll events
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    scrollX.value = offsetX;

    // Calculate current active index
    const newIndex = Math.round(offsetX / SNAP_INTERVAL);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  // Handle momentum scroll end (reset auto-play timer)
  const handleMomentumScrollEnd = () => {
    if (autoPlay && autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  // Render individual card with scaling animation
  const renderCard = ({ item, index }: { item: AcupressurePoint; index: number }) => {
    return (
      <AnimatedCard
        point={item}
        index={index}
        scrollX={scrollX}
        onPress={() => onPointPress(item)}
        variant={cardVariant}
      />
    );
  };

  // Pagination dots
  const renderPagination = () => {
    if (!showPagination || points.length <= 1) return null;

    return (
      <View style={styles.paginationContainer}>
        {points.map((_, index) => (
          <PaginationDot
            key={index}
            index={index}
            activeIndex={activeIndex}
            scrollX={scrollX}
            totalDots={points.length}
          />
        ))}
      </View>
    );
  };

  if (!points || points.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={points}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        nestedScrollEnabled={true}
        getItemLayout={(data, index) => ({
          length: SNAP_INTERVAL,
          offset: SNAP_INTERVAL * index,
          index,
        })}
        onScrollToIndexFailed={(info) => {
          // Handle scroll to index failure gracefully
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
      />

      {renderPagination()}
    </View>
  );
};

// Animated Card Component with scaling
interface AnimatedCardProps {
  point: AcupressurePoint;
  index: number;
  scrollX: Animated.SharedValue<number>;
  onPress: () => void;
  variant: 'default' | 'compact' | 'featured' | 'premium';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  point,
  index,
  scrollX,
  onPress,
  variant,
}) => {
  const inputRange = [
    (index - 1) * SNAP_INTERVAL,
    index * SNAP_INTERVAL,
    (index + 1) * SNAP_INTERVAL,
  ];

  const animatedStyle = useAnimatedStyle(() => {
    // Scale the center card to 1.05, others to 0.95
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.95, 1.05, 0.95],
      Extrapolate.CLAMP
    );

    // Slight opacity reduction for off-center cards
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.cardContainer, animatedStyle]}>
      <PointCard point={point} onPress={onPress} variant={variant} />
    </Animated.View>
  );
};

// Animated Pagination Dot
interface PaginationDotProps {
  index: number;
  activeIndex: number;
  scrollX: Animated.SharedValue<number>;
  totalDots: number;
}

const PaginationDot: React.FC<PaginationDotProps> = ({
  index,
  activeIndex,
  scrollX,
  totalDots,
}) => {
  const inputRange = [
    (index - 1) * SNAP_INTERVAL,
    index * SNAP_INTERVAL,
    (index + 1) * SNAP_INTERVAL,
  ];

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      scrollX.value,
      inputRange,
      [8, 24, 8],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.4, 1, 0.4],
      Extrapolate.CLAMP
    );

    return {
      width,
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.paginationDot,
        animatedStyle,
        {
          backgroundColor: index === activeIndex ? Colors.primary[500] : Colors.neutral[300],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  } as ViewStyle,

  listContent: {
    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2, // Center first and last cards
    paddingVertical: Spacing.sm,
  } as ViewStyle,

  cardContainer: {
    width: CARD_WIDTH,
    marginRight: CARD_SPACING,
    ...Platform.select({
      web: {
        // Smooth transitions on web
        transition: 'transform 0.3s ease, opacity 0.3s ease' as any,
      },
    }),
  } as ViewStyle,

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.md,
    gap: Spacing.xs,
  } as ViewStyle,

  paginationDot: {
    height: 8,
    borderRadius: BorderRadius.full,
    ...Platform.select({
      web: {
        transition: 'width 0.3s ease, opacity 0.3s ease' as any,
      },
    }),
  } as ViewStyle,
});

export default PointCarousel;
