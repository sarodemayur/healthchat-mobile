import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import type { RootStackParamList } from "../../navigation/types";
import { DoctorMeetingRoomScreen } from "./DoctorMeetingRoomScreen";
import { NurseMeetingRoomScreen } from "./NurseMeetingRoomScreen";
import { FamilyMemberMeetingRoomScreen } from "./FamilyMemberMeetingRoomScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Meeting">;

export function MeetingRoomScreen(props: Props) {
  const { user } = useAuth();
  const role = user?.role;

  if (role === "doctor") return <DoctorMeetingRoomScreen {...props} />;
  if (role === "nurse" || role === "admin-nurse")
    return <NurseMeetingRoomScreen {...props} />;
  return <FamilyMemberMeetingRoomScreen {...props} />;
}
