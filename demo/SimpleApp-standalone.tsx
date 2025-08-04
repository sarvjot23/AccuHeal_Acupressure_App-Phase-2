import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Simple colors
const Colors = {
  primary: '#4ade80',
  primaryDark: '#16a34a',
  secondary: '#f0fdf4',
  white: '#ffffff',
  gray: '#6b7280',
  lightGray: '#f3f4f6',
  darkGray: '#374151',
  border: '#e5e7eb',
};

const AccuHealApp = () => {
  const quickActions = [
    { title: 'Headache Relief', subtitle: 'Quick acupressure for headaches', icon: '🧠' },
    { title: 'Stress Relief', subtitle: 'Calm your mind and body', icon: '💆‍♀️' },
    { title: 'Better Sleep', subtitle: 'Points for restful sleep', icon: '😴' },
  ];

  const samplePoints = [
    {
      name: 'Large Intestine 4 - LI4',
      location: 'Between thumb and index finger',
      conditions: 'headache, stress, pain relief',
      code: 'LI4'
    },
    {
      name: 'Governing Vessel 20 - GV20',
      location: 'Top of the head',
      conditions: 'mental clarity, focus, dizziness',
      code: 'GV20'
    },
    {
      name: 'Gallbladder 21 - GB21',
      location: 'Shoulder muscle highest point',
      conditions: 'shoulder tension, neck pain, stress',
      code: 'GB21'
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AccuHeal</Text>
        <Text style={styles.headerSubtitle}>Natural Acupressure Guide</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to AccuHeal</Text>
          <Text style={styles.welcomeSubtitle}>
            Your guide to natural acupressure healing
          </Text>
        </View>

        {/* Quick Start Button */}
        <TouchableOpacity 
          style={styles.quickStartButton}
          onPress={() => alert('Guided session feature - Full version includes step-by-step questionnaire!')}
        >
          <Text style={styles.quickStartText}>🌟 Start Guided Session</Text>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Find Relief For...</Text>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionCard}
              onPress={() => alert(`${action.title} - Full version includes detailed point recommendations!`)}
            >
              <View style={styles.actionContent}>
                <View style={styles.actionIcon}>
                  <Text style={styles.iconText}>{action.icon}</Text>
                </View>
                <View style={styles.actionText}>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Sample Points */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Acupressure Points</Text>
          {samplePoints.map((point, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.pointCard}
              onPress={() => alert(`${point.name} - Full version includes detailed instructions, images, and step-by-step guidance!`)}
            >
              <View style={styles.pointContent}>
                <View style={styles.pointInfo}>
                  <Text style={styles.pointName}>{point.name}</Text>
                  <Text style={styles.pointLocation}>📍 {point.location}</Text>
                  <Text style={styles.pointConditions}>Helps with: {point.conditions}</Text>
                </View>
                <View style={styles.pointCode}>
                  <Text style={styles.codeText}>{point.code}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Features Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Full Version Features</Text>
          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🔍</Text>
              <Text style={styles.featureTitle}>Smart Search</Text>
              <Text style={styles.featureDesc}>Search by symptoms, body parts, or point codes</Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🌏</Text>
              <Text style={styles.featureTitle}>Bilingual</Text>
              <Text style={styles.featureDesc}>English & Hindi support</Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>📚</Text>
              <Text style={styles.featureTitle}>50+ Points</Text>
              <Text style={styles.featureDesc}>Comprehensive acupressure library</Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🎯</Text>
              <Text style={styles.featureTitle}>Guided Sessions</Text>
              <Text style={styles.featureDesc}>Personalized recommendations</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>⚠️ Important Notice</Text>
          <Text style={styles.footerText}>
            AccuHeal is for educational purposes only. Always consult healthcare providers for medical concerns.
          </Text>
          <Text style={styles.footerCopyright}>
            Made with ❤️ for natural wellness • © 2025 AccuHeal
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
  },
  welcomeSection: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: Colors.white,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.darkGray,
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
    maxWidth: 280,
  },
  quickStartButton: {
    backgroundColor: Colors.primary,
    margin: 20,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickStartText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
  },
  section: {
    margin: 20,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 16,
  },
  actionCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 24,
  },
  actionText: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.darkGray,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: Colors.gray,
  },
  chevron: {
    fontSize: 24,
    color: Colors.gray,
  },
  pointCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  pointContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  pointInfo: {
    flex: 1,
    marginRight: 16,
  },
  pointName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.darkGray,
    marginBottom: 6,
  },
  pointLocation: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 4,
  },
  pointConditions: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '500',
  },
  pointCode: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  codeText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  featureIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkGray,
    marginBottom: 4,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 12,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 16,
  },
  footer: {
    backgroundColor: Colors.white,
    padding: 24,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fbbf24',
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d97706',
    marginBottom: 8,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 12,
  },
  footerCopyright: {
    fontSize: 12,
    color: Colors.gray,
    textAlign: 'center',
  },
});

export default AccuHealApp;