import React, { useState } from "react";
import {
  Animated,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import {
  TwilioVideo,
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
} from "react-native-twilio-video-webrtc";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/types";
import { useMeetingRoom } from "../../hooks/useMeetingRoom";
import { ParticipantAvatar } from "../../components/meeting/ParticipantAvatar";
import { ControlBtn } from "../../components/meeting/ControlBtn";

type Props = NativeStackScreenProps<RootStackParamList, "Meeting">;

const TEAL = "#3DBCA2";

const FAMILY_ACTIONS = ["Appointment Info"];

export function FamilyMemberMeetingRoomScreen({ route, navigation }: Props) {
  const { appointmentId, token, roomName } = route.params;
  const insets = useSafeAreaInsets();
  const [showActionsPanel, setShowActionsPanel] = useState(false);

  const meeting = useMeetingRoom({
    appointmentId,
    token,
    roomName,
    onDisconnect: () => navigation.goBack(),
  });

  const {
    twilioCallbackRef,
    status,
    isMuted,
    isRemoteMuted,
    isCameraOff,
    participantBanner,
    bannerAnim,
    remoteInitials,
    localInitials,
    focusedTrack,
    thumbnailTracks,
    participantIdentities,
    toggleMute,
    toggleCamera,
    flipCamera,
    swapToMain,
    hangUp,
    resolveParticipantName,
    handleRoomDidConnect,
    handleRoomDidDisconnect,
    handleRoomDidFailToConnect,
    handleParticipantConnected,
    handleParticipantDisconnected,
    handleParticipantAddedVideoTrack,
    handleParticipantRemovedVideoTrack,
    handleDataTrackMessageReceived,
  } = meeting;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={TEAL} />

      {/* Remote video area */}
      <View style={styles.remoteArea}>
        {focusedTrack ? (
          <TwilioVideoParticipantView
            key={focusedTrack.videoTrackSid}
            style={StyleSheet.absoluteFill}
            trackIdentifier={{
              participantSid: focusedTrack.participantSid,
              videoTrackSid: focusedTrack.videoTrackSid,
            }}
          />
        ) : (
          <ParticipantAvatar initials={remoteInitials} />
        )}

        <View style={styles.remoteMicOff}>
          <Ionicons
            name={isRemoteMuted ? "mic-off" : "mic"}
            size={14}
            color="#fff"
          />
        </View>

        {status === "disconnected" && (
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Disconnected</Text>
          </View>
        )}

        {participantBanner && (
          <Animated.View
            style={[
              styles.participantBanner,
              {
                opacity: bannerAnim,
                transform: [
                  {
                    translateY: bannerAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-16, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Ionicons name="person-add-outline" size={16} color="#fff" />
            <Text style={styles.participantBannerText}>
              {participantBanner}
            </Text>
          </Animated.View>
        )}

        {thumbnailTracks.map((track, index) => (
          <TouchableOpacity
            key={track.videoTrackSid}
            style={[styles.pip, { right: 16 + (90 + 8) * (index + 1) }]}
            onPress={() => swapToMain(track.videoTrackSid)}
            activeOpacity={0.85}
          >
            <TwilioVideoParticipantView
              style={StyleSheet.absoluteFill}
              trackIdentifier={{
                participantSid: track.participantSid,
                videoTrackSid: track.videoTrackSid,
              }}
            />
            <View style={styles.pipExpandIcon}>
              <Ionicons name="expand-outline" size={12} color="#fff" />
            </View>
            <Text style={styles.pipLabel} numberOfLines={1}>
              {resolveParticipantName(
                participantIdentities.get(track.participantSid) ?? "",
              )}
            </Text>
          </TouchableOpacity>
        ))}

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

      {/* Bottom controls — minimal */}
      <View style={[styles.controls, { paddingBottom: insets.bottom + 12 }]}>
        <ControlBtn
          icon={isMuted ? "mic-off-outline" : "mic-outline"}
          label={isMuted ? "Unmute" : "Mic"}
          active={!isMuted}
          onPress={toggleMute}
        />
        <ControlBtn
          icon={isCameraOff ? "videocam-off-outline" : "videocam-outline"}
          label={isCameraOff ? "Start Video" : "Webcam"}
          active={!isCameraOff}
          onPress={toggleCamera}
          teal
        />
        <ControlBtn
          icon="swap-horizontal-outline"
          label={thumbnailTracks.length > 0 ? "Swap Video" : "Flip Cam"}
          active
          onPress={
            thumbnailTracks.length > 0
              ? () => swapToMain(thumbnailTracks[0].videoTrackSid)
              : flipCamera
          }
        />
        <ControlBtn
          icon="information-circle-outline"
          label="Info"
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

      {/* Actions panel */}
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
            {FAMILY_ACTIONS.map((item) => (
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
        onRoomParticipantDidConnect={handleParticipantConnected}
        onRoomParticipantDidDisconnect={handleParticipantDisconnected}
        onParticipantAddedVideoTrack={handleParticipantAddedVideoTrack}
        onParticipantRemovedVideoTrack={handleParticipantRemovedVideoTrack}
        onDataTrackMessageReceived={handleDataTrackMessageReceived}
      />

      {status === "connecting" && (
        <View style={styles.connectingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.connectingText}>Connecting to meeting…</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: TEAL },
  remoteArea: {
    flex: 1,
    backgroundColor: TEAL,
    justifyContent: "center",
    alignItems: "center",
  },
  participantBanner: {
    position: "absolute",
    top: 16,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(0,0,0,0.72)",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    zIndex: 20,
  },
  participantBannerText: { color: "#fff", fontSize: 13, fontWeight: "600" },
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
  pipExpandIcon: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 6,
    padding: 3,
  },
  pipMic: {
    position: "absolute",
    bottom: 18,
    left: 4,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
    padding: 2,
  },
  remoteMicOff: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 8,
    padding: 4,
  },
  pipLabel: {
    position: "absolute",
    bottom: 4,
    alignSelf: "center",
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0.75)",
    paddingTop: 14,
  },
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
  connectingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    zIndex: 100,
  },
  connectingText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
