# HealthChat Mobile

A cross-platform telemedicine mobile application built with React Native and Expo. Enables healthcare teams — doctors and nurses — to manage appointments, conduct video consultations, and handle patient vitals and medical records.

## Features

- **Role-based access**: Separate workflows for doctors and nurses
- **Authentication**: Email/password login with optional two-factor authentication (TOTP)
- **Appointment management**: View, create, and manage patient appointments
- **Video consultations**: Twilio-powered video calls with camera/microphone controls
- **Patient vitals**: Record and review vitals (BP, heart rate, temperature, etc.)
- **Real-time notifications**: Live updates via GraphQL subscriptions
- **Profile management**: User profile editing

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React Native 0.81 + Expo 54 |
| Language | TypeScript 5.9 |
| Navigation | React Navigation 6 (stack + bottom tabs) |
| GraphQL | urql + Hasura (with WebSocket subscriptions) |
| Video Calling | Twilio Video (`react-native-twilio-video-webrtc`) |
| Forms | react-hook-form + Zod |
| Storage | expo-secure-store + AsyncStorage |
| Animations | React Native Reanimated 4 |

## Prerequisites

- Node.js (LTS)
- Expo CLI (`npm install -g expo-cli`)
- For iOS: Xcode and iOS Simulator or physical device
- For Android: Android Studio and Android SDK

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

```env
EXPO_PUBLIC_HBP_BASE_URL=https://your-hbp-url.com
EXPO_PUBLIC_API_BASE_URL=https://your-api-url.com
EXPO_PUBLIC_HASURA_GRAPHQL_ENDPOINT=https://your-hasura-url.com/v1/graphql
EXPO_PUBLIC_HASURA_WS_ENDPOINT=wss://your-hasura-url.com/v1/graphql
```

### 3. Run the app

```bash
npm start          # Start Expo dev server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator/device
npm run web        # Run in browser
```

To generate native project files (required before building natively):

```bash
npm run prebuild
```

## Project Structure

```
healthchat-mobile/
├── src/
│   ├── screens/
│   │   ├── auth/          # SignInScreen, TwoFAScreen
│   │   ├── doctor/        # DoctorAppointmentsScreen
│   │   ├── nurse/         # NurseAppointmentsScreen, CreateAppointmentScreen
│   │   ├── shared/        # AppointmentDetailScreen, ProfileScreen, NotificationsScreen
│   │   └── meeting/       # MeetingRoomScreen (video call)
│   ├── navigation/        # RootNavigator, AuthNavigator, role navigators
│   ├── components/
│   │   └── common/        # AppointmentCard, Button, Input, StatusBadge, LoadingScreen
│   ├── context/           # AuthContext, GraphQLProvider
│   ├── services/          # authService, twilioService
│   ├── graphql/           # Queries and mutations (appointments, notifications, profile)
│   ├── utils/             # config, storage, roleRoutes
│   └── types/             # Shared TypeScript types
├── assets/                # Icons, splash screen, images
├── App.tsx
├── index.ts
└── app.json
```

## Architecture

### Authentication

1. User submits email + password → receives JWT
2. Optional TOTP two-factor challenge
3. JWT and refresh token stored in `expo-secure-store`
4. Token refreshed automatically on expiry; session restored on app launch

### Role-Based Navigation

Users are routed to role-specific tab navigators based on the `role` field in the JWT payload. Supported roles: `doctor`, `nurse`, `admin-nurse`, `account-admin`, `galen-admin`, `galen-staff`.

### Real-Time Data

GraphQL subscriptions over WebSocket (via urql + `graphql-ws`) power live appointment updates and notifications.

### Video Calls

Twilio tokens are fetched from the API server and used to join named video rooms. The meeting screen provides local/remote video feeds, device selection (microphone, speaker, camera), and clinical tools (vitals panel, SOAP notes, body diagram).

## Backend Requirements

| Service | Purpose |
|---------|---------|
| Hasura GraphQL | Appointments, notifications, profiles |
| HBP (Health Backend Platform) | Authentication and session management |
| API Server | Twilio token generation, appointment data |
| Twilio | Video call infrastructure |

## Required Permissions

**iOS**: Camera, Microphone, Photo Library

**Android**: `CAMERA`, `RECORD_AUDIO`, `READ_EXTERNAL_STORAGE`, `WRITE_EXTERNAL_STORAGE`

These are pre-configured in `app.json`.
