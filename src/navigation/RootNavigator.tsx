import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import { AuthNavigator } from './AuthNavigator';
import { DoctorNavigator } from './DoctorNavigator';
import { NurseNavigator } from './NurseNavigator';
import { MeetingRoomScreen } from '../screens/meeting/MeetingRoomScreen';
import { LoadingScreen } from '../components/common/LoadingScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { signedIn, user } = useAuth();

  const isNurse = user?.role === 'nurse' || user?.role === 'admin-nurse';

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!signedIn ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : isNurse ? (
        <Stack.Screen name="NurseTabs" component={NurseNavigator} />
      ) : (
        <Stack.Screen name="DoctorTabs" component={DoctorNavigator} />
      )}
      <Stack.Screen
        name="Meeting"
        component={MeetingRoomScreen}
        options={{ presentation: 'fullScreenModal', gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

export function RootNavigator() {
  const { loading } = useAuth();

  if (loading) return <LoadingScreen message="Starting HealthChat…" />;
  return <AppNavigator />;
}
