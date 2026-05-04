export type UserRole =
  | 'doctor'
  | 'nurse'
  | 'admin-nurse'
  | 'account-admin'
  | 'galen-admin'
  | 'galen-staff';

export interface User {
  id: string;
  email: string;
  display_name: string;
  role: UserRole;
  profile?: Profile;
}

export interface Profile {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  display_name?: string;
  phone?: string;
  avatar_url?: string;
  timezone?: string;
  specialization?: string;
}

export type AppointmentState = 'PENDING' | 'STARTED' | 'COMPLETED' | 'CANCELLED' | 'UNATTENDED' | 'DELETED';

export interface Appointment {
  id: string;
  doctor_id: string;
  nurse_id?: string;
  patient_name: string;
  patient_dob?: string;
  doctor_name?: string;
  nurse_name?: string;
  time_slot_from: string;
  time_slot_to: string;
  state: AppointmentState;
  meeting_link?: string;
  room_id?: string;
  room_sid?: string;
  additional_note?: string;
  soap_note?: string;
  soap_note_status?: string;
  location?: Location;
  patient_vitals?: PatientVitals;
  prescriptions?: Prescription[];
  family_mem_name: string;
  doctor?: { user: { display_name: string; profile: Profile } };
  nurse?: { user: { display_name: string; profile: Profile } };
  is_doctor_in_call?: boolean;
  is_nurse_in_call?: boolean;
  waiting_room?: { id: string; status?: string };
}

export interface PatientVitals {
  id: string;
  appointment_id: string;
  blood_pressure?: string;
  blood_pressure_systolic?: number;
  blood_pressure_diastolic?: number;
  heart_rate?: number;
  respiratory_rate?: number;
  temperature?: number;
  oximetry?: number;
  weight?: number;
  height?: number;
  images?: string[];
}

export interface Prescription {
  prescription_id: string;
  prescription_state: string;
  prescription_request_id?: string;
}

export interface Location {
  id: string;
  location_name: string;
  address?: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  body: string;
  read: boolean;
  created_at: string;
}

export type WaitingRoomStatus = 'WAITING' | 'ADMITTED' | 'DISCHARGED';

export interface WaitingRoom {
  id: string;
  appointment_id: string;
  status: WaitingRoomStatus;
}
