import React, { useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSubscription } from "urql";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import { GET_DOCTOR_APPOINTMENTS } from "../../graphql/appointments";
import { AppointmentCard } from "../../components/common/AppointmentCard";
import { LoadingScreen } from "../../components/common/LoadingScreen";
import { Appointment, AppointmentState } from "../../types";
import {
  BORDER_COLOR,
  PRIMARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
} from "../../utils/config";
import type { DoctorStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<DoctorStackParamList, "DoctorAppointments">;

const TABS: { label: string; states: AppointmentState[] }[] = [
  { label: "Upcoming", states: ["PENDING", "STARTED"] },
  { label: "Past", states: ["COMPLETED", "CANCELLED", "UNATTENDED"] },
];

export function DoctorAppointmentsScreen({ navigation }: Props) {
  const { user } = useAuth();
  const [tabIndex, setTabIndex] = useState(0);

  const [{ data, fetching }, refetch] = useSubscription({
    query: GET_DOCTOR_APPOINTMENTS,
    variables: { doctor_id: user?.roleId, states: TABS[tabIndex].states },
    pause: !user?.roleId,
  });

  const appointments: Appointment[] = data?.appointments ?? [];

  if (fetching && !data)
    return <LoadingScreen message="Loading appointments…" />;

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {TABS.map((tab, i) => (
          <TouchableOpacity
            key={tab.label}
            style={[styles.tab, i === tabIndex && styles.tabActive]}
            onPress={() => setTabIndex(i)}
          >
            <Text
              style={[styles.tabText, i === tabIndex && styles.tabTextActive]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(a) => a.id}
        renderItem={({ item }) => (
          <AppointmentCard
            appointment={item}
            role="doctor"
            onPress={() =>
              navigation.navigate("AppointmentDetail", {
                appointmentId: item.id,
              })
            }
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={fetching}
            onRefresh={() => refetch({ requestPolicy: "network-only" })}
            tintColor={PRIMARY_COLOR}
          />
        }
        contentContainerStyle={
          appointments.length === 0 ? styles.emptyContainer : styles.list
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <View style={styles.calendarCard}>
              <View style={styles.calendarHeader}>
                <Text style={styles.calendarMonth}>
                  {new Date()
                    .toLocaleDateString("en-US", { month: "long" })
                    .toUpperCase()}
                </Text>
              </View>
              <View style={styles.calendarBody}>
                <Text style={styles.calendarDay}>{new Date().getDate()}</Text>
                <Text style={styles.calendarYear}>
                  {new Date().getFullYear()}
                </Text>
              </View>
            </View>
            <Text style={styles.emptyTitle}>No appointments</Text>
            <Text style={styles.emptyText}>
              {tabIndex === 0
                ? "You have no upcoming appointments."
                : "No past appointments found."}
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabActive: { borderBottomColor: PRIMARY_COLOR },
  tabText: { fontSize: 14, fontWeight: "500", color: TEXT_COLOR_LIGHT },
  tabTextActive: { color: PRIMARY_COLOR, fontWeight: "700" },
  list: { paddingVertical: 8 },
  emptyContainer: { flexGrow: 1 },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  calendarCard: {
    width: 100,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  calendarHeader: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    alignItems: "center",
  },
  calendarMonth: {
    fontSize: 11,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1.5,
  },
  calendarBody: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: BORDER_COLOR,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  calendarDay: {
    fontSize: 38,
    fontWeight: "800",
    color: TEXT_COLOR,
    lineHeight: 42,
  },
  calendarYear: {
    fontSize: 12,
    fontWeight: "500",
    color: TEXT_COLOR_LIGHT,
    marginTop: 2,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_COLOR,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: TEXT_COLOR_LIGHT,
    textAlign: "center",
    paddingHorizontal: 32,
  },
});
