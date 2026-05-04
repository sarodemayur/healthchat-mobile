import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TEAL = "#3DBCA2";

export function ParticipantAvatar({ initials }: { initials: string }) {
  return (
    <View style={styles.avatarWrap}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
