import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";
import { AppointmentState } from "../../types";
import {
  BORDER_COLOR,
  PRIMARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
} from "../../utils/config";
import { StatusBadge } from "./StatusBadge";

interface AppointmentCardItem {
  id: string;
  time_slot_from?: string | null;
  time_slot_to?: string | null;
  patient_name?: string | null;
  state: AppointmentState;
  doctor_name?: string | null;
  nurse_name?: string | null;
  doctor?: { user: { display_name?: string | null } } | null;
  nurse?: { user: { display_name?: string | null } } | null;
  location?: { location_name?: string | null } | null;
}

interface AppointmentCardProps {
  appointment: AppointmentCardItem;
  onPress: () => void;
  role: "doctor" | "nurse";
}

export function AppointmentCard({
  appointment,
  onPress,
  role,
}: AppointmentCardProps) {
  const start = parseISO(appointment.time_slot_from ?? '');
  const end = parseISO(appointment.time_slot_to ?? '');
  const dateStr = format(start, "EEE, MMM d");
  const timeStr = `${format(start, "h:mm a")} – ${format(end, "h:mm a")}`;

  const counterpart =
    role === "doctor"
      ? (appointment.nurse?.user.display_name ?? appointment.nurse_name)
      : (appointment.doctor?.user.display_name ?? appointment.doctor_name);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={styles.header}>
        <View style={styles.dateBlock}>
          <Text style={styles.dateText}>{dateStr}</Text>
          <Text style={styles.timeText}>{timeStr}</Text>
        </View>
        <StatusBadge state={appointment.state} />
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <Ionicons name="person-outline" size={15} color={TEXT_COLOR_LIGHT} />
          <Text style={styles.patientName}>{appointment.patient_name}</Text>
        </View>

        {counterpart ? (
          <View style={styles.row}>
            <Ionicons
              name={
                role === "doctor"
                  ? "medkit-outline"
                  : ("stethoscope-outline" as any)
              }
              size={15}
              color={TEXT_COLOR_LIGHT}
            />
            <Text style={styles.meta}>{counterpart}</Text>
          </View>
        ) : null}

        {appointment.location ? (
          <View style={styles.row}>
            <Ionicons
              name="location-outline"
              size={15}
              color={TEXT_COLOR_LIGHT}
            />
            <Text style={styles.meta}>
              {appointment.location.location_name}
            </Text>
          </View>
        ) : null}
      </View>

      {appointment.state === "PENDING" || appointment.state === "STARTED" ? (
        <View style={styles.footer}>
          <Ionicons name="videocam-outline" size={16} color={PRIMARY_COLOR} />
          <Text style={styles.joinText}>Attend Appointment</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  dateBlock: { flex: 1 },
  dateText: { fontSize: 14, fontWeight: "700", color: TEXT_COLOR },
  timeText: { fontSize: 13, color: TEXT_COLOR_LIGHT, marginTop: 2 },
  body: { gap: 5 },
  row: { flexDirection: "row", alignItems: "center", gap: 6 },
  patientName: { fontSize: 15, fontWeight: "600", color: TEXT_COLOR },
  meta: { fontSize: 13, color: TEXT_COLOR_LIGHT },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
  },
  joinText: { fontSize: 13, fontWeight: "600", color: PRIMARY_COLOR },
});
