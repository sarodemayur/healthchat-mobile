import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TEAL = "#3DBCA2";

interface Props {
  icon: string;
  label: string;
  active: boolean;
  onPress: () => void;
  teal?: boolean;
  tealOutline?: boolean;
}

export function ControlBtn({ icon, label, active, onPress, teal, tealOutline }: Props) {
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
});
