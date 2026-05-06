import React from "react";
import {
  Modal,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";
import type { IMeetAppointment } from "../../hooks/useMeetingRoom";

const ORANGE = "#F0821D";

interface AppointmentInfoProps {
  visible: boolean;
  appointment: IMeetAppointment | null;
  onClose: () => void;
}

export function AppointmentInfo({
  visible,
  appointment,
  onClose,
}: AppointmentInfoProps) {
  const timeRange =
    appointment?.time_slot_from && appointment?.time_slot_to
      ? `${format(parseISO(appointment.time_slot_from), "h:mm a")} - ${format(parseISO(appointment.time_slot_to), "h:mm a")}`
      : "—";

  const facilityName =
    appointment?.location?.facility_account?.facility_name ?? null;
  const locationAddress = appointment?.location?.address ?? null;

  const handleCopyLink = async () => {
    if (appointment?.meeting_link) {
      await Share.share({ message: appointment.meeting_link });
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />
      <View style={styles.sheet}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Appointment Info</Text>
          <TouchableOpacity onPress={onClose} hitSlop={8}>
            <Ionicons name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.body}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <Text style={styles.label}>Appointment Time</Text>
            <Text style={styles.value}>{timeRange}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Patient</Text>
              <Text style={styles.value}>
                {appointment?.patient_name ?? "—"}
              </Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Doctor</Text>
              <Text style={styles.value}>
                {appointment?.doctor_name ?? "—"}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Accounts and Location</Text>
            {facilityName ? (
              <Text style={styles.value}>{facilityName}</Text>
            ) : null}
            {locationAddress ? (
              <Text style={styles.value}>{locationAddress}</Text>
            ) : null}
            {!facilityName && !locationAddress ? (
              <Text style={styles.value}>—</Text>
            ) : null}
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Notes</Text>
            {appointment?.patient_vitals?.notes ? (
              <Text style={styles.value}>
                {appointment.patient_vitals.notes}
              </Text>
            ) : null}
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <View style={styles.linkRow}>
              <Text style={styles.label}>Meeting link</Text>
              {appointment?.meeting_link ? (
                <TouchableOpacity onPress={handleCopyLink} hitSlop={8}>
                  <Ionicons name="copy-outline" size={18} color="#888" />
                </TouchableOpacity>
              ) : null}
            </View>
            {appointment?.meeting_link ? (
              <Text style={styles.linkText}>{appointment.meeting_link}</Text>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: "75%",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: ORANGE,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingBottom: 32,
  },
  section: {
    paddingVertical: 14,
    gap: 4,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 14,
    gap: 16,
  },
  col: {
    flex: 1,
    gap: 4,
  },
  label: {
    fontSize: 13,
    color: "#999",
  },
  value: {
    fontSize: 15,
    color: "#222",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  linkText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
});
