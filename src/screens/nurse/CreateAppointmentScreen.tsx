import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useMutation, useQuery } from "urql";
import {
  addMinutes,
  isBefore,
  isSameDay,
  addMonths,
  subMonths,
  getDaysInMonth,
  getDay,
  startOfMonth,
  startOfDay,
} from "date-fns";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import {
  BORDER_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
  SURFACE_COLOR,
  ERROR_COLOR,
} from "../../utils/config";
import {
  GET_LOCATION_BY_NURSE_ID,
  GET_DOCTORS_FOR_APPOINTMENT,
  GET_DOCTOR_WEEKLY_AVAILABILITY,
  CREATE_APPOINTMENT,
} from "../../graphql/appointments";
import type { NurseStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<NurseStackParamList, "CreateAppointment">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CALENDAR_PADDING = 32;
const CELL_SIZE = Math.floor((SCREEN_WIDTH - CALENDAR_PADDING) / 7);

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const STEP_TITLES = ["Select Doctor", "Pick a Slot", "Patient's Details"];

interface Doctor {
  id: string;
  user: { display_name: string; profile?: { avatar_url?: string } };
}

interface WeeklySlot {
  available_from: string;
  available_till: string;
  day: string;
}

function parseTimeStr(timeStr: string): Date | null {
  const match = timeStr.trim().match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (!match) return null;
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return new Date(2000, 0, 1, h, m, 0, 0);
}

function formatTimeStr(date: Date): string {
  const h = date.getHours();
  const m = date.getMinutes();
  const period = h >= 12 ? "PM" : "AM";
  const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${displayH}:${m.toString().padStart(2, "0")} ${period}`;
}

function generateSlots(availableFrom: string, availableTill: string): string[] {
  const from = parseTimeStr(availableFrom);
  const till = parseTimeStr(availableTill);
  if (!from || !till) return [];
  const slots: string[] = [];
  let current = new Date(from);
  while (isBefore(current, till)) {
    slots.push(formatTimeStr(current));
    current = addMinutes(current, 15);
  }
  return slots;
}

function combineDateTime(date: Date, timeStr: string): Date {
  const t = parseTimeStr(timeStr);
  if (!t) return date;
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    t.getHours(),
    t.getMinutes(),
    0,
    0,
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function InitialsAvatar({ name, size = 40 }: { name: string; size?: number }) {
  return (
    <View
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={[styles.avatarText, { fontSize: size * 0.35 }]}>
        {getInitials(name)}
      </Text>
    </View>
  );
}

function StepIndicator({ step }: { step: number }) {
  return (
    <View style={styles.stepRow}>
      {STEP_TITLES.map((title, i) => (
        <React.Fragment key={i}>
          <View style={styles.stepItem}>
            <View
              style={[
                styles.stepCircle,
                i < step && styles.stepCircleDone,
                i === step && styles.stepCircleActive,
              ]}
            >
              {i < step ? (
                <Ionicons name="checkmark" size={13} color="#fff" />
              ) : (
                <Text
                  style={[styles.stepNum, i === step && styles.stepNumActive]}
                >
                  {i + 1}
                </Text>
              )}
            </View>
            <Text
              style={[styles.stepLabel, i === step && styles.stepLabelActive]}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
          {i < STEP_TITLES.length - 1 && (
            <View
              style={[
                styles.stepConnector,
                i < step && styles.stepConnectorDone,
              ]}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

export function CreateAppointmentScreen({ navigation }: Props) {
  const { user } = useAuth();
  const [step, setStep] = useState(0);

  // Step 1
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Step 2
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Step 3
  const [patientName, setPatientName] = useState("");
  const [additionalNote, setAdditionalNote] = useState("");
  const [nameError, setNameError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Queries
  const [{ data: locationData }] = useQuery({
    query: GET_LOCATION_BY_NURSE_ID,
    variables: { user_id: user?.id },
    pause: !user?.id,
  });
  const locationId: string | undefined =
    locationData?.nurses?.[0]?.location?.id;

  const [{ data: doctorsData, fetching: fetchingDoctors }] = useQuery({
    query: GET_DOCTORS_FOR_APPOINTMENT,
    variables: { location_id: locationId },
    pause: !locationId,
  });
  const doctors: Doctor[] = doctorsData?.doctors ?? [];

  const [{ data: availabilityData }] = useQuery({
    query: GET_DOCTOR_WEEKLY_AVAILABILITY,
    variables: { doctor_id: selectedDoctor?.id },
    pause: !selectedDoctor?.id,
  });
  const weeklyAvailability: WeeklySlot[] =
    availabilityData?.doctor_weekly_availability ?? [];

  const [, executeCreate] = useMutation(CREATE_APPOINTMENT);

  // Filtered doctors list
  const filteredDoctors = useMemo(() => {
    if (!searchQuery.trim()) return doctors;
    const q = searchQuery.toLowerCase();
    return doctors.filter((d) => d.user.display_name.toLowerCase().includes(q));
  }, [doctors, searchQuery]);

  // Calendar state
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const today = startOfDay(new Date());
  const firstDayOfWeek = getDay(startOfMonth(calendarMonth));
  const daysInMonth = getDaysInMonth(calendarMonth);

  const calendarCells = useMemo(() => {
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    // Pad to complete last row
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [year, month, daysInMonth, firstDayOfWeek]);

  // Time slots for selected date
  const timeSlots = useMemo(() => {
    if (!selectedDate || weeklyAvailability.length === 0) return [];
    const dayName = DAY_NAMES[selectedDate.getDay()];
    const avail = weeklyAvailability.find((a) => a.day === dayName);
    if (!avail) return [];
    return generateSlots(avail.available_from, avail.available_till);
  }, [selectedDate, weeklyAvailability]);

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleDateSelect = (date: Date) => {
    if (isBefore(startOfDay(date), today)) return;
    if (!selectedDate || !isSameDay(date, selectedDate)) {
      setSelectedDate(date);
      setSelectedSlot(null);
    }
  };

  const handleSubmit = async () => {
    if (!patientName.trim()) {
      setNameError("Patient name is required");
      return;
    }
    if (!selectedDoctor || !selectedDate || !selectedSlot || !locationId)
      return;

    setSubmitting(true);
    try {
      const slotFrom = combineDateTime(selectedDate, selectedSlot);
      const slotTo = addMinutes(slotFrom, 15);

      const { error } = await executeCreate({
        object: {
          doctor_id: selectedDoctor.id,
          nurse_id: user?.roleId,
          location_id: locationId,
          patient_name: patientName.trim(),
          additional_note: additionalNote.trim() || undefined,
          time_slot_from: slotFrom.toISOString(),
          time_slot_to: slotTo.toISOString(),
        },
      });

      if (error) {
        Alert.alert("Error", error.message || "Failed to create appointment");
      } else {
        Alert.alert("Success", "Appointment created successfully", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      }
    } catch {
      Alert.alert("Error", "An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Step 1: Doctor Selection ──────────────────────────────────────────────
  const renderStep1 = () => (
    <View style={{ flex: 1 }}>
      <Text style={styles.sectionDesc}>
        Choose a doctor for this appointment
      </Text>

      <View style={styles.searchBox}>
        <Ionicons
          name="search-outline"
          size={18}
          color={TEXT_COLOR_LIGHT}
          style={{ marginRight: 8 }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name..."
          placeholderTextColor={TEXT_COLOR_LIGHT}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={18} color={TEXT_COLOR_LIGHT} />
          </TouchableOpacity>
        )}
      </View>

      {fetchingDoctors || !locationId ? (
        <View style={styles.loadingBox}>
          <ActivityIndicator color={PRIMARY_COLOR} />
          <Text style={styles.loadingText}>Loading doctors…</Text>
        </View>
      ) : (
        <FlatList
          data={filteredDoctors}
          keyExtractor={(d) => d.id}
          contentContainerStyle={styles.doctorList}
          renderItem={({ item }) => {
            const isSelected = selectedDoctor?.id === item.id;
            return (
              <TouchableOpacity
                style={[
                  styles.doctorItem,
                  isSelected && styles.doctorItemSelected,
                ]}
                onPress={() => handleDoctorSelect(item)}
                activeOpacity={0.7}
              >
                <InitialsAvatar name={item.user.display_name} />
                <Text
                  style={[
                    styles.doctorName,
                    isSelected && styles.doctorNameSelected,
                  ]}
                  numberOfLines={1}
                >
                  {item.user.display_name}
                </Text>
                {isSelected && (
                  <Ionicons
                    name="checkmark-circle"
                    size={22}
                    color={PRIMARY_COLOR}
                  />
                )}
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyBox}>
              <Ionicons name="person-outline" size={40} color={BORDER_COLOR} />
              <Text style={styles.emptyTitle}>No doctors found</Text>
              <Text style={styles.emptyDesc}>Try a different search term</Text>
            </View>
          }
        />
      )}
    </View>
  );

  // ── Step 2: Date & Time Slot ──────────────────────────────────────────────
  const renderStep2 = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* Selected Doctor */}
      <View style={styles.selectedDocRow}>
        <InitialsAvatar name={selectedDoctor!.user.display_name} size={34} />
        <Text style={styles.selectedDocName}>
          {selectedDoctor!.user.display_name}
        </Text>
        <TouchableOpacity onPress={() => setStep(0)}>
          <Text style={styles.changeLink}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <View style={styles.calendarCard}>
        <View style={styles.calendarNav}>
          <TouchableOpacity
            onPress={() => setCalendarMonth(subMonths(calendarMonth, 1))}
            style={styles.navBtn}
          >
            <Ionicons name="chevron-back" size={20} color={TEXT_COLOR} />
          </TouchableOpacity>
          <Text style={styles.calendarMonthLabel}>
            {MONTH_NAMES[month]} {year}
          </Text>
          <TouchableOpacity
            onPress={() => setCalendarMonth(addMonths(calendarMonth, 1))}
            style={styles.navBtn}
          >
            <Ionicons name="chevron-forward" size={20} color={TEXT_COLOR} />
          </TouchableOpacity>
        </View>

        {/* Day of week headers */}
        <View style={styles.dayHeaderRow}>
          {DAY_LABELS.map((d) => (
            <View key={d} style={[styles.dayCell, { width: CELL_SIZE }]}>
              <Text style={styles.dayHeaderText}>{d}</Text>
            </View>
          ))}
        </View>

        {/* Date grid */}
        <View style={styles.calendarGrid}>
          {calendarCells.map((day, i) => {
            if (!day)
              return (
                <View
                  key={`pad-${i}`}
                  style={{ width: CELL_SIZE, height: CELL_SIZE }}
                />
              );
            const isPast = isBefore(startOfDay(day), today);
            const isSelected = !!selectedDate && isSameDay(day, selectedDate);
            const isToday = isSameDay(day, new Date());
            return (
              <TouchableOpacity
                key={day.toISOString()}
                style={[
                  styles.dateCell,
                  { width: CELL_SIZE, height: CELL_SIZE },
                  isSelected && styles.dateCellSelected,
                  isToday && !isSelected && styles.dateCellToday,
                ]}
                onPress={() => handleDateSelect(day)}
                disabled={isPast}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.dateCellText,
                    isPast && styles.dateCellTextPast,
                    isSelected && styles.dateCellTextSelected,
                    isToday && !isSelected && styles.dateCellTextToday,
                  ]}
                >
                  {day.getDate()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Time slots */}
      {selectedDate && (
        <View style={{ marginTop: 8 }}>
          <Text style={styles.slotsSectionLabel}>
            {`Available slots · ${DAY_LABELS[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()].slice(0, 3)} ${selectedDate.getDate()}`}
          </Text>

          {timeSlots.length === 0 ? (
            <View style={styles.noSlotsBox}>
              <Ionicons
                name="calendar-outline"
                size={36}
                color={BORDER_COLOR}
              />
              <Text style={styles.noSlotsTitle}>
                No availability on this day
              </Text>
              <Text style={styles.noSlotsDesc}>Select a different date</Text>
            </View>
          ) : (
            <View style={styles.slotsGrid}>
              {timeSlots.map((slot) => {
                const isActive = selectedSlot === slot;
                return (
                  <TouchableOpacity
                    key={slot}
                    style={[styles.slotChip, isActive && styles.slotChipActive]}
                    onPress={() => setSelectedSlot(slot)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.slotChipText,
                        isActive && styles.slotChipTextActive,
                      ]}
                    >
                      {slot}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );

  // ── Step 3: Patient Details ───────────────────────────────────────────────
  const renderStep3 = () => (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Summary card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryCardTitle}>Appointment Summary</Text>
          <View style={styles.summaryRow}>
            <View style={styles.summaryIcon}>
              <Ionicons name="person-outline" size={15} color={PRIMARY_COLOR} />
            </View>
            <Text style={styles.summaryValue}>
              {selectedDoctor?.user.display_name}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <View style={styles.summaryIcon}>
              <Ionicons
                name="calendar-outline"
                size={15}
                color={PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.summaryValue}>
              {selectedDate
                ? `${DAY_LABELS[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                : "—"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <View style={styles.summaryIcon}>
              <Ionicons name="time-outline" size={15} color={PRIMARY_COLOR} />
            </View>
            <Text style={styles.summaryValue}>{selectedSlot ?? "—"}</Text>
          </View>
        </View>

        <Text style={styles.sectionDesc}>Enter the patient's information</Text>

        <Input
          label="Patient Name *"
          placeholder="Full name"
          value={patientName}
          onChangeText={(t) => {
            setPatientName(t);
            setNameError("");
          }}
          error={nameError}
          autoCapitalize="words"
        />

        <Input
          label="Additional Notes"
          placeholder="Reason for visit, symptoms, etc."
          value={additionalNote}
          onChangeText={setAdditionalNote}
          multiline
          numberOfLines={4}
          style={{ minHeight: 96, textAlignVertical: "top" }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );

  const canContinueStep1 = !!selectedDoctor;
  const canContinueStep2 = !!selectedDate && !!selectedSlot;

  return (
    <View style={styles.container}>
      <View style={styles.stepHeader}>
        <StepIndicator step={step} />
      </View>

      <View style={styles.content}>
        {step === 0 && renderStep1()}
        {step === 1 && renderStep2()}
        {step === 2 && renderStep3()}
      </View>

      <View style={styles.footer}>
        {step > 0 && (
          <Button
            title="Back"
            variant="outline"
            onPress={() => setStep(step - 1)}
            style={styles.footerBtnBack}
          />
        )}
        {step < 2 ? (
          <Button
            title="Continue"
            onPress={() => setStep(step + 1)}
            disabled={step === 0 ? !canContinueStep1 : !canContinueStep2}
            style={step > 0 ? styles.footerBtnFlex : styles.footerBtnFull}
          />
        ) : (
          <Button
            title="Create Appointment"
            onPress={handleSubmit}
            loading={submitting}
            style={styles.footerBtnFlex}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: SURFACE_COLOR },

  // Step indicator
  stepHeader: {
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  stepRow: { flexDirection: "row", alignItems: "center" },
  stepItem: { alignItems: "center", width: 64 },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: BORDER_COLOR,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  stepCircleActive: { backgroundColor: PRIMARY_COLOR },
  stepCircleDone: { backgroundColor: SECONDARY_COLOR },
  stepNum: { fontSize: 13, fontWeight: "600", color: TEXT_COLOR_LIGHT },
  stepNumActive: { color: "#fff" },
  stepLabel: { fontSize: 10, color: TEXT_COLOR_LIGHT, textAlign: "center" },
  stepLabelActive: { color: PRIMARY_COLOR, fontWeight: "600" },
  stepConnector: {
    flex: 1,
    height: 2,
    backgroundColor: BORDER_COLOR,
    marginBottom: 18,
  },
  stepConnectorDone: { backgroundColor: SECONDARY_COLOR },

  // Content
  content: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },

  sectionDesc: { fontSize: 14, color: TEXT_COLOR_LIGHT, marginBottom: 14 },

  // Search
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  searchInput: { flex: 1, fontSize: 15, color: TEXT_COLOR },

  loadingBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loadingText: { color: TEXT_COLOR_LIGHT, fontSize: 14 },

  // Doctor list
  doctorList: { paddingBottom: 16 },
  doctorItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    gap: 12,
  },
  doctorItemSelected: {
    borderColor: PRIMARY_COLOR,
    backgroundColor: "#F0FAF8",
  },
  doctorName: { flex: 1, fontSize: 15, fontWeight: "500", color: TEXT_COLOR },
  doctorNameSelected: { color: PRIMARY_COLOR },

  // Empty state
  emptyBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    gap: 8,
  },
  emptyTitle: { fontSize: 16, fontWeight: "600", color: TEXT_COLOR },
  emptyDesc: { fontSize: 13, color: TEXT_COLOR_LIGHT },

  // Avatar
  avatar: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#fff", fontWeight: "700" },

  // Selected doctor row (step 2)
  selectedDocRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    gap: 10,
  },
  selectedDocName: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: TEXT_COLOR,
  },
  changeLink: { fontSize: 13, color: PRIMARY_COLOR, fontWeight: "600" },

  // Calendar
  calendarCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginBottom: 16,
  },
  calendarNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  navBtn: { padding: 4 },
  calendarMonthLabel: { fontSize: 16, fontWeight: "700", color: TEXT_COLOR },
  dayHeaderRow: { flexDirection: "row", marginBottom: 4 },
  dayCell: { alignItems: "center", justifyContent: "center", height: 28 },
  dayHeaderText: { fontSize: 11, fontWeight: "600", color: TEXT_COLOR_LIGHT },
  calendarGrid: { flexDirection: "row", flexWrap: "wrap" },
  dateCell: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CELL_SIZE / 2,
  },
  dateCellSelected: { backgroundColor: PRIMARY_COLOR },
  dateCellToday: { backgroundColor: "#E0F5F1" },
  dateCellText: { fontSize: 13, fontWeight: "500", color: TEXT_COLOR },
  dateCellTextPast: { color: BORDER_COLOR },
  dateCellTextSelected: { color: "#fff", fontWeight: "700" },
  dateCellTextToday: { color: PRIMARY_COLOR, fontWeight: "700" },

  // Time slots
  slotsSectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: TEXT_COLOR,
    marginBottom: 10,
  },
  noSlotsBox: { alignItems: "center", paddingVertical: 32, gap: 6 },
  noSlotsTitle: { fontSize: 15, fontWeight: "600", color: TEXT_COLOR },
  noSlotsDesc: { fontSize: 13, color: TEXT_COLOR_LIGHT },
  slotsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  slotChip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    backgroundColor: "#fff",
    minWidth: 90,
    alignItems: "center",
  },
  slotChipActive: { borderColor: PRIMARY_COLOR, backgroundColor: "#F0FAF8" },
  slotChipText: { fontSize: 13, fontWeight: "500", color: TEXT_COLOR },
  slotChipTextActive: { color: PRIMARY_COLOR, fontWeight: "700" },

  // Summary card
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginBottom: 20,
    gap: 10,
  },
  summaryCardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: TEXT_COLOR_LIGHT,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  summaryRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  summaryIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FAF8",
    borderRadius: 6,
  },
  summaryValue: { fontSize: 14, color: TEXT_COLOR, fontWeight: "500", flex: 1 },

  // Footer
  footer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    gap: 8,
  },
  footerBtnBack: { flex: 1 },
  footerBtnFlex: { flex: 1 },
  footerBtnFull: { flex: 1 },
});
