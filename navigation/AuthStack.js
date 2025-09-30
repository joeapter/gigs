import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupStep1 from '../screens/SignupStep1';
import SignupStep2 from '../screens/SignupStep2';
import PosterTabs from './PosterTabs';
import SeekerTabs from './SeekerTabs';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignupStep1" component={SignupStep1} />
      <Stack.Screen name="SignupStep2" component={SignupStep2} />
      <Stack.Screen name="PosterTabs" component={PosterTabs} />
      <Stack.Screen name="SeekerTabs" component={SeekerTabs} />
    </Stack.Navigator>
  );
}
