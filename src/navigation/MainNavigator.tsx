import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { Colors } from '@constants';
import { BottomTabParamList, RootStackParamList } from '@types';

// Screens
import HomeScreen from '@screens/HomeScreen';
import SearchScreen from '@screens/SearchScreen';
import GuideScreen from '@screens/GuideScreen';
import SettingsScreen from '@screens/SettingsScreen';
import PointDetailScreen from '@screens/PointDetailScreen';
import QuestionnaireScreen from '@screens/QuestionnaireScreen';
import BeginnerGuideScreen from '@screens/BeginnerGuideScreen';
import AdminUpdateScreen from '@screens/AdminUpdateScreen';
import LoginScreen from '@screens/LoginScreen';
import SignupScreen from '@screens/SignupScreen';
import AdminLoginScreen from '@screens/AdminLoginScreen';
import MyAccountScreen from '@screens/MyAccountScreen';
import AuthSuccessScreen from '@screens/AuthSuccessScreen';
import AuthFailureScreen from '@screens/AuthFailureScreen';
import { TypesenseTest } from '@components/TypesenseTest';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Guide':
              iconName = focused ? 'help-circle' : 'help-circle-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarStyle: {
          backgroundColor: Colors.info,
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: Colors.info,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 16,
          paddingTop: 10,
          paddingBottom: 12,
          paddingHorizontal: 20,
          height: 70,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 4,
          marginBottom: 2,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
        headerStyle: {
          backgroundColor: Colors.primary[500],
        },
        headerTintColor: Colors.text.inverse,
        headerTitleStyle: {
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('common.home'),
          headerTitle: 'AccuHeal',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: t('common.search'),
          headerTitle: t('common.search'),
        }}
      />
      <Tab.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          title: t('common.guide'),
          headerTitle: t('common.guide'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('common.settings'),
          headerTitle: t('common.settings'),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  const { t } = useTranslation();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary[500],
        },
        headerTintColor: Colors.text.inverse,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PointDetail"
        component={PointDetailScreen}
        options={{
          title: t('pointDetail.title'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Questionnaire"
        component={QuestionnaireScreen}
        options={{
          title: t('questionnaire.guidedRelief'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="BeginnerGuide"
        component={BeginnerGuideScreen}
        options={{
          title: t('guide.beginnerGuideTitle'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name="TypesenseTest" 
        component={TypesenseTest}
        options={{
          title: t('settings.typesenseTest'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AdminUpdate"
        component={AdminUpdateScreen}
        options={{
          title: 'Admin: Update Search',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: 'Sign Up',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLoginScreen}
        options={{
          title: 'Admin Login',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          title: 'My Account',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AuthSuccess"
        component={AuthSuccessScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthFailure"
        component={AuthFailureScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;