import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { NurseAppointmentsScreen } from "../screens/nurse/NurseAppointmentsScreen";
import { AppointmentDetailScreen } from "../screens/shared/AppointmentDetailScreen";
import { CreateAppointmentScreen } from "../screens/nurse/CreateAppointmentScreen";
import { ProfileScreen } from "../screens/shared/ProfileScreen";
import { NotificationsScreen } from "../screens/shared/NotificationsScreen";
import { PRIMARY_COLOR, TEXT_COLOR_LIGHT } from "../utils/config";
import type { NurseStackParamList } from "./types";

const Stack = createNativeStackNavigator<NurseStackParamList>();
const Tab = createBottomTabNavigator();

function NurseAppointmentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NurseAppointments"
        component={NurseAppointmentsScreen}
        options={{ title: "Appointments" }}
      />
      <Stack.Screen
        name="AppointmentDetail"
        component={AppointmentDetailScreen}
        options={{ title: "Appointment Details" }}
      />
      <Stack.Screen
        name="CreateAppointment"
        component={CreateAppointmentScreen}
        options={{ title: "New Appointment" }}
      />
    </Stack.Navigator>
  );
}

export function NurseNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: TEXT_COLOR_LIGHT,
        tabBarStyle: { borderTopWidth: 1, borderTopColor: "#E5E5E5" },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, string> = {
            Appointments: focused ? "clipboard" : "clipboard-outline",
            Notifications: focused ? "notifications" : "notifications-outline",
            Profile: focused ? "person" : "person-outline",
          };
          return (
            <Ionicons
              name={icons[route.name] as any}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Appointments" component={NurseAppointmentsStack} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}
