import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Modal,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  TwilioVideo,
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TrackEventCbArgs,
} from "react-native-twilio-video-webrtc";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import type { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Meeting">;

const TEAL = "#3DBCA2";

interface VideoTrack {
  participantSid: string;
  videoTrackSid: string;
}

const ACTION_ITEMS = [
  "Appointment Info",
  "Vitals and Pictures",
  "Prescription",
  "SOAP Notes",
  "Body Diagram",
  "Settings",
];

function ParticipantAvatar({ initials }: { initials: string }) {
  return (
    <View style={styles.avatarWrap}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
    </View>
  );
}

export function MeetingRoomScreen({ route, navigation }: Props) {
  const { appointmentId, token, roomName } = route.params;
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  const twilioRef = useRef<TwilioVideo | null>(null);
  const twilioCallbackRef = useCallback((ref: TwilioVideo | null) => {
    twilioRef.current = ref;
  }, []);

  const [status, setStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("connecting");
  const [videoTracks, setVideoTracks] = useState<Map<string, VideoTrack>>(
    new Map(),
  );
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showDevicePanel, setShowDevicePanel] = useState(false);
  const [showActionsPanel, setShowActionsPanel] = useState(false);
  const [stethoscopeOn, setStethoscopeOn] = useState(false);
  const [handheldOn, setHandheldOn] = useState(false);
  const [otoscopeOn, setOtoscopeOn] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const remoteInitials = "NG";
  const localInitials = user
    ? `${user.profile?.first_name?.[0] ?? ""}${user.profile?.last_name?.[0] ?? ""}`.toUpperCase()
    : "ME";

  useEffect(() => {
    const requestPermissionsAndConnect = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        const cameraOk =
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
          PermissionsAndroid.RESULTS.GRANTED;
        const micOk =
          granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
          PermissionsAndroid.RESULTS.GRANTED;
        if (!cameraOk || !micOk) {
          Alert.alert(
            "Permissions Required",
            "Camera and microphone access are required for video calls.",
            [{ text: "OK", onPress: () => navigation.goBack() }],
          );
          return;
        }
      }
      if (token && roomName) {
        twilioRef.current?.connect({ accessToken: token, roomName });
      }
    };
    requestPermissionsAndConnect();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      twilioRef.current?.disconnect();
    };
  }, [token, roomName]);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => setCallDuration((d) => d + 1), 1000);
  }, []);

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleRoomDidConnect = useCallback(() => {
    setStatus("connected");
    startTimer();
  }, [startTimer]);

  const handleRoomDidDisconnect = useCallback(
    ({ error }: { error?: string }) => {
      setStatus("disconnected");
      if (timerRef.current) clearInterval(timerRef.current);
      if (error) Alert.alert("Disconnected", error);
      navigation.goBack();
    },
    [navigation],
  );

  const handleRoomDidFailToConnect = useCallback(
    ({ error }: { error: string }) => {
      setStatus("disconnected");
      Alert.alert("Connection Failed", error, [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    },
    [navigation],
  );

  const handleParticipantAddedVideoTrack = useCallback(
    ({ participant, track }: TrackEventCbArgs) => {
      setVideoTracks((prev) => {
        const next = new Map(prev);
        next.set(track.trackSid, {
          participantSid: participant.sid,
          videoTrackSid: track.trackSid,
        });
        return next;
      });
    },
    [],
  );

  const handleParticipantRemovedVideoTrack = useCallback(
    ({ track }: TrackEventCbArgs) => {
      setVideoTracks((prev) => {
        const next = new Map(prev);
        next.delete(track.trackSid);
        return next;
      });
    },
    [],
  );

  const toggleMute = useCallback(() => {
    twilioRef.current?.setLocalAudioEnabled(isMuted);
    setIsMuted((m) => !m);
  }, [isMuted]);

  const toggleCamera = useCallback(() => {
    twilioRef.current?.setLocalVideoEnabled(isCameraOff);
    setIsCameraOff((c) => !c);
  }, [isCameraOff]);

  const flipCamera = useCallback(() => {
    twilioRef.current?.flipCamera();
  }, []);

  const hangUp = useCallback(() => {
    Alert.alert("End Call", "Are you sure you want to leave this call?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Leave",
        style: "destructive",
        onPress: () => twilioRef.current?.disconnect(),
      },
    ]);
  }, []);

  const remoteParticipants = Array.from(videoTracks.values());

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={TEAL} />

      {/* ── Remote video area ── */}
      <View style={styles.remoteArea}>
        {remoteParticipants.length > 0 ? (
          remoteParticipants.map((track) => (
            <TwilioVideoParticipantView
              key={track.videoTrackSid}
              style={StyleSheet.absoluteFill}
              trackIdentifier={{
                participantSid: track.participantSid,
                videoTrackSid: track.videoTrackSid,
              }}
            />
          ))
        ) : (
          <ParticipantAvatar initials={remoteInitials} />
        )}

        {/* Status pill */}
        {status !== "connected" && (
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>
              {status === "connecting" ? "Connecting to room…" : "Disconnected"}
            </Text>
          </View>
        )}

        {/* Local PiP */}
        <View style={styles.pip}>
          {!isCameraOff ? (
            <TwilioVideoLocalView enabled style={StyleSheet.absoluteFill} />
          ) : (
            <View style={styles.pipAvatar}>
              <Text style={styles.pipAvatarText}>{localInitials}</Text>
            </View>
          )}
          {isMuted && (
            <View style={styles.pipMic}>
              <Ionicons name="mic-off" size={10} color="#fff" />
            </View>
          )}
          <Text style={styles.pipLabel}>You</Text>
        </View>
      </View>

      {/* ── Top bar ── */}
      <View style={[styles.topBar, { top: insets.top + 8 }]}>
        {/* Device panel toggle */}
        <TouchableOpacity
          style={styles.deviceBtn}
          onPress={() => setShowDevicePanel((v) => !v)}
        >
          <MaterialCommunityIcons name="stethoscope" size={16} color="#333" />
          <Text style={styles.deviceBtnText}>Devices</Text>
          <Ionicons
            name={showDevicePanel ? "chevron-up" : "chevron-down"}
            size={14}
            color="#333"
          />
        </TouchableOpacity>

        {/* Recording toggle */}
        <View style={styles.recordingWrap}>
          <Switch
            value={isRecording}
            onValueChange={setIsRecording}
            trackColor={{ false: "#ccc", true: TEAL }}
            thumbColor="#fff"
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          />
          <Text style={styles.recordingText}>
            Recording {isRecording ? "On" : "Off"}
          </Text>
        </View>
      </View>

      {/* ── Device dropdown panel ── */}
      {showDevicePanel && (
        <View style={[styles.devicePanel, { top: insets.top + 52 }]}>
          {[
            {
              label: "Stethoscope",
              value: stethoscopeOn,
              set: setStethoscopeOn,
              icon: "stethoscope",
            },
            {
              label: "Handheld",
              value: handheldOn,
              set: setHandheldOn,
              icon: "camera-outline",
            },
            {
              label: "Otoscope",
              value: otoscopeOn,
              set: setOtoscopeOn,
              icon: "ear-outline",
            },
          ].map(({ label, value, set, icon }) => (
            <TouchableOpacity
              key={label}
              style={styles.deviceRow}
              onPress={() => set((v: boolean) => !v)}
            >
              <Ionicons
                name={icon as any}
                size={16}
                color="#555"
                style={{ width: 20 }}
              />
              <Text style={styles.deviceLabel}>{label}</Text>
              <Text style={[styles.deviceState, value && styles.deviceStateOn]}>
                {value ? "On" : "Off"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* ── Bottom controls ── */}
      <View style={[styles.controls, { paddingBottom: insets.bottom + 12 }]}>
        <ControlBtn
          icon="mic-outline"
          label="Mic"
          active={!isMuted}
          onPress={toggleMute}
        />
        <ControlBtn
          icon="videocam-outline"
          label="Webcam"
          active={!isCameraOff}
          onPress={toggleCamera}
          teal
        />
        <ControlBtn
          icon="swap-horizontal-outline"
          label="Swap Video"
          active
          onPress={flipCamera}
        />
        <ControlBtn
          icon="information-circle-outline"
          label="More"
          active
          onPress={() => setShowActionsPanel(true)}
          tealOutline
        />
        <TouchableOpacity style={styles.endBtn} onPress={hangUp}>
          <Ionicons
            name="call"
            size={26}
            color="#fff"
            style={{ transform: [{ rotate: "135deg" }] }}
          />
          <Text style={styles.endBtnLabel}>End Call</Text>
        </TouchableOpacity>
      </View>

      {/* ── Actions panel ── */}
      <Modal
        visible={showActionsPanel}
        transparent
        animationType="slide"
        onRequestClose={() => setShowActionsPanel(false)}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setShowActionsPanel(false)}
        />
        <View
          style={[styles.actionsPanel, { paddingBottom: insets.bottom + 16 }]}
        >
          <View style={styles.actionsPanelHeader}>
            <Text style={styles.actionsPanelTitle}>Actions</Text>
            <TouchableOpacity onPress={() => setShowActionsPanel(false)}>
              <Ionicons name="close" size={22} color="#333" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {ACTION_ITEMS.map((item) => (
              <TouchableOpacity key={item} style={styles.actionItem}>
                <Text style={styles.actionItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      <TwilioVideo
        ref={twilioCallbackRef}
        onRoomDidConnect={handleRoomDidConnect}
        onRoomDidDisconnect={handleRoomDidDisconnect}
        onRoomDidFailToConnect={handleRoomDidFailToConnect}
        onParticipantAddedVideoTrack={handleParticipantAddedVideoTrack}
        onParticipantRemovedVideoTrack={handleParticipantRemovedVideoTrack}
      />
    </View>
  );
}

function ControlBtn({
  icon,
  label,
  active,
  onPress,
  teal,
  tealOutline,
}: {
  icon: string;
  label: string;
  active: boolean;
  onPress: () => void;
  teal?: boolean;
  tealOutline?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.ctrlWrap} onPress={onPress}>
      <View
        style={[
          styles.ctrlBtn,
          teal && active && styles.ctrlBtnTeal,
          tealOutline && styles.ctrlBtnTealOutline,
          !active && styles.ctrlBtnInactive,
        ]}
      >
        <Ionicons
          name={icon as any}
          size={22}
          color={tealOutline ? TEAL : "#fff"}
        />
      </View>
      <Text style={styles.ctrlLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: TEAL },

  // Remote area
  remoteArea: {
    flex: 1,
    backgroundColor: TEAL,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarWrap: { alignItems: "center", justifyContent: "center", flex: 1 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 30, fontWeight: "700", color: "#fff" },

  // Status pill
  statusPill: {
    position: "absolute",
    bottom: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#aaa" },
  statusText: { color: "#fff", fontSize: 13 },

  // PiP
  pip: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 90,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#2a7a6a",
    borderWidth: 2,
    borderColor: "#fff",
  },
  pipAvatar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a7a6a",
  },
  pipAvatarText: { color: "#fff", fontWeight: "700", fontSize: 18 },
  pipMic: {
    position: "absolute",
    bottom: 18,
    left: 4,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
    padding: 2,
  },
  pipLabel: {
    position: "absolute",
    bottom: 4,
    alignSelf: "center",
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },

  // Top bar
  topBar: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  deviceBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  deviceBtnText: { fontSize: 13, fontWeight: "600", color: "#333" },
  recordingWrap: { flexDirection: "row", alignItems: "center", gap: 4 },
  recordingText: { color: "#fff", fontSize: 13, fontWeight: "600" },

  // Device panel
  devicePanel: {
    position: "absolute",
    left: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 10,
    minWidth: 180,
  },
  deviceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
  },
  deviceLabel: { flex: 1, fontSize: 14, color: "#333" },
  deviceState: { fontSize: 13, color: "#999", fontWeight: "600" },
  deviceStateOn: { color: TEAL },

  // Bottom controls
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0.75)",
    paddingTop: 14,
  },
  ctrlWrap: { alignItems: "center", gap: 5 },
  ctrlBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  ctrlBtnTeal: { backgroundColor: TEAL },
  ctrlBtnTealOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: TEAL,
  },
  ctrlBtnInactive: { backgroundColor: "rgba(255,255,255,0.12)" },
  ctrlLabel: { color: "#fff", fontSize: 11 },
  endBtn: {
    alignItems: "center",
    gap: 5,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E53935",
    justifyContent: "center",
  },
  endBtnLabel: {
    color: "#fff",
    fontSize: 11,
    position: "absolute",
    bottom: -18,
  },

  // Actions panel
  modalBackdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)" },
  actionsPanel: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    maxHeight: "60%",
  },
  actionsPanelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  actionsPanelTitle: { fontSize: 17, fontWeight: "700", color: "#222" },
  actionItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  actionItemText: { fontSize: 15, color: "#333" },
});
