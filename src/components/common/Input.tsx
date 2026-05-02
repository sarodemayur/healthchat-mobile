import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BORDER_COLOR, ERROR_COLOR, PRIMARY_COLOR, TEXT_COLOR, TEXT_COLOR_LIGHT } from '../../utils/config';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  secureToggle?: boolean;
}

export function Input({ label, error, secureToggle, secureTextEntry, style, ...rest }: InputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputRow, error ? styles.inputError : null]}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={TEXT_COLOR_LIGHT}
          secureTextEntry={secureToggle ? !visible : secureTextEntry}
          {...rest}
        />
        {secureToggle ? (
          <TouchableOpacity onPress={() => setVisible((v) => !v)} style={styles.eyeBtn}>
            <Ionicons name={visible ? 'eye-off' : 'eye'} size={20} color={TEXT_COLOR_LIGHT} />
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_COLOR,
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: TEXT_COLOR,
  },
  inputError: {
    borderColor: ERROR_COLOR,
  },
  eyeBtn: {
    paddingHorizontal: 12,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: ERROR_COLOR,
  },
});
