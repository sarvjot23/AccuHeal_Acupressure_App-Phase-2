import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// SIMPLE TEST COMPONENT TO ISOLATE SCROLLING ISSUE
export const PointDetailScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'yellow' }}>
      <View style={{ height: 300, backgroundColor: 'red' }}>
        <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', paddingTop: 100 }}>
          RED SECTION - TOP
        </Text>
      </View>
      
      <View style={{ height: 300, backgroundColor: 'blue' }}>
        <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', paddingTop: 100 }}>
          BLUE SECTION - MIDDLE
        </Text>
      </View>
      
      <View style={{ height: 400, backgroundColor: 'green' }}>
        <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', paddingTop: 150 }}>
          GREEN SECTION - SCROLL TO SEE ME
        </Text>
      </View>
      
      <View style={{ height: 500, backgroundColor: 'purple' }}>
        <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', paddingTop: 200 }}>
          PURPLE SECTION - IF YOU SEE THIS, SCROLLING WORKS!
        </Text>
      </View>
    </ScrollView>
  );
};