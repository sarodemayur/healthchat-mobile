import { gql } from 'urql';

export const GET_NOTIFICATIONS = gql`
  query GetNotifications($user_id: uuid!) {
    notifications(
      where: { user_id: { _eq: $user_id } }
      order_by: { created_at: desc }
      limit: 50
    ) {
      id
      title
      body
      read
      created_at
    }
  }
`;

export const MARK_NOTIFICATION_READ = gql`
  mutation MarkNotificationRead($id: uuid!) {
    update_notifications_by_pk(pk_columns: { id: $id }, _set: { read: true }) {
      id
    }
  }
`;

export const MARK_ALL_READ = gql`
  mutation MarkAllNotificationsRead($user_id: uuid!) {
    update_notifications(where: { user_id: { _eq: $user_id } }, _set: { read: true }) {
      affected_rows
    }
  }
`;

export const SUBSCRIBE_NOTIFICATIONS = gql`
  subscription SubscribeNotifications($user_id: uuid!) {
    notifications(
      where: { user_id: { _eq: $user_id }, read: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      id
      title
      body
      read
      created_at
    }
  }
`;
