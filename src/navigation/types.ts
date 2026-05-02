export type AuthStackParamList = {
  SignIn: undefined;
  TwoFA: { ticket: string; email: string };
};

export type DoctorStackParamList = {
  DoctorAppointments: undefined;
  AppointmentDetail: { appointmentId: string };
};

export type NurseStackParamList = {
  NurseAppointments: undefined;
  AppointmentDetail: { appointmentId: string };
  CreateAppointment: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  DoctorTabs: undefined;
  NurseTabs: undefined;
  Meeting: { appointmentId: string; token: string; roomName: string };
};
