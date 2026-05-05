import React from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useAuth } from '../../context/AuthContext';
import {
  useGetNotificationsQuery,
  useMarkNotificationReadMutation,
  useMarkAllNotificationsReadMutation,
} from '../../graphql/notifications.generated';
import { LoadingScreen } from '../../components/common/LoadingScreen';
import { BORDER_COLOR, PRIMARY_COLOR, SURFACE_COLOR, TEXT_COLOR, TEXT_COLOR_LIGHT } from '../../utils/config';

export function NotificationsScreen() {
  const { user } = useAuth();

  const [{ data, fetching }, refetch] = useGetNotificationsQuery({
    variables: { user_id: user?.id ?? '' },
    pause: !user?.id,
  });

  const [, markRead] = useMarkNotificationReadMutation();
  const [, markAllRead] = useMarkAllNotificationsReadMutation();

  const notifications = data?.notifications ?? [];
  const unreadCount = notifications.filter((n) => !n.is_read).length;

  if (fetching && !data) return <LoadingScreen />;

  return (
    <View style={styles.container}>
      {unreadCount > 0 ? (
        <TouchableOpacity
          style={styles.markAllBtn}
          onPress={() => markAllRead({ user_id: user?.id ?? '' })}
        >
          <Text style={styles.markAllText}>Mark all as read ({unreadCount})</Text>
        </TouchableOpacity>
      ) : null}

      <FlatList
        data={notifications}
        keyExtractor={(n) => n.id}
        refreshControl={
          <RefreshControl
            refreshing={fetching}
            onRefresh={() => refetch({ requestPolicy: 'network-only' })}
            tintColor={PRIMARY_COLOR}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, !item.is_read && styles.itemUnread]}
            onPress={() => markRead({ id: item.id })}
            activeOpacity={0.7}
          >
            <View style={[styles.dot, !item.is_read && styles.dotActive]} />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle} numberOfLines={2}>{item.message}</Text>
              <Text style={styles.itemTime}>
                {formatDistanceToNow(parseISO(item.created_at), { addSuffix: true })}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={TEXT_COLOR_LIGHT} />
          </TouchableOpacity>
        )}
        contentContainerStyle={notifications.length === 0 ? styles.emptyContainer : undefined}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>🔔</Text>
            <Text style={styles.emptyTitle}>No notifications</Text>
            <Text style={styles.emptyText}>You're all caught up!</Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: SURFACE_COLOR },
  markAllBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    alignItems: 'flex-end',
  },
  markAllText: { fontSize: 13, color: PRIMARY_COLOR, fontWeight: '600' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    gap: 12,
  },
  itemUnread: { backgroundColor: '#F0FBF9' },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'transparent',
    marginTop: 2,
    flexShrink: 0,
  },
  dotActive: { backgroundColor: PRIMARY_COLOR },
  itemContent: { flex: 1 },
  itemTitle: { fontSize: 14, fontWeight: '700', color: TEXT_COLOR, marginBottom: 2 },
  itemBody: { fontSize: 13, color: TEXT_COLOR_LIGHT, lineHeight: 18, marginBottom: 4 },
  itemTime: { fontSize: 11, color: TEXT_COLOR_LIGHT },
  separator: { height: 1, backgroundColor: BORDER_COLOR },
  emptyContainer: { flex: 1 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 80 },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: TEXT_COLOR, marginBottom: 8 },
  emptyText: { fontSize: 14, color: TEXT_COLOR_LIGHT },
});
