import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "urql";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import { GET_NURSE_APPOINTMENTS } from "../../graphql/appointments";
import { AppointmentCard } from "../../components/common/AppointmentCard";
import { LoadingScreen } from "../../components/common/LoadingScreen";
import { Appointment, AppointmentState } from "../../types";
import {
  BORDER_COLOR,
  PRIMARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
} from "../../utils/config";
import type { NurseStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<NurseStackParamList, "NurseAppointments">;

const TABS: { label: string; states: AppointmentState[] }[] = [
  { label: "Upcoming", states: ["PENDING", "STARTED"] },
  { label: "Past", states: ["COMPLETED", "CANCELLED", "UNATTENDED"] },
];

export function NurseAppointmentsScreen({ navigation }: Props) {
  const { user } = useAuth();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAppointment")}
          style={{ marginRight: 4, padding: 4 }}
        >
          <Ionicons name="add-circle-outline" size={26} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [{ data, fetching }, refetch] = useQuery({
    query: GET_NURSE_APPOINTMENTS,
    variables: { nurse_id: user?.roleId, states: TABS[tabIndex].states },
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
            role="nurse"
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
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={styles.emptyTitle}>No appointments</Text>
            <Text style={styles.emptyText}>
              {tabIndex === 0
                ? "No upcoming appointments assigned."
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
  emptyContainer: { flex: 1 },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
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
