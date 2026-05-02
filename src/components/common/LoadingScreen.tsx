import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR, TEXT_COLOR_LIGHT } from '../../utils/config';

export function LoadingScreen({ message = 'Loading...' }: { message?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 12,
  },
  text: {
    fontSize: 14,
    color: TEXT_COLOR_LIGHT,
  },
});
