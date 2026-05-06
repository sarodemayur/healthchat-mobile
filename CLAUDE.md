# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # Start Expo dev server (Metro bundler)
npm run ios            # Run on iOS simulator
npm run android        # Run on Android emulator/device
npm run prebuild       # Generate native iOS/android project files (required before first native build)
npm run codegen        # Generate TypeScript types + urql hooks from .graphql files
npm run codegen:watch  # Watch mode for codegen
```

There are no test scripts configured in this project.

## Environment Variables

Copy `.env.example` to `.env` before running. All vars are prefixed `EXPO_PUBLIC_` and are read through `src/utils/config.ts`:

| Variable | Purpose |
|---|---|
| `EXPO_PUBLIC_HBP_BASE_URL` | HBP auth service base URL |
| `EXPO_PUBLIC_API_BASE_URL` | API server base URL (Twilio tokens, trusted-device) |
| `EXPO_PUBLIC_HASURA_GRAPHQL_ENDPOINT` | Hasura HTTP endpoint |
| `EXPO_PUBLIC_HASURA_WS_ENDPOINT` | Hasura WebSocket endpoint for subscriptions |

`codegen.ts` connects directly to Hasura using a hardcoded local IP and admin secret — update these if the dev Hasura instance changes.

## Architecture

### Authentication Flow

`AuthContext` (`src/context/AuthContext.tsx`) owns all session state. On startup it tries to restore the session from `expo-secure-store`: first with a valid JWT, then by refreshing via the stored refresh token.

Login path:
1. `authService.login` → HBP `/auth/login`
2. If `mfa.ticket` is returned, check for a stored trusted-device token and bypass 2FA if valid; otherwise navigate to `TwoFAScreen`
3. On success, `hydrateFromToken` decodes the JWT (`https://hasura.io/jwt/claims` namespace) to extract `x-hasura-default-role` and `x-hasura-user-id`, then fires a raw Hasura query to resolve the `roleId` (the `doctors` or `nurses` table row id, distinct from `user.id`)

All tokens are stored via `src/utils/storage.ts`, which wraps `expo-secure-store`. Never use AsyncStorage for auth tokens.

### Role-Based Navigation

`RootNavigator` renders either `AuthNavigator`, `DoctorNavigator`, or `NurseNavigator` based on `signedIn` and `user.role`. The `Meeting` screen sits at root level as a fullscreen modal, outside the tab navigators.

Role routing logic lives in `src/utils/roleRoutes.ts`. Roles `nurse` and `admin-nurse` both map to `NurseTabs`; all other authenticated roles map to `DoctorTabs`.

### GraphQL Layer

`GraphQLProvider` (`src/context/GraphQLProvider.tsx`) rebuilds the urql `Client` whenever `jwtToken` changes, injecting the `Authorization` header into both HTTP requests and WebSocket `connectionParams`. This means subscriptions automatically reconnect with the new token after login/refresh.

All GraphQL operations live in `.graphql` files under `src/graphql/`. After editing them, run `npm run codegen` to regenerate the corresponding `.generated.ts` files. **Never edit `.generated.ts` files directly.** The generated files export typed React hooks (e.g., `useGetDoctorAppointmentsSubscription`) that are imported directly in components and hooks.

### Meeting Room (Video Calls)

The meeting flow:
1. Appointment screen calls the `GetCallToken` GraphQL mutation to retrieve a Twilio JWT and `roomName`
2. Navigates to `Meeting` screen with `{ appointmentId, token, roomName }`
3. `MeetingRoomScreen` is a role dispatcher — it renders `DoctorMeetingRoomScreen`, `NurseMeetingRoomScreen`, or `FamilyMemberMeetingRoomScreen` based on `user.role`
4. Each role-specific screen uses the `useMeetingRoom` hook (`src/hooks/useMeetingRoom.ts`), which owns all Twilio state and callbacks

`useMeetingRoom` holds a `ref` to the `TwilioVideo` component (not state), manages video track maps, handles the Twilio event callbacks, and exposes control functions (`toggleMute`, `toggleCamera`, `hangUp`, etc.). It also runs two parallel data sources for the appointment: a subscription (`getAppointmentsDetailsByAppointmentId`) for live state and a one-shot query (`GetAppointmentDetailsById`) for stable display-name resolution.

Peer-to-peer signaling for mute/unmute/remove/recording uses Twilio Data Tracks — messages are JSON with a `type` field. The handler is `handleDataTrackMessageReceived` in `useMeetingRoom`.

### Design Tokens

All colors and base URLs are exported from `src/utils/config.ts`. Inline color literals in components should match those constants (`PRIMARY_COLOR = '#3DBCA2'`, etc.).
