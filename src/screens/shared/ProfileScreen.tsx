import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useQuery } from 'urql';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { GET_MY_PROFILE } from '../../graphql/profile';
import { LoadingScreen } from '../../components/common/LoadingScreen';
import { Button } from '../../components/common/Button';
import { BORDER_COLOR, PRIMARY_COLOR, SURFACE_COLOR, TEXT_COLOR, TEXT_COLOR_LIGHT } from '../../utils/config';

function ProfileRow({ icon, label, value }: { icon: string; label: string; value?: string }) {
  if (!value) return null;
  return (
    <View style={rowStyles.row}>
      <Ionicons name={icon as any} size={18} color={TEXT_COLOR_LIGHT} style={rowStyles.icon} />
      <View>
        <Text style={rowStyles.label}>{label}</Text>
        <Text style={rowStyles.value}>{value}</Text>
      </View>
    </View>
  );
}

const rowStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: BORDER_COLOR },
  icon: { marginRight: 12, width: 24 },
  label: { fontSize: 12, color: TEXT_COLOR_LIGHT },
  value: { fontSize: 14, fontWeight: '500', color: TEXT_COLOR, marginTop: 1 },
});

export function ProfileScreen() {
  const { user, logout } = useAuth();

  const [{ data, fetching }] = useQuery({
    query: GET_MY_PROFILE,
    variables: { user_id: user?.id },
    pause: !user?.id,
  });

  const profile = data?.users_by_pk?.profile;

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: logout },
    ]);
  };

  if (fetching && !data) return <LoadingScreen />;

  const initials =
    profile
      ? `${profile.first_name?.[0] ?? ''}${profile.last_name?.[0] ?? ''}`
      : user?.display_name?.[0]?.toUpperCase() ?? 'U';

  const fullName = profile
    ? `${profile.first_name ?? ''} ${profile.last_name ?? ''}`.trim()
    : user?.display_name ?? '';

  const roleBadge: Record<string, string> = {
    doctor: 'Doctor',
    nurse: 'Nurse',
    'admin-nurse': 'Admin Nurse',
    'account-admin': 'Account Admin',
    'galen-admin': 'Galen Admin',
    'galen-staff': 'Galen Staff',
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.name}>{fullName}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{roleBadge[user?.role ?? ''] ?? user?.role}</Text>
        </View>
      </View>

      {/* Profile info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <ProfileRow icon="mail-outline" label="Email" value={profile?.email ?? user?.email} />
        <ProfileRow icon="call-outline" label="Phone" value={profile?.phone} />
        <ProfileRow icon="time-outline" label="Timezone" value={profile?.timezone} />
        {profile?.specialization ? (
          <ProfileRow icon="medical-outline" label="Specialization" value={profile.specialization} />
        ) : null}
      </View>

      <View style={styles.actions}>
        <Button title="Sign Out" variant="outline" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: SURFACE_COLOR },
  content: { paddingBottom: 40 },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: { fontSize: 28, fontWeight: '800', color: '#fff' },
  name: { fontSize: 20, fontWeight: '700', color: TEXT_COLOR },
  roleBadge: {
    marginTop: 6,
    backgroundColor: '#E0F5F1',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleText: { fontSize: 13, fontWeight: '600', color: PRIMARY_COLOR },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: TEXT_COLOR_LIGHT,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingVertical: 12,
  },
  actions: { marginHorizontal: 16, marginTop: 24 },
});
