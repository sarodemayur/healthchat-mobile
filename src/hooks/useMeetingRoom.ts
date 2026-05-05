import { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Animated, Platform, PermissionsAndroid } from "react-native";
import {
  TwilioVideo,
  TrackEventCbArgs,
  DataTrackEventCbArgs,
} from "react-native-twilio-video-webrtc";
import { useAuth } from "../context/AuthContext";
import {
  GetAppointmentByIdSubscription,
  useGetAppointmentByIdSubscription,
  useLeaveCallMutation,
} from "../graphql/appointments.generated";
import { getInitials } from "@/utils/functions";
import { isEmpty } from "lodash";
interface VideoTrack {
  participantSid: string;
  videoTrackSid: string;
}

interface UseMeetingRoomOptions {
  appointmentId: string;
  token: string;
  roomName: string;
  onDisconnect: () => void;
}

export type IMeetAppointment = GetAppointmentByIdSubscription["appointment"];

export function useMeetingRoom({
  appointmentId,
  token,
  roomName,
  onDisconnect,
}: UseMeetingRoomOptions) {
  const { user } = useAuth();
  const [appointment, setAppointment] = useState<IMeetAppointment | null>(null);
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
  const [isRemoteMuted, setIsRemoteMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [stethoscopeOn, setStethoscopeOn] = useState(false);
  const [handheldOn, setHandheldOn] = useState(false);
  const [otoscopeOn, setOtoscopeOn] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [focusedTrackSid, setFocusedTrackSid] = useState<string | null>(null);
  const [participantIdentities, setParticipantIdentities] = useState<
    Map<string, string>
  >(new Map());
  const [participantBanner, setParticipantBanner] = useState<string | null>(
    null,
  );

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const bannerAnim = useRef(new Animated.Value(0)).current;
  const bannerAnimRef = useRef<Animated.CompositeAnimation | null>(null);

  const [{ data: appointmentData }] = useGetAppointmentByIdSubscription({
    variables: { appointment_id: appointmentId },
  });
  useEffect(() => {
    if (!isEmpty(appointmentData)) {
      setAppointment(appointmentData?.appointment);
    }
  }, [appointmentData]);

  const [, leaveCall] = useLeaveCallMutation();

  const isCurrentUserDoctor = user?.id === appointment?.doctor_id;
  const remoteName = isCurrentUserDoctor
    ? appointment?.nurse_name
    : appointment?.doctor_name;
  const remoteInitials = getInitials(remoteName, "?");
  const localInitials = getInitials(user?.display_name, "ME");

  const sendDataMessage = useCallback((payload: object) => {
    twilioRef.current?.sendString(JSON.stringify(payload));
  }, []);

  const resolveParticipantName = useCallback(
    (identity: string): string => {
      if (!appointment) return "A participant";
      if (identity === appointment.doctor_id)
        return appointment.doctor_name ?? "Doctor";
      if (identity === appointment.nurse_id)
        return appointment.nurse_name ?? "Nurse";
      if (identity === "family_member")
        return (
          appointment.family_mem_name ?? appointment.patient_name ?? "Patient"
        );
      return "A participant";
    },
    [appointment],
  );

  const showParticipantBanner = useCallback(
    (message: string) => {
      if (bannerAnimRef.current) bannerAnimRef.current.stop();
      bannerAnim.setValue(0);
      setParticipantBanner(message);
      bannerAnimRef.current = Animated.sequence([
        Animated.timing(bannerAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(2500),
        Animated.timing(bannerAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);
      bannerAnimRef.current.start(({ finished }: { finished: boolean }) => {
        if (finished) setParticipantBanner(null);
      });
    },
    [bannerAnim],
  );

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => setCallDuration((d) => d + 1), 1000);
  }, []);

  const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

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
            [{ text: "OK", onPress: onDisconnect }],
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
      if (bannerAnimRef.current) bannerAnimRef.current.stop();
      twilioRef.current?.disconnect();
    };
  }, [token, roomName]);

  useEffect(() => {
    if (focusedTrackSid && !videoTracks.has(focusedTrackSid)) {
      setFocusedTrackSid(null);
    }
  }, [videoTracks, focusedTrackSid]);

  const handleRoomDidConnect = useCallback(() => {
    setStatus("connected");
    startTimer();
  }, [startTimer]);

  const handleRoomDidDisconnect = useCallback(
    ({ error }: { error?: string }) => {
      setStatus("disconnected");
      if (timerRef.current) clearInterval(timerRef.current);
      if (error) Alert.alert("Disconnected", error);
      onDisconnect();
    },
    [onDisconnect],
  );

  const handleRoomDidFailToConnect = useCallback(
    ({ error }: { error: string }) => {
      setStatus("disconnected");
      Alert.alert("Connection Failed", error, [
        { text: "OK", onPress: onDisconnect },
      ]);
    },
    [onDisconnect],
  );

  const handleParticipantConnected = useCallback(
    ({ participant }: { participant: { sid: string; identity: string } }) => {
      setParticipantIdentities((prev) => {
        const next = new Map(prev);
        next.set(participant.sid, participant.identity);
        return next;
      });
      showParticipantBanner(
        `${resolveParticipantName(participant.identity)} joined the meeting`,
      );
    },
    [resolveParticipantName, showParticipantBanner],
  );

  const handleParticipantDisconnected = useCallback(
    ({ participant }: { participant: { sid: string; identity: string } }) => {
      setParticipantIdentities((prev) => {
        const next = new Map(prev);
        next.delete(participant.sid);
        return next;
      });
      showParticipantBanner(
        `${resolveParticipantName(participant.identity)} left the meeting`,
      );
    },
    [resolveParticipantName, showParticipantBanner],
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

  const handleDataTrackMessageReceived = useCallback(
    ({ message }: DataTrackEventCbArgs) => {
      try {
        const msg = JSON.parse(message) as {
          type: string;
          payload?: unknown;
          status?: boolean;
          identity?: string;
        };
        switch (msg.type) {
          case "mute":
            if (!msg.identity || msg.identity === user?.id) {
              twilioRef.current?.setLocalAudioEnabled(false).then(() => {
                setIsMuted(true);
                sendDataMessage({
                  type: "is_audio_on",
                  payload: { role: user?.role, status: false },
                });
              });
            }
            break;
          case "unmute":
            if (!msg.identity || msg.identity === user?.id) {
              twilioRef.current?.setLocalAudioEnabled(true).then(() => {
                setIsMuted(false);
                sendDataMessage({
                  type: "is_audio_on",
                  payload: { role: user?.role, status: true },
                });
              });
            }
            break;
          case "remove":
            if (!msg.identity || msg.identity === user?.id) {
              twilioRef.current?.disconnect();
            }
            break;
          case "request-recording":
            Alert.alert(
              "Recording Request",
              "The other participant is requesting to record this call. Do you approve?",
              [
                {
                  text: "Decline",
                  style: "destructive",
                  onPress: () =>
                    sendDataMessage({ type: "recording-declined" }),
                },
                {
                  text: "Approve",
                  onPress: () => {
                    setIsRecording(true);
                    sendDataMessage({ type: "recording-approved" });
                  },
                },
              ],
            );
            break;
          case "recording-approved":
            setIsRecording(true);
            break;
          case "recording-declined":
            setIsRecording(false);
            break;
          case "is_audio_on": {
            const p = msg.payload as { role: string; status: boolean };
            setIsRemoteMuted(!p.status);
            break;
          }
          case "stethoscope":
            setStethoscopeOn(msg.status ?? false);
            break;
          case "handHeldCamera":
            setHandheldOn(msg.status ?? false);
            break;
          case "otoscopeCamera":
            setOtoscopeOn(msg.status ?? false);
            break;
          default:
            break;
        }
      } catch {
        // ignore malformed messages
      }
    },
    [user?.id, user?.role, sendDataMessage],
  );

  const toggleMute = useCallback(() => {
    twilioRef.current
      ?.setLocalAudioEnabled(isMuted)
      .then((enabled: boolean) => {
        setIsMuted(!enabled);
        sendDataMessage({
          type: "is_audio_on",
          payload: { role: user?.role, status: enabled },
        });
      });
  }, [isMuted, sendDataMessage, user?.role]);

  const toggleCamera = useCallback(() => {
    twilioRef.current
      ?.setLocalVideoEnabled(isCameraOff)
      .then((enabled: boolean) => {
        setIsCameraOff(!enabled);
        sendDataMessage({ type: "video_off", status: !enabled });
      });
  }, [isCameraOff, sendDataMessage]);

  const flipCamera = useCallback(() => {
    twilioRef.current?.flipCamera();
  }, []);

  const swapToMain = useCallback((trackSid: string) => {
    setFocusedTrackSid(trackSid);
  }, []);

  const hangUp = useCallback(() => {
    Alert.alert("End Call", "Are you sure you want to leave this call?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Leave",
        style: "destructive",
        onPress: () => {
          leaveCall({
            object: {
              appointment_id: appointmentId,
              room_id: appointment?.room_sid ?? "",
              waiting_room_id: appointment?.waiting_room?.id ?? "",
            },
          });
          twilioRef.current?.disconnect();
        },
      },
    ]);
  }, [appointment, appointmentId, leaveCall]);

  const allTracks = Array.from(videoTracks.values());
  const focusedTrack =
    (focusedTrackSid
      ? allTracks.find((t) => t.videoTrackSid === focusedTrackSid)
      : undefined) ?? allTracks[0];
  const thumbnailTracks = allTracks.filter(
    (t) => t.videoTrackSid !== focusedTrack?.videoTrackSid,
  );

  return {
    // refs
    twilioRef,
    twilioCallbackRef,
    // state
    status,
    isMuted,
    isRemoteMuted,
    isCameraOff,
    isRecording,
    setIsRecording,
    stethoscopeOn,
    handheldOn,
    otoscopeOn,
    setStethoscopeOn,
    setHandheldOn,
    setOtoscopeOn,
    callDuration,
    participantBanner,
    bannerAnim,
    // derived
    appointment,
    isCurrentUserDoctor,
    remoteName,
    remoteInitials,
    localInitials,
    allTracks,
    focusedTrack,
    thumbnailTracks,
    participantIdentities,
    // actions
    toggleMute,
    toggleCamera,
    flipCamera,
    swapToMain,
    hangUp,
    sendDataMessage,
    formatDuration,
    resolveParticipantName,
    // twilio callbacks
    handleRoomDidConnect,
    handleRoomDidDisconnect,
    handleRoomDidFailToConnect,
    handleParticipantConnected,
    handleParticipantDisconnected,
    handleParticipantAddedVideoTrack,
    handleParticipantRemovedVideoTrack,
    handleDataTrackMessageReceived,
  };
}
