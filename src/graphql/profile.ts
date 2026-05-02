import { gql } from 'urql';

export const GET_MY_PROFILE = gql`
  query GetMyProfile($user_id: uuid!) {
    users_by_pk(id: $user_id) {
      id
      display_name
      account {
        email
        default_role
      }
      profile {
        id
        first_name
        last_name
        email
        phone
        avatar_url
        timezone
        specialization
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($user_id: uuid!, $set: profiles_set_input!) {
    update_profiles(where: { user_id: { _eq: $user_id } }, _set: $set) {
      affected_rows
    }
  }
`;
