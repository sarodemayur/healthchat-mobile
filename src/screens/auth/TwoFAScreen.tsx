import React, { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { PRIMARY_COLOR, TEXT_COLOR, TEXT_COLOR_LIGHT } from '../../utils/config';
import type { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'TwoFA'>;

export function TwoFAScreen({ route }: Props) {
  const { ticket, email } = route.params;
  const { verifyTotp, registerTrustedDevice } = useAuth();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const onVerify = async () => {
    if (code.length !== 6) {
      Alert.alert('Invalid Code', 'Please enter the 6-digit code from your authenticator app.');
      return;
    }
    setLoading(true);
    try {
      await verifyTotp(ticket, code);
    } catch {
      Alert.alert('Verification Failed', 'The code is incorrect or has expired. Please try again.');
      setCode('');
      inputRef.current?.focus();
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🔐</Text>
        </View>

        <Text style={styles.title}>Two-Factor Authentication</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code from your authenticator app for{' '}
          <Text style={{ fontWeight: '700' }}>{email}</Text>
        </Text>

        <TextInput
          ref={inputRef}
          style={styles.codeInput}
          value={code}
          onChangeText={(t) => setCode(t.replace(/\D/g, '').slice(0, 6))}
          keyboardType="number-pad"
          maxLength={6}
          placeholder="000000"
          placeholderTextColor={TEXT_COLOR_LIGHT}
          textAlign="center"
          returnKeyType="done"
          onSubmitEditing={onVerify}
          autoFocus
        />

        <Button
          title="Verify"
          loading={loading}
          onPress={onVerify}
          disabled={code.length !== 6}
          style={styles.btn}
        />

        <Button
          title="Trust this device for 30 days"
          variant="secondary"
          onPress={async () => {
            await onVerify();
            await registerTrustedDevice().catch(() => {});
          }}
          disabled={code.length !== 6 || loading}
          style={styles.trustBtn}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  iconContainer: { alignItems: 'center', marginBottom: 24 },
  icon: { fontSize: 56 },
  title: { fontSize: 22, fontWeight: '800', color: TEXT_COLOR, textAlign: 'center' },
  subtitle: { fontSize: 14, color: TEXT_COLOR_LIGHT, textAlign: 'center', marginTop: 8, marginBottom: 32, lineHeight: 20 },
  codeInput: {
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    borderRadius: 12,
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 12,
    paddingVertical: 16,
    color: TEXT_COLOR,
    marginBottom: 24,
  },
  btn: { marginBottom: 12 },
  trustBtn: {},
});
