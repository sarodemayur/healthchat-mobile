import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import {
  useGetAppointmentByIdSubscription,
  useUpdateAppointmentMutation,
  useGetCallTokenMutation,
} from "../../graphql/appointments.generated";
import { LoadingScreen } from "../../components/common/LoadingScreen";
import { StatusBadge } from "../../components/common/StatusBadge";
import { Button } from "../../components/common/Button";
import {
  PRIMARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
  BORDER_COLOR,
} from "../../utils/config";
import type {
  DoctorStackParamList,
  NurseStackParamList,
} from "../../navigation/types";
import { Appointment, PatientVitals } from "../../types";

type Props =
  | NativeStackScreenProps<DoctorStackParamList, "AppointmentDetail">
  | NativeStackScreenProps<NurseStackParamList, "AppointmentDetail">;

function VitalsRow({
  label,
  value,
  unit,
}: {
  label: string;
  value?: string | number;
  unit?: string;
}) {
  if (!value) return null;
  return (
    <View style={vitalsStyles.row}>
      <Text style={vitalsStyles.label}>{label}</Text>
      <Text style={vitalsStyles.value}>
        {value}
        {unit ? <Text style={vitalsStyles.unit}> {unit}</Text> : null}
      </Text>
    </View>
  );
}

const vitalsStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  label: { fontSize: 14, color: TEXT_COLOR_LIGHT },
  value: { fontSize: 14, fontWeight: "600", color: TEXT_COLOR },
  unit: { fontSize: 12, fontWeight: "400", color: TEXT_COLOR_LIGHT },
});

export function AppointmentDetailScreen({ route, navigation }: any) {
  const { appointmentId } = route.params as { appointmentId: string };
  const { user } = useAuth();
  const [isJoining, setIsJoining] = useState(false);
  const [{ data, fetching }] = useGetAppointmentByIdSubscription({
    variables: { appointment_id: appointmentId },
  });

  const [, updateAppointment] = useUpdateAppointmentMutation();
  const [, getCallToken] = useGetCallTokenMutation();

  const appointment = data?.appointments_by_pk ?? null;

  if (fetching && !appointment) return <LoadingScreen />;
  if (!appointment) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Appointment not found.</Text>
      </View>
    );
  }

  const start = parseISO(appointment.time_slot_from ?? '');
  const end = parseISO(appointment.time_slot_to ?? '');
  const vitals = appointment.patient_vitals ?? undefined;

  const canJoin =
    appointment.state === "PENDING" || appointment.state === "STARTED";

  const canCancel = appointment.state === "PENDING" && user?.role === "nurse";

  const handleCancel = () => {
    Alert.alert(
      "Cancel Appointment",
      "Are you sure you want to cancel this appointment?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes, Cancel",
          style: "destructive",
          onPress: async () => {
            await updateAppointment({
              appointment_id: appointmentId,
              set: {
                state: "CANCELLED",
                cancelled_at: new Date().toISOString(),
              },
            });
            navigation.goBack();
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.patientName}>{appointment.patient_name}</Text>
          <StatusBadge state={appointment.state} />
        </View>
        <View style={styles.infoRow}>
          <Ionicons
            name="calendar-outline"
            size={15}
            color={TEXT_COLOR_LIGHT}
          />
          <Text style={styles.infoText}>
            {format(start, "EEEE, MMMM d, yyyy")}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={15} color={TEXT_COLOR_LIGHT} />
          <Text style={styles.infoText}>
            {format(start, "h:mm a")} – {format(end, "h:mm a")}
          </Text>
        </View>
        {appointment.location ? (
          <View style={styles.infoRow}>
            <Ionicons
              name="location-outline"
              size={15}
              color={TEXT_COLOR_LIGHT}
            />
            <Text style={styles.infoText}>
              {appointment.location.location_name}
            </Text>
          </View>
        ) : null}
      </View>

      {/* Care team */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Care Team</Text>
        {appointment.doctor ? (
          <View style={styles.teamRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {appointment.doctor.user.profile?.first_name?.[0]}
                {appointment.doctor.user.profile?.last_name?.[0]}
              </Text>
            </View>
            <View>
              <Text style={styles.teamName}>
                Dr. {appointment.doctor.user.profile?.first_name}{" "}
                {appointment.doctor.user.profile?.last_name}
              </Text>
              <Text style={styles.teamRole}>Doctor</Text>
            </View>
          </View>
        ) : null}
        {appointment.nurse ? (
          <View style={[styles.teamRow, { marginTop: 12 }]}>
            <View style={[styles.avatar, { backgroundColor: "#E3F2FD" }]}>
              <Text style={[styles.avatarText, { color: "#1565C0" }]}>
                {appointment.nurse.user.profile?.first_name?.[0]}
                {appointment.nurse.user.profile?.last_name?.[0]}
              </Text>
            </View>
            <View>
              <Text style={styles.teamName}>
                {appointment.nurse.user.profile?.first_name}{" "}
                {appointment.nurse.user.profile?.last_name}
              </Text>
              <Text style={styles.teamRole}>Nurse</Text>
            </View>
          </View>
        ) : null}
      </View>

      {/* Patient Vitals */}
      {vitals ? (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Patient Vitals</Text>
          <VitalsRow
            label="Blood Pressure"
            value={
              vitals.blood_pressure_systolic && vitals.blood_pressure_diastolic
                ? `${vitals.blood_pressure_systolic}/${vitals.blood_pressure_diastolic}`
                : vitals.blood_pressure ?? undefined
            }
            unit="mmHg"
          />
          <VitalsRow label="Heart Rate" value={vitals.heart_rate ?? undefined} unit="bpm" />
          <VitalsRow
            label="Respiratory Rate"
            value={vitals.respiratory_rate ?? undefined}
            unit="breaths/min"
          />
          <VitalsRow label="Temperature" value={vitals.temperature ?? undefined} unit="°F" />
          <VitalsRow
            label="Oxygen Saturation"
            value={vitals.oximetry ?? undefined}
            unit="%"
          />
          <VitalsRow label="Weight" value={vitals.weight ?? undefined} unit="lbs" />
          <VitalsRow label="Height" value={vitals.height ?? undefined} unit="in" />
        </View>
      ) : null}

      {/* SOAP Note */}
      {appointment.soap_note ? (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>SOAP Note</Text>
          <Text style={styles.soapText}>{appointment.soap_note}</Text>
        </View>
      ) : null}

      {/* Additional note */}
      {appointment.additional_note ? (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          <Text style={styles.soapText}>{appointment.additional_note}</Text>
        </View>
      ) : null}

      {/* Actions */}
      <View style={styles.actions}>
        {canJoin ? (
          <Button
            title="Attend Appointment"
            loading={isJoining}
            onPress={async () => {
              setIsJoining(true);
              const result = await getCallToken({
                object: { appointment_id: appointmentId },
              });
              setIsJoining(false);
              if (result.error || !result.data?.getCallToken?.twilio_token) {
                Alert.alert(
                  "Error",
                  "Failed to get call token. Please try again.",
                );
                return;
              }
              (navigation as any).navigate("Meeting", {
                appointmentId,
                token: result.data.getCallToken.twilio_token,
                roomName: appointment.room_id,
              });
            }}
            style={styles.joinBtn}
          />
        ) : null}
        {canCancel ? (
          <Button
            title="Cancel Appointment"
            variant="danger"
            onPress={handleCancel}
            style={styles.cancelBtn}
          />
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  content: { paddingVertical: 16, paddingBottom: 40 },
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
  errorText: { fontSize: 16, color: TEXT_COLOR_LIGHT },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_COLOR,
    flex: 1,
    marginRight: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  infoText: { fontSize: 14, color: TEXT_COLOR_LIGHT },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: TEXT_COLOR,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  teamRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0F5F1",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 14, fontWeight: "700", color: PRIMARY_COLOR },
  teamName: { fontSize: 14, fontWeight: "600", color: TEXT_COLOR },
  teamRole: { fontSize: 12, color: TEXT_COLOR_LIGHT },
  soapText: { fontSize: 14, color: TEXT_COLOR, lineHeight: 22 },
  actions: { paddingHorizontal: 16, gap: 10, marginTop: 4 },
  joinBtn: {},
  cancelBtn: {},
});
