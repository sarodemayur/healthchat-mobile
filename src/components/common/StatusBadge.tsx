import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppointmentState } from '../../types';

const STATE_CONFIG: Record<AppointmentState, { bg: string; text: string; label: string }> = {
  PENDING: { bg: '#FFF3E0', text: '#E65100', label: 'Pending' },
  IN_PROGRESS: { bg: '#E8F5E9', text: '#2E7D32', label: 'In Progress' },
  COMPLETED: { bg: '#E3F2FD', text: '#1565C0', label: 'Completed' },
  CANCELLED: { bg: '#FAFAFA', text: '#757575', label: 'Cancelled' },
};

export function StatusBadge({ state }: { state: AppointmentState }) {
  const cfg = STATE_CONFIG[state] ?? STATE_CONFIG.PENDING;
  return (
    <View style={[styles.badge, { backgroundColor: cfg.bg }]}>
      <Text style={[styles.text, { color: cfg.text }]}>{cfg.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
