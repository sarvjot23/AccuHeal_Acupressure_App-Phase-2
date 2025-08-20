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
        tabBarActiveTintColor: Colors.primary[600],
        tabBarInactiveTintColor: Colors.neutral[400],
        tabBarStyle: {
          backgroundColor: Colors.background.primary,
          borderTopColor: Colors.border.light,
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
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
        name="TypesenseTest" 
        component={TypesenseTest}
        options={{
          title: t('settings.typesenseTest'),
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;