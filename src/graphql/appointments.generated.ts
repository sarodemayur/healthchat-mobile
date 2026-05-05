/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from '@/gql/base-types';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: boolean | null | undefined;
  _gt?: boolean | null | undefined;
  _gte?: boolean | null | undefined;
  _in?: Array<boolean> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: boolean | null | undefined;
  _lte?: boolean | null | undefined;
  _neq?: boolean | null | undefined;
  _nin?: Array<boolean> | null | undefined;
};

export type GetCallTokenInput = {
  appointment_id: string;
  external_call_user_name?: string | null | undefined;
  external_call_user_role?: string | null | undefined;
  room_sid?: string | null | undefined;
  update?: boolean | null | undefined;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

export type LeaveCallInput = {
  appointment_id?: string | null | undefined;
  room_id?: string | null | undefined;
  waiting_room_id?: string | null | undefined;
};

export type NewAppointmentInput = {
  additional_note?: string | null | undefined;
  doctor_id: string;
  family_mem_email?: string | null | undefined;
  family_mem_name?: string | null | undefined;
  family_mem_phone?: string | null | undefined;
  is_patient_remote?: boolean | null | undefined;
  location_id: string;
  nurse_id?: string | null | undefined;
  patient_name?: string | null | undefined;
  time_slot_from: string;
  time_slot_to?: string | null | undefined;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  /** does the column match the given case-insensitive pattern */
  _ilike?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: string | null | undefined;
  _is_null?: boolean | null | undefined;
  /** does the column match the given pattern */
  _like?: string | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: string | null | undefined;
  /** does the column NOT match the given pattern */
  _nlike?: string | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: string | null | undefined;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: string | null | undefined;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: string | null | undefined;
  /** does the column match the given SQL regular expression */
  _similar?: string | null | undefined;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  _and?: Array<Address_Bool_Exp> | null | undefined;
  _not?: Address_Bool_Exp | null | undefined;
  _or?: Array<Address_Bool_Exp> | null | undefined;
  address_lane?: String_Comparison_Exp | null | undefined;
  city?: String_Comparison_Exp | null | undefined;
  country?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_shipping_address?: Boolean_Comparison_Exp | null | undefined;
  profile?: Profile_Bool_Exp | null | undefined;
  profile_id?: Uuid_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  zip_code?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "address" */
export type Address_Constraint =
  /** unique or primary key constraint */
  | 'address_pkey';

/** input type for inserting data into table "address" */
export type Address_Insert_Input = {
  address_lane?: string | null | undefined;
  city?: string | null | undefined;
  country?: string | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  is_shipping_address?: boolean | null | undefined;
  profile?: Profile_Obj_Rel_Insert_Input | null | undefined;
  profile_id?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  zip_code?: string | null | undefined;
};

/** input type for inserting object relation for remote table "address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** upsert condition */
  on_conflict?: Address_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: Address_Bool_Exp | null | undefined;
};

/** update columns of table "address" */
export type Address_Update_Column =
  /** column name */
  | 'address_lane'
  /** column name */
  | 'city'
  /** column name */
  | 'country'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'is_shipping_address'
  /** column name */
  | 'profile_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'zip_code';

/** input type for inserting array relation for remote table "appointments" */
export type Appointments_Arr_Rel_Insert_Input = {
  data: Array<Appointments_Insert_Input>;
  /** upsert condition */
  on_conflict?: Appointments_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "appointments". All fields are combined with a logical 'AND'. */
export type Appointments_Bool_Exp = {
  _and?: Array<Appointments_Bool_Exp> | null | undefined;
  _not?: Appointments_Bool_Exp | null | undefined;
  _or?: Array<Appointments_Bool_Exp> | null | undefined;
  additional_note?: String_Comparison_Exp | null | undefined;
  appointment_ended_at?: Timestamptz_Comparison_Exp | null | undefined;
  appointment_started_at?: Timestamptz_Comparison_Exp | null | undefined;
  appointments_state_enum?: Appointments_State_Enum_Bool_Exp | null | undefined;
  cancelled_at?: String_Comparison_Exp | null | undefined;
  composition_id?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  doctor?: Doctors_Bool_Exp | null | undefined;
  doctor_appointments_response_enum?: Doctor_Appointments_Response_Enum_Bool_Exp | null | undefined;
  doctor_id?: Uuid_Comparison_Exp | null | undefined;
  doctor_name?: String_Comparison_Exp | null | undefined;
  doctor_response?: Doctor_Appointments_Response_Enum_Enum_Comparison_Exp | null | undefined;
  external_api_call_logs?: External_Api_Call_Logs_Bool_Exp | null | undefined;
  external_call_created_by_user?: String_Comparison_Exp | null | undefined;
  facility_account_id?: Uuid_Comparison_Exp | null | undefined;
  family_mem_email?: String_Comparison_Exp | null | undefined;
  family_mem_name?: String_Comparison_Exp | null | undefined;
  family_mem_phone?: String_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_doctor_in_call?: Boolean_Comparison_Exp | null | undefined;
  is_external_call?: Boolean_Comparison_Exp | null | undefined;
  is_nurse_in_call?: Boolean_Comparison_Exp | null | undefined;
  is_patient_remote?: Boolean_Comparison_Exp | null | undefined;
  location?: Locations_Bool_Exp | null | undefined;
  location_id?: Uuid_Comparison_Exp | null | undefined;
  meeting_link?: String_Comparison_Exp | null | undefined;
  nurse?: Nurses_Bool_Exp | null | undefined;
  nurse_id?: Uuid_Comparison_Exp | null | undefined;
  nurse_name?: String_Comparison_Exp | null | undefined;
  patient_dob?: String_Comparison_Exp | null | undefined;
  patient_id?: String_Comparison_Exp | null | undefined;
  patient_last_name?: String_Comparison_Exp | null | undefined;
  patient_name?: String_Comparison_Exp | null | undefined;
  patient_vitals?: Patient_Vitals_Bool_Exp | null | undefined;
  prescriptions?: Prescription_Bool_Exp | null | undefined;
  rejection_reason?: String_Comparison_Exp | null | undefined;
  room_id?: Uuid_Comparison_Exp | null | undefined;
  room_sid?: String_Comparison_Exp | null | undefined;
  soap_note?: Boolean_Comparison_Exp | null | undefined;
  soap_note_document_id?: String_Comparison_Exp | null | undefined;
  soap_note_request_id?: String_Comparison_Exp | null | undefined;
  soap_note_status?: String_Comparison_Exp | null | undefined;
  state?: Appointments_State_Enum_Enum_Comparison_Exp | null | undefined;
  time_slot_from?: Timestamptz_Comparison_Exp | null | undefined;
  time_slot_to?: Timestamptz_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  waiting_room?: Waiting_Rooms_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "appointments" */
export type Appointments_Constraint =
  /** unique or primary key constraint */
  | 'appointments_pkey';

/** input type for inserting data into table "appointments" */
export type Appointments_Insert_Input = {
  additional_note?: string | null | undefined;
  appointment_ended_at?: string | null | undefined;
  appointment_started_at?: string | null | undefined;
  appointments_state_enum?: Appointments_State_Enum_Obj_Rel_Insert_Input | null | undefined;
  cancelled_at?: string | null | undefined;
  composition_id?: string | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  doctor?: Doctors_Obj_Rel_Insert_Input | null | undefined;
  doctor_appointments_response_enum?: Doctor_Appointments_Response_Enum_Obj_Rel_Insert_Input | null | undefined;
  doctor_id?: string | null | undefined;
  doctor_name?: string | null | undefined;
  doctor_response?: Doctor_Appointments_Response_Enum_Enum | null | undefined;
  external_api_call_logs?: External_Api_Call_Logs_Arr_Rel_Insert_Input | null | undefined;
  external_call_created_by_user?: string | null | undefined;
  facility_account_id?: string | null | undefined;
  family_mem_email?: string | null | undefined;
  family_mem_name?: string | null | undefined;
  family_mem_phone?: string | null | undefined;
  id?: string | null | undefined;
  is_doctor_in_call?: boolean | null | undefined;
  is_external_call?: boolean | null | undefined;
  is_nurse_in_call?: boolean | null | undefined;
  is_patient_remote?: boolean | null | undefined;
  location?: Locations_Obj_Rel_Insert_Input | null | undefined;
  location_id?: string | null | undefined;
  meeting_link?: string | null | undefined;
  nurse?: Nurses_Obj_Rel_Insert_Input | null | undefined;
  nurse_id?: string | null | undefined;
  nurse_name?: string | null | undefined;
  patient_dob?: string | null | undefined;
  patient_id?: string | null | undefined;
  patient_last_name?: string | null | undefined;
  patient_name?: string | null | undefined;
  patient_vitals?: Patient_Vitals_Obj_Rel_Insert_Input | null | undefined;
  prescriptions?: Prescription_Arr_Rel_Insert_Input | null | undefined;
  rejection_reason?: string | null | undefined;
  room_id?: string | null | undefined;
  room_sid?: string | null | undefined;
  soap_note?: boolean | null | undefined;
  soap_note_document_id?: string | null | undefined;
  soap_note_request_id?: string | null | undefined;
  soap_note_status?: string | null | undefined;
  state?: Appointments_State_Enum_Enum | null | undefined;
  time_slot_from?: string | null | undefined;
  time_slot_to?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  waiting_room?: Waiting_Rooms_Obj_Rel_Insert_Input | null | undefined;
};

/** input type for inserting object relation for remote table "appointments" */
export type Appointments_Obj_Rel_Insert_Input = {
  data: Appointments_Insert_Input;
  /** upsert condition */
  on_conflict?: Appointments_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "appointments" */
export type Appointments_On_Conflict = {
  constraint: Appointments_Constraint;
  update_columns?: Array<Appointments_Update_Column>;
  where?: Appointments_Bool_Exp | null | undefined;
};

/** input type for updating data in table "appointments" */
export type Appointments_Set_Input = {
  additional_note?: string | null | undefined;
  appointment_ended_at?: string | null | undefined;
  appointment_started_at?: string | null | undefined;
  cancelled_at?: string | null | undefined;
  composition_id?: string | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  doctor_id?: string | null | undefined;
  doctor_name?: string | null | undefined;
  doctor_response?: Doctor_Appointments_Response_Enum_Enum | null | undefined;
  external_call_created_by_user?: string | null | undefined;
  facility_account_id?: string | null | undefined;
  family_mem_email?: string | null | undefined;
  family_mem_name?: string | null | undefined;
  family_mem_phone?: string | null | undefined;
  id?: string | null | undefined;
  is_doctor_in_call?: boolean | null | undefined;
  is_external_call?: boolean | null | undefined;
  is_nurse_in_call?: boolean | null | undefined;
  is_patient_remote?: boolean | null | undefined;
  location_id?: string | null | undefined;
  meeting_link?: string | null | undefined;
  nurse_id?: string | null | undefined;
  nurse_name?: string | null | undefined;
  patient_dob?: string | null | undefined;
  patient_id?: string | null | undefined;
  patient_last_name?: string | null | undefined;
  patient_name?: string | null | undefined;
  rejection_reason?: string | null | undefined;
  room_id?: string | null | undefined;
  room_sid?: string | null | undefined;
  soap_note?: boolean | null | undefined;
  soap_note_document_id?: string | null | undefined;
  soap_note_request_id?: string | null | undefined;
  soap_note_status?: string | null | undefined;
  state?: Appointments_State_Enum_Enum | null | undefined;
  time_slot_from?: string | null | undefined;
  time_slot_to?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
};

/** Boolean expression to filter rows from the table "appointments_state_enum". All fields are combined with a logical 'AND'. */
export type Appointments_State_Enum_Bool_Exp = {
  _and?: Array<Appointments_State_Enum_Bool_Exp> | null | undefined;
  _not?: Appointments_State_Enum_Bool_Exp | null | undefined;
  _or?: Array<Appointments_State_Enum_Bool_Exp> | null | undefined;
  appointments?: Appointments_Bool_Exp | null | undefined;
  value?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "appointments_state_enum" */
export type Appointments_State_Enum_Constraint =
  /** unique or primary key constraint */
  | 'appointments_state_enum_pkey';

export type Appointments_State_Enum_Enum =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'DELETED'
  | 'PENDING'
  | 'STARTED'
  | 'UNATTENDED';

/** Boolean expression to compare columns of type "appointments_state_enum_enum". All fields are combined with logical 'AND'. */
export type Appointments_State_Enum_Enum_Comparison_Exp = {
  _eq?: Appointments_State_Enum_Enum | null | undefined;
  _in?: Array<Appointments_State_Enum_Enum> | null | undefined;
  _is_null?: boolean | null | undefined;
  _neq?: Appointments_State_Enum_Enum | null | undefined;
  _nin?: Array<Appointments_State_Enum_Enum> | null | undefined;
};

/** input type for inserting data into table "appointments_state_enum" */
export type Appointments_State_Enum_Insert_Input = {
  appointments?: Appointments_Arr_Rel_Insert_Input | null | undefined;
  value?: string | null | undefined;
};

/** input type for inserting object relation for remote table "appointments_state_enum" */
export type Appointments_State_Enum_Obj_Rel_Insert_Input = {
  data: Appointments_State_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: Appointments_State_Enum_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "appointments_state_enum" */
export type Appointments_State_Enum_On_Conflict = {
  constraint: Appointments_State_Enum_Constraint;
  update_columns?: Array<Appointments_State_Enum_Update_Column>;
  where?: Appointments_State_Enum_Bool_Exp | null | undefined;
};

/** update columns of table "appointments_state_enum" */
export type Appointments_State_Enum_Update_Column =
  /** column name */
  | 'value';

/** update columns of table "appointments" */
export type Appointments_Update_Column =
  /** column name */
  | 'additional_note'
  /** column name */
  | 'appointment_ended_at'
  /** column name */
  | 'appointment_started_at'
  /** column name */
  | 'cancelled_at'
  /** column name */
  | 'composition_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'doctor_name'
  /** column name */
  | 'doctor_response'
  /** column name */
  | 'external_call_created_by_user'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'family_mem_email'
  /** column name */
  | 'family_mem_name'
  /** column name */
  | 'family_mem_phone'
  /** column name */
  | 'id'
  /** column name */
  | 'is_doctor_in_call'
  /** column name */
  | 'is_external_call'
  /** column name */
  | 'is_nurse_in_call'
  /** column name */
  | 'is_patient_remote'
  /** column name */
  | 'location_id'
  /** column name */
  | 'meeting_link'
  /** column name */
  | 'nurse_id'
  /** column name */
  | 'nurse_name'
  /** column name */
  | 'patient_dob'
  /** column name */
  | 'patient_id'
  /** column name */
  | 'patient_last_name'
  /** column name */
  | 'patient_name'
  /** column name */
  | 'rejection_reason'
  /** column name */
  | 'room_id'
  /** column name */
  | 'room_sid'
  /** column name */
  | 'soap_note'
  /** column name */
  | 'soap_note_document_id'
  /** column name */
  | 'soap_note_request_id'
  /** column name */
  | 'soap_note_status'
  /** column name */
  | 'state'
  /** column name */
  | 'time_slot_from'
  /** column name */
  | 'time_slot_to'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** upsert condition */
  on_conflict?: Auth_Account_Providers_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Array<Auth_Account_Providers_Bool_Exp> | null | undefined;
  _not?: Auth_Account_Providers_Bool_Exp | null | undefined;
  _or?: Array<Auth_Account_Providers_Bool_Exp> | null | undefined;
  account?: Auth_Accounts_Bool_Exp | null | undefined;
  account_id?: Uuid_Comparison_Exp | null | undefined;
  auth_provider?: String_Comparison_Exp | null | undefined;
  auth_provider_unique_id?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  provider?: Auth_Providers_Bool_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "auth.account_providers" */
export type Auth_Account_Providers_Constraint =
  /** unique or primary key constraint */
  | 'account_providers_account_id_auth_provider_key'
  /** unique or primary key constraint */
  | 'account_providers_auth_provider_auth_provider_unique_id_key'
  /** unique or primary key constraint */
  | 'account_providers_pkey';

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Auth_Accounts_Obj_Rel_Insert_Input | null | undefined;
  account_id?: string | null | undefined;
  auth_provider?: string | null | undefined;
  auth_provider_unique_id?: string | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  provider?: Auth_Providers_Obj_Rel_Insert_Input | null | undefined;
  updated_at?: string | null | undefined;
};

/** on_conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns?: Array<Auth_Account_Providers_Update_Column>;
  where?: Auth_Account_Providers_Bool_Exp | null | undefined;
};

/** update columns of table "auth.account_providers" */
export type Auth_Account_Providers_Update_Column =
  /** column name */
  | 'account_id'
  /** column name */
  | 'auth_provider'
  /** column name */
  | 'auth_provider_unique_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at';

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: Auth_Account_Roles_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Array<Auth_Account_Roles_Bool_Exp> | null | undefined;
  _not?: Auth_Account_Roles_Bool_Exp | null | undefined;
  _or?: Array<Auth_Account_Roles_Bool_Exp> | null | undefined;
  account?: Auth_Accounts_Bool_Exp | null | undefined;
  account_id?: Uuid_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  role?: String_Comparison_Exp | null | undefined;
  roleByRole?: Auth_Roles_Bool_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "auth.account_roles" */
export type Auth_Account_Roles_Constraint =
  /** unique or primary key constraint */
  | 'account_roles_pkey'
  /** unique or primary key constraint */
  | 'user_roles_account_id_role_key';

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Auth_Accounts_Obj_Rel_Insert_Input | null | undefined;
  account_id?: string | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  role?: string | null | undefined;
  roleByRole?: Auth_Roles_Obj_Rel_Insert_Input | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** on_conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: Auth_Account_Roles_Bool_Exp | null | undefined;
};

/** update columns of table "auth.account_roles" */
export type Auth_Account_Roles_Update_Column =
  /** column name */
  | 'account_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'user_id';

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: Auth_Accounts_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Array<Auth_Accounts_Bool_Exp> | null | undefined;
  _not?: Auth_Accounts_Bool_Exp | null | undefined;
  _or?: Array<Auth_Accounts_Bool_Exp> | null | undefined;
  account_providers?: Auth_Account_Providers_Bool_Exp | null | undefined;
  account_roles?: Auth_Account_Roles_Bool_Exp | null | undefined;
  active?: Boolean_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  custom_register_data?: Jsonb_Comparison_Exp | null | undefined;
  default_role?: String_Comparison_Exp | null | undefined;
  email?: Citext_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_anonymous?: Boolean_Comparison_Exp | null | undefined;
  is_super?: Boolean_Comparison_Exp | null | undefined;
  mfa_enabled?: Boolean_Comparison_Exp | null | undefined;
  new_email?: Citext_Comparison_Exp | null | undefined;
  otp_secret?: String_Comparison_Exp | null | undefined;
  password_hash?: String_Comparison_Exp | null | undefined;
  refresh_tokens?: Auth_Refresh_Tokens_Bool_Exp | null | undefined;
  role?: Auth_Roles_Bool_Exp | null | undefined;
  ticket?: Uuid_Comparison_Exp | null | undefined;
  ticket_expires_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "auth.accounts" */
export type Auth_Accounts_Constraint =
  /** unique or primary key constraint */
  | 'accounts_email_key'
  /** unique or primary key constraint */
  | 'accounts_new_email_key'
  /** unique or primary key constraint */
  | 'accounts_pkey'
  /** unique or primary key constraint */
  | 'accounts_user_id_key';

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Auth_Account_Providers_Arr_Rel_Insert_Input | null | undefined;
  account_roles?: Auth_Account_Roles_Arr_Rel_Insert_Input | null | undefined;
  active?: boolean | null | undefined;
  created_at?: string | null | undefined;
  custom_register_data?: Record<string, unknown> | null | undefined;
  default_role?: string | null | undefined;
  email?: unknown;
  id?: string | null | undefined;
  is_anonymous?: boolean | null | undefined;
  is_super?: boolean | null | undefined;
  mfa_enabled?: boolean | null | undefined;
  new_email?: unknown;
  otp_secret?: string | null | undefined;
  password_hash?: string | null | undefined;
  refresh_tokens?: Auth_Refresh_Tokens_Arr_Rel_Insert_Input | null | undefined;
  role?: Auth_Roles_Obj_Rel_Insert_Input | null | undefined;
  ticket?: string | null | undefined;
  ticket_expires_at?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: Auth_Accounts_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns?: Array<Auth_Accounts_Update_Column>;
  where?: Auth_Accounts_Bool_Exp | null | undefined;
};

/** update columns of table "auth.accounts" */
export type Auth_Accounts_Update_Column =
  /** column name */
  | 'active'
  /** column name */
  | 'created_at'
  /** column name */
  | 'custom_register_data'
  /** column name */
  | 'default_role'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'is_anonymous'
  /** column name */
  | 'is_super'
  /** column name */
  | 'mfa_enabled'
  /** column name */
  | 'new_email'
  /** column name */
  | 'otp_secret'
  /** column name */
  | 'password_hash'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticket_expires_at'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'user_id';

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Array<Auth_Providers_Bool_Exp> | null | undefined;
  _not?: Auth_Providers_Bool_Exp | null | undefined;
  _or?: Array<Auth_Providers_Bool_Exp> | null | undefined;
  account_providers?: Auth_Account_Providers_Bool_Exp | null | undefined;
  provider?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "auth.providers" */
export type Auth_Providers_Constraint =
  /** unique or primary key constraint */
  | 'providers_pkey';

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Auth_Account_Providers_Arr_Rel_Insert_Input | null | undefined;
  provider?: string | null | undefined;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: Auth_Providers_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: Auth_Providers_Bool_Exp | null | undefined;
};

/** update columns of table "auth.providers" */
export type Auth_Providers_Update_Column =
  /** column name */
  | 'provider';

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: Auth_Refresh_Tokens_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Array<Auth_Refresh_Tokens_Bool_Exp> | null | undefined;
  _not?: Auth_Refresh_Tokens_Bool_Exp | null | undefined;
  _or?: Array<Auth_Refresh_Tokens_Bool_Exp> | null | undefined;
  account?: Auth_Accounts_Bool_Exp | null | undefined;
  account_id?: Uuid_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  expires_at?: Timestamptz_Comparison_Exp | null | undefined;
  refresh_token?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Constraint =
  /** unique or primary key constraint */
  | 'refresh_tokens_pkey';

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Auth_Accounts_Obj_Rel_Insert_Input | null | undefined;
  account_id?: string | null | undefined;
  created_at?: string | null | undefined;
  expires_at?: string | null | undefined;
  refresh_token?: string | null | undefined;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Auth_Refresh_Tokens_Bool_Exp | null | undefined;
};

/** update columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Update_Column =
  /** column name */
  | 'account_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'refresh_token';

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Array<Auth_Roles_Bool_Exp> | null | undefined;
  _not?: Auth_Roles_Bool_Exp | null | undefined;
  _or?: Array<Auth_Roles_Bool_Exp> | null | undefined;
  account_roles?: Auth_Account_Roles_Bool_Exp | null | undefined;
  accounts?: Auth_Accounts_Bool_Exp | null | undefined;
  role?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "auth.roles" */
export type Auth_Roles_Constraint =
  /** unique or primary key constraint */
  | 'roles_pkey';

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Auth_Account_Roles_Arr_Rel_Insert_Input | null | undefined;
  accounts?: Auth_Accounts_Arr_Rel_Insert_Input | null | undefined;
  role?: string | null | undefined;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: Auth_Roles_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: Auth_Roles_Bool_Exp | null | undefined;
};

/** update columns of table "auth.roles" */
export type Auth_Roles_Update_Column =
  /** column name */
  | 'role';

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: unknown;
  _gt?: unknown;
  _gte?: unknown;
  /** does the column match the given case-insensitive pattern */
  _ilike?: unknown;
  _in?: Array<unknown> | null | undefined;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: unknown;
  _is_null?: boolean | null | undefined;
  /** does the column match the given pattern */
  _like?: unknown;
  _lt?: unknown;
  _lte?: unknown;
  _neq?: unknown;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: unknown;
  _nin?: Array<unknown> | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: unknown;
  /** does the column NOT match the given pattern */
  _nlike?: unknown;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: unknown;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: unknown;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: unknown;
  /** does the column match the given SQL regular expression */
  _similar?: unknown;
};

/** Boolean expression to filter rows from the table "doctor_appointments_response_enum". All fields are combined with a logical 'AND'. */
export type Doctor_Appointments_Response_Enum_Bool_Exp = {
  _and?: Array<Doctor_Appointments_Response_Enum_Bool_Exp> | null | undefined;
  _not?: Doctor_Appointments_Response_Enum_Bool_Exp | null | undefined;
  _or?: Array<Doctor_Appointments_Response_Enum_Bool_Exp> | null | undefined;
  appointments?: Appointments_Bool_Exp | null | undefined;
  value?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Constraint =
  /** unique or primary key constraint */
  | 'doctor_appointments_response_enum_pkey';

export type Doctor_Appointments_Response_Enum_Enum =
  | 'ACCEPTED'
  | 'PENDING'
  | 'REJECTED';

/** Boolean expression to compare columns of type "doctor_appointments_response_enum_enum". All fields are combined with logical 'AND'. */
export type Doctor_Appointments_Response_Enum_Enum_Comparison_Exp = {
  _eq?: Doctor_Appointments_Response_Enum_Enum | null | undefined;
  _in?: Array<Doctor_Appointments_Response_Enum_Enum> | null | undefined;
  _is_null?: boolean | null | undefined;
  _neq?: Doctor_Appointments_Response_Enum_Enum | null | undefined;
  _nin?: Array<Doctor_Appointments_Response_Enum_Enum> | null | undefined;
};

/** input type for inserting data into table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Insert_Input = {
  appointments?: Appointments_Arr_Rel_Insert_Input | null | undefined;
  value?: string | null | undefined;
};

/** input type for inserting object relation for remote table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Obj_Rel_Insert_Input = {
  data: Doctor_Appointments_Response_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: Doctor_Appointments_Response_Enum_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_On_Conflict = {
  constraint: Doctor_Appointments_Response_Enum_Constraint;
  update_columns?: Array<Doctor_Appointments_Response_Enum_Update_Column>;
  where?: Doctor_Appointments_Response_Enum_Bool_Exp | null | undefined;
};

/** update columns of table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Update_Column =
  /** column name */
  | 'value';

/** Boolean expression to filter rows from the table "doctor_subscriptions". All fields are combined with a logical 'AND'. */
export type Doctor_Subscriptions_Bool_Exp = {
  _and?: Array<Doctor_Subscriptions_Bool_Exp> | null | undefined;
  _not?: Doctor_Subscriptions_Bool_Exp | null | undefined;
  _or?: Array<Doctor_Subscriptions_Bool_Exp> | null | undefined;
  cancelled_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  doctor?: Doctors_Bool_Exp | null | undefined;
  doctor_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  link_active?: Boolean_Comparison_Exp | null | undefined;
  message?: String_Comparison_Exp | null | undefined;
  payment_id?: String_Comparison_Exp | null | undefined;
  payment_link?: String_Comparison_Exp | null | undefined;
  payment_state?: String_Comparison_Exp | null | undefined;
  stripe_customer_name?: String_Comparison_Exp | null | undefined;
  stripe_subscription_id?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  valid_from?: Timestamptz_Comparison_Exp | null | undefined;
  valid_till?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "doctor_subscriptions" */
export type Doctor_Subscriptions_Constraint =
  /** unique or primary key constraint */
  | 'doctor_subscriptions_pkey';

/** input type for inserting data into table "doctor_subscriptions" */
export type Doctor_Subscriptions_Insert_Input = {
  cancelled_at?: string | null | undefined;
  created_at?: string | null | undefined;
  doctor?: Doctors_Obj_Rel_Insert_Input | null | undefined;
  doctor_id?: string | null | undefined;
  id?: string | null | undefined;
  link_active?: boolean | null | undefined;
  message?: string | null | undefined;
  payment_id?: string | null | undefined;
  payment_link?: string | null | undefined;
  payment_state?: string | null | undefined;
  stripe_customer_name?: string | null | undefined;
  stripe_subscription_id?: string | null | undefined;
  updated_at?: string | null | undefined;
  valid_from?: string | null | undefined;
  valid_till?: string | null | undefined;
};

/** input type for inserting object relation for remote table "doctor_subscriptions" */
export type Doctor_Subscriptions_Obj_Rel_Insert_Input = {
  data: Doctor_Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: Doctor_Subscriptions_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "doctor_subscriptions" */
export type Doctor_Subscriptions_On_Conflict = {
  constraint: Doctor_Subscriptions_Constraint;
  update_columns?: Array<Doctor_Subscriptions_Update_Column>;
  where?: Doctor_Subscriptions_Bool_Exp | null | undefined;
};

/** update columns of table "doctor_subscriptions" */
export type Doctor_Subscriptions_Update_Column =
  /** column name */
  | 'cancelled_at'
  /** column name */
  | 'created_at'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'link_active'
  /** column name */
  | 'message'
  /** column name */
  | 'payment_id'
  /** column name */
  | 'payment_link'
  /** column name */
  | 'payment_state'
  /** column name */
  | 'stripe_customer_name'
  /** column name */
  | 'stripe_subscription_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'valid_from'
  /** column name */
  | 'valid_till';

/** Boolean expression to filter rows from the table "doctor_validation_state_enum". All fields are combined with a logical 'AND'. */
export type Doctor_Validation_State_Enum_Bool_Exp = {
  _and?: Array<Doctor_Validation_State_Enum_Bool_Exp> | null | undefined;
  _not?: Doctor_Validation_State_Enum_Bool_Exp | null | undefined;
  _or?: Array<Doctor_Validation_State_Enum_Bool_Exp> | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  doctors?: Doctors_Bool_Exp | null | undefined;
  value?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Constraint =
  /** unique or primary key constraint */
  | 'doctor_validation_state_enum_pkey';

export type Doctor_Validation_State_Enum_Enum =
  | 'APPROVED'
  | 'IN_PROGRESS'
  | 'REJECTED';

/** Boolean expression to compare columns of type "doctor_validation_state_enum_enum". All fields are combined with logical 'AND'. */
export type Doctor_Validation_State_Enum_Enum_Comparison_Exp = {
  _eq?: Doctor_Validation_State_Enum_Enum | null | undefined;
  _in?: Array<Doctor_Validation_State_Enum_Enum> | null | undefined;
  _is_null?: boolean | null | undefined;
  _neq?: Doctor_Validation_State_Enum_Enum | null | undefined;
  _nin?: Array<Doctor_Validation_State_Enum_Enum> | null | undefined;
};

/** input type for inserting data into table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Insert_Input = {
  description?: string | null | undefined;
  doctors?: Doctors_Arr_Rel_Insert_Input | null | undefined;
  value?: string | null | undefined;
};

/** input type for inserting object relation for remote table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Obj_Rel_Insert_Input = {
  data: Doctor_Validation_State_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: Doctor_Validation_State_Enum_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_On_Conflict = {
  constraint: Doctor_Validation_State_Enum_Constraint;
  update_columns?: Array<Doctor_Validation_State_Enum_Update_Column>;
  where?: Doctor_Validation_State_Enum_Bool_Exp | null | undefined;
};

/** update columns of table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

/** input type for inserting array relation for remote table "doctors" */
export type Doctors_Arr_Rel_Insert_Input = {
  data: Array<Doctors_Insert_Input>;
  /** upsert condition */
  on_conflict?: Doctors_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "doctors". All fields are combined with a logical 'AND'. */
export type Doctors_Bool_Exp = {
  _and?: Array<Doctors_Bool_Exp> | null | undefined;
  _not?: Doctors_Bool_Exp | null | undefined;
  _or?: Array<Doctors_Bool_Exp> | null | undefined;
  appointments?: Appointments_Bool_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  deleted_at?: String_Comparison_Exp | null | undefined;
  doctor_subscription?: Doctor_Subscriptions_Bool_Exp | null | undefined;
  doctor_validation_state_enum?: Doctor_Validation_State_Enum_Bool_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  interval?: Int_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  is_public?: Boolean_Comparison_Exp | null | undefined;
  is_subscribed?: Boolean_Comparison_Exp | null | undefined;
  is_validated?: Doctor_Validation_State_Enum_Enum_Comparison_Exp | null | undefined;
  lastUpdatedByThisUser?: Users_Bool_Exp | null | undefined;
  locations?: Locations_Doctors_Bool_Exp | null | undefined;
  overridden_dates?: Overridden_Dates_Bool_Exp | null | undefined;
  subscription_id?: Uuid_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "doctors" */
export type Doctors_Constraint =
  /** unique or primary key constraint */
  | 'doctors_pkey';

/** input type for inserting data into table "doctors" */
export type Doctors_Insert_Input = {
  appointments?: Appointments_Arr_Rel_Insert_Input | null | undefined;
  created_at?: string | null | undefined;
  deleted_at?: string | null | undefined;
  doctor_subscription?: Doctor_Subscriptions_Obj_Rel_Insert_Input | null | undefined;
  doctor_validation_state_enum?: Doctor_Validation_State_Enum_Obj_Rel_Insert_Input | null | undefined;
  id?: string | null | undefined;
  interval?: number | null | undefined;
  is_public?: boolean | null | undefined;
  is_subscribed?: boolean | null | undefined;
  is_validated?: Doctor_Validation_State_Enum_Enum | null | undefined;
  lastUpdatedByThisUser?: Users_Obj_Rel_Insert_Input | null | undefined;
  locations?: Locations_Doctors_Arr_Rel_Insert_Input | null | undefined;
  overridden_dates?: Overridden_Dates_Arr_Rel_Insert_Input | null | undefined;
  subscription_id?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** input type for inserting object relation for remote table "doctors" */
export type Doctors_Obj_Rel_Insert_Input = {
  data: Doctors_Insert_Input;
  /** upsert condition */
  on_conflict?: Doctors_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "doctors" */
export type Doctors_On_Conflict = {
  constraint: Doctors_Constraint;
  update_columns?: Array<Doctors_Update_Column>;
  where?: Doctors_Bool_Exp | null | undefined;
};

/** update columns of table "doctors" */
export type Doctors_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'interval'
  /** column name */
  | 'is_public'
  /** column name */
  | 'is_subscribed'
  /** column name */
  | 'is_validated'
  /** column name */
  | 'subscription_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'user_id';

/** input type for inserting array relation for remote table "external_api_call_logs" */
export type External_Api_Call_Logs_Arr_Rel_Insert_Input = {
  data: Array<External_Api_Call_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: External_Api_Call_Logs_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "external_api_call_logs". All fields are combined with a logical 'AND'. */
export type External_Api_Call_Logs_Bool_Exp = {
  _and?: Array<External_Api_Call_Logs_Bool_Exp> | null | undefined;
  _not?: External_Api_Call_Logs_Bool_Exp | null | undefined;
  _or?: Array<External_Api_Call_Logs_Bool_Exp> | null | undefined;
  account?: Facility_Accounts_Bool_Exp | null | undefined;
  account_id?: Uuid_Comparison_Exp | null | undefined;
  api_called_by?: String_Comparison_Exp | null | undefined;
  api_url?: String_Comparison_Exp | null | undefined;
  appointment?: Appointments_Bool_Exp | null | undefined;
  appointment_id?: Uuid_Comparison_Exp | null | undefined;
  appointment_url?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  logs?: Jsonb_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "external_api_call_logs" */
export type External_Api_Call_Logs_Constraint =
  /** unique or primary key constraint */
  | 'external_api_call_logs_pkey';

/** input type for inserting data into table "external_api_call_logs" */
export type External_Api_Call_Logs_Insert_Input = {
  account?: Facility_Accounts_Obj_Rel_Insert_Input | null | undefined;
  account_id?: string | null | undefined;
  api_called_by?: string | null | undefined;
  api_url?: string | null | undefined;
  appointment?: Appointments_Obj_Rel_Insert_Input | null | undefined;
  appointment_id?: string | null | undefined;
  appointment_url?: string | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  logs?: Record<string, unknown> | null | undefined;
  updated_at?: string | null | undefined;
};

/** on_conflict condition type for table "external_api_call_logs" */
export type External_Api_Call_Logs_On_Conflict = {
  constraint: External_Api_Call_Logs_Constraint;
  update_columns?: Array<External_Api_Call_Logs_Update_Column>;
  where?: External_Api_Call_Logs_Bool_Exp | null | undefined;
};

/** update columns of table "external_api_call_logs" */
export type External_Api_Call_Logs_Update_Column =
  /** column name */
  | 'account_id'
  /** column name */
  | 'api_called_by'
  /** column name */
  | 'api_url'
  /** column name */
  | 'appointment_id'
  /** column name */
  | 'appointment_url'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'logs'
  /** column name */
  | 'updated_at';

/** input type for inserting array relation for remote table "facility_account_admin" */
export type Facility_Account_Admin_Arr_Rel_Insert_Input = {
  data: Array<Facility_Account_Admin_Insert_Input>;
  /** upsert condition */
  on_conflict?: Facility_Account_Admin_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "facility_account_admin". All fields are combined with a logical 'AND'. */
export type Facility_Account_Admin_Bool_Exp = {
  _and?: Array<Facility_Account_Admin_Bool_Exp> | null | undefined;
  _not?: Facility_Account_Admin_Bool_Exp | null | undefined;
  _or?: Array<Facility_Account_Admin_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  deleted_at?: String_Comparison_Exp | null | undefined;
  facility_account?: Facility_Accounts_Bool_Exp | null | undefined;
  facility_account_admin_user?: Users_Bool_Exp | null | undefined;
  facility_account_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  locations?: Locations_Bool_Exp | null | undefined;
  nurses?: Nurses_Bool_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "facility_account_admin" */
export type Facility_Account_Admin_Constraint =
  /** unique or primary key constraint */
  | 'account_admin_pkey'
  /** unique or primary key constraint */
  | 'facility_account_admin_facility_account_id_key';

/** input type for inserting data into table "facility_account_admin" */
export type Facility_Account_Admin_Insert_Input = {
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  deleted_at?: string | null | undefined;
  facility_account?: Facility_Accounts_Obj_Rel_Insert_Input | null | undefined;
  facility_account_admin_user?: Users_Obj_Rel_Insert_Input | null | undefined;
  facility_account_id?: string | null | undefined;
  id?: string | null | undefined;
  locations?: Locations_Arr_Rel_Insert_Input | null | undefined;
  nurses?: Nurses_Arr_Rel_Insert_Input | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** input type for inserting object relation for remote table "facility_account_admin" */
export type Facility_Account_Admin_Obj_Rel_Insert_Input = {
  data: Facility_Account_Admin_Insert_Input;
  /** upsert condition */
  on_conflict?: Facility_Account_Admin_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "facility_account_admin" */
export type Facility_Account_Admin_On_Conflict = {
  constraint: Facility_Account_Admin_Constraint;
  update_columns?: Array<Facility_Account_Admin_Update_Column>;
  where?: Facility_Account_Admin_Bool_Exp | null | undefined;
};

/** update columns of table "facility_account_admin" */
export type Facility_Account_Admin_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'user_id';

/** input type for inserting array relation for remote table "facility_account_subscription" */
export type Facility_Account_Subscription_Arr_Rel_Insert_Input = {
  data: Array<Facility_Account_Subscription_Insert_Input>;
  /** upsert condition */
  on_conflict?: Facility_Account_Subscription_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "facility_account_subscription". All fields are combined with a logical 'AND'. */
export type Facility_Account_Subscription_Bool_Exp = {
  _and?: Array<Facility_Account_Subscription_Bool_Exp> | null | undefined;
  _not?: Facility_Account_Subscription_Bool_Exp | null | undefined;
  _or?: Array<Facility_Account_Subscription_Bool_Exp> | null | undefined;
  cancelled_at?: Timestamptz_Comparison_Exp | null | undefined;
  custom_plan_devices?: Jsonb_Comparison_Exp | null | undefined;
  custom_plan_note?: String_Comparison_Exp | null | undefined;
  device_shipped_date?: Timestamptz_Comparison_Exp | null | undefined;
  facility_account?: Facility_Accounts_Bool_Exp | null | undefined;
  facility_account_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  invoice_link?: String_Comparison_Exp | null | undefined;
  link_active?: Boolean_Comparison_Exp | null | undefined;
  message?: String_Comparison_Exp | null | undefined;
  payment_id?: String_Comparison_Exp | null | undefined;
  payment_link?: String_Comparison_Exp | null | undefined;
  payment_state?: String_Comparison_Exp | null | undefined;
  peripheral_is_shipped?: Boolean_Comparison_Exp | null | undefined;
  pro_plan_peripheral_device?: String_Comparison_Exp | null | undefined;
  stripe_customer_id?: String_Comparison_Exp | null | undefined;
  stripe_customer_name?: String_Comparison_Exp | null | undefined;
  stripe_subscription_id?: String_Comparison_Exp | null | undefined;
  subscription_plan?: String_Comparison_Exp | null | undefined;
  valid_from?: Timestamptz_Comparison_Exp | null | undefined;
  valid_till?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "facility_account_subscription" */
export type Facility_Account_Subscription_Constraint =
  /** unique or primary key constraint */
  | 'facility_account_subscription_pkey';

/** input type for inserting data into table "facility_account_subscription" */
export type Facility_Account_Subscription_Insert_Input = {
  cancelled_at?: string | null | undefined;
  custom_plan_devices?: Record<string, unknown> | null | undefined;
  custom_plan_note?: string | null | undefined;
  device_shipped_date?: string | null | undefined;
  facility_account?: Facility_Accounts_Obj_Rel_Insert_Input | null | undefined;
  facility_account_id?: string | null | undefined;
  id?: string | null | undefined;
  invoice_link?: string | null | undefined;
  link_active?: boolean | null | undefined;
  message?: string | null | undefined;
  payment_id?: string | null | undefined;
  payment_link?: string | null | undefined;
  payment_state?: string | null | undefined;
  peripheral_is_shipped?: boolean | null | undefined;
  pro_plan_peripheral_device?: string | null | undefined;
  stripe_customer_id?: string | null | undefined;
  stripe_customer_name?: string | null | undefined;
  stripe_subscription_id?: string | null | undefined;
  subscription_plan?: string | null | undefined;
  valid_from?: string | null | undefined;
  valid_till?: string | null | undefined;
};

/** input type for inserting object relation for remote table "facility_account_subscription" */
export type Facility_Account_Subscription_Obj_Rel_Insert_Input = {
  data: Facility_Account_Subscription_Insert_Input;
  /** upsert condition */
  on_conflict?: Facility_Account_Subscription_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "facility_account_subscription" */
export type Facility_Account_Subscription_On_Conflict = {
  constraint: Facility_Account_Subscription_Constraint;
  update_columns?: Array<Facility_Account_Subscription_Update_Column>;
  where?: Facility_Account_Subscription_Bool_Exp | null | undefined;
};

/** update columns of table "facility_account_subscription" */
export type Facility_Account_Subscription_Update_Column =
  /** column name */
  | 'cancelled_at'
  /** column name */
  | 'custom_plan_devices'
  /** column name */
  | 'custom_plan_note'
  /** column name */
  | 'device_shipped_date'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'invoice_link'
  /** column name */
  | 'link_active'
  /** column name */
  | 'message'
  /** column name */
  | 'payment_id'
  /** column name */
  | 'payment_link'
  /** column name */
  | 'payment_state'
  /** column name */
  | 'peripheral_is_shipped'
  /** column name */
  | 'pro_plan_peripheral_device'
  /** column name */
  | 'stripe_customer_id'
  /** column name */
  | 'stripe_customer_name'
  /** column name */
  | 'stripe_subscription_id'
  /** column name */
  | 'subscription_plan'
  /** column name */
  | 'valid_from'
  /** column name */
  | 'valid_till';

/** input type for inserting array relation for remote table "facility_accounts" */
export type Facility_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Facility_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: Facility_Accounts_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "facility_accounts". All fields are combined with a logical 'AND'. */
export type Facility_Accounts_Bool_Exp = {
  _and?: Array<Facility_Accounts_Bool_Exp> | null | undefined;
  _not?: Facility_Accounts_Bool_Exp | null | undefined;
  _or?: Array<Facility_Accounts_Bool_Exp> | null | undefined;
  account_subscription?: Facility_Account_Subscription_Bool_Exp | null | undefined;
  createdByUser?: Users_Bool_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  deleted_at?: String_Comparison_Exp | null | undefined;
  external_api_call_logs?: External_Api_Call_Logs_Bool_Exp | null | undefined;
  facility_account_admin?: Facility_Account_Admin_Bool_Exp | null | undefined;
  facility_account_subscriptions?: Facility_Account_Subscription_Bool_Exp | null | undefined;
  facility_name?: String_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  is_subscribed?: Boolean_Comparison_Exp | null | undefined;
  locations?: Locations_Bool_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "facility_accounts" */
export type Facility_Accounts_Constraint =
  /** unique or primary key constraint */
  | 'facility_accounts_pkey';

/** input type for inserting data into table "facility_accounts" */
export type Facility_Accounts_Insert_Input = {
  account_subscription?: Facility_Account_Subscription_Obj_Rel_Insert_Input | null | undefined;
  createdByUser?: Users_Obj_Rel_Insert_Input | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  deleted_at?: string | null | undefined;
  external_api_call_logs?: External_Api_Call_Logs_Arr_Rel_Insert_Input | null | undefined;
  facility_account_admin?: Facility_Account_Admin_Obj_Rel_Insert_Input | null | undefined;
  facility_account_subscriptions?: Facility_Account_Subscription_Arr_Rel_Insert_Input | null | undefined;
  facility_name?: string | null | undefined;
  id?: string | null | undefined;
  is_active?: boolean | null | undefined;
  is_subscribed?: boolean | null | undefined;
  locations?: Locations_Arr_Rel_Insert_Input | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
};

/** input type for inserting object relation for remote table "facility_accounts" */
export type Facility_Accounts_Obj_Rel_Insert_Input = {
  data: Facility_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: Facility_Accounts_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "facility_accounts" */
export type Facility_Accounts_On_Conflict = {
  constraint: Facility_Accounts_Constraint;
  update_columns?: Array<Facility_Accounts_Update_Column>;
  where?: Facility_Accounts_Bool_Exp | null | undefined;
};

/** update columns of table "facility_accounts" */
export type Facility_Accounts_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'facility_name'
  /** column name */
  | 'id'
  /** column name */
  | 'is_active'
  /** column name */
  | 'is_subscribed'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** input type for inserting array relation for remote table "galen_staff" */
export type Galen_Staff_Arr_Rel_Insert_Input = {
  data: Array<Galen_Staff_Insert_Input>;
  /** upsert condition */
  on_conflict?: Galen_Staff_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "galen_staff". All fields are combined with a logical 'AND'. */
export type Galen_Staff_Bool_Exp = {
  _and?: Array<Galen_Staff_Bool_Exp> | null | undefined;
  _not?: Galen_Staff_Bool_Exp | null | undefined;
  _or?: Array<Galen_Staff_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  deleted_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  is_admin?: Boolean_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "galen_staff" */
export type Galen_Staff_Constraint =
  /** unique or primary key constraint */
  | 'galen_staff_pkey';

/** input type for inserting data into table "galen_staff" */
export type Galen_Staff_Insert_Input = {
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  deleted_at?: string | null | undefined;
  id?: string | null | undefined;
  is_admin?: boolean | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** on_conflict condition type for table "galen_staff" */
export type Galen_Staff_On_Conflict = {
  constraint: Galen_Staff_Constraint;
  update_columns?: Array<Galen_Staff_Update_Column>;
  where?: Galen_Staff_Bool_Exp | null | undefined;
};

/** update columns of table "galen_staff" */
export type Galen_Staff_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'is_admin'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'user_id';

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: unknown;
  _gt?: unknown;
  _gte?: unknown;
  _in?: Array<unknown> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: unknown;
  _lte?: unknown;
  _neq?: unknown;
  _nin?: Array<unknown> | null | undefined;
};

export type Jsonb_Cast_Exp = {
  String?: String_Comparison_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: Jsonb_Cast_Exp | null | undefined;
  /** is the column contained in the given json value */
  _contained_in?: Record<string, unknown> | null | undefined;
  /** does the column contain the given json value at the top level */
  _contains?: Record<string, unknown> | null | undefined;
  _eq?: Record<string, unknown> | null | undefined;
  _gt?: Record<string, unknown> | null | undefined;
  _gte?: Record<string, unknown> | null | undefined;
  /** does the string exist as a top-level key in the column */
  _has_key?: string | null | undefined;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Array<string> | null | undefined;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Array<string> | null | undefined;
  _in?: Array<Record<string, unknown>> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: Record<string, unknown> | null | undefined;
  _lte?: Record<string, unknown> | null | undefined;
  _neq?: Record<string, unknown> | null | undefined;
  _nin?: Array<Record<string, unknown>> | null | undefined;
};

/** input type for inserting array relation for remote table "locations" */
export type Locations_Arr_Rel_Insert_Input = {
  data: Array<Locations_Insert_Input>;
  /** upsert condition */
  on_conflict?: Locations_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: Array<Locations_Bool_Exp> | null | undefined;
  _not?: Locations_Bool_Exp | null | undefined;
  _or?: Array<Locations_Bool_Exp> | null | undefined;
  address?: String_Comparison_Exp | null | undefined;
  admin_nurse_id?: Uuid_Comparison_Exp | null | undefined;
  appointments?: Appointments_Bool_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  deleted_at?: String_Comparison_Exp | null | undefined;
  facility_account?: Facility_Accounts_Bool_Exp | null | undefined;
  facility_account_admin_id?: Uuid_Comparison_Exp | null | undefined;
  facility_account_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  location_name?: String_Comparison_Exp | null | undefined;
  nurses?: Nurses_Bool_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "locations" */
export type Locations_Constraint =
  /** unique or primary key constraint */
  | 'locations_pkey';

/** input type for inserting array relation for remote table "locations_doctors" */
export type Locations_Doctors_Arr_Rel_Insert_Input = {
  data: Array<Locations_Doctors_Insert_Input>;
  /** upsert condition */
  on_conflict?: Locations_Doctors_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "locations_doctors". All fields are combined with a logical 'AND'. */
export type Locations_Doctors_Bool_Exp = {
  _and?: Array<Locations_Doctors_Bool_Exp> | null | undefined;
  _not?: Locations_Doctors_Bool_Exp | null | undefined;
  _or?: Array<Locations_Doctors_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  doctor?: Doctors_Bool_Exp | null | undefined;
  doctor_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  location?: Locations_Bool_Exp | null | undefined;
  location_id?: Uuid_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "locations_doctors" */
export type Locations_Doctors_Constraint =
  /** unique or primary key constraint */
  | 'locations_doctors_pkey';

/** input type for inserting data into table "locations_doctors" */
export type Locations_Doctors_Insert_Input = {
  created_at?: string | null | undefined;
  doctor?: Doctors_Obj_Rel_Insert_Input | null | undefined;
  doctor_id?: string | null | undefined;
  id?: string | null | undefined;
  location?: Locations_Obj_Rel_Insert_Input | null | undefined;
  location_id?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** on_conflict condition type for table "locations_doctors" */
export type Locations_Doctors_On_Conflict = {
  constraint: Locations_Doctors_Constraint;
  update_columns?: Array<Locations_Doctors_Update_Column>;
  where?: Locations_Doctors_Bool_Exp | null | undefined;
};

/** update columns of table "locations_doctors" */
export type Locations_Doctors_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'location_id'
  /** column name */
  | 'updated_at';

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  address?: string | null | undefined;
  admin_nurse_id?: string | null | undefined;
  appointments?: Appointments_Arr_Rel_Insert_Input | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  deleted_at?: string | null | undefined;
  facility_account?: Facility_Accounts_Obj_Rel_Insert_Input | null | undefined;
  facility_account_admin_id?: string | null | undefined;
  facility_account_id?: string | null | undefined;
  id?: string | null | undefined;
  is_active?: boolean | null | undefined;
  location_name?: string | null | undefined;
  nurses?: Nurses_Arr_Rel_Insert_Input | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  /** upsert condition */
  on_conflict?: Locations_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: Locations_Bool_Exp | null | undefined;
};

/** update columns of table "locations" */
export type Locations_Update_Column =
  /** column name */
  | 'address'
  /** column name */
  | 'admin_nurse_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'facility_account_admin_id'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'is_active'
  /** column name */
  | 'location_name'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: Notifications_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: Array<Notifications_Bool_Exp> | null | undefined;
  _not?: Notifications_Bool_Exp | null | undefined;
  _or?: Array<Notifications_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  deliver_to?: Uuid_Comparison_Exp | null | undefined;
  error?: Boolean_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_read?: Boolean_Comparison_Exp | null | undefined;
  message?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "notifications" */
export type Notifications_Constraint =
  /** unique or primary key constraint */
  | 'notifications_pkey';

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: string | null | undefined;
  deliver_to?: string | null | undefined;
  error?: boolean | null | undefined;
  id?: string | null | undefined;
  is_read?: boolean | null | undefined;
  message?: string | null | undefined;
  updated_at?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: Notifications_Bool_Exp | null | undefined;
};

/** update columns of table "notifications" */
export type Notifications_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deliver_to'
  /** column name */
  | 'error'
  /** column name */
  | 'id'
  /** column name */
  | 'is_read'
  /** column name */
  | 'message'
  /** column name */
  | 'updated_at';

/** input type for inserting array relation for remote table "nurses" */
export type Nurses_Arr_Rel_Insert_Input = {
  data: Array<Nurses_Insert_Input>;
  /** upsert condition */
  on_conflict?: Nurses_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "nurses". All fields are combined with a logical 'AND'. */
export type Nurses_Bool_Exp = {
  _and?: Array<Nurses_Bool_Exp> | null | undefined;
  _not?: Nurses_Bool_Exp | null | undefined;
  _or?: Array<Nurses_Bool_Exp> | null | undefined;
  account_admin?: Facility_Account_Admin_Bool_Exp | null | undefined;
  account_admin_id?: Uuid_Comparison_Exp | null | undefined;
  appointments?: Appointments_Bool_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  deleted_at?: String_Comparison_Exp | null | undefined;
  facility_account_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  is_admin?: Boolean_Comparison_Exp | null | undefined;
  location?: Locations_Bool_Exp | null | undefined;
  location_id?: Uuid_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "nurses" */
export type Nurses_Constraint =
  /** unique or primary key constraint */
  | 'nurses_pkey';

/** input type for inserting data into table "nurses" */
export type Nurses_Insert_Input = {
  account_admin?: Facility_Account_Admin_Obj_Rel_Insert_Input | null | undefined;
  account_admin_id?: string | null | undefined;
  appointments?: Appointments_Arr_Rel_Insert_Input | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  deleted_at?: string | null | undefined;
  facility_account_id?: string | null | undefined;
  id?: string | null | undefined;
  is_admin?: boolean | null | undefined;
  location?: Locations_Obj_Rel_Insert_Input | null | undefined;
  location_id?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** input type for inserting object relation for remote table "nurses" */
export type Nurses_Obj_Rel_Insert_Input = {
  data: Nurses_Insert_Input;
  /** upsert condition */
  on_conflict?: Nurses_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "nurses" */
export type Nurses_On_Conflict = {
  constraint: Nurses_Constraint;
  update_columns?: Array<Nurses_Update_Column>;
  where?: Nurses_Bool_Exp | null | undefined;
};

/** update columns of table "nurses" */
export type Nurses_Update_Column =
  /** column name */
  | 'account_admin_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'is_admin'
  /** column name */
  | 'location_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'user_id';

/** input type for inserting array relation for remote table "overridden_dates" */
export type Overridden_Dates_Arr_Rel_Insert_Input = {
  data: Array<Overridden_Dates_Insert_Input>;
  /** upsert condition */
  on_conflict?: Overridden_Dates_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "overridden_dates". All fields are combined with a logical 'AND'. */
export type Overridden_Dates_Bool_Exp = {
  _and?: Array<Overridden_Dates_Bool_Exp> | null | undefined;
  _not?: Overridden_Dates_Bool_Exp | null | undefined;
  _or?: Array<Overridden_Dates_Bool_Exp> | null | undefined;
  availability_status?: String_Comparison_Exp | null | undefined;
  available_from?: String_Comparison_Exp | null | undefined;
  available_till?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  date?: String_Comparison_Exp | null | undefined;
  doctor?: Doctors_Bool_Exp | null | undefined;
  doctor_id?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  time_slots?: Override_Time_Slots_Bool_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "overridden_dates" */
export type Overridden_Dates_Constraint =
  /** unique or primary key constraint */
  | 'overridden_dates_pkey';

/** input type for inserting data into table "overridden_dates" */
export type Overridden_Dates_Insert_Input = {
  availability_status?: string | null | undefined;
  available_from?: string | null | undefined;
  available_till?: string | null | undefined;
  created_at?: string | null | undefined;
  date?: string | null | undefined;
  doctor?: Doctors_Obj_Rel_Insert_Input | null | undefined;
  doctor_id?: string | null | undefined;
  id?: string | null | undefined;
  time_slots?: Override_Time_Slots_Arr_Rel_Insert_Input | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
};

/** on_conflict condition type for table "overridden_dates" */
export type Overridden_Dates_On_Conflict = {
  constraint: Overridden_Dates_Constraint;
  update_columns?: Array<Overridden_Dates_Update_Column>;
  where?: Overridden_Dates_Bool_Exp | null | undefined;
};

/** update columns of table "overridden_dates" */
export type Overridden_Dates_Update_Column =
  /** column name */
  | 'availability_status'
  /** column name */
  | 'available_from'
  /** column name */
  | 'available_till'
  /** column name */
  | 'created_at'
  /** column name */
  | 'date'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** input type for inserting array relation for remote table "override_time_slots" */
export type Override_Time_Slots_Arr_Rel_Insert_Input = {
  data: Array<Override_Time_Slots_Insert_Input>;
  /** upsert condition */
  on_conflict?: Override_Time_Slots_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "override_time_slots". All fields are combined with a logical 'AND'. */
export type Override_Time_Slots_Bool_Exp = {
  _and?: Array<Override_Time_Slots_Bool_Exp> | null | undefined;
  _not?: Override_Time_Slots_Bool_Exp | null | undefined;
  _or?: Array<Override_Time_Slots_Bool_Exp> | null | undefined;
  available_from?: String_Comparison_Exp | null | undefined;
  available_till?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  override_id?: Uuid_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "override_time_slots" */
export type Override_Time_Slots_Constraint =
  /** unique or primary key constraint */
  | 'override_time_slots_pkey';

/** input type for inserting data into table "override_time_slots" */
export type Override_Time_Slots_Insert_Input = {
  available_from?: string | null | undefined;
  available_till?: string | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  override_id?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** on_conflict condition type for table "override_time_slots" */
export type Override_Time_Slots_On_Conflict = {
  constraint: Override_Time_Slots_Constraint;
  update_columns?: Array<Override_Time_Slots_Update_Column>;
  where?: Override_Time_Slots_Bool_Exp | null | undefined;
};

/** update columns of table "override_time_slots" */
export type Override_Time_Slots_Update_Column =
  /** column name */
  | 'available_from'
  /** column name */
  | 'available_till'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'override_id'
  /** column name */
  | 'updated_at';

/** Boolean expression to filter rows from the table "patient_vitals". All fields are combined with a logical 'AND'. */
export type Patient_Vitals_Bool_Exp = {
  _and?: Array<Patient_Vitals_Bool_Exp> | null | undefined;
  _not?: Patient_Vitals_Bool_Exp | null | undefined;
  _or?: Array<Patient_Vitals_Bool_Exp> | null | undefined;
  appointment?: Appointments_Bool_Exp | null | undefined;
  appointment_id?: Uuid_Comparison_Exp | null | undefined;
  blood_pressure?: String_Comparison_Exp | null | undefined;
  blood_pressure_diastolic?: String_Comparison_Exp | null | undefined;
  blood_pressure_systolic?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  heart_rate?: String_Comparison_Exp | null | undefined;
  height?: String_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  images?: Jsonb_Comparison_Exp | null | undefined;
  notes?: String_Comparison_Exp | null | undefined;
  oximetry?: String_Comparison_Exp | null | undefined;
  respiratory_rate?: String_Comparison_Exp | null | undefined;
  temperature?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  weight?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "patient_vitals" */
export type Patient_Vitals_Constraint =
  /** unique or primary key constraint */
  | 'patient_vitals_pkey';

/** input type for inserting data into table "patient_vitals" */
export type Patient_Vitals_Insert_Input = {
  appointment?: Appointments_Obj_Rel_Insert_Input | null | undefined;
  appointment_id?: string | null | undefined;
  blood_pressure?: string | null | undefined;
  blood_pressure_diastolic?: string | null | undefined;
  blood_pressure_systolic?: string | null | undefined;
  created_at?: string | null | undefined;
  heart_rate?: string | null | undefined;
  height?: string | null | undefined;
  id?: string | null | undefined;
  images?: Record<string, unknown> | null | undefined;
  notes?: string | null | undefined;
  oximetry?: string | null | undefined;
  respiratory_rate?: string | null | undefined;
  temperature?: string | null | undefined;
  updated_at?: string | null | undefined;
  weight?: string | null | undefined;
};

/** input type for inserting object relation for remote table "patient_vitals" */
export type Patient_Vitals_Obj_Rel_Insert_Input = {
  data: Patient_Vitals_Insert_Input;
  /** upsert condition */
  on_conflict?: Patient_Vitals_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "patient_vitals" */
export type Patient_Vitals_On_Conflict = {
  constraint: Patient_Vitals_Constraint;
  update_columns?: Array<Patient_Vitals_Update_Column>;
  where?: Patient_Vitals_Bool_Exp | null | undefined;
};

/** update columns of table "patient_vitals" */
export type Patient_Vitals_Update_Column =
  /** column name */
  | 'appointment_id'
  /** column name */
  | 'blood_pressure'
  /** column name */
  | 'blood_pressure_diastolic'
  /** column name */
  | 'blood_pressure_systolic'
  /** column name */
  | 'created_at'
  /** column name */
  | 'heart_rate'
  /** column name */
  | 'height'
  /** column name */
  | 'id'
  /** column name */
  | 'images'
  /** column name */
  | 'notes'
  /** column name */
  | 'oximetry'
  /** column name */
  | 'respiratory_rate'
  /** column name */
  | 'temperature'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'weight';

/** input type for inserting array relation for remote table "prescription" */
export type Prescription_Arr_Rel_Insert_Input = {
  data: Array<Prescription_Insert_Input>;
  /** upsert condition */
  on_conflict?: Prescription_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "prescription". All fields are combined with a logical 'AND'. */
export type Prescription_Bool_Exp = {
  _and?: Array<Prescription_Bool_Exp> | null | undefined;
  _not?: Prescription_Bool_Exp | null | undefined;
  _or?: Array<Prescription_Bool_Exp> | null | undefined;
  appointment?: Appointments_Bool_Exp | null | undefined;
  appointment_id?: Uuid_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  prescription_id?: String_Comparison_Exp | null | undefined;
  prescription_request_id?: String_Comparison_Exp | null | undefined;
  prescription_state?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "prescription" */
export type Prescription_Constraint =
  /** unique or primary key constraint */
  | 'prescription_pkey';

/** input type for inserting data into table "prescription" */
export type Prescription_Insert_Input = {
  appointment?: Appointments_Obj_Rel_Insert_Input | null | undefined;
  appointment_id?: string | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  prescription_id?: string | null | undefined;
  prescription_request_id?: string | null | undefined;
  prescription_state?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
};

/** on_conflict condition type for table "prescription" */
export type Prescription_On_Conflict = {
  constraint: Prescription_Constraint;
  update_columns?: Array<Prescription_Update_Column>;
  where?: Prescription_Bool_Exp | null | undefined;
};

/** update columns of table "prescription" */
export type Prescription_Update_Column =
  /** column name */
  | 'appointment_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'prescription_id'
  /** column name */
  | 'prescription_request_id'
  /** column name */
  | 'prescription_state'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** input type for inserting array relation for remote table "profile" */
export type Profile_Arr_Rel_Insert_Input = {
  data: Array<Profile_Insert_Input>;
  /** upsert condition */
  on_conflict?: Profile_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  UpdatedByUser?: Users_Bool_Exp | null | undefined;
  _and?: Array<Profile_Bool_Exp> | null | undefined;
  _not?: Profile_Bool_Exp | null | undefined;
  _or?: Array<Profile_Bool_Exp> | null | undefined;
  additional_data?: Json_Comparison_Exp | null | undefined;
  address?: Address_Bool_Exp | null | undefined;
  avatar_url?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  deleted_at?: Timestamptz_Comparison_Exp | null | undefined;
  display_name?: String_Comparison_Exp | null | undefined;
  email?: String_Comparison_Exp | null | undefined;
  first_name?: String_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  last_name?: String_Comparison_Exp | null | undefined;
  last_sign_in?: Timestamptz_Comparison_Exp | null | undefined;
  phone?: String_Comparison_Exp | null | undefined;
  salutation?: String_Comparison_Exp | null | undefined;
  specialization?: String_Comparison_Exp | null | undefined;
  timezone?: String_Comparison_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "profile" */
export type Profile_Constraint =
  /** unique or primary key constraint */
  | 'profile_pkey'
  /** unique or primary key constraint */
  | 'profile_user_id_key';

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  UpdatedByUser?: Users_Obj_Rel_Insert_Input | null | undefined;
  additional_data?: unknown;
  address?: Address_Obj_Rel_Insert_Input | null | undefined;
  avatar_url?: string | null | undefined;
  created_at?: string | null | undefined;
  deleted_at?: string | null | undefined;
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  id?: string | null | undefined;
  last_name?: string | null | undefined;
  last_sign_in?: string | null | undefined;
  phone?: string | null | undefined;
  salutation?: string | null | undefined;
  specialization?: string | null | undefined;
  timezone?: string | null | undefined;
  title?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** input type for inserting object relation for remote table "profile" */
export type Profile_Obj_Rel_Insert_Input = {
  data: Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: Profile_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "profile" */
export type Profile_On_Conflict = {
  constraint: Profile_Constraint;
  update_columns?: Array<Profile_Update_Column>;
  where?: Profile_Bool_Exp | null | undefined;
};

/** update columns of table "profile" */
export type Profile_Update_Column =
  /** column name */
  | 'additional_data'
  /** column name */
  | 'avatar_url'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'last_sign_in'
  /** column name */
  | 'phone'
  /** column name */
  | 'salutation'
  /** column name */
  | 'specialization'
  /** column name */
  | 'timezone'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by'
  /** column name */
  | 'user_id';

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Array<Users_Bool_Exp> | null | undefined;
  _not?: Users_Bool_Exp | null | undefined;
  _or?: Array<Users_Bool_Exp> | null | undefined;
  account?: Auth_Accounts_Bool_Exp | null | undefined;
  account_admins?: Facility_Account_Admin_Bool_Exp | null | undefined;
  account_roles?: Auth_Account_Roles_Bool_Exp | null | undefined;
  avatar_url?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  display_name?: String_Comparison_Exp | null | undefined;
  doctors?: Doctors_Bool_Exp | null | undefined;
  facility_accounts?: Facility_Accounts_Bool_Exp | null | undefined;
  first_name?: String_Comparison_Exp | null | undefined;
  galen_staffs?: Galen_Staff_Bool_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_active?: Boolean_Comparison_Exp | null | undefined;
  last_name?: String_Comparison_Exp | null | undefined;
  notifications?: Notifications_Bool_Exp | null | undefined;
  nurses?: Nurses_Bool_Exp | null | undefined;
  overridden_dates?: Overridden_Dates_Bool_Exp | null | undefined;
  profile?: Profile_Bool_Exp | null | undefined;
  profileById?: Profile_Bool_Exp | null | undefined;
  profiles?: Profile_Bool_Exp | null | undefined;
  role?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: Auth_Accounts_Obj_Rel_Insert_Input | null | undefined;
  account_admins?: Facility_Account_Admin_Arr_Rel_Insert_Input | null | undefined;
  account_roles?: Auth_Account_Roles_Arr_Rel_Insert_Input | null | undefined;
  avatar_url?: string | null | undefined;
  created_at?: string | null | undefined;
  display_name?: string | null | undefined;
  doctors?: Doctors_Arr_Rel_Insert_Input | null | undefined;
  facility_accounts?: Facility_Accounts_Arr_Rel_Insert_Input | null | undefined;
  first_name?: string | null | undefined;
  galen_staffs?: Galen_Staff_Arr_Rel_Insert_Input | null | undefined;
  id?: string | null | undefined;
  last_name?: string | null | undefined;
  notifications?: Notifications_Arr_Rel_Insert_Input | null | undefined;
  nurses?: Nurses_Arr_Rel_Insert_Input | null | undefined;
  overridden_dates?: Overridden_Dates_Arr_Rel_Insert_Input | null | undefined;
  profile?: Profile_Obj_Rel_Insert_Input | null | undefined;
  profileById?: Profile_Obj_Rel_Insert_Input | null | undefined;
  profiles?: Profile_Arr_Rel_Insert_Input | null | undefined;
  updated_at?: string | null | undefined;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: Users_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Users_Bool_Exp | null | undefined;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'avatar_url'
  /** column name */
  | 'created_at'
  /** column name */
  | 'display_name'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'updated_at';

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

/** Boolean expression to filter rows from the table "waiting_room_status_enum". All fields are combined with a logical 'AND'. */
export type Waiting_Room_Status_Enum_Bool_Exp = {
  _and?: Array<Waiting_Room_Status_Enum_Bool_Exp> | null | undefined;
  _not?: Waiting_Room_Status_Enum_Bool_Exp | null | undefined;
  _or?: Array<Waiting_Room_Status_Enum_Bool_Exp> | null | undefined;
  value?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Constraint =
  /** unique or primary key constraint */
  | 'waiting_room_status_enum_pkey';

export type Waiting_Room_Status_Enum_Enum =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'LIVE'
  | 'PREP'
  | 'READY';

/** Boolean expression to compare columns of type "waiting_room_status_enum_enum". All fields are combined with logical 'AND'. */
export type Waiting_Room_Status_Enum_Enum_Comparison_Exp = {
  _eq?: Waiting_Room_Status_Enum_Enum | null | undefined;
  _in?: Array<Waiting_Room_Status_Enum_Enum> | null | undefined;
  _is_null?: boolean | null | undefined;
  _neq?: Waiting_Room_Status_Enum_Enum | null | undefined;
  _nin?: Array<Waiting_Room_Status_Enum_Enum> | null | undefined;
};

/** input type for inserting data into table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Insert_Input = {
  value?: string | null | undefined;
};

/** input type for inserting object relation for remote table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Obj_Rel_Insert_Input = {
  data: Waiting_Room_Status_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: Waiting_Room_Status_Enum_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_On_Conflict = {
  constraint: Waiting_Room_Status_Enum_Constraint;
  update_columns?: Array<Waiting_Room_Status_Enum_Update_Column>;
  where?: Waiting_Room_Status_Enum_Bool_Exp | null | undefined;
};

/** update columns of table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Update_Column =
  /** column name */
  | 'value';

/** Boolean expression to filter rows from the table "waiting_rooms". All fields are combined with a logical 'AND'. */
export type Waiting_Rooms_Bool_Exp = {
  _and?: Array<Waiting_Rooms_Bool_Exp> | null | undefined;
  _not?: Waiting_Rooms_Bool_Exp | null | undefined;
  _or?: Array<Waiting_Rooms_Bool_Exp> | null | undefined;
  account?: Auth_Accounts_Bool_Exp | null | undefined;
  account_id?: Uuid_Comparison_Exp | null | undefined;
  appointment?: Appointments_Bool_Exp | null | undefined;
  appointment_id?: Uuid_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  location_id?: Uuid_Comparison_Exp | null | undefined;
  started_at?: String_Comparison_Exp | null | undefined;
  status?: Waiting_Room_Status_Enum_Enum_Comparison_Exp | null | undefined;
  unit_id?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  updated_by?: Uuid_Comparison_Exp | null | undefined;
  waiting_room_status?: Waiting_Room_Status_Enum_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "waiting_rooms" */
export type Waiting_Rooms_Constraint =
  /** unique or primary key constraint */
  | 'waiting_rooms_pkey';

/** input type for inserting data into table "waiting_rooms" */
export type Waiting_Rooms_Insert_Input = {
  account?: Auth_Accounts_Obj_Rel_Insert_Input | null | undefined;
  account_id?: string | null | undefined;
  appointment?: Appointments_Obj_Rel_Insert_Input | null | undefined;
  appointment_id?: string | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  id?: string | null | undefined;
  location_id?: string | null | undefined;
  started_at?: string | null | undefined;
  status?: Waiting_Room_Status_Enum_Enum | null | undefined;
  unit_id?: string | null | undefined;
  updated_at?: string | null | undefined;
  updated_by?: string | null | undefined;
  waiting_room_status?: Waiting_Room_Status_Enum_Obj_Rel_Insert_Input | null | undefined;
};

/** input type for inserting object relation for remote table "waiting_rooms" */
export type Waiting_Rooms_Obj_Rel_Insert_Input = {
  data: Waiting_Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: Waiting_Rooms_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "waiting_rooms" */
export type Waiting_Rooms_On_Conflict = {
  constraint: Waiting_Rooms_Constraint;
  update_columns?: Array<Waiting_Rooms_Update_Column>;
  where?: Waiting_Rooms_Bool_Exp | null | undefined;
};

/** update columns of table "waiting_rooms" */
export type Waiting_Rooms_Update_Column =
  /** column name */
  | 'account_id'
  /** column name */
  | 'appointment_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'id'
  /** column name */
  | 'location_id'
  /** column name */
  | 'started_at'
  /** column name */
  | 'status'
  /** column name */
  | 'unit_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

export type AppointmentFieldsFragment = { id: string, doctor_id: string | null, nurse_id: string | null, patient_name: string | null, patient_dob: string | null, doctor_name: string | null, nurse_name: string | null, time_slot_from: string | null, time_slot_to: string | null, state: Types.Appointments_State_Enum_Enum, meeting_link: string | null, room_id: string | null, room_sid: string | null, additional_note: string | null, soap_note: boolean, soap_note_status: string | null, soap_note_document_id: string | null, soap_note_request_id: string | null, family_mem_name: string | null, is_doctor_in_call: boolean | null, is_nurse_in_call: boolean | null, location: { id: string, location_name: string, address: string } | null, prescriptions: Array<{ prescription_id: string | null, prescription_state: string | null, prescription_request_id: string | null }>, doctor: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null, nurse: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null };

export type GetDoctorAppointmentsSubscriptionVariables = Exact<{
  doctor_id: string;
  states?: Array<Types.Appointments_State_Enum_Enum> | Types.Appointments_State_Enum_Enum | null | undefined;
}>;


export type GetDoctorAppointmentsSubscription = { appointments: Array<{ id: string, doctor_id: string | null, nurse_id: string | null, patient_name: string | null, patient_dob: string | null, doctor_name: string | null, nurse_name: string | null, time_slot_from: string | null, time_slot_to: string | null, state: Types.Appointments_State_Enum_Enum, meeting_link: string | null, room_id: string | null, room_sid: string | null, additional_note: string | null, soap_note: boolean, soap_note_status: string | null, soap_note_document_id: string | null, soap_note_request_id: string | null, family_mem_name: string | null, is_doctor_in_call: boolean | null, is_nurse_in_call: boolean | null, location: { id: string, location_name: string, address: string } | null, prescriptions: Array<{ prescription_id: string | null, prescription_state: string | null, prescription_request_id: string | null }>, doctor: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null, nurse: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null }> };

export type GetNurseAppointmentsSubscriptionVariables = Exact<{
  facility_account_id: string;
  states?: Array<Types.Appointments_State_Enum_Enum> | Types.Appointments_State_Enum_Enum | null | undefined;
}>;


export type GetNurseAppointmentsSubscription = { appointments: Array<{ id: string, doctor_id: string | null, nurse_id: string | null, patient_name: string | null, patient_dob: string | null, doctor_name: string | null, nurse_name: string | null, time_slot_from: string | null, time_slot_to: string | null, state: Types.Appointments_State_Enum_Enum, meeting_link: string | null, room_id: string | null, room_sid: string | null, additional_note: string | null, soap_note: boolean, soap_note_status: string | null, soap_note_document_id: string | null, soap_note_request_id: string | null, family_mem_name: string | null, is_doctor_in_call: boolean | null, is_nurse_in_call: boolean | null, location: { id: string, location_name: string, address: string } | null, prescriptions: Array<{ prescription_id: string | null, prescription_state: string | null, prescription_request_id: string | null }>, doctor: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null, nurse: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null }> };

export type GetAppointmentByIdSubscriptionVariables = Exact<{
  appointment_id: string;
}>;


export type GetAppointmentByIdSubscription = { appointments_by_pk: { id: string, doctor_id: string | null, nurse_id: string | null, patient_name: string | null, patient_dob: string | null, doctor_name: string | null, nurse_name: string | null, time_slot_from: string | null, time_slot_to: string | null, state: Types.Appointments_State_Enum_Enum, meeting_link: string | null, room_id: string | null, room_sid: string | null, additional_note: string | null, soap_note: boolean, soap_note_status: string | null, soap_note_document_id: string | null, soap_note_request_id: string | null, family_mem_name: string | null, is_doctor_in_call: boolean | null, is_nurse_in_call: boolean | null, patient_vitals: { id: string, appointment_id: string, blood_pressure: string | null, blood_pressure_systolic: string | null, blood_pressure_diastolic: string | null, heart_rate: string | null, respiratory_rate: string | null, temperature: string | null, oximetry: string | null, weight: string | null, height: string | null, images: Record<string, unknown> | null } | null, waiting_room: { id: string, status: Types.Waiting_Room_Status_Enum_Enum } | null, location: { id: string, location_name: string, address: string } | null, prescriptions: Array<{ prescription_id: string | null, prescription_state: string | null, prescription_request_id: string | null }>, doctor: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null, nurse: { user: { display_name: string | null, profile: { first_name: string | null, last_name: string | null, email: string | null, avatar_url: string | null } | null } } | null } | null };

export type SubscribeAppointmentSubscriptionVariables = Exact<{
  appointment_id: string;
}>;


export type SubscribeAppointmentSubscription = { appointments_by_pk: { id: string, state: Types.Appointments_State_Enum_Enum, is_doctor_in_call: boolean | null, is_nurse_in_call: boolean | null, room_id: string | null, room_sid: string | null } | null };

export type UpdateAppointmentMutationVariables = Exact<{
  appointment_id: string;
  set: Types.Appointments_Set_Input;
}>;


export type UpdateAppointmentMutation = { update_appointments_by_pk: { id: string, state: Types.Appointments_State_Enum_Enum } | null };

export type InsertPatientVitalsMutationVariables = Exact<{
  object: Types.Patient_Vitals_Insert_Input;
}>;


export type InsertPatientVitalsMutation = { insert_patient_vitals_one: { id: string } | null };

export type GetLocationByNurseIdQueryVariables = Exact<{
  user_id: string;
}>;


export type GetLocationByNurseIdQuery = { nurses: Array<{ id: string, location: { id: string, location_name: string } | null }> };

export type GetDoctorsForAppointmentQueryVariables = Exact<{
  location_id?: string | null | undefined;
}>;


export type GetDoctorsForAppointmentQuery = { doctors: Array<{ id: string, user: { display_name: string | null, profile: { avatar_url: string | null, first_name: string | null, last_name: string | null } | null } }> };

export type GetDoctorWeeklyAvailabilityQueryVariables = Exact<{
  doctor_id?: string | null | undefined;
}>;


export type GetDoctorWeeklyAvailabilityQuery = { doctor_weekly_availability: Array<{ available_from: string | null, available_till: string | null, day: string | null, doctor_data: { user: { profile: { timezone: string | null } | null } } | null }> };

export type CreateAppointmentMutationVariables = Exact<{
  object: Types.NewAppointmentInput;
}>;


export type CreateAppointmentMutation = { newAppointment: { appointment_id: string | null } | null };

export type GetCallTokenMutationVariables = Exact<{
  object: Types.GetCallTokenInput;
}>;


export type GetCallTokenMutation = { getCallToken: { twilio_token: string | null } | null };

export type LeaveCallMutationVariables = Exact<{
  object: Types.LeaveCallInput;
}>;


export type LeaveCallMutation = { leaveCall: { appointment_status: string | null, ok: boolean | null } | null };

export const AppointmentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppointmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"appointments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_id"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_id"}},{"kind":"Field","name":{"kind":"Name","value":"patient_name"}},{"kind":"Field","name":{"kind":"Name","value":"patient_dob"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_name"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_name"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_from"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_to"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"meeting_link"}},{"kind":"Field","name":{"kind":"Name","value":"room_id"}},{"kind":"Field","name":{"kind":"Name","value":"room_sid"}},{"kind":"Field","name":{"kind":"Name","value":"additional_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_status"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_document_id"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_request_id"}},{"kind":"Field","name":{"kind":"Name","value":"family_mem_name"}},{"kind":"Field","name":{"kind":"Name","value":"is_doctor_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"is_nurse_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prescriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prescription_id"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_state"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_request_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nurse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetDoctorAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetDoctorAppointments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doctor_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"states"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"appointments_state_enum_enum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"doctor_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doctor_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"states"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"time_slot_from"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppointmentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppointmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"appointments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_id"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_id"}},{"kind":"Field","name":{"kind":"Name","value":"patient_name"}},{"kind":"Field","name":{"kind":"Name","value":"patient_dob"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_name"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_name"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_from"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_to"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"meeting_link"}},{"kind":"Field","name":{"kind":"Name","value":"room_id"}},{"kind":"Field","name":{"kind":"Name","value":"room_sid"}},{"kind":"Field","name":{"kind":"Name","value":"additional_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_status"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_document_id"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_request_id"}},{"kind":"Field","name":{"kind":"Name","value":"family_mem_name"}},{"kind":"Field","name":{"kind":"Name","value":"is_doctor_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"is_nurse_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prescriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prescription_id"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_state"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_request_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nurse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useGetDoctorAppointmentsSubscription<TData = GetDoctorAppointmentsSubscription>(options: Omit<Urql.UseSubscriptionArgs<GetDoctorAppointmentsSubscriptionVariables>, 'query'>, handler?: Urql.SubscriptionHandler<GetDoctorAppointmentsSubscription, TData>) {
  return Urql.useSubscription<GetDoctorAppointmentsSubscription, TData, GetDoctorAppointmentsSubscriptionVariables>({ query: GetDoctorAppointmentsDocument, ...options }, handler);
};
export const GetNurseAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetNurseAppointments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"facility_account_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"states"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"appointments_state_enum_enum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"facility_account_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"facility_account_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"states"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"time_slot_from"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppointmentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppointmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"appointments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_id"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_id"}},{"kind":"Field","name":{"kind":"Name","value":"patient_name"}},{"kind":"Field","name":{"kind":"Name","value":"patient_dob"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_name"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_name"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_from"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_to"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"meeting_link"}},{"kind":"Field","name":{"kind":"Name","value":"room_id"}},{"kind":"Field","name":{"kind":"Name","value":"room_sid"}},{"kind":"Field","name":{"kind":"Name","value":"additional_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_status"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_document_id"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_request_id"}},{"kind":"Field","name":{"kind":"Name","value":"family_mem_name"}},{"kind":"Field","name":{"kind":"Name","value":"is_doctor_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"is_nurse_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prescriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prescription_id"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_state"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_request_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nurse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useGetNurseAppointmentsSubscription<TData = GetNurseAppointmentsSubscription>(options: Omit<Urql.UseSubscriptionArgs<GetNurseAppointmentsSubscriptionVariables>, 'query'>, handler?: Urql.SubscriptionHandler<GetNurseAppointmentsSubscription, TData>) {
  return Urql.useSubscription<GetNurseAppointmentsSubscription, TData, GetNurseAppointmentsSubscriptionVariables>({ query: GetNurseAppointmentsDocument, ...options }, handler);
};
export const GetAppointmentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetAppointmentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appointment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointments_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appointment_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppointmentFields"}},{"kind":"Field","name":{"kind":"Name","value":"patient_vitals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"appointment_id"}},{"kind":"Field","name":{"kind":"Name","value":"blood_pressure"}},{"kind":"Field","name":{"kind":"Name","value":"blood_pressure_systolic"}},{"kind":"Field","name":{"kind":"Name","value":"blood_pressure_diastolic"}},{"kind":"Field","name":{"kind":"Name","value":"heart_rate"}},{"kind":"Field","name":{"kind":"Name","value":"respiratory_rate"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"oximetry"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waiting_room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppointmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"appointments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_id"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_id"}},{"kind":"Field","name":{"kind":"Name","value":"patient_name"}},{"kind":"Field","name":{"kind":"Name","value":"patient_dob"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_name"}},{"kind":"Field","name":{"kind":"Name","value":"nurse_name"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_from"}},{"kind":"Field","name":{"kind":"Name","value":"time_slot_to"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"meeting_link"}},{"kind":"Field","name":{"kind":"Name","value":"room_id"}},{"kind":"Field","name":{"kind":"Name","value":"room_sid"}},{"kind":"Field","name":{"kind":"Name","value":"additional_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_status"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_document_id"}},{"kind":"Field","name":{"kind":"Name","value":"soap_note_request_id"}},{"kind":"Field","name":{"kind":"Name","value":"family_mem_name"}},{"kind":"Field","name":{"kind":"Name","value":"is_doctor_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"is_nurse_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prescriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prescription_id"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_state"}},{"kind":"Field","name":{"kind":"Name","value":"prescription_request_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nurse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useGetAppointmentByIdSubscription<TData = GetAppointmentByIdSubscription>(options: Omit<Urql.UseSubscriptionArgs<GetAppointmentByIdSubscriptionVariables>, 'query'>, handler?: Urql.SubscriptionHandler<GetAppointmentByIdSubscription, TData>) {
  return Urql.useSubscription<GetAppointmentByIdSubscription, TData, GetAppointmentByIdSubscriptionVariables>({ query: GetAppointmentByIdDocument, ...options }, handler);
};
export const SubscribeAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appointment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointments_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appointment_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"is_doctor_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"is_nurse_in_call"}},{"kind":"Field","name":{"kind":"Name","value":"room_id"}},{"kind":"Field","name":{"kind":"Name","value":"room_sid"}}]}}]}}]} as unknown as DocumentNode;

export function useSubscribeAppointmentSubscription<TData = SubscribeAppointmentSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeAppointmentSubscriptionVariables>, 'query'>, handler?: Urql.SubscriptionHandler<SubscribeAppointmentSubscription, TData>) {
  return Urql.useSubscription<SubscribeAppointmentSubscription, TData, SubscribeAppointmentSubscriptionVariables>({ query: SubscribeAppointmentDocument, ...options }, handler);
};
export const UpdateAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appointment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"appointments_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_appointments_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appointment_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode;

export function useUpdateAppointmentMutation() {
  return Urql.useMutation<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>(UpdateAppointmentDocument);
};
export const InsertPatientVitalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertPatientVitals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"patient_vitals_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_patient_vitals_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;

export function useInsertPatientVitalsMutation() {
  return Urql.useMutation<InsertPatientVitalsMutation, InsertPatientVitalsMutationVariables>(InsertPatientVitalsDocument);
};
export const GetLocationByNurseIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationByNurseId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nurses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}}]}}]}}]}}]} as unknown as DocumentNode;

export function useGetLocationByNurseIdQuery(options: Omit<Urql.UseQueryArgs<GetLocationByNurseIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLocationByNurseIdQuery, GetLocationByNurseIdQueryVariables>({ query: GetLocationByNurseIdDocument, ...options });
};
export const GetDoctorsForAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDoctorsForAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doctors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_validated"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"EnumValue","value":"REJECTED"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_public"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locations"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location_id"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useGetDoctorsForAppointmentQuery(options?: Omit<Urql.UseQueryArgs<GetDoctorsForAppointmentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDoctorsForAppointmentQuery, GetDoctorsForAppointmentQueryVariables>({ query: GetDoctorsForAppointmentDocument, ...options });
};
export const GetDoctorWeeklyAvailabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDoctorWeeklyAvailability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doctor_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doctor_weekly_availability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"doctor_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doctor_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"available_from"}},{"kind":"Field","name":{"kind":"Name","value":"available_till"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"doctor_data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timezone"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export function useGetDoctorWeeklyAvailabilityQuery(options?: Omit<Urql.UseQueryArgs<GetDoctorWeeklyAvailabilityQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDoctorWeeklyAvailabilityQuery, GetDoctorWeeklyAvailabilityQueryVariables>({ query: GetDoctorWeeklyAvailabilityDocument, ...options });
};
export const CreateAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewAppointmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointment_id"}}]}}]}}]} as unknown as DocumentNode;

export function useCreateAppointmentMutation() {
  return Urql.useMutation<CreateAppointmentMutation, CreateAppointmentMutationVariables>(CreateAppointmentDocument);
};
export const GetCallTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetCallToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCallTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCallToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twilio_token"}}]}}]}}]} as unknown as DocumentNode;

export function useGetCallTokenMutation() {
  return Urql.useMutation<GetCallTokenMutation, GetCallTokenMutationVariables>(GetCallTokenDocument);
};
export const LeaveCallDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveCall"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaveCallInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveCall"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointment_status"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode;

export function useLeaveCallMutation() {
  return Urql.useMutation<LeaveCallMutation, LeaveCallMutationVariables>(LeaveCallDocument);
};