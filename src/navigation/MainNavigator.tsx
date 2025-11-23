import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { Colors } from '@constants';
import { RootStackParamList } from '@types';

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
import SubscriptionScreen from '@screens/SubscriptionScreen';
import RemindersScreen from '@screens/RemindersScreen';
import { TypesenseTest } from '@components/TypesenseTest';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const { t } = useTranslation();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PointDetail"
        component={PointDetailScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: t('pointDetail.title'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Questionnaire"
        component={QuestionnaireScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: t('questionnaire.guidedRelief'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="BeginnerGuide"
        component={BeginnerGuideScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: t('guide.beginnerGuideTitle'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Reminders"
        component={RemindersScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Practice Reminders',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Upgrade to Premium',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name="TypesenseTest" 
        component={TypesenseTest}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: t('settings.typesenseTest'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AdminUpdate"
        component={AdminUpdateScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Admin: Update Search',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLoginScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Admin Login',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.text.inverse,
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'My Account',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AuthSuccess"
        component={AuthSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthFailure"
        component={AuthFailureScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;