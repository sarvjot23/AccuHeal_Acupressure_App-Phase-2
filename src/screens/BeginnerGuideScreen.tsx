import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@constants';
import { Card } from '@components';
import { RootStackParamList } from '@types';

const { width } = Dimensions.get('window');

interface GuideStep {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  tips: {
    en: string[];
    hi: string[];
  };
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

type BeginnerGuideNavigationProp = StackNavigationProp<RootStackParamList>;

const BeginnerGuideScreen: React.FC = () => {
  const navigation = useNavigation<BeginnerGuideNavigationProp>();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const guideSteps: GuideStep[] = [
    {
      id: 'introduction',
      title: {
        en: 'What is Acupressure?',
        hi: 'एक्यूप्रेशर क्या है?'
      },
      content: {
        en: 'Acupressure is an ancient healing technique that involves applying pressure to specific points on the body. These pressure points, when stimulated, can help relieve pain, reduce stress, and promote overall wellness. Unlike acupuncture, acupressure uses finger pressure instead of needles, making it safe and easy to practice at home.',
        hi: 'एक्यूप्रेशर एक प्राचीन चिकित्सा तकनीक है जिसमें शरीर के विशिष्ट बिंदुओं पर दबाव डाला जाता है। इन दबाव बिंदुओं को उत्तेजित करने से दर्द कम होता है, तनाव घटता है और समग्र स्वास्थ्य में सुधार होता है। एक्यूपंक्चर के विपरीत, एक्यूप्रेशर में सुई के बजाय अंगुली का दबाव उपयोग होता है, जो इसे घर पर अभ्यास के लिए सुरक्षित और आसान बनाता है।'
      },
      tips: {
        en: [
          'No special tools needed - just your hands',
          'Can be practiced anywhere, anytime',
          'Completely non-invasive and natural'
        ],
        hi: [
          'कोई विशेष उपकरण की आवश्यकता नहीं - केवल आपके हाथ',
          'कहीं भी, कभी भी अभ्यास किया जा सकता है',
          'पूर्णतः गैर-आक्रामक और प्राकृतिक'
        ]
      },
      icon: 'heart-outline',
      color: Colors.primary[500]
    },
    {
      id: 'preparation',
      title: {
        en: 'Preparing for Acupressure',
        hi: 'एक्यूप्रेशर की तैयारी'
      },
      content: {
        en: 'Before beginning your acupressure session, create a calm environment. Find a comfortable position, take deep breaths, and clear your mind. Wash your hands and ensure your nails are trimmed. Wear comfortable clothing that allows easy access to pressure points.',
        hi: 'एक्यूप्रेशर सत्र शुरू करने से पहले, एक शांत वातावरण बनाएं। आरामदायक स्थिति में बैठें या लेटें, गहरी सांस लें और अपना मन शांत करें। अपने हाथ धोएं और सुनिश्चित करें कि आपके नाखून कटे हों। आरामदायक कपड़े पहनें जो दबाव बिंदुओं तक आसान पहुंच की अनुमति दें।'
      },
      tips: {
        en: [
          'Choose a quiet, comfortable space',
          'Remove jewelry that might interfere',
          'Set aside 10-15 minutes for your session',
          'Keep water nearby to stay hydrated'
        ],
        hi: [
          'एक शांत, आरामदायक स्थान चुनें',
          'हस्तक्षेप करने वाले आभूषण हटा दें',
          'अपने सत्र के लिए 10-15 मिनट अलग रखें',
          'हाइड्रेटेड रहने के लिए पानी पास रखें'
        ]
      },
      icon: 'checkmark-circle-outline',
      color: Colors.secondary[500]
    },
    {
      id: 'technique',
      title: {
        en: 'Basic Technique',
        hi: 'बुनियादी तकनीक'
      },
      content: {
        en: 'Use your thumb, index, or middle finger to apply steady pressure to the acupressure point. Start with light pressure and gradually increase until you feel a slight ache or tingling sensation. Hold the pressure for 1-3 minutes while breathing deeply. Release slowly and move to the next point.',
        hi: 'एक्यूप्रेशर बिंदु पर स्थिर दबाव डालने के लिए अपने अंगूठे, तर्जनी या मध्यमा अंगुली का उपयोग करें। हल्के दबाव से शुरू करें और धीरे-धीरे तब तक बढ़ाएं जब तक आपको हल्का दर्द या झुनझुनी महसूस न हो। गहरी सांस लेते हुए 1-3 मिनट तक दबाव बनाए रखें। धीरे-धीरे छोड़ें और अगले बिंदु पर जाएं।'
      },
      tips: {
        en: [
          'Apply firm, steady pressure - not painful',
          'Use circular motions for better stimulation',
          'Breathe deeply throughout the process',
          'Listen to your body and adjust pressure'
        ],
        hi: [
          'मजबूत, स्थिर दबाव डालें - दर्दनाक नहीं',
          'बेहतर उत्तेजना के लिए वृत्ताकार गति का उपयोग करें',
          'पूरी प्रक्रिया के दौरान गहरी सांस लें',
          'अपने शरीर की सुनें और दबाव समायोजित करें'
        ]
      },
      icon: 'hand-left-outline',
      color: Colors.primary[400]
    },
    {
      id: 'safety',
      title: {
        en: 'Safety Guidelines',
        hi: 'सुरक्षा दिशानिर्देश'
      },
      content: {
        en: 'Acupressure is generally safe, but certain precautions should be taken. Avoid applying pressure if you have injuries, wounds, or infections in the area. Pregnant women should avoid certain points. If you experience severe pain or discomfort, stop immediately and consult a healthcare professional.',
        hi: 'एक्यूप्रेशर आमतौर पर सुरक्षित है, लेकिन कुछ सावधानियां बरतनी चाहिए। यदि उस क्षेत्र में चोट, घाव या संक्रमण है तो दबाव न डालें। गर्भवती महिलाओं को कुछ बिंदुओं से बचना चाहिए। यदि आपको गंभीर दर्द या परेशानी होती है, तुरंत रुकें और स्वास्थ्य पेशेवर से सलाह लें।'
      },
      tips: {
        en: [
          'Never apply pressure on broken skin',
          'Avoid points during pregnancy without guidance',
          'Stop if you feel sharp or severe pain',
          'Consult a doctor for serious health conditions'
        ],
        hi: [
          'कभी भी टूटी हुई त्वचा पर दबाव न डालें',
          'गर्भावस्था के दौरान बिना मार्गदर्शन के बिंदुओं से बचें',
          'तेज या गंभीर दर्द महसूस होने पर रुकें',
          'गंभीर स्वास्थ्य स्थितियों के लिए डॉक्टर से सलाह लें'
        ]
      },
      icon: 'shield-checkmark-outline',
      color: Colors.warning
    },
    {
      id: 'getting-started',
      title: {
        en: 'Getting Started',
        hi: 'शुरुआत करना'
      },
      content: {
        en: 'Ready to begin your acupressure journey? Start with simple, commonly used points like LI4 (between thumb and index finger) for headaches, or Yin Tang (between eyebrows) for stress relief. Practice regularly for 5-10 minutes daily to experience the full benefits.',
        hi: 'अपनी एक्यूप्रेशर यात्रा शुरू करने के लिए तैयार हैं? सिरदर्द के लिए LI4 (अंगूठे और तर्जनी के बीच) या तनाव राहत के लिए यिन तांग (भौंहों के बीच) जैसे सामान्य, आसान बिंदुओं से शुरुआत करें। पूरे लाभ का अनुभव करने के लिए प्रतिदिन 5-10 मिनट नियमित रूप से अभ्यास करें।'
      },
      tips: {
        en: [
          'Start with 2-3 points per session',
          'Practice at the same time each day',
          'Keep a journal to track your progress',
          'Be patient - benefits may take time to appear'
        ],
        hi: [
          'प्रति सत्र 2-3 बिंदुओं से शुरुआत करें',
          'प्रतिदिन एक ही समय पर अभ्यास करें',
          'अपनी प्रगति का ट्रैक रखने के लिए एक डायरी रखें',
          'धैर्य रखें - लाभ दिखने में समय लग सकता है'
        ]
      },
      icon: 'rocket-outline',
      color: Colors.success
    }
  ];

  const renderStepIndicator = () => (
    <View style={styles.stepIndicator}>
      {guideSteps.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.stepDot,
            index === activeStep && styles.activeStepDot,
            index < activeStep && styles.completedStepDot
          ]}
          onPress={() => setActiveStep(index)}
        >
          {index < activeStep ? (
            <Ionicons name="checkmark" size={12} color={Colors.text.inverse} />
          ) : (
            <Text style={[
              styles.stepNumber,
              index === activeStep && styles.activeStepNumber
            ]}>
              {index + 1}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

  const currentStep = guideSteps[activeStep];

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
        bounces={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.headerIcon, { backgroundColor: `${currentStep.color}20` }]}>
            <Ionicons name={currentStep.icon} size={32} color={currentStep.color} />
          </View>
          <Text style={styles.headerTitle}>
            {t('guide.beginnerGuideTitle')}
          </Text>
          <Text style={styles.headerSubtitle}>
            {t('guide.beginnerGuideSubtitle')}
          </Text>
        </View>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Current Step Content */}
        <Card style={styles.stepCard}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepTitle}>
              {currentStep.title[currentLanguage] || currentStep.title.en}
            </Text>
            <Text style={styles.stepNumber}>
              {activeStep + 1} {t('common.of')} {guideSteps.length}
            </Text>
          </View>

          <Text style={styles.stepContent}>
            {currentStep.content[currentLanguage] || currentStep.content.en}
          </Text>

          <View style={styles.tipsSection}>
            <View style={styles.tipsHeader}>
              <Ionicons name="bulb-outline" size={20} color={Colors.secondary[600]} />
              <Text style={styles.tipsTitle}>{t('guide.tips')}</Text>
            </View>
            {currentStep.tips[currentLanguage]?.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <View style={styles.tipBullet} />
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Navigation Buttons */}
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[
              styles.navButton,
              styles.prevButton,
              activeStep === 0 && styles.disabledButton
            ]}
            onPress={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            <Ionicons 
              name="chevron-back" 
              size={20} 
              color={activeStep === 0 ? Colors.neutral[400] : Colors.text.primary} 
            />
            <Text style={[
              styles.navButtonText,
              activeStep === 0 && styles.disabledButtonText
            ]}>
              {t('common.previous')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
              styles.nextButton,
              activeStep === guideSteps.length - 1 ? styles.finishButton : null
            ]}
            onPress={() => {
              if (activeStep < guideSteps.length - 1) {
                setActiveStep(activeStep + 1);
              } else {
                // On final step, navigate back to Guide screen or show success
                console.log('Starting practice - navigating back to guide');
                // You could also navigate to a specific beginner points screen
                // navigation.navigate('Search', { initialQuery: 'beginner' });
                navigation.goBack();
              }
            }}
          >
            <Text style={[
              styles.navButtonText,
              styles.nextButtonText,
              activeStep === guideSteps.length - 1 && styles.finishButtonText
            ]}>
              {activeStep === guideSteps.length - 1 
                ? t('guide.startPracticing') 
                : t('common.next')
              }
            </Text>
            {activeStep !== guideSteps.length - 1 && (
              <Ionicons name="chevron-forward" size={20} color={Colors.text.inverse} />
            )}
          </TouchableOpacity>
        </View>

        {/* Quick Start Section */}
        <Card style={styles.quickStartCard}>
          <View style={styles.quickStartHeader}>
            <Ionicons name="flash" size={24} color={Colors.primary[600]} />
            <Text style={styles.quickStartTitle}>{t('guide.quickStart')}</Text>
          </View>
          <Text style={styles.quickStartText}>
            {t('guide.quickStartDescription')}
          </Text>
          <TouchableOpacity 
            style={styles.quickStartButton}
            onPress={() => {
              console.log('Try Basic Points clicked - navigating to search');
              navigation.navigate('Search', { initialQuery: 'beginner' });
            }}
          >
            <Text style={styles.quickStartButtonText}>
              {t('guide.tryBasicPoints')}
            </Text>
            <Ionicons name="arrow-forward" size={16} color={Colors.primary[600]} />
          </TouchableOpacity>
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
  },
  scrollContent: {
    padding: Spacing.md,
    paddingBottom: 100, // Extra padding at bottom for scrolling
    minHeight: '120%', // Force content to be taller than screen
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  headerIcon: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  headerTitle: {
    ...Typography.h2,
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  headerSubtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 300,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xl,
    gap: Spacing.sm,
  },
  stepDot: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.neutral[200],
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.neutral[300],
  },
  activeStepDot: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  completedStepDot: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  stepNumber: {
    ...Typography.caption,
    color: Colors.neutral[600],
    fontWeight: '600',
  },
  activeStepNumber: {
    color: Colors.text.inverse,
  },
  stepCard: {
    marginBottom: Spacing.lg,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  stepTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
    flex: 1,
    marginRight: Spacing.md,
  },
  stepContent: {
    ...Typography.body1,
    color: Colors.text.primary,
    lineHeight: 24,
    marginBottom: Spacing.lg,
  },
  tipsSection: {
    backgroundColor: Colors.secondary[50],
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.secondary[200],
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  tipsTitle: {
    ...Typography.h6,
    color: Colors.secondary[800],
    marginLeft: Spacing.sm,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  tipBullet: {
    width: 6,
    height: 6,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.secondary[600],
    marginTop: 8,
    marginRight: Spacing.sm,
  },
  tipText: {
    ...Typography.body2,
    color: Colors.secondary[700],
    flex: 1,
    lineHeight: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.xl,
    gap: Spacing.md,
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    ...Shadows.sm,
  },
  prevButton: {
    backgroundColor: Colors.background.primary,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  nextButton: {
    backgroundColor: Colors.primary[500],
  },
  finishButton: {
    backgroundColor: Colors.success,
  },
  disabledButton: {
    backgroundColor: Colors.neutral[100],
    borderColor: Colors.neutral[200],
  },
  navButtonText: {
    ...Typography.body1,
    fontWeight: '600',
    marginHorizontal: Spacing.xs,
  },
  nextButtonText: {
    color: Colors.text.inverse,
  },
  finishButtonText: {
    color: Colors.text.inverse,
  },
  disabledButtonText: {
    color: Colors.neutral[400],
  },
  quickStartCard: {
    backgroundColor: Colors.primary[50],
    borderWidth: 1,
    borderColor: Colors.primary[200],
  },
  quickStartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  quickStartTitle: {
    ...Typography.h5,
    color: Colors.primary[800],
    marginLeft: Spacing.sm,
  },
  quickStartText: {
    ...Typography.body2,
    color: Colors.primary[700],
    marginBottom: Spacing.md,
    lineHeight: 20,
  },
  quickStartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  quickStartButtonText: {
    ...Typography.body1,
    color: Colors.primary[600],
    fontWeight: '600',
    marginRight: Spacing.xs,
  },
});

export default BeginnerGuideScreen;