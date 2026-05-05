export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  citext: { input: unknown; output: unknown; }
  json: { input: unknown; output: unknown; }
  jsonb: { input: Record<string, unknown>; output: Record<string, unknown>; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

export type AccountCustomPlanSelectionInput = {
  custom_plan_devices?: InputMaybe<Scalars['jsonb']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facility_account_id: Scalars['String']['input'];
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  plan: FacilityAccountPlanEnum;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type AccountCustomPlanSelectionoutput = {
  __typename?: 'AccountCustomPlanSelectionoutput';
  message: Scalars['String']['output'];
};

export type AccountSelfSignupInput = {
  email: Scalars['String']['input'];
  facility_name: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  salutation: Scalars['String']['input'];
  self_signup_action: Self_Signup_Action_Type;
};

export type AccountSelfSignupOutput = {
  __typename?: 'AccountSelfSignupOutput';
  account_admin_details?: Maybe<Scalars['jsonb']['output']>;
  account_details?: Maybe<Scalars['jsonb']['output']>;
  account_id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type AddNurseInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  location_id: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type AddNurseOutput = {
  __typename?: 'AddNurseOutput';
  nurse_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type AiBodyDiagramPointerInput = {
  audioBase64: Scalars['String']['input'];
  imagesBase64: Array<Scalars['String']['input']>;
};

export type AiBodyDiagramPointerOutput = {
  __typename?: 'AiBodyDiagramPointerOutput';
  reason?: Maybe<Scalars['String']['output']>;
  tab: Scalars['String']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CallOperationsInput = {
  appointment_id: Scalars['String']['input'];
  composition_id?: InputMaybe<Scalars['String']['input']>;
  get_compose_video?: InputMaybe<Scalars['Boolean']['input']>;
  get_participant?: InputMaybe<Scalars['Boolean']['input']>;
  get_participants?: InputMaybe<Scalars['Boolean']['input']>;
  get_recording_link?: InputMaybe<Scalars['Boolean']['input']>;
  get_room_data?: InputMaybe<Scalars['Boolean']['input']>;
  remove_participant?: InputMaybe<Scalars['Boolean']['input']>;
  room_id: Scalars['String']['input'];
  start_recording?: InputMaybe<Scalars['Boolean']['input']>;
  stop_recording?: InputMaybe<Scalars['Boolean']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type CallOperationsOutput = {
  __typename?: 'CallOperationsOutput';
  composedVideo?: Maybe<ComposedVideo>;
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  participant?: Maybe<SingleParticipantData>;
  participants?: Maybe<ParticipantsData>;
  recording?: Maybe<RecordingData>;
  recording_link?: Maybe<Scalars['String']['output']>;
  room_data?: Maybe<RoomData>;
};

export type ClearNotificationsInput = {
  clearAll?: InputMaybe<Scalars['Boolean']['input']>;
  notification_id?: InputMaybe<Scalars['String']['input']>;
};

export type ClearNotificationsOutput = {
  __typename?: 'ClearNotificationsOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type ComposedVideo = {
  __typename?: 'ComposedVideo';
  account_sid?: Maybe<Scalars['String']['output']>;
  audio_sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  audio_sources_excluded?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  bitrate?: Maybe<Scalars['Int']['output']>;
  date_completed?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['String']['output']>;
  date_deleted?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Links>;
  resolution?: Maybe<Scalars['String']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  sid?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  trim?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CreateNewFacilityAccountAndLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['String']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  is_location?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNewFacilityAccountAndLocationOutput = {
  __typename?: 'CreateNewFacilityAccountAndLocationOutput';
  account_id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
};

export type CreateStripePaymentLinkInput = {
  custom_plan_devices?: InputMaybe<Scalars['jsonb']['input']>;
  facility_account_id: Scalars['String']['input'];
  is_shipping_address_same_as_practice_address?: InputMaybe<Scalars['Boolean']['input']>;
  plan: FacilityAccountPlanEnum;
  practice_address?: InputMaybe<Scalars['String']['input']>;
  practice_city?: InputMaybe<Scalars['String']['input']>;
  practice_country?: InputMaybe<Scalars['String']['input']>;
  practice_state?: InputMaybe<Scalars['String']['input']>;
  practice_zip_code?: InputMaybe<Scalars['String']['input']>;
  pro_plan_peripheral_device?: InputMaybe<Scalars['String']['input']>;
  shipping_address?: InputMaybe<Scalars['String']['input']>;
  shipping_city?: InputMaybe<Scalars['String']['input']>;
  shipping_country?: InputMaybe<Scalars['String']['input']>;
  shipping_state?: InputMaybe<Scalars['String']['input']>;
  shipping_zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type CreateStripePaymentLinkOutput = {
  __typename?: 'CreateStripePaymentLinkOutput';
  link: Scalars['String']['output'];
};

export type Date = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteWaitingRoomInput = {
  waiting_room_id: Scalars['String']['input'];
};

export type DeleteWaitingRoomOutput = {
  __typename?: 'DeleteWaitingRoomOutput';
  message: Scalars['String']['output'];
};

export type DoctorAvailabilityInput = {
  availability_id?: InputMaybe<Scalars['String']['input']>;
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  doctor_id?: InputMaybe<Scalars['String']['input']>;
  duplicate?: InputMaybe<Scalars['Boolean']['input']>;
  duplication_days?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DoctorAvailabilityOutput = {
  __typename?: 'DoctorAvailabilityOutput';
  availability_id?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type EditAppointmentInput = {
  additional_note?: InputMaybe<Scalars['String']['input']>;
  appointment_id: Scalars['String']['input'];
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  doctor_id?: InputMaybe<Scalars['String']['input']>;
  doctor_response?: InputMaybe<Scalars['String']['input']>;
  family_mem_email?: InputMaybe<Scalars['String']['input']>;
  family_mem_name?: InputMaybe<Scalars['String']['input']>;
  family_mem_phone?: InputMaybe<Scalars['String']['input']>;
  is_patient_remote?: InputMaybe<Scalars['Boolean']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  meeting_link?: InputMaybe<Scalars['String']['input']>;
  nurse_id?: InputMaybe<Scalars['String']['input']>;
  patient_name?: InputMaybe<Scalars['String']['input']>;
  rejection_reason?: InputMaybe<Scalars['String']['input']>;
  time_slot_from?: InputMaybe<Scalars['String']['input']>;
  time_slot_to?: InputMaybe<Scalars['String']['input']>;
};

export type EditAppointmentOutput = {
  __typename?: 'EditAppointmentOutput';
  appointment_id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type EditDoctorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  doctor_id: Scalars['String']['input'];
  doctor_status?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type EditDoctorOutput = {
  __typename?: 'EditDoctorOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type EditFacilityAccountAndLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  delete_facility?: InputMaybe<Scalars['Boolean']['input']>;
  delete_location?: InputMaybe<Scalars['Boolean']['input']>;
  facility_account_id?: InputMaybe<Scalars['String']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  update_account?: InputMaybe<Scalars['Boolean']['input']>;
  update_location?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EditFacilityOutput = {
  __typename?: 'EditFacilityOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type EditGalenStaffInput = {
  address_lane?: InputMaybe<Scalars['String']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  staff_id: Scalars['uuid']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['Int']['input']>;
};

export type EditGalenStaffOutput = {
  __typename?: 'EditGalenStaffOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type EditNurseInput = {
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  location_id: Scalars['String']['input'];
  nurse_id: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type EditNurseOutput = {
  __typename?: 'EditNurseOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type FacilityAccountPlanEnum =
  | 'gal3n_custom'
  | 'gal3n_professional'
  | 'gal3n_starter';

export type ForgotPassInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type ForgotPassOutput = {
  __typename?: 'ForgotPassOutput';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCallTokenInput = {
  appointment_id: Scalars['String']['input'];
  external_call_user_name?: InputMaybe<Scalars['String']['input']>;
  external_call_user_role?: InputMaybe<Scalars['String']['input']>;
  room_sid?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetCallTokenOutput = {
  __typename?: 'GetCallTokenOutput';
  room_status?: Maybe<Scalars['String']['output']>;
  twilio_token?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LeaveCallInput = {
  appointment_id?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['String']['input']>;
  waiting_room_id?: InputMaybe<Scalars['String']['input']>;
};

export type LeaveCallOutput = {
  __typename?: 'LeaveCallOutput';
  appointment_status?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type Links = {
  __typename?: 'Links';
  media?: Maybe<Scalars['String']['output']>;
};

export type NewAppointmentInput = {
  additional_note?: InputMaybe<Scalars['String']['input']>;
  doctor_id: Scalars['String']['input'];
  family_mem_email?: InputMaybe<Scalars['String']['input']>;
  family_mem_name?: InputMaybe<Scalars['String']['input']>;
  family_mem_phone?: InputMaybe<Scalars['String']['input']>;
  is_patient_remote?: InputMaybe<Scalars['Boolean']['input']>;
  location_id: Scalars['String']['input'];
  nurse_id?: InputMaybe<Scalars['String']['input']>;
  patient_name?: InputMaybe<Scalars['String']['input']>;
  time_slot_from: Scalars['String']['input'];
  time_slot_to?: InputMaybe<Scalars['String']['input']>;
};

export type NewAppointmentOutput = {
  __typename?: 'NewAppointmentOutput';
  appointment_id?: Maybe<Scalars['String']['output']>;
};

export type NewDoctorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  doctor_status?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  invite?: InputMaybe<Scalars['Boolean']['input']>;
  invite_emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type NewDoctorOutput = {
  __typename?: 'NewDoctorOutput';
  doctorId?: Maybe<Scalars['String']['output']>;
  invited?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type NewGalenStaffInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type NewGalenStaffOutput = {
  __typename?: 'NewGalenStaffOutput';
  staff_id: Scalars['uuid']['output'];
  user_id: Scalars['uuid']['output'];
};

export type OverrideDateInput = {
  dates?: InputMaybe<Array<InputMaybe<Date>>>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  doctor_id: Scalars['String']['input'];
  new?: InputMaybe<Scalars['Boolean']['input']>;
  override_date_id?: InputMaybe<Scalars['String']['input']>;
  time_slots?: InputMaybe<Array<InputMaybe<TimeSlots>>>;
};

export type OverrideDateOutput = {
  __typename?: 'OverrideDateOutput';
  message?: Maybe<Scalars['String']['output']>;
  numberOfOverrideDatesCreated?: Maybe<Scalars['Int']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type Participants = {
  __typename?: 'Participants';
  account_sid?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['String']['output']>;
  date_updated?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  sid?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ParticipantsData = {
  __typename?: 'ParticipantsData';
  participants?: Maybe<Array<Maybe<Participants>>>;
};

export type RecordPatientVitalsInput = {
  appointment_id: Scalars['String']['input'];
  blood_pressure_diastolic: Scalars['String']['input'];
  blood_pressure_systolic: Scalars['String']['input'];
  heart_rate: Scalars['String']['input'];
  height: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  oximetry: Scalars['String']['input'];
  patient_vitals_images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  respiratory_rate: Scalars['String']['input'];
  temperature: Scalars['String']['input'];
  weight: Scalars['String']['input'];
};

export type RecordPatientVitalsOutput = {
  __typename?: 'RecordPatientVitalsOutput';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type RecordingData = {
  __typename?: 'RecordingData';
  date_created?: Maybe<Scalars['String']['output']>;
  date_updated?: Maybe<Scalars['String']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Array<Maybe<Rules>>>;
};

export type RoomData = {
  __typename?: 'RoomData';
  account_sid?: Maybe<Scalars['String']['output']>;
  audio_only?: Maybe<Scalars['Boolean']['output']>;
  date_created?: Maybe<Scalars['String']['output']>;
  date_updated?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  empty_room_timeout?: Maybe<Scalars['Int']['output']>;
  enable_turn?: Maybe<Scalars['Boolean']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  max_concurrent_published_tracks?: Maybe<Scalars['Int']['output']>;
  max_participant_duration?: Maybe<Scalars['Int']['output']>;
  max_participants?: Maybe<Scalars['Int']['output']>;
  media_region?: Maybe<Scalars['String']['output']>;
  record_participants_on_connect?: Maybe<Scalars['Boolean']['output']>;
  sid?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_callback?: Maybe<Scalars['String']['output']>;
  status_callback_method?: Maybe<Scalars['String']['output']>;
  unique_name?: Maybe<Scalars['String']['output']>;
  unused_room_timeout?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  video_codecs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Rules = {
  __typename?: 'Rules';
  all?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  conversation_token: Scalars['String']['output'];
};

export type SingleParticipantData = {
  __typename?: 'SingleParticipantData';
  account_sid?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['String']['output']>;
  date_updated?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  sid?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type StripeActionEnum =
  | 'get_invoices';

export type StripeApiOperations = {
  __typename?: 'StripeApiOperations';
  invoices?: Maybe<Scalars['jsonb']['output']>;
  message: Scalars['String']['output'];
};

export type StripeInput = {
  doctor_id: Scalars['String']['input'];
};

export type StripeOperationsInput = {
  action: StripeActionEnum;
  end_date?: InputMaybe<Scalars['String']['input']>;
  facility_account_id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
};

export type StripeOutput = {
  __typename?: 'StripeOutput';
  link?: Maybe<Scalars['String']['output']>;
};

export type SubCancelInput = {
  doctor_id?: InputMaybe<Scalars['String']['input']>;
};

export type SubCancelOutput = {
  __typename?: 'SubCancelOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  subscription_id?: Maybe<Scalars['String']['output']>;
};

export type TimeSlots = {
  availability_status?: InputMaybe<Scalars['String']['input']>;
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
};

export type ZohoApiInput = {
  age?: InputMaybe<Scalars['String']['input']>;
  appointment_id: Scalars['String']['input'];
  dob?: InputMaybe<Scalars['String']['input']>;
  download_pdf?: InputMaybe<Scalars['Boolean']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  prescription?: InputMaybe<Scalars['String']['input']>;
  prescription_2?: InputMaybe<Scalars['String']['input']>;
  prescription_3?: InputMaybe<Scalars['String']['input']>;
  prescription_id?: InputMaybe<Scalars['String']['input']>;
  send_for_signing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ZohoApiOutput = {
  __typename?: 'ZohoApiOutput';
  accessToken?: Maybe<Scalars['String']['output']>;
  bufferData?: Maybe<Scalars['String']['output']>;
  document_status?: Maybe<Scalars['String']['output']>;
  download_url?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  sign_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ZohoSoapNoteInput = {
  age?: InputMaybe<Scalars['String']['input']>;
  appointment_id: Scalars['String']['input'];
  assessment?: InputMaybe<Scalars['String']['input']>;
  bp?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  download_pdf?: InputMaybe<Scalars['Boolean']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hr?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  patient_name?: InputMaybe<Scalars['String']['input']>;
  plan?: InputMaybe<Scalars['String']['input']>;
  rr?: InputMaybe<Scalars['String']['input']>;
  send_for_signing?: InputMaybe<Scalars['Boolean']['input']>;
  subjective?: InputMaybe<Scalars['String']['input']>;
  temp?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type ZohoSoapNoteOutput = {
  __typename?: 'ZohoSoapNoteOutput';
  accessToken?: Maybe<Scalars['String']['output']>;
  bufferData?: Maybe<Scalars['String']['output']>;
  document_status?: Maybe<Scalars['String']['output']>;
  download_url?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  sign_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "address" */
export type Address = {
  __typename?: 'address';
  address_lane?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  is_shipping_address?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  profile?: Maybe<Profile>;
  profile_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "address" */
export type Address_Aggregate = {
  __typename?: 'address_aggregate';
  aggregate?: Maybe<Address_Aggregate_Fields>;
  nodes: Array<Address>;
};

/** aggregate fields of "address" */
export type Address_Aggregate_Fields = {
  __typename?: 'address_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Address_Max_Fields>;
  min?: Maybe<Address_Min_Fields>;
};


/** aggregate fields of "address" */
export type Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Bool_Exp>>;
  _not?: InputMaybe<Address_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Bool_Exp>>;
  address_lane?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_shipping_address?: InputMaybe<Boolean_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  zip_code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "address" */
export type Address_Constraint =
  /** unique or primary key constraint */
  | 'address_pkey';

/** input type for inserting data into table "address" */
export type Address_Insert_Input = {
  address_lane?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_shipping_address?: InputMaybe<Scalars['Boolean']['input']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Address_Max_Fields = {
  __typename?: 'address_max_fields';
  address_lane?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Address_Min_Fields = {
  __typename?: 'address_min_fields';
  address_lane?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "address" */
export type Address_Mutation_Response = {
  __typename?: 'address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Address>;
};

/** input type for inserting object relation for remote table "address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Address_On_Conflict>;
};

/** on_conflict condition type for table "address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: InputMaybe<Address_Bool_Exp>;
};

/** Ordering options when selecting data from "address". */
export type Address_Order_By = {
  address_lane?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_shipping_address?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  zip_code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address */
export type Address_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "address" */
export type Address_Select_Column =
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

/** input type for updating data in table "address" */
export type Address_Set_Input = {
  address_lane?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_shipping_address?: InputMaybe<Scalars['Boolean']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
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

/** columns and relationships of "appointments" */
export type Appointments = {
  __typename?: 'appointments';
  additional_note?: Maybe<Scalars['String']['output']>;
  appointment_ended_at?: Maybe<Scalars['timestamptz']['output']>;
  appointment_started_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  appointments_state_enum: Appointments_State_Enum;
  cancelled_at?: Maybe<Scalars['String']['output']>;
  composition_id?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  doctor?: Maybe<Doctors>;
  /** An object relationship */
  doctor_appointments_response_enum: Doctor_Appointments_Response_Enum;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  doctor_name?: Maybe<Scalars['String']['output']>;
  doctor_response: Doctor_Appointments_Response_Enum_Enum;
  /** An array relationship */
  external_api_call_logs: Array<External_Api_Call_Logs>;
  /** An aggregate relationship */
  external_api_call_logs_aggregate: External_Api_Call_Logs_Aggregate;
  external_call_created_by_user?: Maybe<Scalars['String']['output']>;
  facility_account_id: Scalars['uuid']['output'];
  family_mem_email?: Maybe<Scalars['String']['output']>;
  family_mem_name?: Maybe<Scalars['String']['output']>;
  family_mem_phone?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  is_doctor_in_call?: Maybe<Scalars['Boolean']['output']>;
  is_external_call?: Maybe<Scalars['Boolean']['output']>;
  is_nurse_in_call?: Maybe<Scalars['Boolean']['output']>;
  is_patient_remote?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  location?: Maybe<Locations>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  meeting_link?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nurse?: Maybe<Nurses>;
  nurse_id?: Maybe<Scalars['uuid']['output']>;
  nurse_name?: Maybe<Scalars['String']['output']>;
  patient_dob?: Maybe<Scalars['String']['output']>;
  patient_id?: Maybe<Scalars['String']['output']>;
  patient_last_name?: Maybe<Scalars['String']['output']>;
  patient_name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  patient_vitals?: Maybe<Patient_Vitals>;
  /** An array relationship */
  prescriptions: Array<Prescription>;
  /** An aggregate relationship */
  prescriptions_aggregate: Prescription_Aggregate;
  rejection_reason?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  soap_note: Scalars['Boolean']['output'];
  soap_note_document_id?: Maybe<Scalars['String']['output']>;
  soap_note_request_id?: Maybe<Scalars['String']['output']>;
  soap_note_status?: Maybe<Scalars['String']['output']>;
  state: Appointments_State_Enum_Enum;
  time_slot_from?: Maybe<Scalars['timestamptz']['output']>;
  time_slot_to?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  waiting_room?: Maybe<Waiting_Rooms>;
};


/** columns and relationships of "appointments" */
export type AppointmentsExternal_Api_Call_LogsArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


/** columns and relationships of "appointments" */
export type AppointmentsExternal_Api_Call_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


/** columns and relationships of "appointments" */
export type AppointmentsPrescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


/** columns and relationships of "appointments" */
export type AppointmentsPrescriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};

/** aggregated selection of "appointments" */
export type Appointments_Aggregate = {
  __typename?: 'appointments_aggregate';
  aggregate?: Maybe<Appointments_Aggregate_Fields>;
  nodes: Array<Appointments>;
};

/** aggregate fields of "appointments" */
export type Appointments_Aggregate_Fields = {
  __typename?: 'appointments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Appointments_Max_Fields>;
  min?: Maybe<Appointments_Min_Fields>;
};


/** aggregate fields of "appointments" */
export type Appointments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Appointments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "appointments" */
export type Appointments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Appointments_Max_Order_By>;
  min?: InputMaybe<Appointments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "appointments" */
export type Appointments_Arr_Rel_Insert_Input = {
  data: Array<Appointments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Appointments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "appointments". All fields are combined with a logical 'AND'. */
export type Appointments_Bool_Exp = {
  _and?: InputMaybe<Array<Appointments_Bool_Exp>>;
  _not?: InputMaybe<Appointments_Bool_Exp>;
  _or?: InputMaybe<Array<Appointments_Bool_Exp>>;
  additional_note?: InputMaybe<String_Comparison_Exp>;
  appointment_ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  appointment_started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  appointments_state_enum?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
  cancelled_at?: InputMaybe<String_Comparison_Exp>;
  composition_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  doctor?: InputMaybe<Doctors_Bool_Exp>;
  doctor_appointments_response_enum?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  doctor_name?: InputMaybe<String_Comparison_Exp>;
  doctor_response?: InputMaybe<Doctor_Appointments_Response_Enum_Enum_Comparison_Exp>;
  external_api_call_logs?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
  external_call_created_by_user?: InputMaybe<String_Comparison_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  family_mem_email?: InputMaybe<String_Comparison_Exp>;
  family_mem_name?: InputMaybe<String_Comparison_Exp>;
  family_mem_phone?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_doctor_in_call?: InputMaybe<Boolean_Comparison_Exp>;
  is_external_call?: InputMaybe<Boolean_Comparison_Exp>;
  is_nurse_in_call?: InputMaybe<Boolean_Comparison_Exp>;
  is_patient_remote?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  meeting_link?: InputMaybe<String_Comparison_Exp>;
  nurse?: InputMaybe<Nurses_Bool_Exp>;
  nurse_id?: InputMaybe<Uuid_Comparison_Exp>;
  nurse_name?: InputMaybe<String_Comparison_Exp>;
  patient_dob?: InputMaybe<String_Comparison_Exp>;
  patient_id?: InputMaybe<String_Comparison_Exp>;
  patient_last_name?: InputMaybe<String_Comparison_Exp>;
  patient_name?: InputMaybe<String_Comparison_Exp>;
  patient_vitals?: InputMaybe<Patient_Vitals_Bool_Exp>;
  prescriptions?: InputMaybe<Prescription_Bool_Exp>;
  rejection_reason?: InputMaybe<String_Comparison_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  room_sid?: InputMaybe<String_Comparison_Exp>;
  soap_note?: InputMaybe<Boolean_Comparison_Exp>;
  soap_note_document_id?: InputMaybe<String_Comparison_Exp>;
  soap_note_request_id?: InputMaybe<String_Comparison_Exp>;
  soap_note_status?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<Appointments_State_Enum_Enum_Comparison_Exp>;
  time_slot_from?: InputMaybe<Timestamptz_Comparison_Exp>;
  time_slot_to?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  waiting_room?: InputMaybe<Waiting_Rooms_Bool_Exp>;
};

/** unique or primary key constraints on table "appointments" */
export type Appointments_Constraint =
  /** unique or primary key constraint */
  | 'appointments_pkey';

/** input type for inserting data into table "appointments" */
export type Appointments_Insert_Input = {
  additional_note?: InputMaybe<Scalars['String']['input']>;
  appointment_ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  appointment_started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  appointments_state_enum?: InputMaybe<Appointments_State_Enum_Obj_Rel_Insert_Input>;
  cancelled_at?: InputMaybe<Scalars['String']['input']>;
  composition_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  doctor?: InputMaybe<Doctors_Obj_Rel_Insert_Input>;
  doctor_appointments_response_enum?: InputMaybe<Doctor_Appointments_Response_Enum_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  doctor_name?: InputMaybe<Scalars['String']['input']>;
  doctor_response?: InputMaybe<Doctor_Appointments_Response_Enum_Enum>;
  external_api_call_logs?: InputMaybe<External_Api_Call_Logs_Arr_Rel_Insert_Input>;
  external_call_created_by_user?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  family_mem_email?: InputMaybe<Scalars['String']['input']>;
  family_mem_name?: InputMaybe<Scalars['String']['input']>;
  family_mem_phone?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_doctor_in_call?: InputMaybe<Scalars['Boolean']['input']>;
  is_external_call?: InputMaybe<Scalars['Boolean']['input']>;
  is_nurse_in_call?: InputMaybe<Scalars['Boolean']['input']>;
  is_patient_remote?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  meeting_link?: InputMaybe<Scalars['String']['input']>;
  nurse?: InputMaybe<Nurses_Obj_Rel_Insert_Input>;
  nurse_id?: InputMaybe<Scalars['uuid']['input']>;
  nurse_name?: InputMaybe<Scalars['String']['input']>;
  patient_dob?: InputMaybe<Scalars['String']['input']>;
  patient_id?: InputMaybe<Scalars['String']['input']>;
  patient_last_name?: InputMaybe<Scalars['String']['input']>;
  patient_name?: InputMaybe<Scalars['String']['input']>;
  patient_vitals?: InputMaybe<Patient_Vitals_Obj_Rel_Insert_Input>;
  prescriptions?: InputMaybe<Prescription_Arr_Rel_Insert_Input>;
  rejection_reason?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  room_sid?: InputMaybe<Scalars['String']['input']>;
  soap_note?: InputMaybe<Scalars['Boolean']['input']>;
  soap_note_document_id?: InputMaybe<Scalars['String']['input']>;
  soap_note_request_id?: InputMaybe<Scalars['String']['input']>;
  soap_note_status?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Appointments_State_Enum_Enum>;
  time_slot_from?: InputMaybe<Scalars['timestamptz']['input']>;
  time_slot_to?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  waiting_room?: InputMaybe<Waiting_Rooms_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Appointments_Max_Fields = {
  __typename?: 'appointments_max_fields';
  additional_note?: Maybe<Scalars['String']['output']>;
  appointment_ended_at?: Maybe<Scalars['timestamptz']['output']>;
  appointment_started_at?: Maybe<Scalars['timestamptz']['output']>;
  cancelled_at?: Maybe<Scalars['String']['output']>;
  composition_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  doctor_name?: Maybe<Scalars['String']['output']>;
  external_call_created_by_user?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  family_mem_email?: Maybe<Scalars['String']['output']>;
  family_mem_name?: Maybe<Scalars['String']['output']>;
  family_mem_phone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  meeting_link?: Maybe<Scalars['String']['output']>;
  nurse_id?: Maybe<Scalars['uuid']['output']>;
  nurse_name?: Maybe<Scalars['String']['output']>;
  patient_dob?: Maybe<Scalars['String']['output']>;
  patient_id?: Maybe<Scalars['String']['output']>;
  patient_last_name?: Maybe<Scalars['String']['output']>;
  patient_name?: Maybe<Scalars['String']['output']>;
  rejection_reason?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  soap_note_document_id?: Maybe<Scalars['String']['output']>;
  soap_note_request_id?: Maybe<Scalars['String']['output']>;
  soap_note_status?: Maybe<Scalars['String']['output']>;
  time_slot_from?: Maybe<Scalars['timestamptz']['output']>;
  time_slot_to?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "appointments" */
export type Appointments_Max_Order_By = {
  additional_note?: InputMaybe<Order_By>;
  appointment_ended_at?: InputMaybe<Order_By>;
  appointment_started_at?: InputMaybe<Order_By>;
  cancelled_at?: InputMaybe<Order_By>;
  composition_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  doctor_name?: InputMaybe<Order_By>;
  external_call_created_by_user?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  family_mem_email?: InputMaybe<Order_By>;
  family_mem_name?: InputMaybe<Order_By>;
  family_mem_phone?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  meeting_link?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  nurse_name?: InputMaybe<Order_By>;
  patient_dob?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  patient_last_name?: InputMaybe<Order_By>;
  patient_name?: InputMaybe<Order_By>;
  rejection_reason?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  room_sid?: InputMaybe<Order_By>;
  soap_note_document_id?: InputMaybe<Order_By>;
  soap_note_request_id?: InputMaybe<Order_By>;
  soap_note_status?: InputMaybe<Order_By>;
  time_slot_from?: InputMaybe<Order_By>;
  time_slot_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Appointments_Min_Fields = {
  __typename?: 'appointments_min_fields';
  additional_note?: Maybe<Scalars['String']['output']>;
  appointment_ended_at?: Maybe<Scalars['timestamptz']['output']>;
  appointment_started_at?: Maybe<Scalars['timestamptz']['output']>;
  cancelled_at?: Maybe<Scalars['String']['output']>;
  composition_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  doctor_name?: Maybe<Scalars['String']['output']>;
  external_call_created_by_user?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  family_mem_email?: Maybe<Scalars['String']['output']>;
  family_mem_name?: Maybe<Scalars['String']['output']>;
  family_mem_phone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  meeting_link?: Maybe<Scalars['String']['output']>;
  nurse_id?: Maybe<Scalars['uuid']['output']>;
  nurse_name?: Maybe<Scalars['String']['output']>;
  patient_dob?: Maybe<Scalars['String']['output']>;
  patient_id?: Maybe<Scalars['String']['output']>;
  patient_last_name?: Maybe<Scalars['String']['output']>;
  patient_name?: Maybe<Scalars['String']['output']>;
  rejection_reason?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  room_sid?: Maybe<Scalars['String']['output']>;
  soap_note_document_id?: Maybe<Scalars['String']['output']>;
  soap_note_request_id?: Maybe<Scalars['String']['output']>;
  soap_note_status?: Maybe<Scalars['String']['output']>;
  time_slot_from?: Maybe<Scalars['timestamptz']['output']>;
  time_slot_to?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "appointments" */
export type Appointments_Min_Order_By = {
  additional_note?: InputMaybe<Order_By>;
  appointment_ended_at?: InputMaybe<Order_By>;
  appointment_started_at?: InputMaybe<Order_By>;
  cancelled_at?: InputMaybe<Order_By>;
  composition_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  doctor_name?: InputMaybe<Order_By>;
  external_call_created_by_user?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  family_mem_email?: InputMaybe<Order_By>;
  family_mem_name?: InputMaybe<Order_By>;
  family_mem_phone?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  meeting_link?: InputMaybe<Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  nurse_name?: InputMaybe<Order_By>;
  patient_dob?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  patient_last_name?: InputMaybe<Order_By>;
  patient_name?: InputMaybe<Order_By>;
  rejection_reason?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  room_sid?: InputMaybe<Order_By>;
  soap_note_document_id?: InputMaybe<Order_By>;
  soap_note_request_id?: InputMaybe<Order_By>;
  soap_note_status?: InputMaybe<Order_By>;
  time_slot_from?: InputMaybe<Order_By>;
  time_slot_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "appointments" */
export type Appointments_Mutation_Response = {
  __typename?: 'appointments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Appointments>;
};

/** input type for inserting object relation for remote table "appointments" */
export type Appointments_Obj_Rel_Insert_Input = {
  data: Appointments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Appointments_On_Conflict>;
};

/** on_conflict condition type for table "appointments" */
export type Appointments_On_Conflict = {
  constraint: Appointments_Constraint;
  update_columns?: Array<Appointments_Update_Column>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};

/** Ordering options when selecting data from "appointments". */
export type Appointments_Order_By = {
  additional_note?: InputMaybe<Order_By>;
  appointment_ended_at?: InputMaybe<Order_By>;
  appointment_started_at?: InputMaybe<Order_By>;
  appointments_state_enum?: InputMaybe<Appointments_State_Enum_Order_By>;
  cancelled_at?: InputMaybe<Order_By>;
  composition_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  doctor?: InputMaybe<Doctors_Order_By>;
  doctor_appointments_response_enum?: InputMaybe<Doctor_Appointments_Response_Enum_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  doctor_name?: InputMaybe<Order_By>;
  doctor_response?: InputMaybe<Order_By>;
  external_api_call_logs_aggregate?: InputMaybe<External_Api_Call_Logs_Aggregate_Order_By>;
  external_call_created_by_user?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  family_mem_email?: InputMaybe<Order_By>;
  family_mem_name?: InputMaybe<Order_By>;
  family_mem_phone?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_doctor_in_call?: InputMaybe<Order_By>;
  is_external_call?: InputMaybe<Order_By>;
  is_nurse_in_call?: InputMaybe<Order_By>;
  is_patient_remote?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  location_id?: InputMaybe<Order_By>;
  meeting_link?: InputMaybe<Order_By>;
  nurse?: InputMaybe<Nurses_Order_By>;
  nurse_id?: InputMaybe<Order_By>;
  nurse_name?: InputMaybe<Order_By>;
  patient_dob?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  patient_last_name?: InputMaybe<Order_By>;
  patient_name?: InputMaybe<Order_By>;
  patient_vitals?: InputMaybe<Patient_Vitals_Order_By>;
  prescriptions_aggregate?: InputMaybe<Prescription_Aggregate_Order_By>;
  rejection_reason?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  room_sid?: InputMaybe<Order_By>;
  soap_note?: InputMaybe<Order_By>;
  soap_note_document_id?: InputMaybe<Order_By>;
  soap_note_request_id?: InputMaybe<Order_By>;
  soap_note_status?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  time_slot_from?: InputMaybe<Order_By>;
  time_slot_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  waiting_room?: InputMaybe<Waiting_Rooms_Order_By>;
};

/** primary key columns input for table: appointments */
export type Appointments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "appointments" */
export type Appointments_Select_Column =
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

/** input type for updating data in table "appointments" */
export type Appointments_Set_Input = {
  additional_note?: InputMaybe<Scalars['String']['input']>;
  appointment_ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  appointment_started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cancelled_at?: InputMaybe<Scalars['String']['input']>;
  composition_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  doctor_name?: InputMaybe<Scalars['String']['input']>;
  doctor_response?: InputMaybe<Doctor_Appointments_Response_Enum_Enum>;
  external_call_created_by_user?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  family_mem_email?: InputMaybe<Scalars['String']['input']>;
  family_mem_name?: InputMaybe<Scalars['String']['input']>;
  family_mem_phone?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_doctor_in_call?: InputMaybe<Scalars['Boolean']['input']>;
  is_external_call?: InputMaybe<Scalars['Boolean']['input']>;
  is_nurse_in_call?: InputMaybe<Scalars['Boolean']['input']>;
  is_patient_remote?: InputMaybe<Scalars['Boolean']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  meeting_link?: InputMaybe<Scalars['String']['input']>;
  nurse_id?: InputMaybe<Scalars['uuid']['input']>;
  nurse_name?: InputMaybe<Scalars['String']['input']>;
  patient_dob?: InputMaybe<Scalars['String']['input']>;
  patient_id?: InputMaybe<Scalars['String']['input']>;
  patient_last_name?: InputMaybe<Scalars['String']['input']>;
  patient_name?: InputMaybe<Scalars['String']['input']>;
  rejection_reason?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  room_sid?: InputMaybe<Scalars['String']['input']>;
  soap_note?: InputMaybe<Scalars['Boolean']['input']>;
  soap_note_document_id?: InputMaybe<Scalars['String']['input']>;
  soap_note_request_id?: InputMaybe<Scalars['String']['input']>;
  soap_note_status?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Appointments_State_Enum_Enum>;
  time_slot_from?: InputMaybe<Scalars['timestamptz']['input']>;
  time_slot_to?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "appointments_state_enum" */
export type Appointments_State_Enum = {
  __typename?: 'appointments_state_enum';
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "appointments_state_enum" */
export type Appointments_State_EnumAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "appointments_state_enum" */
export type Appointments_State_EnumAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};

/** aggregated selection of "appointments_state_enum" */
export type Appointments_State_Enum_Aggregate = {
  __typename?: 'appointments_state_enum_aggregate';
  aggregate?: Maybe<Appointments_State_Enum_Aggregate_Fields>;
  nodes: Array<Appointments_State_Enum>;
};

/** aggregate fields of "appointments_state_enum" */
export type Appointments_State_Enum_Aggregate_Fields = {
  __typename?: 'appointments_state_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Appointments_State_Enum_Max_Fields>;
  min?: Maybe<Appointments_State_Enum_Min_Fields>;
};


/** aggregate fields of "appointments_state_enum" */
export type Appointments_State_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Appointments_State_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "appointments_state_enum". All fields are combined with a logical 'AND'. */
export type Appointments_State_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Appointments_State_Enum_Bool_Exp>>;
  _not?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Appointments_State_Enum_Bool_Exp>>;
  appointments?: InputMaybe<Appointments_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
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
  _eq?: InputMaybe<Appointments_State_Enum_Enum>;
  _in?: InputMaybe<Array<Appointments_State_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Appointments_State_Enum_Enum>;
  _nin?: InputMaybe<Array<Appointments_State_Enum_Enum>>;
};

/** input type for inserting data into table "appointments_state_enum" */
export type Appointments_State_Enum_Insert_Input = {
  appointments?: InputMaybe<Appointments_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Appointments_State_Enum_Max_Fields = {
  __typename?: 'appointments_state_enum_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Appointments_State_Enum_Min_Fields = {
  __typename?: 'appointments_state_enum_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "appointments_state_enum" */
export type Appointments_State_Enum_Mutation_Response = {
  __typename?: 'appointments_state_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Appointments_State_Enum>;
};

/** input type for inserting object relation for remote table "appointments_state_enum" */
export type Appointments_State_Enum_Obj_Rel_Insert_Input = {
  data: Appointments_State_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Appointments_State_Enum_On_Conflict>;
};

/** on_conflict condition type for table "appointments_state_enum" */
export type Appointments_State_Enum_On_Conflict = {
  constraint: Appointments_State_Enum_Constraint;
  update_columns?: Array<Appointments_State_Enum_Update_Column>;
  where?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "appointments_state_enum". */
export type Appointments_State_Enum_Order_By = {
  appointments_aggregate?: InputMaybe<Appointments_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: appointments_state_enum */
export type Appointments_State_Enum_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "appointments_state_enum" */
export type Appointments_State_Enum_Select_Column =
  /** column name */
  | 'value';

/** input type for updating data in table "appointments_state_enum" */
export type Appointments_State_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
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

/** columns and relationships of "audit_logs" */
export type Audit_Logs = {
  __typename?: 'audit_logs';
  /** An object relationship */
  account?: Maybe<Facility_Accounts>;
  action: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  entity_id?: Maybe<Scalars['uuid']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "audit_logs" */
export type Audit_LogsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit_logs" */
export type Audit_Logs_Aggregate = {
  __typename?: 'audit_logs_aggregate';
  aggregate?: Maybe<Audit_Logs_Aggregate_Fields>;
  nodes: Array<Audit_Logs>;
};

/** aggregate fields of "audit_logs" */
export type Audit_Logs_Aggregate_Fields = {
  __typename?: 'audit_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Logs_Max_Fields>;
  min?: Maybe<Audit_Logs_Min_Fields>;
};


/** aggregate fields of "audit_logs" */
export type Audit_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logs_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "audit_logs". All fields are combined with a logical 'AND'. */
export type Audit_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Logs_Bool_Exp>>;
  _not?: InputMaybe<Audit_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Logs_Bool_Exp>>;
  account?: InputMaybe<Facility_Accounts_Bool_Exp>;
  action?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  entity_type?: InputMaybe<String_Comparison_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit_logs" */
export type Audit_Logs_Constraint =
  /** unique or primary key constraint */
  | 'audit_logs_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Audit_Logs_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Audit_Logs_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Audit_Logs_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "audit_logs" */
export type Audit_Logs_Insert_Input = {
  account?: InputMaybe<Facility_Accounts_Obj_Rel_Insert_Input>;
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Audit_Logs_Max_Fields = {
  __typename?: 'audit_logs_max_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Audit_Logs_Min_Fields = {
  __typename?: 'audit_logs_min_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "audit_logs" */
export type Audit_Logs_Mutation_Response = {
  __typename?: 'audit_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Logs>;
};

/** on_conflict condition type for table "audit_logs" */
export type Audit_Logs_On_Conflict = {
  constraint: Audit_Logs_Constraint;
  update_columns?: Array<Audit_Logs_Update_Column>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "audit_logs". */
export type Audit_Logs_Order_By = {
  account?: InputMaybe<Facility_Accounts_Order_By>;
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit_logs */
export type Audit_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logs_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "audit_logs" */
export type Audit_Logs_Select_Column =
  /** column name */
  | 'action'
  /** column name */
  | 'created_at'
  /** column name */
  | 'entity_id'
  /** column name */
  | 'entity_type'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'user_id';

/** input type for updating data in table "audit_logs" */
export type Audit_Logs_Set_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "audit_logs" */
export type Audit_Logs_Update_Column =
  /** column name */
  | 'action'
  /** column name */
  | 'created_at'
  /** column name */
  | 'entity_id'
  /** column name */
  | 'entity_type'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'user_id';

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid']['output'];
  auth_provider: Scalars['String']['output'];
  auth_provider_unique_id: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Providers_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Providers_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Providers_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  auth_provider?: InputMaybe<String_Comparison_Exp>;
  auth_provider_unique_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<Auth_Providers_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  auth_provider?: InputMaybe<Scalars['String']['input']>;
  auth_provider_unique_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  auth_provider?: Maybe<Scalars['String']['output']>;
  auth_provider_unique_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  auth_provider?: InputMaybe<Order_By>;
  auth_provider_unique_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  auth_provider?: Maybe<Scalars['String']['output']>;
  auth_provider_unique_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  auth_provider?: InputMaybe<Order_By>;
  auth_provider_unique_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** on_conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns?: Array<Auth_Account_Providers_Update_Column>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type Auth_Account_Providers_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  auth_provider?: InputMaybe<Order_By>;
  auth_provider_unique_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Auth_Providers_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_account_providers */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.account_providers" */
export type Auth_Account_Providers_Select_Column =
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

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  auth_provider?: InputMaybe<Scalars['String']['input']>;
  auth_provider_unique_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: Auth_Roles;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Roles_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Roles_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<Auth_Roles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export type Auth_Account_Roles_Constraint =
  /** unique or primary key constraint */
  | 'account_roles_pkey'
  /** unique or primary key constraint */
  | 'user_roles_account_id_role_key';

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<Auth_Roles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on_conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Auth_Roles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.account_roles" */
export type Auth_Account_Roles_Select_Column =
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

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  custom_register_data?: Maybe<Scalars['jsonb']['output']>;
  default_role: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  id: Scalars['uuid']['output'];
  is_anonymous: Scalars['Boolean']['output'];
  is_super: Scalars['Boolean']['output'];
  mfa_enabled: Scalars['Boolean']['output'];
  new_email?: Maybe<Scalars['citext']['output']>;
  otp_secret?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid']['output'];
  ticket_expires_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Accounts_Max_Order_By>;
  min?: InputMaybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Auth_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
  account_providers?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: InputMaybe<Jsonb_Comparison_Exp>;
  default_role?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  is_super?: InputMaybe<Boolean_Comparison_Exp>;
  mfa_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  new_email?: InputMaybe<Citext_Comparison_Exp>;
  otp_secret?: InputMaybe<String_Comparison_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  refresh_tokens?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: InputMaybe<Auth_Roles_Bool_Exp>;
  ticket?: InputMaybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
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

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: InputMaybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_register_data?: InputMaybe<Scalars['jsonb']['input']>;
  default_role?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  is_super?: InputMaybe<Scalars['Boolean']['input']>;
  mfa_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  new_email?: InputMaybe<Scalars['citext']['input']>;
  otp_secret?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  refresh_tokens?: InputMaybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['uuid']['input']>;
  ticket_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  default_role?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  new_email?: Maybe<Scalars['citext']['output']>;
  otp_secret?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['uuid']['output']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  default_role?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_email?: InputMaybe<Order_By>;
  otp_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  default_role?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  new_email?: Maybe<Scalars['citext']['output']>;
  otp_secret?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['uuid']['output']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  default_role?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_email?: InputMaybe<Order_By>;
  otp_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};

/** on_conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns?: Array<Auth_Accounts_Update_Column>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: InputMaybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  custom_register_data?: InputMaybe<Order_By>;
  default_role?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_anonymous?: InputMaybe<Order_By>;
  is_super?: InputMaybe<Order_By>;
  mfa_enabled?: InputMaybe<Order_By>;
  new_email?: InputMaybe<Order_By>;
  otp_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  refresh_tokens_aggregate?: InputMaybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: InputMaybe<Auth_Roles_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.accounts" */
export type Auth_Accounts_Select_Column =
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

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_register_data?: InputMaybe<Scalars['jsonb']['input']>;
  default_role?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  is_super?: InputMaybe<Scalars['Boolean']['input']>;
  mfa_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  new_email?: InputMaybe<Scalars['citext']['input']>;
  otp_secret?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  ticket?: InputMaybe<Scalars['uuid']['input']>;
  ticket_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String']['output'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: InputMaybe<Auth_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Providers_Bool_Exp>>;
  account_providers?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export type Auth_Providers_Constraint =
  /** unique or primary key constraint */
  | 'providers_pkey';

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: InputMaybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Providers_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: InputMaybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export type Auth_Providers_Select_Column =
  /** column name */
  | 'provider';

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export type Auth_Providers_Update_Column =
  /** column name */
  | 'provider';

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  expires_at: Scalars['timestamptz']['output'];
  refresh_token: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: InputMaybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  refresh_token?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Constraint =
  /** unique or primary key constraint */
  | 'refresh_tokens_pkey';

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  refresh_token?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  refresh_token?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  refresh_token?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid']['input'];
};

/** select columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Select_Column =
  /** column name */
  | 'account_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'refresh_token';

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  refresh_token?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String']['output'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: InputMaybe<Auth_Accounts_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export type Auth_Roles_Constraint =
  /** unique or primary key constraint */
  | 'roles_pkey';

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: InputMaybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: InputMaybe<Auth_Accounts_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export type Auth_Roles_Select_Column =
  /** column name */
  | 'role';

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export type Auth_Roles_Update_Column =
  /** column name */
  | 'role';

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

export type DoctorSelfSignupInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorSelfSignupOutput = {
  __typename?: 'doctorSelfSignupOutput';
  doc_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** columns and relationships of "doctor_appointment_alert" */
export type Doctor_Appointment_Alert = {
  __typename?: 'doctor_appointment_alert';
  alert_id: Scalars['uuid']['output'];
  appointment_id: Scalars['uuid']['output'];
  doctor_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  time: Scalars['timestamptz']['output'];
};

/** aggregated selection of "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Aggregate = {
  __typename?: 'doctor_appointment_alert_aggregate';
  aggregate?: Maybe<Doctor_Appointment_Alert_Aggregate_Fields>;
  nodes: Array<Doctor_Appointment_Alert>;
};

/** aggregate fields of "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Aggregate_Fields = {
  __typename?: 'doctor_appointment_alert_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Doctor_Appointment_Alert_Max_Fields>;
  min?: Maybe<Doctor_Appointment_Alert_Min_Fields>;
};


/** aggregate fields of "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Appointment_Alert_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "doctor_appointment_alert". All fields are combined with a logical 'AND'. */
export type Doctor_Appointment_Alert_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Appointment_Alert_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Appointment_Alert_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Appointment_Alert_Bool_Exp>>;
  alert_id?: InputMaybe<Uuid_Comparison_Exp>;
  appointment_id?: InputMaybe<Uuid_Comparison_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  time?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Constraint =
  /** unique or primary key constraint */
  | 'doctor_appointment_alert_id_key'
  /** unique or primary key constraint */
  | 'doctor_appointment_alert_pkey';

/** input type for inserting data into table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Insert_Input = {
  alert_id?: InputMaybe<Scalars['uuid']['input']>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  time?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Doctor_Appointment_Alert_Max_Fields = {
  __typename?: 'doctor_appointment_alert_max_fields';
  alert_id?: Maybe<Scalars['uuid']['output']>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  time?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Doctor_Appointment_Alert_Min_Fields = {
  __typename?: 'doctor_appointment_alert_min_fields';
  alert_id?: Maybe<Scalars['uuid']['output']>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  time?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Mutation_Response = {
  __typename?: 'doctor_appointment_alert_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor_Appointment_Alert>;
};

/** on_conflict condition type for table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_On_Conflict = {
  constraint: Doctor_Appointment_Alert_Constraint;
  update_columns?: Array<Doctor_Appointment_Alert_Update_Column>;
  where?: InputMaybe<Doctor_Appointment_Alert_Bool_Exp>;
};

/** Ordering options when selecting data from "doctor_appointment_alert". */
export type Doctor_Appointment_Alert_Order_By = {
  alert_id?: InputMaybe<Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor_appointment_alert */
export type Doctor_Appointment_Alert_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Select_Column =
  /** column name */
  | 'alert_id'
  /** column name */
  | 'appointment_id'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'time';

/** input type for updating data in table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Set_Input = {
  alert_id?: InputMaybe<Scalars['uuid']['input']>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  time?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "doctor_appointment_alert" */
export type Doctor_Appointment_Alert_Update_Column =
  /** column name */
  | 'alert_id'
  /** column name */
  | 'appointment_id'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'time';

/** columns and relationships of "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum = {
  __typename?: 'doctor_appointments_response_enum';
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_EnumAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_EnumAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};

/** aggregated selection of "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Aggregate = {
  __typename?: 'doctor_appointments_response_enum_aggregate';
  aggregate?: Maybe<Doctor_Appointments_Response_Enum_Aggregate_Fields>;
  nodes: Array<Doctor_Appointments_Response_Enum>;
};

/** aggregate fields of "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Aggregate_Fields = {
  __typename?: 'doctor_appointments_response_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Doctor_Appointments_Response_Enum_Max_Fields>;
  min?: Maybe<Doctor_Appointments_Response_Enum_Min_Fields>;
};


/** aggregate fields of "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "doctor_appointments_response_enum". All fields are combined with a logical 'AND'. */
export type Doctor_Appointments_Response_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Bool_Exp>>;
  appointments?: InputMaybe<Appointments_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
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
  _eq?: InputMaybe<Doctor_Appointments_Response_Enum_Enum>;
  _in?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Doctor_Appointments_Response_Enum_Enum>;
  _nin?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Enum>>;
};

/** input type for inserting data into table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Insert_Input = {
  appointments?: InputMaybe<Appointments_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Doctor_Appointments_Response_Enum_Max_Fields = {
  __typename?: 'doctor_appointments_response_enum_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Doctor_Appointments_Response_Enum_Min_Fields = {
  __typename?: 'doctor_appointments_response_enum_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Mutation_Response = {
  __typename?: 'doctor_appointments_response_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor_Appointments_Response_Enum>;
};

/** input type for inserting object relation for remote table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Obj_Rel_Insert_Input = {
  data: Doctor_Appointments_Response_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctor_Appointments_Response_Enum_On_Conflict>;
};

/** on_conflict condition type for table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_On_Conflict = {
  constraint: Doctor_Appointments_Response_Enum_Constraint;
  update_columns?: Array<Doctor_Appointments_Response_Enum_Update_Column>;
  where?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "doctor_appointments_response_enum". */
export type Doctor_Appointments_Response_Enum_Order_By = {
  appointments_aggregate?: InputMaybe<Appointments_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor_appointments_response_enum */
export type Doctor_Appointments_Response_Enum_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Select_Column =
  /** column name */
  | 'value';

/** input type for updating data in table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "doctor_appointments_response_enum" */
export type Doctor_Appointments_Response_Enum_Update_Column =
  /** column name */
  | 'value';

/** This table will contain the information related to doctors subscriptions  */
export type Doctor_Subscriptions = {
  __typename?: 'doctor_subscriptions';
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  doctor?: Maybe<Doctors>;
  doctor_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  link_active: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  payment_id: Scalars['String']['output'];
  payment_link?: Maybe<Scalars['String']['output']>;
  payment_state: Scalars['String']['output'];
  stripe_customer_name: Scalars['String']['output'];
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  valid_from?: Maybe<Scalars['timestamptz']['output']>;
  valid_till?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "doctor_subscriptions" */
export type Doctor_Subscriptions_Aggregate = {
  __typename?: 'doctor_subscriptions_aggregate';
  aggregate?: Maybe<Doctor_Subscriptions_Aggregate_Fields>;
  nodes: Array<Doctor_Subscriptions>;
};

/** aggregate fields of "doctor_subscriptions" */
export type Doctor_Subscriptions_Aggregate_Fields = {
  __typename?: 'doctor_subscriptions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Doctor_Subscriptions_Max_Fields>;
  min?: Maybe<Doctor_Subscriptions_Min_Fields>;
};


/** aggregate fields of "doctor_subscriptions" */
export type Doctor_Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "doctor_subscriptions". All fields are combined with a logical 'AND'. */
export type Doctor_Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Subscriptions_Bool_Exp>>;
  cancelled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  doctor?: InputMaybe<Doctors_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  link_active?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  payment_id?: InputMaybe<String_Comparison_Exp>;
  payment_link?: InputMaybe<String_Comparison_Exp>;
  payment_state?: InputMaybe<String_Comparison_Exp>;
  stripe_customer_name?: InputMaybe<String_Comparison_Exp>;
  stripe_subscription_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  valid_from?: InputMaybe<Timestamptz_Comparison_Exp>;
  valid_till?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "doctor_subscriptions" */
export type Doctor_Subscriptions_Constraint =
  /** unique or primary key constraint */
  | 'doctor_subscriptions_pkey';

/** input type for inserting data into table "doctor_subscriptions" */
export type Doctor_Subscriptions_Insert_Input = {
  cancelled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  doctor?: InputMaybe<Doctors_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  link_active?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_link?: InputMaybe<Scalars['String']['input']>;
  payment_state?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_name?: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  valid_from?: InputMaybe<Scalars['timestamptz']['input']>;
  valid_till?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Doctor_Subscriptions_Max_Fields = {
  __typename?: 'doctor_subscriptions_max_fields';
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_link?: Maybe<Scalars['String']['output']>;
  payment_state?: Maybe<Scalars['String']['output']>;
  stripe_customer_name?: Maybe<Scalars['String']['output']>;
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  valid_from?: Maybe<Scalars['timestamptz']['output']>;
  valid_till?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Doctor_Subscriptions_Min_Fields = {
  __typename?: 'doctor_subscriptions_min_fields';
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_link?: Maybe<Scalars['String']['output']>;
  payment_state?: Maybe<Scalars['String']['output']>;
  stripe_customer_name?: Maybe<Scalars['String']['output']>;
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  valid_from?: Maybe<Scalars['timestamptz']['output']>;
  valid_till?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "doctor_subscriptions" */
export type Doctor_Subscriptions_Mutation_Response = {
  __typename?: 'doctor_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor_Subscriptions>;
};

/** input type for inserting object relation for remote table "doctor_subscriptions" */
export type Doctor_Subscriptions_Obj_Rel_Insert_Input = {
  data: Doctor_Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctor_Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "doctor_subscriptions" */
export type Doctor_Subscriptions_On_Conflict = {
  constraint: Doctor_Subscriptions_Constraint;
  update_columns?: Array<Doctor_Subscriptions_Update_Column>;
  where?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "doctor_subscriptions". */
export type Doctor_Subscriptions_Order_By = {
  cancelled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  doctor?: InputMaybe<Doctors_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_active?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_link?: InputMaybe<Order_By>;
  payment_state?: InputMaybe<Order_By>;
  stripe_customer_name?: InputMaybe<Order_By>;
  stripe_subscription_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  valid_from?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor_subscriptions */
export type Doctor_Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "doctor_subscriptions" */
export type Doctor_Subscriptions_Select_Column =
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

/** input type for updating data in table "doctor_subscriptions" */
export type Doctor_Subscriptions_Set_Input = {
  cancelled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  link_active?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_link?: InputMaybe<Scalars['String']['input']>;
  payment_state?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_name?: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  valid_from?: InputMaybe<Scalars['timestamptz']['input']>;
  valid_till?: InputMaybe<Scalars['timestamptz']['input']>;
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

/** columns and relationships of "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum = {
  __typename?: 'doctor_validation_state_enum';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  doctors: Array<Doctors>;
  /** An aggregate relationship */
  doctors_aggregate: Doctors_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "doctor_validation_state_enum" */
export type Doctor_Validation_State_EnumDoctorsArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


/** columns and relationships of "doctor_validation_state_enum" */
export type Doctor_Validation_State_EnumDoctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};

/** aggregated selection of "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Aggregate = {
  __typename?: 'doctor_validation_state_enum_aggregate';
  aggregate?: Maybe<Doctor_Validation_State_Enum_Aggregate_Fields>;
  nodes: Array<Doctor_Validation_State_Enum>;
};

/** aggregate fields of "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Aggregate_Fields = {
  __typename?: 'doctor_validation_state_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Doctor_Validation_State_Enum_Max_Fields>;
  min?: Maybe<Doctor_Validation_State_Enum_Min_Fields>;
};


/** aggregate fields of "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Validation_State_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "doctor_validation_state_enum". All fields are combined with a logical 'AND'. */
export type Doctor_Validation_State_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Validation_State_Enum_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Validation_State_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  doctors?: InputMaybe<Doctors_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
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
  _eq?: InputMaybe<Doctor_Validation_State_Enum_Enum>;
  _in?: InputMaybe<Array<Doctor_Validation_State_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Doctor_Validation_State_Enum_Enum>;
  _nin?: InputMaybe<Array<Doctor_Validation_State_Enum_Enum>>;
};

/** input type for inserting data into table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  doctors?: InputMaybe<Doctors_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Doctor_Validation_State_Enum_Max_Fields = {
  __typename?: 'doctor_validation_state_enum_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Doctor_Validation_State_Enum_Min_Fields = {
  __typename?: 'doctor_validation_state_enum_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Mutation_Response = {
  __typename?: 'doctor_validation_state_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor_Validation_State_Enum>;
};

/** input type for inserting object relation for remote table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Obj_Rel_Insert_Input = {
  data: Doctor_Validation_State_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctor_Validation_State_Enum_On_Conflict>;
};

/** on_conflict condition type for table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_On_Conflict = {
  constraint: Doctor_Validation_State_Enum_Constraint;
  update_columns?: Array<Doctor_Validation_State_Enum_Update_Column>;
  where?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "doctor_validation_state_enum". */
export type Doctor_Validation_State_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  doctors_aggregate?: InputMaybe<Doctors_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor_validation_state_enum */
export type Doctor_Validation_State_Enum_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

/** input type for updating data in table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "doctor_validation_state_enum" */
export type Doctor_Validation_State_Enum_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'value';

/** this table represents the doctors availability weekly & hourly */
export type Doctor_Weekly_Availability = {
  __typename?: 'doctor_weekly_availability';
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  day?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  doctor_data?: Maybe<Doctors>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Aggregate = {
  __typename?: 'doctor_weekly_availability_aggregate';
  aggregate?: Maybe<Doctor_Weekly_Availability_Aggregate_Fields>;
  nodes: Array<Doctor_Weekly_Availability>;
};

/** aggregate fields of "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Aggregate_Fields = {
  __typename?: 'doctor_weekly_availability_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Doctor_Weekly_Availability_Max_Fields>;
  min?: Maybe<Doctor_Weekly_Availability_Min_Fields>;
};


/** aggregate fields of "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctor_Weekly_Availability_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "doctor_weekly_availability". All fields are combined with a logical 'AND'. */
export type Doctor_Weekly_Availability_Bool_Exp = {
  _and?: InputMaybe<Array<Doctor_Weekly_Availability_Bool_Exp>>;
  _not?: InputMaybe<Doctor_Weekly_Availability_Bool_Exp>;
  _or?: InputMaybe<Array<Doctor_Weekly_Availability_Bool_Exp>>;
  available_from?: InputMaybe<String_Comparison_Exp>;
  available_till?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  day?: InputMaybe<String_Comparison_Exp>;
  doctor_data?: InputMaybe<Doctors_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Constraint =
  /** unique or primary key constraint */
  | 'appiontment_calendar_pkey';

/** input type for inserting data into table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Insert_Input = {
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  doctor_data?: InputMaybe<Doctors_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Doctor_Weekly_Availability_Max_Fields = {
  __typename?: 'doctor_weekly_availability_max_fields';
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Doctor_Weekly_Availability_Min_Fields = {
  __typename?: 'doctor_weekly_availability_min_fields';
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Mutation_Response = {
  __typename?: 'doctor_weekly_availability_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctor_Weekly_Availability>;
};

/** on_conflict condition type for table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_On_Conflict = {
  constraint: Doctor_Weekly_Availability_Constraint;
  update_columns?: Array<Doctor_Weekly_Availability_Update_Column>;
  where?: InputMaybe<Doctor_Weekly_Availability_Bool_Exp>;
};

/** Ordering options when selecting data from "doctor_weekly_availability". */
export type Doctor_Weekly_Availability_Order_By = {
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  doctor_data?: InputMaybe<Doctors_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctor_weekly_availability */
export type Doctor_Weekly_Availability_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Select_Column =
  /** column name */
  | 'available_from'
  /** column name */
  | 'available_till'
  /** column name */
  | 'created_at'
  /** column name */
  | 'day'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** input type for updating data in table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Set_Input = {
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "doctor_weekly_availability" */
export type Doctor_Weekly_Availability_Update_Column =
  /** column name */
  | 'available_from'
  /** column name */
  | 'available_till'
  /** column name */
  | 'created_at'
  /** column name */
  | 'day'
  /** column name */
  | 'doctor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'updated_by';

/** columns and relationships of "doctors" */
export type Doctors = {
  __typename?: 'doctors';
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  doctor_subscription?: Maybe<Doctor_Subscriptions>;
  /** An object relationship */
  doctor_validation_state_enum: Doctor_Validation_State_Enum;
  id: Scalars['uuid']['output'];
  interval?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "is_doctor_active" */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_public?: Maybe<Scalars['Boolean']['output']>;
  is_subscribed: Scalars['Boolean']['output'];
  is_validated: Doctor_Validation_State_Enum_Enum;
  /** An object relationship */
  lastUpdatedByThisUser?: Maybe<Users>;
  /** An array relationship */
  locations: Array<Locations_Doctors>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Doctors_Aggregate;
  /** An array relationship */
  overridden_dates: Array<Overridden_Dates>;
  /** An aggregate relationship */
  overridden_dates_aggregate: Overridden_Dates_Aggregate;
  subscription_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "doctors" */
export type DoctorsAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "doctors" */
export type DoctorsAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "doctors" */
export type DoctorsLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Doctors_Order_By>>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};


/** columns and relationships of "doctors" */
export type DoctorsLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Doctors_Order_By>>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};


/** columns and relationships of "doctors" */
export type DoctorsOverridden_DatesArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


/** columns and relationships of "doctors" */
export type DoctorsOverridden_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};

/** aggregated selection of "doctors" */
export type Doctors_Aggregate = {
  __typename?: 'doctors_aggregate';
  aggregate?: Maybe<Doctors_Aggregate_Fields>;
  nodes: Array<Doctors>;
};

/** aggregate fields of "doctors" */
export type Doctors_Aggregate_Fields = {
  __typename?: 'doctors_aggregate_fields';
  avg?: Maybe<Doctors_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Doctors_Max_Fields>;
  min?: Maybe<Doctors_Min_Fields>;
  stddev?: Maybe<Doctors_Stddev_Fields>;
  stddev_pop?: Maybe<Doctors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Doctors_Stddev_Samp_Fields>;
  sum?: Maybe<Doctors_Sum_Fields>;
  var_pop?: Maybe<Doctors_Var_Pop_Fields>;
  var_samp?: Maybe<Doctors_Var_Samp_Fields>;
  variance?: Maybe<Doctors_Variance_Fields>;
};


/** aggregate fields of "doctors" */
export type Doctors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Doctors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "doctors" */
export type Doctors_Aggregate_Order_By = {
  avg?: InputMaybe<Doctors_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Doctors_Max_Order_By>;
  min?: InputMaybe<Doctors_Min_Order_By>;
  stddev?: InputMaybe<Doctors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Doctors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Doctors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Doctors_Sum_Order_By>;
  var_pop?: InputMaybe<Doctors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Doctors_Var_Samp_Order_By>;
  variance?: InputMaybe<Doctors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "doctors" */
export type Doctors_Arr_Rel_Insert_Input = {
  data: Array<Doctors_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctors_On_Conflict>;
};

/** aggregate avg on columns */
export type Doctors_Avg_Fields = {
  __typename?: 'doctors_avg_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "doctors" */
export type Doctors_Avg_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "doctors". All fields are combined with a logical 'AND'. */
export type Doctors_Bool_Exp = {
  _and?: InputMaybe<Array<Doctors_Bool_Exp>>;
  _not?: InputMaybe<Doctors_Bool_Exp>;
  _or?: InputMaybe<Array<Doctors_Bool_Exp>>;
  appointments?: InputMaybe<Appointments_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<String_Comparison_Exp>;
  doctor_subscription?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
  doctor_validation_state_enum?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  interval?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  is_subscribed?: InputMaybe<Boolean_Comparison_Exp>;
  is_validated?: InputMaybe<Doctor_Validation_State_Enum_Enum_Comparison_Exp>;
  lastUpdatedByThisUser?: InputMaybe<Users_Bool_Exp>;
  locations?: InputMaybe<Locations_Doctors_Bool_Exp>;
  overridden_dates?: InputMaybe<Overridden_Dates_Bool_Exp>;
  subscription_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "doctors" */
export type Doctors_Constraint =
  /** unique or primary key constraint */
  | 'doctors_pkey';

/** input type for incrementing numeric columns in table "doctors" */
export type Doctors_Inc_Input = {
  interval?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "doctors" */
export type Doctors_Insert_Input = {
  appointments?: InputMaybe<Appointments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  doctor_subscription?: InputMaybe<Doctor_Subscriptions_Obj_Rel_Insert_Input>;
  doctor_validation_state_enum?: InputMaybe<Doctor_Validation_State_Enum_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  is_validated?: InputMaybe<Doctor_Validation_State_Enum_Enum>;
  lastUpdatedByThisUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  locations?: InputMaybe<Locations_Doctors_Arr_Rel_Insert_Input>;
  overridden_dates?: InputMaybe<Overridden_Dates_Arr_Rel_Insert_Input>;
  subscription_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Doctors_Max_Fields = {
  __typename?: 'doctors_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  interval?: Maybe<Scalars['Int']['output']>;
  subscription_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "doctors" */
export type Doctors_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Doctors_Min_Fields = {
  __typename?: 'doctors_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  interval?: Maybe<Scalars['Int']['output']>;
  subscription_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "doctors" */
export type Doctors_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "doctors" */
export type Doctors_Mutation_Response = {
  __typename?: 'doctors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Doctors>;
};

/** input type for inserting object relation for remote table "doctors" */
export type Doctors_Obj_Rel_Insert_Input = {
  data: Doctors_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Doctors_On_Conflict>;
};

/** on_conflict condition type for table "doctors" */
export type Doctors_On_Conflict = {
  constraint: Doctors_Constraint;
  update_columns?: Array<Doctors_Update_Column>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};

/** Ordering options when selecting data from "doctors". */
export type Doctors_Order_By = {
  appointments_aggregate?: InputMaybe<Appointments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  doctor_subscription?: InputMaybe<Doctor_Subscriptions_Order_By>;
  doctor_validation_state_enum?: InputMaybe<Doctor_Validation_State_Enum_Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  is_subscribed?: InputMaybe<Order_By>;
  is_validated?: InputMaybe<Order_By>;
  lastUpdatedByThisUser?: InputMaybe<Users_Order_By>;
  locations_aggregate?: InputMaybe<Locations_Doctors_Aggregate_Order_By>;
  overridden_dates_aggregate?: InputMaybe<Overridden_Dates_Aggregate_Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: doctors */
export type Doctors_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "doctors" */
export type Doctors_Select_Column =
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

/** input type for updating data in table "doctors" */
export type Doctors_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  is_validated?: InputMaybe<Doctor_Validation_State_Enum_Enum>;
  subscription_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Doctors_Stddev_Fields = {
  __typename?: 'doctors_stddev_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "doctors" */
export type Doctors_Stddev_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Doctors_Stddev_Pop_Fields = {
  __typename?: 'doctors_stddev_pop_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "doctors" */
export type Doctors_Stddev_Pop_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Doctors_Stddev_Samp_Fields = {
  __typename?: 'doctors_stddev_samp_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "doctors" */
export type Doctors_Stddev_Samp_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Doctors_Sum_Fields = {
  __typename?: 'doctors_sum_fields';
  interval?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "doctors" */
export type Doctors_Sum_Order_By = {
  interval?: InputMaybe<Order_By>;
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

/** aggregate var_pop on columns */
export type Doctors_Var_Pop_Fields = {
  __typename?: 'doctors_var_pop_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "doctors" */
export type Doctors_Var_Pop_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Doctors_Var_Samp_Fields = {
  __typename?: 'doctors_var_samp_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "doctors" */
export type Doctors_Var_Samp_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Doctors_Variance_Fields = {
  __typename?: 'doctors_variance_fields';
  interval?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "doctors" */
export type Doctors_Variance_Order_By = {
  interval?: InputMaybe<Order_By>;
};

/** This table contains logs related to external API calls */
export type External_Api_Call_Logs = {
  __typename?: 'external_api_call_logs';
  /** An object relationship */
  account?: Maybe<Facility_Accounts>;
  account_id?: Maybe<Scalars['uuid']['output']>;
  api_called_by?: Maybe<Scalars['String']['output']>;
  api_url: Scalars['String']['output'];
  /** An object relationship */
  appointment?: Maybe<Appointments>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  appointment_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  logs: Scalars['jsonb']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** This table contains logs related to external API calls */
export type External_Api_Call_LogsLogsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "external_api_call_logs" */
export type External_Api_Call_Logs_Aggregate = {
  __typename?: 'external_api_call_logs_aggregate';
  aggregate?: Maybe<External_Api_Call_Logs_Aggregate_Fields>;
  nodes: Array<External_Api_Call_Logs>;
};

/** aggregate fields of "external_api_call_logs" */
export type External_Api_Call_Logs_Aggregate_Fields = {
  __typename?: 'external_api_call_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<External_Api_Call_Logs_Max_Fields>;
  min?: Maybe<External_Api_Call_Logs_Min_Fields>;
};


/** aggregate fields of "external_api_call_logs" */
export type External_Api_Call_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "external_api_call_logs" */
export type External_Api_Call_Logs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<External_Api_Call_Logs_Max_Order_By>;
  min?: InputMaybe<External_Api_Call_Logs_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type External_Api_Call_Logs_Append_Input = {
  logs?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "external_api_call_logs" */
export type External_Api_Call_Logs_Arr_Rel_Insert_Input = {
  data: Array<External_Api_Call_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<External_Api_Call_Logs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "external_api_call_logs". All fields are combined with a logical 'AND'. */
export type External_Api_Call_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<External_Api_Call_Logs_Bool_Exp>>;
  _not?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<External_Api_Call_Logs_Bool_Exp>>;
  account?: InputMaybe<Facility_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  api_called_by?: InputMaybe<String_Comparison_Exp>;
  api_url?: InputMaybe<String_Comparison_Exp>;
  appointment?: InputMaybe<Appointments_Bool_Exp>;
  appointment_id?: InputMaybe<Uuid_Comparison_Exp>;
  appointment_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "external_api_call_logs" */
export type External_Api_Call_Logs_Constraint =
  /** unique or primary key constraint */
  | 'external_api_call_logs_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type External_Api_Call_Logs_Delete_At_Path_Input = {
  logs?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type External_Api_Call_Logs_Delete_Elem_Input = {
  logs?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type External_Api_Call_Logs_Delete_Key_Input = {
  logs?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "external_api_call_logs" */
export type External_Api_Call_Logs_Insert_Input = {
  account?: InputMaybe<Facility_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  api_called_by?: InputMaybe<Scalars['String']['input']>;
  api_url?: InputMaybe<Scalars['String']['input']>;
  appointment?: InputMaybe<Appointments_Obj_Rel_Insert_Input>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  appointment_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type External_Api_Call_Logs_Max_Fields = {
  __typename?: 'external_api_call_logs_max_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  api_called_by?: Maybe<Scalars['String']['output']>;
  api_url?: Maybe<Scalars['String']['output']>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  appointment_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "external_api_call_logs" */
export type External_Api_Call_Logs_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  api_called_by?: InputMaybe<Order_By>;
  api_url?: InputMaybe<Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  appointment_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type External_Api_Call_Logs_Min_Fields = {
  __typename?: 'external_api_call_logs_min_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  api_called_by?: Maybe<Scalars['String']['output']>;
  api_url?: Maybe<Scalars['String']['output']>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  appointment_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "external_api_call_logs" */
export type External_Api_Call_Logs_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  api_called_by?: InputMaybe<Order_By>;
  api_url?: InputMaybe<Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  appointment_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "external_api_call_logs" */
export type External_Api_Call_Logs_Mutation_Response = {
  __typename?: 'external_api_call_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<External_Api_Call_Logs>;
};

/** on_conflict condition type for table "external_api_call_logs" */
export type External_Api_Call_Logs_On_Conflict = {
  constraint: External_Api_Call_Logs_Constraint;
  update_columns?: Array<External_Api_Call_Logs_Update_Column>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "external_api_call_logs". */
export type External_Api_Call_Logs_Order_By = {
  account?: InputMaybe<Facility_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  api_called_by?: InputMaybe<Order_By>;
  api_url?: InputMaybe<Order_By>;
  appointment?: InputMaybe<Appointments_Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  appointment_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: external_api_call_logs */
export type External_Api_Call_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type External_Api_Call_Logs_Prepend_Input = {
  logs?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "external_api_call_logs" */
export type External_Api_Call_Logs_Select_Column =
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

/** input type for updating data in table "external_api_call_logs" */
export type External_Api_Call_Logs_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  api_called_by?: InputMaybe<Scalars['String']['input']>;
  api_url?: InputMaybe<Scalars['String']['input']>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  appointment_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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

/** columns and relationships of "facility_account_admin" */
export type Facility_Account_Admin = {
  __typename?: 'facility_account_admin';
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  deleted_at?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  facility_account?: Maybe<Facility_Accounts>;
  /** An object relationship */
  facility_account_admin_user: Users;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "is_fc_admin_active" */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  /** An array relationship */
  nurses: Array<Nurses>;
  /** An aggregate relationship */
  nurses_aggregate: Nurses_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "facility_account_admin" */
export type Facility_Account_AdminLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


/** columns and relationships of "facility_account_admin" */
export type Facility_Account_AdminLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


/** columns and relationships of "facility_account_admin" */
export type Facility_Account_AdminNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


/** columns and relationships of "facility_account_admin" */
export type Facility_Account_AdminNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};

/** aggregated selection of "facility_account_admin" */
export type Facility_Account_Admin_Aggregate = {
  __typename?: 'facility_account_admin_aggregate';
  aggregate?: Maybe<Facility_Account_Admin_Aggregate_Fields>;
  nodes: Array<Facility_Account_Admin>;
};

/** aggregate fields of "facility_account_admin" */
export type Facility_Account_Admin_Aggregate_Fields = {
  __typename?: 'facility_account_admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Facility_Account_Admin_Max_Fields>;
  min?: Maybe<Facility_Account_Admin_Min_Fields>;
};


/** aggregate fields of "facility_account_admin" */
export type Facility_Account_Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "facility_account_admin" */
export type Facility_Account_Admin_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Facility_Account_Admin_Max_Order_By>;
  min?: InputMaybe<Facility_Account_Admin_Min_Order_By>;
};

/** input type for inserting array relation for remote table "facility_account_admin" */
export type Facility_Account_Admin_Arr_Rel_Insert_Input = {
  data: Array<Facility_Account_Admin_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_Account_Admin_On_Conflict>;
};

/** Boolean expression to filter rows from the table "facility_account_admin". All fields are combined with a logical 'AND'. */
export type Facility_Account_Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Facility_Account_Admin_Bool_Exp>>;
  _not?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Facility_Account_Admin_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  deleted_at?: InputMaybe<String_Comparison_Exp>;
  facility_account?: InputMaybe<Facility_Accounts_Bool_Exp>;
  facility_account_admin_user?: InputMaybe<Users_Bool_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  locations?: InputMaybe<Locations_Bool_Exp>;
  nurses?: InputMaybe<Nurses_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "facility_account_admin" */
export type Facility_Account_Admin_Constraint =
  /** unique or primary key constraint */
  | 'account_admin_pkey'
  /** unique or primary key constraint */
  | 'facility_account_admin_facility_account_id_key';

/** input type for inserting data into table "facility_account_admin" */
export type Facility_Account_Admin_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_account?: InputMaybe<Facility_Accounts_Obj_Rel_Insert_Input>;
  facility_account_admin_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  locations?: InputMaybe<Locations_Arr_Rel_Insert_Input>;
  nurses?: InputMaybe<Nurses_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Facility_Account_Admin_Max_Fields = {
  __typename?: 'facility_account_admin_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "facility_account_admin" */
export type Facility_Account_Admin_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Facility_Account_Admin_Min_Fields = {
  __typename?: 'facility_account_admin_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "facility_account_admin" */
export type Facility_Account_Admin_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "facility_account_admin" */
export type Facility_Account_Admin_Mutation_Response = {
  __typename?: 'facility_account_admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Facility_Account_Admin>;
};

/** input type for inserting object relation for remote table "facility_account_admin" */
export type Facility_Account_Admin_Obj_Rel_Insert_Input = {
  data: Facility_Account_Admin_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_Account_Admin_On_Conflict>;
};

/** on_conflict condition type for table "facility_account_admin" */
export type Facility_Account_Admin_On_Conflict = {
  constraint: Facility_Account_Admin_Constraint;
  update_columns?: Array<Facility_Account_Admin_Update_Column>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "facility_account_admin". */
export type Facility_Account_Admin_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account?: InputMaybe<Facility_Accounts_Order_By>;
  facility_account_admin_user?: InputMaybe<Users_Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Locations_Aggregate_Order_By>;
  nurses_aggregate?: InputMaybe<Nurses_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: facility_account_admin */
export type Facility_Account_Admin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "facility_account_admin" */
export type Facility_Account_Admin_Select_Column =
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

/** input type for updating data in table "facility_account_admin" */
export type Facility_Account_Admin_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

/** This table contains subscription details of the account */
export type Facility_Account_Subscription = {
  __typename?: 'facility_account_subscription';
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  custom_plan_devices?: Maybe<Scalars['jsonb']['output']>;
  custom_plan_note?: Maybe<Scalars['String']['output']>;
  device_shipped_date?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  facility_account: Facility_Accounts;
  facility_account_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  invoice_link?: Maybe<Scalars['String']['output']>;
  link_active: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_link?: Maybe<Scalars['String']['output']>;
  payment_state?: Maybe<Scalars['String']['output']>;
  peripheral_is_shipped?: Maybe<Scalars['Boolean']['output']>;
  pro_plan_peripheral_device?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_customer_name?: Maybe<Scalars['String']['output']>;
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  subscription_plan?: Maybe<Scalars['String']['output']>;
  valid_from?: Maybe<Scalars['timestamptz']['output']>;
  valid_till?: Maybe<Scalars['timestamptz']['output']>;
};


/** This table contains subscription details of the account */
export type Facility_Account_SubscriptionCustom_Plan_DevicesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "facility_account_subscription" */
export type Facility_Account_Subscription_Aggregate = {
  __typename?: 'facility_account_subscription_aggregate';
  aggregate?: Maybe<Facility_Account_Subscription_Aggregate_Fields>;
  nodes: Array<Facility_Account_Subscription>;
};

/** aggregate fields of "facility_account_subscription" */
export type Facility_Account_Subscription_Aggregate_Fields = {
  __typename?: 'facility_account_subscription_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Facility_Account_Subscription_Max_Fields>;
  min?: Maybe<Facility_Account_Subscription_Min_Fields>;
};


/** aggregate fields of "facility_account_subscription" */
export type Facility_Account_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "facility_account_subscription" */
export type Facility_Account_Subscription_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Facility_Account_Subscription_Max_Order_By>;
  min?: InputMaybe<Facility_Account_Subscription_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Facility_Account_Subscription_Append_Input = {
  custom_plan_devices?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "facility_account_subscription" */
export type Facility_Account_Subscription_Arr_Rel_Insert_Input = {
  data: Array<Facility_Account_Subscription_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_Account_Subscription_On_Conflict>;
};

/** Boolean expression to filter rows from the table "facility_account_subscription". All fields are combined with a logical 'AND'. */
export type Facility_Account_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Facility_Account_Subscription_Bool_Exp>>;
  _not?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Facility_Account_Subscription_Bool_Exp>>;
  cancelled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  custom_plan_devices?: InputMaybe<Jsonb_Comparison_Exp>;
  custom_plan_note?: InputMaybe<String_Comparison_Exp>;
  device_shipped_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  facility_account?: InputMaybe<Facility_Accounts_Bool_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invoice_link?: InputMaybe<String_Comparison_Exp>;
  link_active?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  payment_id?: InputMaybe<String_Comparison_Exp>;
  payment_link?: InputMaybe<String_Comparison_Exp>;
  payment_state?: InputMaybe<String_Comparison_Exp>;
  peripheral_is_shipped?: InputMaybe<Boolean_Comparison_Exp>;
  pro_plan_peripheral_device?: InputMaybe<String_Comparison_Exp>;
  stripe_customer_id?: InputMaybe<String_Comparison_Exp>;
  stripe_customer_name?: InputMaybe<String_Comparison_Exp>;
  stripe_subscription_id?: InputMaybe<String_Comparison_Exp>;
  subscription_plan?: InputMaybe<String_Comparison_Exp>;
  valid_from?: InputMaybe<Timestamptz_Comparison_Exp>;
  valid_till?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "facility_account_subscription" */
export type Facility_Account_Subscription_Constraint =
  /** unique or primary key constraint */
  | 'facility_account_subscription_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Facility_Account_Subscription_Delete_At_Path_Input = {
  custom_plan_devices?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Facility_Account_Subscription_Delete_Elem_Input = {
  custom_plan_devices?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Facility_Account_Subscription_Delete_Key_Input = {
  custom_plan_devices?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "facility_account_subscription" */
export type Facility_Account_Subscription_Insert_Input = {
  cancelled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_plan_devices?: InputMaybe<Scalars['jsonb']['input']>;
  custom_plan_note?: InputMaybe<Scalars['String']['input']>;
  device_shipped_date?: InputMaybe<Scalars['timestamptz']['input']>;
  facility_account?: InputMaybe<Facility_Accounts_Obj_Rel_Insert_Input>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoice_link?: InputMaybe<Scalars['String']['input']>;
  link_active?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_link?: InputMaybe<Scalars['String']['input']>;
  payment_state?: InputMaybe<Scalars['String']['input']>;
  peripheral_is_shipped?: InputMaybe<Scalars['Boolean']['input']>;
  pro_plan_peripheral_device?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_name?: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id?: InputMaybe<Scalars['String']['input']>;
  subscription_plan?: InputMaybe<Scalars['String']['input']>;
  valid_from?: InputMaybe<Scalars['timestamptz']['input']>;
  valid_till?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Facility_Account_Subscription_Max_Fields = {
  __typename?: 'facility_account_subscription_max_fields';
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  custom_plan_note?: Maybe<Scalars['String']['output']>;
  device_shipped_date?: Maybe<Scalars['timestamptz']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invoice_link?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_link?: Maybe<Scalars['String']['output']>;
  payment_state?: Maybe<Scalars['String']['output']>;
  pro_plan_peripheral_device?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_customer_name?: Maybe<Scalars['String']['output']>;
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  subscription_plan?: Maybe<Scalars['String']['output']>;
  valid_from?: Maybe<Scalars['timestamptz']['output']>;
  valid_till?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "facility_account_subscription" */
export type Facility_Account_Subscription_Max_Order_By = {
  cancelled_at?: InputMaybe<Order_By>;
  custom_plan_note?: InputMaybe<Order_By>;
  device_shipped_date?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_link?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_link?: InputMaybe<Order_By>;
  payment_state?: InputMaybe<Order_By>;
  pro_plan_peripheral_device?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  stripe_customer_name?: InputMaybe<Order_By>;
  stripe_subscription_id?: InputMaybe<Order_By>;
  subscription_plan?: InputMaybe<Order_By>;
  valid_from?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Facility_Account_Subscription_Min_Fields = {
  __typename?: 'facility_account_subscription_min_fields';
  cancelled_at?: Maybe<Scalars['timestamptz']['output']>;
  custom_plan_note?: Maybe<Scalars['String']['output']>;
  device_shipped_date?: Maybe<Scalars['timestamptz']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invoice_link?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_link?: Maybe<Scalars['String']['output']>;
  payment_state?: Maybe<Scalars['String']['output']>;
  pro_plan_peripheral_device?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_customer_name?: Maybe<Scalars['String']['output']>;
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  subscription_plan?: Maybe<Scalars['String']['output']>;
  valid_from?: Maybe<Scalars['timestamptz']['output']>;
  valid_till?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "facility_account_subscription" */
export type Facility_Account_Subscription_Min_Order_By = {
  cancelled_at?: InputMaybe<Order_By>;
  custom_plan_note?: InputMaybe<Order_By>;
  device_shipped_date?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_link?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_link?: InputMaybe<Order_By>;
  payment_state?: InputMaybe<Order_By>;
  pro_plan_peripheral_device?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  stripe_customer_name?: InputMaybe<Order_By>;
  stripe_subscription_id?: InputMaybe<Order_By>;
  subscription_plan?: InputMaybe<Order_By>;
  valid_from?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "facility_account_subscription" */
export type Facility_Account_Subscription_Mutation_Response = {
  __typename?: 'facility_account_subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Facility_Account_Subscription>;
};

/** input type for inserting object relation for remote table "facility_account_subscription" */
export type Facility_Account_Subscription_Obj_Rel_Insert_Input = {
  data: Facility_Account_Subscription_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_Account_Subscription_On_Conflict>;
};

/** on_conflict condition type for table "facility_account_subscription" */
export type Facility_Account_Subscription_On_Conflict = {
  constraint: Facility_Account_Subscription_Constraint;
  update_columns?: Array<Facility_Account_Subscription_Update_Column>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "facility_account_subscription". */
export type Facility_Account_Subscription_Order_By = {
  cancelled_at?: InputMaybe<Order_By>;
  custom_plan_devices?: InputMaybe<Order_By>;
  custom_plan_note?: InputMaybe<Order_By>;
  device_shipped_date?: InputMaybe<Order_By>;
  facility_account?: InputMaybe<Facility_Accounts_Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invoice_link?: InputMaybe<Order_By>;
  link_active?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_link?: InputMaybe<Order_By>;
  payment_state?: InputMaybe<Order_By>;
  peripheral_is_shipped?: InputMaybe<Order_By>;
  pro_plan_peripheral_device?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  stripe_customer_name?: InputMaybe<Order_By>;
  stripe_subscription_id?: InputMaybe<Order_By>;
  subscription_plan?: InputMaybe<Order_By>;
  valid_from?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** primary key columns input for table: facility_account_subscription */
export type Facility_Account_Subscription_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Facility_Account_Subscription_Prepend_Input = {
  custom_plan_devices?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "facility_account_subscription" */
export type Facility_Account_Subscription_Select_Column =
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

/** input type for updating data in table "facility_account_subscription" */
export type Facility_Account_Subscription_Set_Input = {
  cancelled_at?: InputMaybe<Scalars['timestamptz']['input']>;
  custom_plan_devices?: InputMaybe<Scalars['jsonb']['input']>;
  custom_plan_note?: InputMaybe<Scalars['String']['input']>;
  device_shipped_date?: InputMaybe<Scalars['timestamptz']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoice_link?: InputMaybe<Scalars['String']['input']>;
  link_active?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_link?: InputMaybe<Scalars['String']['input']>;
  payment_state?: InputMaybe<Scalars['String']['input']>;
  peripheral_is_shipped?: InputMaybe<Scalars['Boolean']['input']>;
  pro_plan_peripheral_device?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_name?: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id?: InputMaybe<Scalars['String']['input']>;
  subscription_plan?: InputMaybe<Scalars['String']['input']>;
  valid_from?: InputMaybe<Scalars['timestamptz']['input']>;
  valid_till?: InputMaybe<Scalars['timestamptz']['input']>;
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

/** columns and relationships of "facility_accounts" */
export type Facility_Accounts = {
  __typename?: 'facility_accounts';
  /** An object relationship */
  account_subscription?: Maybe<Facility_Account_Subscription>;
  /** An object relationship */
  createdByUser: Users;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  deleted_at?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  external_api_call_logs: Array<External_Api_Call_Logs>;
  /** An aggregate relationship */
  external_api_call_logs_aggregate: External_Api_Call_Logs_Aggregate;
  /** An object relationship */
  facility_account_admin?: Maybe<Facility_Account_Admin>;
  /** An array relationship */
  facility_account_subscriptions: Array<Facility_Account_Subscription>;
  /** An aggregate relationship */
  facility_account_subscriptions_aggregate: Facility_Account_Subscription_Aggregate;
  facility_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  is_active: Scalars['Boolean']['output'];
  is_subscribed?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "facility_accounts" */
export type Facility_AccountsExternal_Api_Call_LogsArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


/** columns and relationships of "facility_accounts" */
export type Facility_AccountsExternal_Api_Call_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


/** columns and relationships of "facility_accounts" */
export type Facility_AccountsFacility_Account_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Subscription_Order_By>>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};


/** columns and relationships of "facility_accounts" */
export type Facility_AccountsFacility_Account_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Subscription_Order_By>>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};


/** columns and relationships of "facility_accounts" */
export type Facility_AccountsLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


/** columns and relationships of "facility_accounts" */
export type Facility_AccountsLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** aggregated selection of "facility_accounts" */
export type Facility_Accounts_Aggregate = {
  __typename?: 'facility_accounts_aggregate';
  aggregate?: Maybe<Facility_Accounts_Aggregate_Fields>;
  nodes: Array<Facility_Accounts>;
};

/** aggregate fields of "facility_accounts" */
export type Facility_Accounts_Aggregate_Fields = {
  __typename?: 'facility_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Facility_Accounts_Max_Fields>;
  min?: Maybe<Facility_Accounts_Min_Fields>;
};


/** aggregate fields of "facility_accounts" */
export type Facility_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "facility_accounts" */
export type Facility_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Facility_Accounts_Max_Order_By>;
  min?: InputMaybe<Facility_Accounts_Min_Order_By>;
};

/** This table contains api layer details of the facility accounts  */
export type Facility_Accounts_Apis = {
  __typename?: 'facility_accounts_apis';
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  /** An object relationship */
  facility_account: Facility_Accounts;
  facility_account_id: Scalars['uuid']['output'];
  /** An object relationship */
  galen_staff: Galen_Staff;
  id: Scalars['uuid']['output'];
  jwt_secret: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "facility_accounts_apis" */
export type Facility_Accounts_Apis_Aggregate = {
  __typename?: 'facility_accounts_apis_aggregate';
  aggregate?: Maybe<Facility_Accounts_Apis_Aggregate_Fields>;
  nodes: Array<Facility_Accounts_Apis>;
};

/** aggregate fields of "facility_accounts_apis" */
export type Facility_Accounts_Apis_Aggregate_Fields = {
  __typename?: 'facility_accounts_apis_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Facility_Accounts_Apis_Max_Fields>;
  min?: Maybe<Facility_Accounts_Apis_Min_Fields>;
};


/** aggregate fields of "facility_accounts_apis" */
export type Facility_Accounts_Apis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Facility_Accounts_Apis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "facility_accounts_apis". All fields are combined with a logical 'AND'. */
export type Facility_Accounts_Apis_Bool_Exp = {
  _and?: InputMaybe<Array<Facility_Accounts_Apis_Bool_Exp>>;
  _not?: InputMaybe<Facility_Accounts_Apis_Bool_Exp>;
  _or?: InputMaybe<Array<Facility_Accounts_Apis_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  facility_account?: InputMaybe<Facility_Accounts_Bool_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  galen_staff?: InputMaybe<Galen_Staff_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  jwt_secret?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "facility_accounts_apis" */
export type Facility_Accounts_Apis_Constraint =
  /** unique or primary key constraint */
  | 'facility_accounts_apis_pkey';

/** input type for inserting data into table "facility_accounts_apis" */
export type Facility_Accounts_Apis_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  facility_account?: InputMaybe<Facility_Accounts_Obj_Rel_Insert_Input>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  galen_staff?: InputMaybe<Galen_Staff_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  jwt_secret?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Facility_Accounts_Apis_Max_Fields = {
  __typename?: 'facility_accounts_apis_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  jwt_secret?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Facility_Accounts_Apis_Min_Fields = {
  __typename?: 'facility_accounts_apis_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  jwt_secret?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "facility_accounts_apis" */
export type Facility_Accounts_Apis_Mutation_Response = {
  __typename?: 'facility_accounts_apis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Facility_Accounts_Apis>;
};

/** on_conflict condition type for table "facility_accounts_apis" */
export type Facility_Accounts_Apis_On_Conflict = {
  constraint: Facility_Accounts_Apis_Constraint;
  update_columns?: Array<Facility_Accounts_Apis_Update_Column>;
  where?: InputMaybe<Facility_Accounts_Apis_Bool_Exp>;
};

/** Ordering options when selecting data from "facility_accounts_apis". */
export type Facility_Accounts_Apis_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  facility_account?: InputMaybe<Facility_Accounts_Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  galen_staff?: InputMaybe<Galen_Staff_Order_By>;
  id?: InputMaybe<Order_By>;
  jwt_secret?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: facility_accounts_apis */
export type Facility_Accounts_Apis_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "facility_accounts_apis" */
export type Facility_Accounts_Apis_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'jwt_secret'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "facility_accounts_apis" */
export type Facility_Accounts_Apis_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  jwt_secret?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "facility_accounts_apis" */
export type Facility_Accounts_Apis_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'facility_account_id'
  /** column name */
  | 'id'
  /** column name */
  | 'jwt_secret'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at';

/** input type for inserting array relation for remote table "facility_accounts" */
export type Facility_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Facility_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "facility_accounts". All fields are combined with a logical 'AND'. */
export type Facility_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Facility_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Facility_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Facility_Accounts_Bool_Exp>>;
  account_subscription?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
  createdByUser?: InputMaybe<Users_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  deleted_at?: InputMaybe<String_Comparison_Exp>;
  external_api_call_logs?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
  facility_account_admin?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
  facility_account_subscriptions?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
  facility_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_subscribed?: InputMaybe<Boolean_Comparison_Exp>;
  locations?: InputMaybe<Locations_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "facility_accounts" */
export type Facility_Accounts_Constraint =
  /** unique or primary key constraint */
  | 'facility_accounts_pkey';

/** input type for inserting data into table "facility_accounts" */
export type Facility_Accounts_Insert_Input = {
  account_subscription?: InputMaybe<Facility_Account_Subscription_Obj_Rel_Insert_Input>;
  createdByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  external_api_call_logs?: InputMaybe<External_Api_Call_Logs_Arr_Rel_Insert_Input>;
  facility_account_admin?: InputMaybe<Facility_Account_Admin_Obj_Rel_Insert_Input>;
  facility_account_subscriptions?: InputMaybe<Facility_Account_Subscription_Arr_Rel_Insert_Input>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  locations?: InputMaybe<Locations_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Facility_Accounts_Max_Fields = {
  __typename?: 'facility_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "facility_accounts" */
export type Facility_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Facility_Accounts_Min_Fields = {
  __typename?: 'facility_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "facility_accounts" */
export type Facility_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "facility_accounts" */
export type Facility_Accounts_Mutation_Response = {
  __typename?: 'facility_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Facility_Accounts>;
};

/** input type for inserting object relation for remote table "facility_accounts" */
export type Facility_Accounts_Obj_Rel_Insert_Input = {
  data: Facility_Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Facility_Accounts_On_Conflict>;
};

/** on_conflict condition type for table "facility_accounts" */
export type Facility_Accounts_On_Conflict = {
  constraint: Facility_Accounts_Constraint;
  update_columns?: Array<Facility_Accounts_Update_Column>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "facility_accounts". */
export type Facility_Accounts_Order_By = {
  account_subscription?: InputMaybe<Facility_Account_Subscription_Order_By>;
  createdByUser?: InputMaybe<Users_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  external_api_call_logs_aggregate?: InputMaybe<External_Api_Call_Logs_Aggregate_Order_By>;
  facility_account_admin?: InputMaybe<Facility_Account_Admin_Order_By>;
  facility_account_subscriptions_aggregate?: InputMaybe<Facility_Account_Subscription_Aggregate_Order_By>;
  facility_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_subscribed?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Locations_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: facility_accounts */
export type Facility_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "facility_accounts" */
export type Facility_Accounts_Select_Column =
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

/** input type for updating data in table "facility_accounts" */
export type Facility_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "galen_staff" */
export type Galen_Staff = {
  __typename?: 'galen_staff';
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "is_galen_staff_active" */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_admin: Scalars['Boolean']['output'];
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "galen_staff" */
export type Galen_Staff_Aggregate = {
  __typename?: 'galen_staff_aggregate';
  aggregate?: Maybe<Galen_Staff_Aggregate_Fields>;
  nodes: Array<Galen_Staff>;
};

/** aggregate fields of "galen_staff" */
export type Galen_Staff_Aggregate_Fields = {
  __typename?: 'galen_staff_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Galen_Staff_Max_Fields>;
  min?: Maybe<Galen_Staff_Min_Fields>;
};


/** aggregate fields of "galen_staff" */
export type Galen_Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "galen_staff" */
export type Galen_Staff_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Galen_Staff_Max_Order_By>;
  min?: InputMaybe<Galen_Staff_Min_Order_By>;
};

/** input type for inserting array relation for remote table "galen_staff" */
export type Galen_Staff_Arr_Rel_Insert_Input = {
  data: Array<Galen_Staff_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Galen_Staff_On_Conflict>;
};

/** Boolean expression to filter rows from the table "galen_staff". All fields are combined with a logical 'AND'. */
export type Galen_Staff_Bool_Exp = {
  _and?: InputMaybe<Array<Galen_Staff_Bool_Exp>>;
  _not?: InputMaybe<Galen_Staff_Bool_Exp>;
  _or?: InputMaybe<Array<Galen_Staff_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "galen_staff" */
export type Galen_Staff_Constraint =
  /** unique or primary key constraint */
  | 'galen_staff_pkey';

/** input type for inserting data into table "galen_staff" */
export type Galen_Staff_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Galen_Staff_Max_Fields = {
  __typename?: 'galen_staff_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "galen_staff" */
export type Galen_Staff_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Galen_Staff_Min_Fields = {
  __typename?: 'galen_staff_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "galen_staff" */
export type Galen_Staff_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "galen_staff" */
export type Galen_Staff_Mutation_Response = {
  __typename?: 'galen_staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Galen_Staff>;
};

/** input type for inserting object relation for remote table "galen_staff" */
export type Galen_Staff_Obj_Rel_Insert_Input = {
  data: Galen_Staff_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Galen_Staff_On_Conflict>;
};

/** on_conflict condition type for table "galen_staff" */
export type Galen_Staff_On_Conflict = {
  constraint: Galen_Staff_Constraint;
  update_columns?: Array<Galen_Staff_Update_Column>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "galen_staff". */
export type Galen_Staff_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: galen_staff */
export type Galen_Staff_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "galen_staff" */
export type Galen_Staff_Select_Column =
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

/** input type for updating data in table "galen_staff" */
export type Galen_Staff_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: 'locations';
  address: Scalars['String']['output'];
  admin_nurse_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  deleted_at?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  facility_account: Facility_Accounts;
  facility_account_admin_id?: Maybe<Scalars['uuid']['output']>;
  facility_account_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  is_active: Scalars['Boolean']['output'];
  location_name: Scalars['String']['output'];
  /** An array relationship */
  nurses: Array<Nurses>;
  /** An aggregate relationship */
  nurses_aggregate: Nurses_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "locations" */
export type LocationsAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
};


/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "locations" */
export type Locations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Locations_Max_Order_By>;
  min?: InputMaybe<Locations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "locations" */
export type Locations_Arr_Rel_Insert_Input = {
  data: Array<Locations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Bool_Exp>>;
  _not?: InputMaybe<Locations_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  admin_nurse_id?: InputMaybe<Uuid_Comparison_Exp>;
  appointments?: InputMaybe<Appointments_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  deleted_at?: InputMaybe<String_Comparison_Exp>;
  facility_account?: InputMaybe<Facility_Accounts_Bool_Exp>;
  facility_account_admin_id?: InputMaybe<Uuid_Comparison_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  location_name?: InputMaybe<String_Comparison_Exp>;
  nurses?: InputMaybe<Nurses_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export type Locations_Constraint =
  /** unique or primary key constraint */
  | 'locations_pkey';

/** This is the pivot table for storing doctors locations */
export type Locations_Doctors = {
  __typename?: 'locations_doctors';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  doctor?: Maybe<Doctors>;
  doctor_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  location?: Maybe<Locations>;
  location_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "locations_doctors" */
export type Locations_Doctors_Aggregate = {
  __typename?: 'locations_doctors_aggregate';
  aggregate?: Maybe<Locations_Doctors_Aggregate_Fields>;
  nodes: Array<Locations_Doctors>;
};

/** aggregate fields of "locations_doctors" */
export type Locations_Doctors_Aggregate_Fields = {
  __typename?: 'locations_doctors_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Locations_Doctors_Max_Fields>;
  min?: Maybe<Locations_Doctors_Min_Fields>;
};


/** aggregate fields of "locations_doctors" */
export type Locations_Doctors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "locations_doctors" */
export type Locations_Doctors_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Locations_Doctors_Max_Order_By>;
  min?: InputMaybe<Locations_Doctors_Min_Order_By>;
};

/** input type for inserting array relation for remote table "locations_doctors" */
export type Locations_Doctors_Arr_Rel_Insert_Input = {
  data: Array<Locations_Doctors_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_Doctors_On_Conflict>;
};

/** Boolean expression to filter rows from the table "locations_doctors". All fields are combined with a logical 'AND'. */
export type Locations_Doctors_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Doctors_Bool_Exp>>;
  _not?: InputMaybe<Locations_Doctors_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Doctors_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  doctor?: InputMaybe<Doctors_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations_doctors" */
export type Locations_Doctors_Constraint =
  /** unique or primary key constraint */
  | 'locations_doctors_pkey';

/** input type for inserting data into table "locations_doctors" */
export type Locations_Doctors_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  doctor?: InputMaybe<Doctors_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Locations_Doctors_Max_Fields = {
  __typename?: 'locations_doctors_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "locations_doctors" */
export type Locations_Doctors_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Locations_Doctors_Min_Fields = {
  __typename?: 'locations_doctors_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "locations_doctors" */
export type Locations_Doctors_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "locations_doctors" */
export type Locations_Doctors_Mutation_Response = {
  __typename?: 'locations_doctors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Locations_Doctors>;
};

/** on_conflict condition type for table "locations_doctors" */
export type Locations_Doctors_On_Conflict = {
  constraint: Locations_Doctors_Constraint;
  update_columns?: Array<Locations_Doctors_Update_Column>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};

/** Ordering options when selecting data from "locations_doctors". */
export type Locations_Doctors_Order_By = {
  created_at?: InputMaybe<Order_By>;
  doctor?: InputMaybe<Doctors_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: locations_doctors */
export type Locations_Doctors_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "locations_doctors" */
export type Locations_Doctors_Select_Column =
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

/** input type for updating data in table "locations_doctors" */
export type Locations_Doctors_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  address?: InputMaybe<Scalars['String']['input']>;
  admin_nurse_id?: InputMaybe<Scalars['uuid']['input']>;
  appointments?: InputMaybe<Appointments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_account?: InputMaybe<Facility_Accounts_Obj_Rel_Insert_Input>;
  facility_account_admin_id?: InputMaybe<Scalars['uuid']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  location_name?: InputMaybe<Scalars['String']['input']>;
  nurses?: InputMaybe<Nurses_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  admin_nurse_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_admin_id?: Maybe<Scalars['uuid']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "locations" */
export type Locations_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  admin_nurse_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_admin_id?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  admin_nurse_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_admin_id?: Maybe<Scalars['uuid']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "locations" */
export type Locations_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  admin_nurse_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_admin_id?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
  address?: InputMaybe<Order_By>;
  admin_nurse_id?: InputMaybe<Order_By>;
  appointments_aggregate?: InputMaybe<Appointments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account?: InputMaybe<Facility_Accounts_Order_By>;
  facility_account_admin_id?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  location_name?: InputMaybe<Order_By>;
  nurses_aggregate?: InputMaybe<Nurses_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "locations" */
export type Locations_Select_Column =
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

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  admin_nurse_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_account_admin_id?: InputMaybe<Scalars['uuid']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  location_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** This action is to create a custom plan for account */
  accountCustomPlanSelection?: Maybe<AccountCustomPlanSelectionoutput>;
  /** This action is for account self signup */
  accountSelfSignip?: Maybe<AccountSelfSignupOutput>;
  addNurse?: Maybe<AddNurseOutput>;
  /** This action will fetch the body‑diagram pointer from AI */
  aiBodyDiagramPointer?: Maybe<AiBodyDiagramPointerOutput>;
  callOperations?: Maybe<CallOperationsOutput>;
  /** this is the action for a user to clean his/her in app notifications */
  clearNotifications?: Maybe<ClearNotificationsOutput>;
  createNewFacilityAccountAndLocation?: Maybe<CreateNewFacilityAccountAndLocationOutput>;
  /** This action is to create a stripe payment link for facility accounts */
  createStripePaymentLink?: Maybe<CreateStripePaymentLinkOutput>;
  /** this actions will delete the waiting room */
  deleteWaitingRoom?: Maybe<DeleteWaitingRoomOutput>;
  /** delete data from the table: "address" */
  delete_address?: Maybe<Address_Mutation_Response>;
  /** delete single row from the table: "address" */
  delete_address_by_pk?: Maybe<Address>;
  /** delete data from the table: "appointments" */
  delete_appointments?: Maybe<Appointments_Mutation_Response>;
  /** delete single row from the table: "appointments" */
  delete_appointments_by_pk?: Maybe<Appointments>;
  /** delete data from the table: "appointments_state_enum" */
  delete_appointments_state_enum?: Maybe<Appointments_State_Enum_Mutation_Response>;
  /** delete single row from the table: "appointments_state_enum" */
  delete_appointments_state_enum_by_pk?: Maybe<Appointments_State_Enum>;
  /** delete data from the table: "audit_logs" */
  delete_audit_logs?: Maybe<Audit_Logs_Mutation_Response>;
  /** delete single row from the table: "audit_logs" */
  delete_audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "doctor_appointment_alert" */
  delete_doctor_appointment_alert?: Maybe<Doctor_Appointment_Alert_Mutation_Response>;
  /** delete single row from the table: "doctor_appointment_alert" */
  delete_doctor_appointment_alert_by_pk?: Maybe<Doctor_Appointment_Alert>;
  /** delete data from the table: "doctor_appointments_response_enum" */
  delete_doctor_appointments_response_enum?: Maybe<Doctor_Appointments_Response_Enum_Mutation_Response>;
  /** delete single row from the table: "doctor_appointments_response_enum" */
  delete_doctor_appointments_response_enum_by_pk?: Maybe<Doctor_Appointments_Response_Enum>;
  /** delete data from the table: "doctor_subscriptions" */
  delete_doctor_subscriptions?: Maybe<Doctor_Subscriptions_Mutation_Response>;
  /** delete single row from the table: "doctor_subscriptions" */
  delete_doctor_subscriptions_by_pk?: Maybe<Doctor_Subscriptions>;
  /** delete data from the table: "doctor_validation_state_enum" */
  delete_doctor_validation_state_enum?: Maybe<Doctor_Validation_State_Enum_Mutation_Response>;
  /** delete single row from the table: "doctor_validation_state_enum" */
  delete_doctor_validation_state_enum_by_pk?: Maybe<Doctor_Validation_State_Enum>;
  /** delete data from the table: "doctor_weekly_availability" */
  delete_doctor_weekly_availability?: Maybe<Doctor_Weekly_Availability_Mutation_Response>;
  /** delete single row from the table: "doctor_weekly_availability" */
  delete_doctor_weekly_availability_by_pk?: Maybe<Doctor_Weekly_Availability>;
  /** delete data from the table: "doctors" */
  delete_doctors?: Maybe<Doctors_Mutation_Response>;
  /** delete single row from the table: "doctors" */
  delete_doctors_by_pk?: Maybe<Doctors>;
  /** delete data from the table: "external_api_call_logs" */
  delete_external_api_call_logs?: Maybe<External_Api_Call_Logs_Mutation_Response>;
  /** delete single row from the table: "external_api_call_logs" */
  delete_external_api_call_logs_by_pk?: Maybe<External_Api_Call_Logs>;
  /** delete data from the table: "facility_account_admin" */
  delete_facility_account_admin?: Maybe<Facility_Account_Admin_Mutation_Response>;
  /** delete single row from the table: "facility_account_admin" */
  delete_facility_account_admin_by_pk?: Maybe<Facility_Account_Admin>;
  /** delete data from the table: "facility_account_subscription" */
  delete_facility_account_subscription?: Maybe<Facility_Account_Subscription_Mutation_Response>;
  /** delete single row from the table: "facility_account_subscription" */
  delete_facility_account_subscription_by_pk?: Maybe<Facility_Account_Subscription>;
  /** delete data from the table: "facility_accounts" */
  delete_facility_accounts?: Maybe<Facility_Accounts_Mutation_Response>;
  /** delete data from the table: "facility_accounts_apis" */
  delete_facility_accounts_apis?: Maybe<Facility_Accounts_Apis_Mutation_Response>;
  /** delete single row from the table: "facility_accounts_apis" */
  delete_facility_accounts_apis_by_pk?: Maybe<Facility_Accounts_Apis>;
  /** delete single row from the table: "facility_accounts" */
  delete_facility_accounts_by_pk?: Maybe<Facility_Accounts>;
  /** delete data from the table: "galen_staff" */
  delete_galen_staff?: Maybe<Galen_Staff_Mutation_Response>;
  /** delete single row from the table: "galen_staff" */
  delete_galen_staff_by_pk?: Maybe<Galen_Staff>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "locations_doctors" */
  delete_locations_doctors?: Maybe<Locations_Doctors_Mutation_Response>;
  /** delete single row from the table: "locations_doctors" */
  delete_locations_doctors_by_pk?: Maybe<Locations_Doctors>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "nurses" */
  delete_nurses?: Maybe<Nurses_Mutation_Response>;
  /** delete single row from the table: "nurses" */
  delete_nurses_by_pk?: Maybe<Nurses>;
  /** delete data from the table: "overridden_dates" */
  delete_overridden_dates?: Maybe<Overridden_Dates_Mutation_Response>;
  /** delete single row from the table: "overridden_dates" */
  delete_overridden_dates_by_pk?: Maybe<Overridden_Dates>;
  /** delete data from the table: "override_time_slots" */
  delete_override_time_slots?: Maybe<Override_Time_Slots_Mutation_Response>;
  /** delete single row from the table: "override_time_slots" */
  delete_override_time_slots_by_pk?: Maybe<Override_Time_Slots>;
  /** delete data from the table: "patient_vitals" */
  delete_patient_vitals?: Maybe<Patient_Vitals_Mutation_Response>;
  /** delete single row from the table: "patient_vitals" */
  delete_patient_vitals_by_pk?: Maybe<Patient_Vitals>;
  /** delete data from the table: "prescription" */
  delete_prescription?: Maybe<Prescription_Mutation_Response>;
  /** delete single row from the table: "prescription" */
  delete_prescription_by_pk?: Maybe<Prescription>;
  /** delete data from the table: "profile" */
  delete_profile?: Maybe<Profile_Mutation_Response>;
  /** delete single row from the table: "profile" */
  delete_profile_by_pk?: Maybe<Profile>;
  /** delete data from the table: "trusted_devices" */
  delete_trusted_devices?: Maybe<Trusted_Devices_Mutation_Response>;
  /** delete single row from the table: "trusted_devices" */
  delete_trusted_devices_by_pk?: Maybe<Trusted_Devices>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "waiting_room_status_enum" */
  delete_waiting_room_status_enum?: Maybe<Waiting_Room_Status_Enum_Mutation_Response>;
  /** delete single row from the table: "waiting_room_status_enum" */
  delete_waiting_room_status_enum_by_pk?: Maybe<Waiting_Room_Status_Enum>;
  /** delete data from the table: "waiting_rooms" */
  delete_waiting_rooms?: Maybe<Waiting_Rooms_Mutation_Response>;
  /** delete single row from the table: "waiting_rooms" */
  delete_waiting_rooms_by_pk?: Maybe<Waiting_Rooms>;
  /** this action will set the doctor's availability for a specific day */
  doctorAvailability?: Maybe<DoctorAvailabilityOutput>;
  doctorSelfSignup?: Maybe<DoctorSelfSignupOutput>;
  editAppointment?: Maybe<EditAppointmentOutput>;
  editDoctor?: Maybe<EditDoctorOutput>;
  editFacilityAndLocation?: Maybe<EditFacilityOutput>;
  editGalenStaff?: Maybe<EditGalenStaffOutput>;
  editNurse?: Maybe<EditNurseOutput>;
  forgotPass?: Maybe<ForgotPassOutput>;
  /** this action will return a video granted token for a twilio call */
  getCallToken?: Maybe<GetCallTokenOutput>;
  /** this action will return a conversation granted token for a twilio conversation */
  getConversationToken?: Maybe<SampleOutput>;
  /** insert data into the table: "address" */
  insert_address?: Maybe<Address_Mutation_Response>;
  /** insert a single row into the table: "address" */
  insert_address_one?: Maybe<Address>;
  /** insert data into the table: "appointments" */
  insert_appointments?: Maybe<Appointments_Mutation_Response>;
  /** insert a single row into the table: "appointments" */
  insert_appointments_one?: Maybe<Appointments>;
  /** insert data into the table: "appointments_state_enum" */
  insert_appointments_state_enum?: Maybe<Appointments_State_Enum_Mutation_Response>;
  /** insert a single row into the table: "appointments_state_enum" */
  insert_appointments_state_enum_one?: Maybe<Appointments_State_Enum>;
  /** insert data into the table: "audit_logs" */
  insert_audit_logs?: Maybe<Audit_Logs_Mutation_Response>;
  /** insert a single row into the table: "audit_logs" */
  insert_audit_logs_one?: Maybe<Audit_Logs>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "doctor_appointment_alert" */
  insert_doctor_appointment_alert?: Maybe<Doctor_Appointment_Alert_Mutation_Response>;
  /** insert a single row into the table: "doctor_appointment_alert" */
  insert_doctor_appointment_alert_one?: Maybe<Doctor_Appointment_Alert>;
  /** insert data into the table: "doctor_appointments_response_enum" */
  insert_doctor_appointments_response_enum?: Maybe<Doctor_Appointments_Response_Enum_Mutation_Response>;
  /** insert a single row into the table: "doctor_appointments_response_enum" */
  insert_doctor_appointments_response_enum_one?: Maybe<Doctor_Appointments_Response_Enum>;
  /** insert data into the table: "doctor_subscriptions" */
  insert_doctor_subscriptions?: Maybe<Doctor_Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "doctor_subscriptions" */
  insert_doctor_subscriptions_one?: Maybe<Doctor_Subscriptions>;
  /** insert data into the table: "doctor_validation_state_enum" */
  insert_doctor_validation_state_enum?: Maybe<Doctor_Validation_State_Enum_Mutation_Response>;
  /** insert a single row into the table: "doctor_validation_state_enum" */
  insert_doctor_validation_state_enum_one?: Maybe<Doctor_Validation_State_Enum>;
  /** insert data into the table: "doctor_weekly_availability" */
  insert_doctor_weekly_availability?: Maybe<Doctor_Weekly_Availability_Mutation_Response>;
  /** insert a single row into the table: "doctor_weekly_availability" */
  insert_doctor_weekly_availability_one?: Maybe<Doctor_Weekly_Availability>;
  /** insert data into the table: "doctors" */
  insert_doctors?: Maybe<Doctors_Mutation_Response>;
  /** insert a single row into the table: "doctors" */
  insert_doctors_one?: Maybe<Doctors>;
  /** insert data into the table: "external_api_call_logs" */
  insert_external_api_call_logs?: Maybe<External_Api_Call_Logs_Mutation_Response>;
  /** insert a single row into the table: "external_api_call_logs" */
  insert_external_api_call_logs_one?: Maybe<External_Api_Call_Logs>;
  /** insert data into the table: "facility_account_admin" */
  insert_facility_account_admin?: Maybe<Facility_Account_Admin_Mutation_Response>;
  /** insert a single row into the table: "facility_account_admin" */
  insert_facility_account_admin_one?: Maybe<Facility_Account_Admin>;
  /** insert data into the table: "facility_account_subscription" */
  insert_facility_account_subscription?: Maybe<Facility_Account_Subscription_Mutation_Response>;
  /** insert a single row into the table: "facility_account_subscription" */
  insert_facility_account_subscription_one?: Maybe<Facility_Account_Subscription>;
  /** insert data into the table: "facility_accounts" */
  insert_facility_accounts?: Maybe<Facility_Accounts_Mutation_Response>;
  /** insert data into the table: "facility_accounts_apis" */
  insert_facility_accounts_apis?: Maybe<Facility_Accounts_Apis_Mutation_Response>;
  /** insert a single row into the table: "facility_accounts_apis" */
  insert_facility_accounts_apis_one?: Maybe<Facility_Accounts_Apis>;
  /** insert a single row into the table: "facility_accounts" */
  insert_facility_accounts_one?: Maybe<Facility_Accounts>;
  /** insert data into the table: "galen_staff" */
  insert_galen_staff?: Maybe<Galen_Staff_Mutation_Response>;
  /** insert a single row into the table: "galen_staff" */
  insert_galen_staff_one?: Maybe<Galen_Staff>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert data into the table: "locations_doctors" */
  insert_locations_doctors?: Maybe<Locations_Doctors_Mutation_Response>;
  /** insert a single row into the table: "locations_doctors" */
  insert_locations_doctors_one?: Maybe<Locations_Doctors>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "nurses" */
  insert_nurses?: Maybe<Nurses_Mutation_Response>;
  /** insert a single row into the table: "nurses" */
  insert_nurses_one?: Maybe<Nurses>;
  /** insert data into the table: "overridden_dates" */
  insert_overridden_dates?: Maybe<Overridden_Dates_Mutation_Response>;
  /** insert a single row into the table: "overridden_dates" */
  insert_overridden_dates_one?: Maybe<Overridden_Dates>;
  /** insert data into the table: "override_time_slots" */
  insert_override_time_slots?: Maybe<Override_Time_Slots_Mutation_Response>;
  /** insert a single row into the table: "override_time_slots" */
  insert_override_time_slots_one?: Maybe<Override_Time_Slots>;
  /** insert data into the table: "patient_vitals" */
  insert_patient_vitals?: Maybe<Patient_Vitals_Mutation_Response>;
  /** insert a single row into the table: "patient_vitals" */
  insert_patient_vitals_one?: Maybe<Patient_Vitals>;
  /** insert data into the table: "prescription" */
  insert_prescription?: Maybe<Prescription_Mutation_Response>;
  /** insert a single row into the table: "prescription" */
  insert_prescription_one?: Maybe<Prescription>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<Profile_Mutation_Response>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** insert data into the table: "trusted_devices" */
  insert_trusted_devices?: Maybe<Trusted_Devices_Mutation_Response>;
  /** insert a single row into the table: "trusted_devices" */
  insert_trusted_devices_one?: Maybe<Trusted_Devices>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "waiting_room_status_enum" */
  insert_waiting_room_status_enum?: Maybe<Waiting_Room_Status_Enum_Mutation_Response>;
  /** insert a single row into the table: "waiting_room_status_enum" */
  insert_waiting_room_status_enum_one?: Maybe<Waiting_Room_Status_Enum>;
  /** insert data into the table: "waiting_rooms" */
  insert_waiting_rooms?: Maybe<Waiting_Rooms_Mutation_Response>;
  /** insert a single row into the table: "waiting_rooms" */
  insert_waiting_rooms_one?: Maybe<Waiting_Rooms>;
  leaveCall?: Maybe<LeaveCallOutput>;
  /** this action creates a new appointment */
  newAppointment?: Maybe<NewAppointmentOutput>;
  newDoctor?: Maybe<NewDoctorOutput>;
  newGalenStaff?: Maybe<NewGalenStaffOutput>;
  /** this action is for overriding doctor availability for a particular date. */
  overrideDate?: Maybe<OverrideDateOutput>;
  /** This action will intake all vitals from nurse and store it in the patient_vital table */
  recordPatientVitals?: Maybe<RecordPatientVitalsOutput>;
  stripeApi?: Maybe<StripeOutput>;
  /** this actions will used for getting stripe data through api */
  stripeOperations?: Maybe<StripeApiOperations>;
  /** stripe subscription canceller */
  subscriptionCanceller?: Maybe<SubCancelOutput>;
  /** update data of the table: "address" */
  update_address?: Maybe<Address_Mutation_Response>;
  /** update single row of the table: "address" */
  update_address_by_pk?: Maybe<Address>;
  /** update data of the table: "appointments" */
  update_appointments?: Maybe<Appointments_Mutation_Response>;
  /** update single row of the table: "appointments" */
  update_appointments_by_pk?: Maybe<Appointments>;
  /** update data of the table: "appointments_state_enum" */
  update_appointments_state_enum?: Maybe<Appointments_State_Enum_Mutation_Response>;
  /** update single row of the table: "appointments_state_enum" */
  update_appointments_state_enum_by_pk?: Maybe<Appointments_State_Enum>;
  /** update data of the table: "audit_logs" */
  update_audit_logs?: Maybe<Audit_Logs_Mutation_Response>;
  /** update single row of the table: "audit_logs" */
  update_audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "doctor_appointment_alert" */
  update_doctor_appointment_alert?: Maybe<Doctor_Appointment_Alert_Mutation_Response>;
  /** update single row of the table: "doctor_appointment_alert" */
  update_doctor_appointment_alert_by_pk?: Maybe<Doctor_Appointment_Alert>;
  /** update data of the table: "doctor_appointments_response_enum" */
  update_doctor_appointments_response_enum?: Maybe<Doctor_Appointments_Response_Enum_Mutation_Response>;
  /** update single row of the table: "doctor_appointments_response_enum" */
  update_doctor_appointments_response_enum_by_pk?: Maybe<Doctor_Appointments_Response_Enum>;
  /** update data of the table: "doctor_subscriptions" */
  update_doctor_subscriptions?: Maybe<Doctor_Subscriptions_Mutation_Response>;
  /** update single row of the table: "doctor_subscriptions" */
  update_doctor_subscriptions_by_pk?: Maybe<Doctor_Subscriptions>;
  /** update data of the table: "doctor_validation_state_enum" */
  update_doctor_validation_state_enum?: Maybe<Doctor_Validation_State_Enum_Mutation_Response>;
  /** update single row of the table: "doctor_validation_state_enum" */
  update_doctor_validation_state_enum_by_pk?: Maybe<Doctor_Validation_State_Enum>;
  /** update data of the table: "doctor_weekly_availability" */
  update_doctor_weekly_availability?: Maybe<Doctor_Weekly_Availability_Mutation_Response>;
  /** update single row of the table: "doctor_weekly_availability" */
  update_doctor_weekly_availability_by_pk?: Maybe<Doctor_Weekly_Availability>;
  /** update data of the table: "doctors" */
  update_doctors?: Maybe<Doctors_Mutation_Response>;
  /** update single row of the table: "doctors" */
  update_doctors_by_pk?: Maybe<Doctors>;
  /** update data of the table: "external_api_call_logs" */
  update_external_api_call_logs?: Maybe<External_Api_Call_Logs_Mutation_Response>;
  /** update single row of the table: "external_api_call_logs" */
  update_external_api_call_logs_by_pk?: Maybe<External_Api_Call_Logs>;
  /** update data of the table: "facility_account_admin" */
  update_facility_account_admin?: Maybe<Facility_Account_Admin_Mutation_Response>;
  /** update single row of the table: "facility_account_admin" */
  update_facility_account_admin_by_pk?: Maybe<Facility_Account_Admin>;
  /** update data of the table: "facility_account_subscription" */
  update_facility_account_subscription?: Maybe<Facility_Account_Subscription_Mutation_Response>;
  /** update single row of the table: "facility_account_subscription" */
  update_facility_account_subscription_by_pk?: Maybe<Facility_Account_Subscription>;
  /** update data of the table: "facility_accounts" */
  update_facility_accounts?: Maybe<Facility_Accounts_Mutation_Response>;
  /** update data of the table: "facility_accounts_apis" */
  update_facility_accounts_apis?: Maybe<Facility_Accounts_Apis_Mutation_Response>;
  /** update single row of the table: "facility_accounts_apis" */
  update_facility_accounts_apis_by_pk?: Maybe<Facility_Accounts_Apis>;
  /** update single row of the table: "facility_accounts" */
  update_facility_accounts_by_pk?: Maybe<Facility_Accounts>;
  /** update data of the table: "galen_staff" */
  update_galen_staff?: Maybe<Galen_Staff_Mutation_Response>;
  /** update single row of the table: "galen_staff" */
  update_galen_staff_by_pk?: Maybe<Galen_Staff>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update data of the table: "locations_doctors" */
  update_locations_doctors?: Maybe<Locations_Doctors_Mutation_Response>;
  /** update single row of the table: "locations_doctors" */
  update_locations_doctors_by_pk?: Maybe<Locations_Doctors>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "nurses" */
  update_nurses?: Maybe<Nurses_Mutation_Response>;
  /** update single row of the table: "nurses" */
  update_nurses_by_pk?: Maybe<Nurses>;
  /** update data of the table: "overridden_dates" */
  update_overridden_dates?: Maybe<Overridden_Dates_Mutation_Response>;
  /** update single row of the table: "overridden_dates" */
  update_overridden_dates_by_pk?: Maybe<Overridden_Dates>;
  /** update data of the table: "override_time_slots" */
  update_override_time_slots?: Maybe<Override_Time_Slots_Mutation_Response>;
  /** update single row of the table: "override_time_slots" */
  update_override_time_slots_by_pk?: Maybe<Override_Time_Slots>;
  /** update data of the table: "patient_vitals" */
  update_patient_vitals?: Maybe<Patient_Vitals_Mutation_Response>;
  /** update single row of the table: "patient_vitals" */
  update_patient_vitals_by_pk?: Maybe<Patient_Vitals>;
  /** update data of the table: "prescription" */
  update_prescription?: Maybe<Prescription_Mutation_Response>;
  /** update single row of the table: "prescription" */
  update_prescription_by_pk?: Maybe<Prescription>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<Profile_Mutation_Response>;
  /** update single row of the table: "profile" */
  update_profile_by_pk?: Maybe<Profile>;
  /** update data of the table: "trusted_devices" */
  update_trusted_devices?: Maybe<Trusted_Devices_Mutation_Response>;
  /** update single row of the table: "trusted_devices" */
  update_trusted_devices_by_pk?: Maybe<Trusted_Devices>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "waiting_room_status_enum" */
  update_waiting_room_status_enum?: Maybe<Waiting_Room_Status_Enum_Mutation_Response>;
  /** update single row of the table: "waiting_room_status_enum" */
  update_waiting_room_status_enum_by_pk?: Maybe<Waiting_Room_Status_Enum>;
  /** update data of the table: "waiting_rooms" */
  update_waiting_rooms?: Maybe<Waiting_Rooms_Mutation_Response>;
  /** update single row of the table: "waiting_rooms" */
  update_waiting_rooms_by_pk?: Maybe<Waiting_Rooms>;
  zohoApi?: Maybe<ZohoApiOutput>;
  zohoSoapNote?: Maybe<ZohoSoapNoteOutput>;
};


/** mutation root */
export type Mutation_RootAccountCustomPlanSelectionArgs = {
  object: AccountCustomPlanSelectionInput;
};


/** mutation root */
export type Mutation_RootAccountSelfSignipArgs = {
  object: AccountSelfSignupInput;
};


/** mutation root */
export type Mutation_RootAddNurseArgs = {
  object: AddNurseInput;
};


/** mutation root */
export type Mutation_RootAiBodyDiagramPointerArgs = {
  obj: AiBodyDiagramPointerInput;
};


/** mutation root */
export type Mutation_RootCallOperationsArgs = {
  object: CallOperationsInput;
};


/** mutation root */
export type Mutation_RootClearNotificationsArgs = {
  object: ClearNotificationsInput;
};


/** mutation root */
export type Mutation_RootCreateNewFacilityAccountAndLocationArgs = {
  object: CreateNewFacilityAccountAndLocationInput;
};


/** mutation root */
export type Mutation_RootCreateStripePaymentLinkArgs = {
  object: CreateStripePaymentLinkInput;
};


/** mutation root */
export type Mutation_RootDeleteWaitingRoomArgs = {
  object: DeleteWaitingRoomInput;
};


/** mutation root */
export type Mutation_RootDelete_AddressArgs = {
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AppointmentsArgs = {
  where: Appointments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Appointments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Appointments_State_EnumArgs = {
  where: Appointments_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Appointments_State_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Audit_LogsArgs = {
  where: Audit_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Appointment_AlertArgs = {
  where: Doctor_Appointment_Alert_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Appointment_Alert_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Appointments_Response_EnumArgs = {
  where: Doctor_Appointments_Response_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Appointments_Response_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Doctor_SubscriptionsArgs = {
  where: Doctor_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Subscriptions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Validation_State_EnumArgs = {
  where: Doctor_Validation_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Validation_State_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Weekly_AvailabilityArgs = {
  where: Doctor_Weekly_Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctor_Weekly_Availability_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DoctorsArgs = {
  where: Doctors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Doctors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_External_Api_Call_LogsArgs = {
  where: External_Api_Call_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_External_Api_Call_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Facility_Account_AdminArgs = {
  where: Facility_Account_Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Facility_Account_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Facility_Account_SubscriptionArgs = {
  where: Facility_Account_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Facility_Account_Subscription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Facility_AccountsArgs = {
  where: Facility_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Facility_Accounts_ApisArgs = {
  where: Facility_Accounts_Apis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Facility_Accounts_Apis_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Facility_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Galen_StaffArgs = {
  where: Galen_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Galen_Staff_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Locations_DoctorsArgs = {
  where: Locations_Doctors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locations_Doctors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NursesArgs = {
  where: Nurses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nurses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Overridden_DatesArgs = {
  where: Overridden_Dates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Overridden_Dates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Override_Time_SlotsArgs = {
  where: Override_Time_Slots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Override_Time_Slots_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Patient_VitalsArgs = {
  where: Patient_Vitals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Patient_Vitals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PrescriptionArgs = {
  where: Prescription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prescription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProfileArgs = {
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Trusted_DevicesArgs = {
  where: Trusted_Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trusted_Devices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Waiting_Room_Status_EnumArgs = {
  where: Waiting_Room_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Waiting_Room_Status_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Waiting_RoomsArgs = {
  where: Waiting_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Waiting_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDoctorAvailabilityArgs = {
  object: DoctorAvailabilityInput;
};


/** mutation root */
export type Mutation_RootDoctorSelfSignupArgs = {
  object: DoctorSelfSignupInput;
};


/** mutation root */
export type Mutation_RootEditAppointmentArgs = {
  object: EditAppointmentInput;
};


/** mutation root */
export type Mutation_RootEditDoctorArgs = {
  object: EditDoctorInput;
};


/** mutation root */
export type Mutation_RootEditFacilityAndLocationArgs = {
  object: EditFacilityAccountAndLocationInput;
};


/** mutation root */
export type Mutation_RootEditGalenStaffArgs = {
  object: EditGalenStaffInput;
};


/** mutation root */
export type Mutation_RootEditNurseArgs = {
  object: EditNurseInput;
};


/** mutation root */
export type Mutation_RootForgotPassArgs = {
  object: ForgotPassInput;
};


/** mutation root */
export type Mutation_RootGetCallTokenArgs = {
  object: GetCallTokenInput;
};


/** mutation root */
export type Mutation_RootInsert_AddressArgs = {
  objects: Array<Address_Insert_Input>;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_OneArgs = {
  object: Address_Insert_Input;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AppointmentsArgs = {
  objects: Array<Appointments_Insert_Input>;
  on_conflict?: InputMaybe<Appointments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Appointments_OneArgs = {
  object: Appointments_Insert_Input;
  on_conflict?: InputMaybe<Appointments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Appointments_State_EnumArgs = {
  objects: Array<Appointments_State_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Appointments_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Appointments_State_Enum_OneArgs = {
  object: Appointments_State_Enum_Insert_Input;
  on_conflict?: InputMaybe<Appointments_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_LogsArgs = {
  objects: Array<Audit_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Logs_OneArgs = {
  object: Audit_Logs_Insert_Input;
  on_conflict?: InputMaybe<Audit_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: InputMaybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Appointment_AlertArgs = {
  objects: Array<Doctor_Appointment_Alert_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_Appointment_Alert_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Appointment_Alert_OneArgs = {
  object: Doctor_Appointment_Alert_Insert_Input;
  on_conflict?: InputMaybe<Doctor_Appointment_Alert_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Appointments_Response_EnumArgs = {
  objects: Array<Doctor_Appointments_Response_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_Appointments_Response_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Appointments_Response_Enum_OneArgs = {
  object: Doctor_Appointments_Response_Enum_Insert_Input;
  on_conflict?: InputMaybe<Doctor_Appointments_Response_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_SubscriptionsArgs = {
  objects: Array<Doctor_Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Subscriptions_OneArgs = {
  object: Doctor_Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Doctor_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Validation_State_EnumArgs = {
  objects: Array<Doctor_Validation_State_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_Validation_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Validation_State_Enum_OneArgs = {
  object: Doctor_Validation_State_Enum_Insert_Input;
  on_conflict?: InputMaybe<Doctor_Validation_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Weekly_AvailabilityArgs = {
  objects: Array<Doctor_Weekly_Availability_Insert_Input>;
  on_conflict?: InputMaybe<Doctor_Weekly_Availability_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctor_Weekly_Availability_OneArgs = {
  object: Doctor_Weekly_Availability_Insert_Input;
  on_conflict?: InputMaybe<Doctor_Weekly_Availability_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DoctorsArgs = {
  objects: Array<Doctors_Insert_Input>;
  on_conflict?: InputMaybe<Doctors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Doctors_OneArgs = {
  object: Doctors_Insert_Input;
  on_conflict?: InputMaybe<Doctors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_External_Api_Call_LogsArgs = {
  objects: Array<External_Api_Call_Logs_Insert_Input>;
  on_conflict?: InputMaybe<External_Api_Call_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_External_Api_Call_Logs_OneArgs = {
  object: External_Api_Call_Logs_Insert_Input;
  on_conflict?: InputMaybe<External_Api_Call_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Account_AdminArgs = {
  objects: Array<Facility_Account_Admin_Insert_Input>;
  on_conflict?: InputMaybe<Facility_Account_Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Account_Admin_OneArgs = {
  object: Facility_Account_Admin_Insert_Input;
  on_conflict?: InputMaybe<Facility_Account_Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Account_SubscriptionArgs = {
  objects: Array<Facility_Account_Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Facility_Account_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Account_Subscription_OneArgs = {
  object: Facility_Account_Subscription_Insert_Input;
  on_conflict?: InputMaybe<Facility_Account_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_AccountsArgs = {
  objects: Array<Facility_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Facility_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Accounts_ApisArgs = {
  objects: Array<Facility_Accounts_Apis_Insert_Input>;
  on_conflict?: InputMaybe<Facility_Accounts_Apis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Accounts_Apis_OneArgs = {
  object: Facility_Accounts_Apis_Insert_Input;
  on_conflict?: InputMaybe<Facility_Accounts_Apis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Facility_Accounts_OneArgs = {
  object: Facility_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Facility_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Galen_StaffArgs = {
  objects: Array<Galen_Staff_Insert_Input>;
  on_conflict?: InputMaybe<Galen_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Galen_Staff_OneArgs = {
  object: Galen_Staff_Insert_Input;
  on_conflict?: InputMaybe<Galen_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_DoctorsArgs = {
  objects: Array<Locations_Doctors_Insert_Input>;
  on_conflict?: InputMaybe<Locations_Doctors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_Doctors_OneArgs = {
  object: Locations_Doctors_Insert_Input;
  on_conflict?: InputMaybe<Locations_Doctors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NursesArgs = {
  objects: Array<Nurses_Insert_Input>;
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nurses_OneArgs = {
  object: Nurses_Insert_Input;
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Overridden_DatesArgs = {
  objects: Array<Overridden_Dates_Insert_Input>;
  on_conflict?: InputMaybe<Overridden_Dates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Overridden_Dates_OneArgs = {
  object: Overridden_Dates_Insert_Input;
  on_conflict?: InputMaybe<Overridden_Dates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Override_Time_SlotsArgs = {
  objects: Array<Override_Time_Slots_Insert_Input>;
  on_conflict?: InputMaybe<Override_Time_Slots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Override_Time_Slots_OneArgs = {
  object: Override_Time_Slots_Insert_Input;
  on_conflict?: InputMaybe<Override_Time_Slots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Patient_VitalsArgs = {
  objects: Array<Patient_Vitals_Insert_Input>;
  on_conflict?: InputMaybe<Patient_Vitals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Patient_Vitals_OneArgs = {
  object: Patient_Vitals_Insert_Input;
  on_conflict?: InputMaybe<Patient_Vitals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrescriptionArgs = {
  objects: Array<Prescription_Insert_Input>;
  on_conflict?: InputMaybe<Prescription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prescription_OneArgs = {
  object: Prescription_Insert_Input;
  on_conflict?: InputMaybe<Prescription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfileArgs = {
  objects: Array<Profile_Insert_Input>;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_OneArgs = {
  object: Profile_Insert_Input;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trusted_DevicesArgs = {
  objects: Array<Trusted_Devices_Insert_Input>;
  on_conflict?: InputMaybe<Trusted_Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trusted_Devices_OneArgs = {
  object: Trusted_Devices_Insert_Input;
  on_conflict?: InputMaybe<Trusted_Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Waiting_Room_Status_EnumArgs = {
  objects: Array<Waiting_Room_Status_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Waiting_Room_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Waiting_Room_Status_Enum_OneArgs = {
  object: Waiting_Room_Status_Enum_Insert_Input;
  on_conflict?: InputMaybe<Waiting_Room_Status_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Waiting_RoomsArgs = {
  objects: Array<Waiting_Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Waiting_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Waiting_Rooms_OneArgs = {
  object: Waiting_Rooms_Insert_Input;
  on_conflict?: InputMaybe<Waiting_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLeaveCallArgs = {
  object: LeaveCallInput;
};


/** mutation root */
export type Mutation_RootNewAppointmentArgs = {
  object: NewAppointmentInput;
};


/** mutation root */
export type Mutation_RootNewDoctorArgs = {
  object: NewDoctorInput;
};


/** mutation root */
export type Mutation_RootNewGalenStaffArgs = {
  object: NewGalenStaffInput;
};


/** mutation root */
export type Mutation_RootOverrideDateArgs = {
  object: OverrideDateInput;
};


/** mutation root */
export type Mutation_RootRecordPatientVitalsArgs = {
  object: RecordPatientVitalsInput;
};


/** mutation root */
export type Mutation_RootStripeApiArgs = {
  object: StripeInput;
};


/** mutation root */
export type Mutation_RootStripeOperationsArgs = {
  object: StripeOperationsInput;
};


/** mutation root */
export type Mutation_RootSubscriptionCancellerArgs = {
  object: SubCancelInput;
};


/** mutation root */
export type Mutation_RootUpdate_AddressArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_By_PkArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  pk_columns: Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AppointmentsArgs = {
  _set?: InputMaybe<Appointments_Set_Input>;
  where: Appointments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Appointments_By_PkArgs = {
  _set?: InputMaybe<Appointments_Set_Input>;
  pk_columns: Appointments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Appointments_State_EnumArgs = {
  _set?: InputMaybe<Appointments_State_Enum_Set_Input>;
  where: Appointments_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Appointments_State_Enum_By_PkArgs = {
  _set?: InputMaybe<Appointments_State_Enum_Set_Input>;
  pk_columns: Appointments_State_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_LogsArgs = {
  _append?: InputMaybe<Audit_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Audit_Logs_Prepend_Input>;
  _set?: InputMaybe<Audit_Logs_Set_Input>;
  where: Audit_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logs_By_PkArgs = {
  _append?: InputMaybe<Audit_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Audit_Logs_Prepend_Input>;
  _set?: InputMaybe<Audit_Logs_Set_Input>;
  pk_columns: Audit_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: InputMaybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: InputMaybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: InputMaybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Accounts_Prepend_Input>;
  _set?: InputMaybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: InputMaybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Accounts_Prepend_Input>;
  _set?: InputMaybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: InputMaybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: InputMaybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Appointment_AlertArgs = {
  _set?: InputMaybe<Doctor_Appointment_Alert_Set_Input>;
  where: Doctor_Appointment_Alert_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Appointment_Alert_By_PkArgs = {
  _set?: InputMaybe<Doctor_Appointment_Alert_Set_Input>;
  pk_columns: Doctor_Appointment_Alert_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Appointments_Response_EnumArgs = {
  _set?: InputMaybe<Doctor_Appointments_Response_Enum_Set_Input>;
  where: Doctor_Appointments_Response_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Appointments_Response_Enum_By_PkArgs = {
  _set?: InputMaybe<Doctor_Appointments_Response_Enum_Set_Input>;
  pk_columns: Doctor_Appointments_Response_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_SubscriptionsArgs = {
  _set?: InputMaybe<Doctor_Subscriptions_Set_Input>;
  where: Doctor_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Subscriptions_By_PkArgs = {
  _set?: InputMaybe<Doctor_Subscriptions_Set_Input>;
  pk_columns: Doctor_Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Validation_State_EnumArgs = {
  _set?: InputMaybe<Doctor_Validation_State_Enum_Set_Input>;
  where: Doctor_Validation_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Validation_State_Enum_By_PkArgs = {
  _set?: InputMaybe<Doctor_Validation_State_Enum_Set_Input>;
  pk_columns: Doctor_Validation_State_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Weekly_AvailabilityArgs = {
  _set?: InputMaybe<Doctor_Weekly_Availability_Set_Input>;
  where: Doctor_Weekly_Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctor_Weekly_Availability_By_PkArgs = {
  _set?: InputMaybe<Doctor_Weekly_Availability_Set_Input>;
  pk_columns: Doctor_Weekly_Availability_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DoctorsArgs = {
  _inc?: InputMaybe<Doctors_Inc_Input>;
  _set?: InputMaybe<Doctors_Set_Input>;
  where: Doctors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Doctors_By_PkArgs = {
  _inc?: InputMaybe<Doctors_Inc_Input>;
  _set?: InputMaybe<Doctors_Set_Input>;
  pk_columns: Doctors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_External_Api_Call_LogsArgs = {
  _append?: InputMaybe<External_Api_Call_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<External_Api_Call_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<External_Api_Call_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<External_Api_Call_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<External_Api_Call_Logs_Prepend_Input>;
  _set?: InputMaybe<External_Api_Call_Logs_Set_Input>;
  where: External_Api_Call_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_External_Api_Call_Logs_By_PkArgs = {
  _append?: InputMaybe<External_Api_Call_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<External_Api_Call_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<External_Api_Call_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<External_Api_Call_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<External_Api_Call_Logs_Prepend_Input>;
  _set?: InputMaybe<External_Api_Call_Logs_Set_Input>;
  pk_columns: External_Api_Call_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Account_AdminArgs = {
  _set?: InputMaybe<Facility_Account_Admin_Set_Input>;
  where: Facility_Account_Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Account_Admin_By_PkArgs = {
  _set?: InputMaybe<Facility_Account_Admin_Set_Input>;
  pk_columns: Facility_Account_Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Account_SubscriptionArgs = {
  _append?: InputMaybe<Facility_Account_Subscription_Append_Input>;
  _delete_at_path?: InputMaybe<Facility_Account_Subscription_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Facility_Account_Subscription_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Facility_Account_Subscription_Delete_Key_Input>;
  _prepend?: InputMaybe<Facility_Account_Subscription_Prepend_Input>;
  _set?: InputMaybe<Facility_Account_Subscription_Set_Input>;
  where: Facility_Account_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Account_Subscription_By_PkArgs = {
  _append?: InputMaybe<Facility_Account_Subscription_Append_Input>;
  _delete_at_path?: InputMaybe<Facility_Account_Subscription_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Facility_Account_Subscription_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Facility_Account_Subscription_Delete_Key_Input>;
  _prepend?: InputMaybe<Facility_Account_Subscription_Prepend_Input>;
  _set?: InputMaybe<Facility_Account_Subscription_Set_Input>;
  pk_columns: Facility_Account_Subscription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_AccountsArgs = {
  _set?: InputMaybe<Facility_Accounts_Set_Input>;
  where: Facility_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Accounts_ApisArgs = {
  _set?: InputMaybe<Facility_Accounts_Apis_Set_Input>;
  where: Facility_Accounts_Apis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Accounts_Apis_By_PkArgs = {
  _set?: InputMaybe<Facility_Accounts_Apis_Set_Input>;
  pk_columns: Facility_Accounts_Apis_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Facility_Accounts_By_PkArgs = {
  _set?: InputMaybe<Facility_Accounts_Set_Input>;
  pk_columns: Facility_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Galen_StaffArgs = {
  _set?: InputMaybe<Galen_Staff_Set_Input>;
  where: Galen_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Galen_Staff_By_PkArgs = {
  _set?: InputMaybe<Galen_Staff_Set_Input>;
  pk_columns: Galen_Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _set?: InputMaybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_DoctorsArgs = {
  _set?: InputMaybe<Locations_Doctors_Set_Input>;
  where: Locations_Doctors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_Doctors_By_PkArgs = {
  _set?: InputMaybe<Locations_Doctors_Set_Input>;
  pk_columns: Locations_Doctors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NursesArgs = {
  _set?: InputMaybe<Nurses_Set_Input>;
  where: Nurses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nurses_By_PkArgs = {
  _set?: InputMaybe<Nurses_Set_Input>;
  pk_columns: Nurses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Overridden_DatesArgs = {
  _set?: InputMaybe<Overridden_Dates_Set_Input>;
  where: Overridden_Dates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Overridden_Dates_By_PkArgs = {
  _set?: InputMaybe<Overridden_Dates_Set_Input>;
  pk_columns: Overridden_Dates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Override_Time_SlotsArgs = {
  _set?: InputMaybe<Override_Time_Slots_Set_Input>;
  where: Override_Time_Slots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Override_Time_Slots_By_PkArgs = {
  _set?: InputMaybe<Override_Time_Slots_Set_Input>;
  pk_columns: Override_Time_Slots_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Patient_VitalsArgs = {
  _append?: InputMaybe<Patient_Vitals_Append_Input>;
  _delete_at_path?: InputMaybe<Patient_Vitals_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Patient_Vitals_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Patient_Vitals_Delete_Key_Input>;
  _prepend?: InputMaybe<Patient_Vitals_Prepend_Input>;
  _set?: InputMaybe<Patient_Vitals_Set_Input>;
  where: Patient_Vitals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Patient_Vitals_By_PkArgs = {
  _append?: InputMaybe<Patient_Vitals_Append_Input>;
  _delete_at_path?: InputMaybe<Patient_Vitals_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Patient_Vitals_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Patient_Vitals_Delete_Key_Input>;
  _prepend?: InputMaybe<Patient_Vitals_Prepend_Input>;
  _set?: InputMaybe<Patient_Vitals_Set_Input>;
  pk_columns: Patient_Vitals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrescriptionArgs = {
  _set?: InputMaybe<Prescription_Set_Input>;
  where: Prescription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prescription_By_PkArgs = {
  _set?: InputMaybe<Prescription_Set_Input>;
  pk_columns: Prescription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProfileArgs = {
  _set?: InputMaybe<Profile_Set_Input>;
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_By_PkArgs = {
  _set?: InputMaybe<Profile_Set_Input>;
  pk_columns: Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trusted_DevicesArgs = {
  _set?: InputMaybe<Trusted_Devices_Set_Input>;
  where: Trusted_Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trusted_Devices_By_PkArgs = {
  _set?: InputMaybe<Trusted_Devices_Set_Input>;
  pk_columns: Trusted_Devices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Waiting_Room_Status_EnumArgs = {
  _set?: InputMaybe<Waiting_Room_Status_Enum_Set_Input>;
  where: Waiting_Room_Status_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Waiting_Room_Status_Enum_By_PkArgs = {
  _set?: InputMaybe<Waiting_Room_Status_Enum_Set_Input>;
  pk_columns: Waiting_Room_Status_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Waiting_RoomsArgs = {
  _set?: InputMaybe<Waiting_Rooms_Set_Input>;
  where: Waiting_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Waiting_Rooms_By_PkArgs = {
  _set?: InputMaybe<Waiting_Rooms_Set_Input>;
  pk_columns: Waiting_Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootZohoApiArgs = {
  object: ZohoApiInput;
};


/** mutation root */
export type Mutation_RootZohoSoapNoteArgs = {
  object: ZohoSoapNoteInput;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  created_at: Scalars['timestamptz']['output'];
  deliver_to: Scalars['uuid']['output'];
  error: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  is_read: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notifications" */
export type Notifications_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notifications_Max_Order_By>;
  min?: InputMaybe<Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deliver_to?: InputMaybe<Uuid_Comparison_Exp>;
  error?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_read?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export type Notifications_Constraint =
  /** unique or primary key constraint */
  | 'notifications_pkey';

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deliver_to?: InputMaybe<Scalars['uuid']['input']>;
  error?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deliver_to?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "notifications" */
export type Notifications_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deliver_to?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deliver_to?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "notifications" */
export type Notifications_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deliver_to?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deliver_to?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_read?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notifications" */
export type Notifications_Select_Column =
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

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deliver_to?: InputMaybe<Scalars['uuid']['input']>;
  error?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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

/** columns and relationships of "nurses" */
export type Nurses = {
  __typename?: 'nurses';
  /** An object relationship */
  account_admin: Facility_Account_Admin;
  account_admin_id: Scalars['uuid']['output'];
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "is_nurse_active" */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_admin: Scalars['Boolean']['output'];
  /** An object relationship */
  location?: Maybe<Locations>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "nurses" */
export type NursesAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


/** columns and relationships of "nurses" */
export type NursesAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};

/** aggregated selection of "nurses" */
export type Nurses_Aggregate = {
  __typename?: 'nurses_aggregate';
  aggregate?: Maybe<Nurses_Aggregate_Fields>;
  nodes: Array<Nurses>;
};

/** aggregate fields of "nurses" */
export type Nurses_Aggregate_Fields = {
  __typename?: 'nurses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nurses_Max_Fields>;
  min?: Maybe<Nurses_Min_Fields>;
};


/** aggregate fields of "nurses" */
export type Nurses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nurses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nurses" */
export type Nurses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nurses_Max_Order_By>;
  min?: InputMaybe<Nurses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nurses" */
export type Nurses_Arr_Rel_Insert_Input = {
  data: Array<Nurses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nurses". All fields are combined with a logical 'AND'. */
export type Nurses_Bool_Exp = {
  _and?: InputMaybe<Array<Nurses_Bool_Exp>>;
  _not?: InputMaybe<Nurses_Bool_Exp>;
  _or?: InputMaybe<Array<Nurses_Bool_Exp>>;
  account_admin?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
  account_admin_id?: InputMaybe<Uuid_Comparison_Exp>;
  appointments?: InputMaybe<Appointments_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  deleted_at?: InputMaybe<String_Comparison_Exp>;
  facility_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "nurses" */
export type Nurses_Constraint =
  /** unique or primary key constraint */
  | 'nurses_pkey';

/** input type for inserting data into table "nurses" */
export type Nurses_Insert_Input = {
  account_admin?: InputMaybe<Facility_Account_Admin_Obj_Rel_Insert_Input>;
  account_admin_id?: InputMaybe<Scalars['uuid']['input']>;
  appointments?: InputMaybe<Appointments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Nurses_Max_Fields = {
  __typename?: 'nurses_max_fields';
  account_admin_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "nurses" */
export type Nurses_Max_Order_By = {
  account_admin_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nurses_Min_Fields = {
  __typename?: 'nurses_min_fields';
  account_admin_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  facility_account_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "nurses" */
export type Nurses_Min_Order_By = {
  account_admin_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nurses" */
export type Nurses_Mutation_Response = {
  __typename?: 'nurses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nurses>;
};

/** input type for inserting object relation for remote table "nurses" */
export type Nurses_Obj_Rel_Insert_Input = {
  data: Nurses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nurses_On_Conflict>;
};

/** on_conflict condition type for table "nurses" */
export type Nurses_On_Conflict = {
  constraint: Nurses_Constraint;
  update_columns?: Array<Nurses_Update_Column>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};

/** Ordering options when selecting data from "nurses". */
export type Nurses_Order_By = {
  account_admin?: InputMaybe<Facility_Account_Admin_Order_By>;
  account_admin_id?: InputMaybe<Order_By>;
  appointments_aggregate?: InputMaybe<Appointments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  facility_account_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nurses */
export type Nurses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nurses" */
export type Nurses_Select_Column =
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

/** input type for updating data in table "nurses" */
export type Nurses_Set_Input = {
  account_admin_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  facility_account_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** this table represents the dates of a doctor which are overridden */
export type Overridden_Dates = {
  __typename?: 'overridden_dates';
  availability_status?: Maybe<Scalars['String']['output']>;
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  date?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  doctor?: Maybe<Doctors>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  time_slots: Array<Override_Time_Slots>;
  /** An aggregate relationship */
  time_slots_aggregate: Override_Time_Slots_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
};


/** this table represents the dates of a doctor which are overridden */
export type Overridden_DatesTime_SlotsArgs = {
  distinct_on?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Override_Time_Slots_Order_By>>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};


/** this table represents the dates of a doctor which are overridden */
export type Overridden_DatesTime_Slots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Override_Time_Slots_Order_By>>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};

/** aggregated selection of "overridden_dates" */
export type Overridden_Dates_Aggregate = {
  __typename?: 'overridden_dates_aggregate';
  aggregate?: Maybe<Overridden_Dates_Aggregate_Fields>;
  nodes: Array<Overridden_Dates>;
};

/** aggregate fields of "overridden_dates" */
export type Overridden_Dates_Aggregate_Fields = {
  __typename?: 'overridden_dates_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Overridden_Dates_Max_Fields>;
  min?: Maybe<Overridden_Dates_Min_Fields>;
};


/** aggregate fields of "overridden_dates" */
export type Overridden_Dates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "overridden_dates" */
export type Overridden_Dates_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Overridden_Dates_Max_Order_By>;
  min?: InputMaybe<Overridden_Dates_Min_Order_By>;
};

/** input type for inserting array relation for remote table "overridden_dates" */
export type Overridden_Dates_Arr_Rel_Insert_Input = {
  data: Array<Overridden_Dates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Overridden_Dates_On_Conflict>;
};

/** Boolean expression to filter rows from the table "overridden_dates". All fields are combined with a logical 'AND'. */
export type Overridden_Dates_Bool_Exp = {
  _and?: InputMaybe<Array<Overridden_Dates_Bool_Exp>>;
  _not?: InputMaybe<Overridden_Dates_Bool_Exp>;
  _or?: InputMaybe<Array<Overridden_Dates_Bool_Exp>>;
  availability_status?: InputMaybe<String_Comparison_Exp>;
  available_from?: InputMaybe<String_Comparison_Exp>;
  available_till?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  doctor?: InputMaybe<Doctors_Bool_Exp>;
  doctor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  time_slots?: InputMaybe<Override_Time_Slots_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "overridden_dates" */
export type Overridden_Dates_Constraint =
  /** unique or primary key constraint */
  | 'overridden_dates_pkey';

/** input type for inserting data into table "overridden_dates" */
export type Overridden_Dates_Insert_Input = {
  availability_status?: InputMaybe<Scalars['String']['input']>;
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  doctor?: InputMaybe<Doctors_Obj_Rel_Insert_Input>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  time_slots?: InputMaybe<Override_Time_Slots_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Overridden_Dates_Max_Fields = {
  __typename?: 'overridden_dates_max_fields';
  availability_status?: Maybe<Scalars['String']['output']>;
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "overridden_dates" */
export type Overridden_Dates_Max_Order_By = {
  availability_status?: InputMaybe<Order_By>;
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Overridden_Dates_Min_Fields = {
  __typename?: 'overridden_dates_min_fields';
  availability_status?: Maybe<Scalars['String']['output']>;
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  doctor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "overridden_dates" */
export type Overridden_Dates_Min_Order_By = {
  availability_status?: InputMaybe<Order_By>;
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "overridden_dates" */
export type Overridden_Dates_Mutation_Response = {
  __typename?: 'overridden_dates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Overridden_Dates>;
};

/** on_conflict condition type for table "overridden_dates" */
export type Overridden_Dates_On_Conflict = {
  constraint: Overridden_Dates_Constraint;
  update_columns?: Array<Overridden_Dates_Update_Column>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};

/** Ordering options when selecting data from "overridden_dates". */
export type Overridden_Dates_Order_By = {
  availability_status?: InputMaybe<Order_By>;
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  doctor?: InputMaybe<Doctors_Order_By>;
  doctor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time_slots_aggregate?: InputMaybe<Override_Time_Slots_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: overridden_dates */
export type Overridden_Dates_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "overridden_dates" */
export type Overridden_Dates_Select_Column =
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

/** input type for updating data in table "overridden_dates" */
export type Overridden_Dates_Set_Input = {
  availability_status?: InputMaybe<Scalars['String']['input']>;
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  doctor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "override_time_slots" */
export type Override_Time_Slots = {
  __typename?: 'override_time_slots';
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  override_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "override_time_slots" */
export type Override_Time_Slots_Aggregate = {
  __typename?: 'override_time_slots_aggregate';
  aggregate?: Maybe<Override_Time_Slots_Aggregate_Fields>;
  nodes: Array<Override_Time_Slots>;
};

/** aggregate fields of "override_time_slots" */
export type Override_Time_Slots_Aggregate_Fields = {
  __typename?: 'override_time_slots_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Override_Time_Slots_Max_Fields>;
  min?: Maybe<Override_Time_Slots_Min_Fields>;
};


/** aggregate fields of "override_time_slots" */
export type Override_Time_Slots_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "override_time_slots" */
export type Override_Time_Slots_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Override_Time_Slots_Max_Order_By>;
  min?: InputMaybe<Override_Time_Slots_Min_Order_By>;
};

/** input type for inserting array relation for remote table "override_time_slots" */
export type Override_Time_Slots_Arr_Rel_Insert_Input = {
  data: Array<Override_Time_Slots_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Override_Time_Slots_On_Conflict>;
};

/** Boolean expression to filter rows from the table "override_time_slots". All fields are combined with a logical 'AND'. */
export type Override_Time_Slots_Bool_Exp = {
  _and?: InputMaybe<Array<Override_Time_Slots_Bool_Exp>>;
  _not?: InputMaybe<Override_Time_Slots_Bool_Exp>;
  _or?: InputMaybe<Array<Override_Time_Slots_Bool_Exp>>;
  available_from?: InputMaybe<String_Comparison_Exp>;
  available_till?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  override_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "override_time_slots" */
export type Override_Time_Slots_Constraint =
  /** unique or primary key constraint */
  | 'override_time_slots_pkey';

/** input type for inserting data into table "override_time_slots" */
export type Override_Time_Slots_Insert_Input = {
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  override_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Override_Time_Slots_Max_Fields = {
  __typename?: 'override_time_slots_max_fields';
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  override_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "override_time_slots" */
export type Override_Time_Slots_Max_Order_By = {
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  override_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Override_Time_Slots_Min_Fields = {
  __typename?: 'override_time_slots_min_fields';
  available_from?: Maybe<Scalars['String']['output']>;
  available_till?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  override_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "override_time_slots" */
export type Override_Time_Slots_Min_Order_By = {
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  override_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "override_time_slots" */
export type Override_Time_Slots_Mutation_Response = {
  __typename?: 'override_time_slots_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Override_Time_Slots>;
};

/** on_conflict condition type for table "override_time_slots" */
export type Override_Time_Slots_On_Conflict = {
  constraint: Override_Time_Slots_Constraint;
  update_columns?: Array<Override_Time_Slots_Update_Column>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};

/** Ordering options when selecting data from "override_time_slots". */
export type Override_Time_Slots_Order_By = {
  available_from?: InputMaybe<Order_By>;
  available_till?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  override_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: override_time_slots */
export type Override_Time_Slots_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "override_time_slots" */
export type Override_Time_Slots_Select_Column =
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

/** input type for updating data in table "override_time_slots" */
export type Override_Time_Slots_Set_Input = {
  available_from?: InputMaybe<Scalars['String']['input']>;
  available_till?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  override_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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

/** This table contains the data of vital intake from nurse before the appointment. */
export type Patient_Vitals = {
  __typename?: 'patient_vitals';
  /** An object relationship */
  appointment: Appointments;
  appointment_id: Scalars['uuid']['output'];
  blood_pressure?: Maybe<Scalars['String']['output']>;
  blood_pressure_diastolic?: Maybe<Scalars['String']['output']>;
  blood_pressure_systolic?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  heart_rate?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  images?: Maybe<Scalars['jsonb']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  oximetry?: Maybe<Scalars['String']['output']>;
  respiratory_rate?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  weight?: Maybe<Scalars['String']['output']>;
};


/** This table contains the data of vital intake from nurse before the appointment. */
export type Patient_VitalsImagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "patient_vitals" */
export type Patient_Vitals_Aggregate = {
  __typename?: 'patient_vitals_aggregate';
  aggregate?: Maybe<Patient_Vitals_Aggregate_Fields>;
  nodes: Array<Patient_Vitals>;
};

/** aggregate fields of "patient_vitals" */
export type Patient_Vitals_Aggregate_Fields = {
  __typename?: 'patient_vitals_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Patient_Vitals_Max_Fields>;
  min?: Maybe<Patient_Vitals_Min_Fields>;
};


/** aggregate fields of "patient_vitals" */
export type Patient_Vitals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Patient_Vitals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Patient_Vitals_Append_Input = {
  images?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "patient_vitals". All fields are combined with a logical 'AND'. */
export type Patient_Vitals_Bool_Exp = {
  _and?: InputMaybe<Array<Patient_Vitals_Bool_Exp>>;
  _not?: InputMaybe<Patient_Vitals_Bool_Exp>;
  _or?: InputMaybe<Array<Patient_Vitals_Bool_Exp>>;
  appointment?: InputMaybe<Appointments_Bool_Exp>;
  appointment_id?: InputMaybe<Uuid_Comparison_Exp>;
  blood_pressure?: InputMaybe<String_Comparison_Exp>;
  blood_pressure_diastolic?: InputMaybe<String_Comparison_Exp>;
  blood_pressure_systolic?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  heart_rate?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<Jsonb_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  oximetry?: InputMaybe<String_Comparison_Exp>;
  respiratory_rate?: InputMaybe<String_Comparison_Exp>;
  temperature?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  weight?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "patient_vitals" */
export type Patient_Vitals_Constraint =
  /** unique or primary key constraint */
  | 'patient_vitals_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Patient_Vitals_Delete_At_Path_Input = {
  images?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Patient_Vitals_Delete_Elem_Input = {
  images?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Patient_Vitals_Delete_Key_Input = {
  images?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "patient_vitals" */
export type Patient_Vitals_Insert_Input = {
  appointment?: InputMaybe<Appointments_Obj_Rel_Insert_Input>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  blood_pressure?: InputMaybe<Scalars['String']['input']>;
  blood_pressure_diastolic?: InputMaybe<Scalars['String']['input']>;
  blood_pressure_systolic?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  heart_rate?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Scalars['jsonb']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  oximetry?: InputMaybe<Scalars['String']['input']>;
  respiratory_rate?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Patient_Vitals_Max_Fields = {
  __typename?: 'patient_vitals_max_fields';
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  blood_pressure?: Maybe<Scalars['String']['output']>;
  blood_pressure_diastolic?: Maybe<Scalars['String']['output']>;
  blood_pressure_systolic?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  heart_rate?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  oximetry?: Maybe<Scalars['String']['output']>;
  respiratory_rate?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Patient_Vitals_Min_Fields = {
  __typename?: 'patient_vitals_min_fields';
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  blood_pressure?: Maybe<Scalars['String']['output']>;
  blood_pressure_diastolic?: Maybe<Scalars['String']['output']>;
  blood_pressure_systolic?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  heart_rate?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  oximetry?: Maybe<Scalars['String']['output']>;
  respiratory_rate?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "patient_vitals" */
export type Patient_Vitals_Mutation_Response = {
  __typename?: 'patient_vitals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Patient_Vitals>;
};

/** input type for inserting object relation for remote table "patient_vitals" */
export type Patient_Vitals_Obj_Rel_Insert_Input = {
  data: Patient_Vitals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Patient_Vitals_On_Conflict>;
};

/** on_conflict condition type for table "patient_vitals" */
export type Patient_Vitals_On_Conflict = {
  constraint: Patient_Vitals_Constraint;
  update_columns?: Array<Patient_Vitals_Update_Column>;
  where?: InputMaybe<Patient_Vitals_Bool_Exp>;
};

/** Ordering options when selecting data from "patient_vitals". */
export type Patient_Vitals_Order_By = {
  appointment?: InputMaybe<Appointments_Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  blood_pressure?: InputMaybe<Order_By>;
  blood_pressure_diastolic?: InputMaybe<Order_By>;
  blood_pressure_systolic?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  heart_rate?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  oximetry?: InputMaybe<Order_By>;
  respiratory_rate?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: patient_vitals */
export type Patient_Vitals_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Patient_Vitals_Prepend_Input = {
  images?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "patient_vitals" */
export type Patient_Vitals_Select_Column =
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

/** input type for updating data in table "patient_vitals" */
export type Patient_Vitals_Set_Input = {
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  blood_pressure?: InputMaybe<Scalars['String']['input']>;
  blood_pressure_diastolic?: InputMaybe<Scalars['String']['input']>;
  blood_pressure_systolic?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  heart_rate?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Scalars['jsonb']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  oximetry?: InputMaybe<Scalars['String']['input']>;
  respiratory_rate?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
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

/** show's prescription's of an appointment */
export type Prescription = {
  __typename?: 'prescription';
  /** An object relationship */
  appointment?: Maybe<Appointments>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  prescription_id?: Maybe<Scalars['String']['output']>;
  prescription_request_id?: Maybe<Scalars['String']['output']>;
  prescription_state?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "prescription" */
export type Prescription_Aggregate = {
  __typename?: 'prescription_aggregate';
  aggregate?: Maybe<Prescription_Aggregate_Fields>;
  nodes: Array<Prescription>;
};

/** aggregate fields of "prescription" */
export type Prescription_Aggregate_Fields = {
  __typename?: 'prescription_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Prescription_Max_Fields>;
  min?: Maybe<Prescription_Min_Fields>;
};


/** aggregate fields of "prescription" */
export type Prescription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prescription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "prescription" */
export type Prescription_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prescription_Max_Order_By>;
  min?: InputMaybe<Prescription_Min_Order_By>;
};

/** input type for inserting array relation for remote table "prescription" */
export type Prescription_Arr_Rel_Insert_Input = {
  data: Array<Prescription_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Prescription_On_Conflict>;
};

/** Boolean expression to filter rows from the table "prescription". All fields are combined with a logical 'AND'. */
export type Prescription_Bool_Exp = {
  _and?: InputMaybe<Array<Prescription_Bool_Exp>>;
  _not?: InputMaybe<Prescription_Bool_Exp>;
  _or?: InputMaybe<Array<Prescription_Bool_Exp>>;
  appointment?: InputMaybe<Appointments_Bool_Exp>;
  appointment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  prescription_id?: InputMaybe<String_Comparison_Exp>;
  prescription_request_id?: InputMaybe<String_Comparison_Exp>;
  prescription_state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "prescription" */
export type Prescription_Constraint =
  /** unique or primary key constraint */
  | 'prescription_pkey';

/** input type for inserting data into table "prescription" */
export type Prescription_Insert_Input = {
  appointment?: InputMaybe<Appointments_Obj_Rel_Insert_Input>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  prescription_id?: InputMaybe<Scalars['String']['input']>;
  prescription_request_id?: InputMaybe<Scalars['String']['input']>;
  prescription_state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Prescription_Max_Fields = {
  __typename?: 'prescription_max_fields';
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  prescription_id?: Maybe<Scalars['String']['output']>;
  prescription_request_id?: Maybe<Scalars['String']['output']>;
  prescription_state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "prescription" */
export type Prescription_Max_Order_By = {
  appointment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  prescription_id?: InputMaybe<Order_By>;
  prescription_request_id?: InputMaybe<Order_By>;
  prescription_state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Prescription_Min_Fields = {
  __typename?: 'prescription_min_fields';
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  prescription_id?: Maybe<Scalars['String']['output']>;
  prescription_request_id?: Maybe<Scalars['String']['output']>;
  prescription_state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "prescription" */
export type Prescription_Min_Order_By = {
  appointment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  prescription_id?: InputMaybe<Order_By>;
  prescription_request_id?: InputMaybe<Order_By>;
  prescription_state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "prescription" */
export type Prescription_Mutation_Response = {
  __typename?: 'prescription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prescription>;
};

/** on_conflict condition type for table "prescription" */
export type Prescription_On_Conflict = {
  constraint: Prescription_Constraint;
  update_columns?: Array<Prescription_Update_Column>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};

/** Ordering options when selecting data from "prescription". */
export type Prescription_Order_By = {
  appointment?: InputMaybe<Appointments_Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  prescription_id?: InputMaybe<Order_By>;
  prescription_request_id?: InputMaybe<Order_By>;
  prescription_state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prescription */
export type Prescription_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "prescription" */
export type Prescription_Select_Column =
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

/** input type for updating data in table "prescription" */
export type Prescription_Set_Input = {
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  prescription_id?: InputMaybe<Scalars['String']['input']>;
  prescription_request_id?: InputMaybe<Scalars['String']['input']>;
  prescription_state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  /** An object relationship */
  UpdatedByUser?: Maybe<Users>;
  additional_data?: Maybe<Scalars['json']['output']>;
  /** An object relationship */
  address?: Maybe<Address>;
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "profile_display_name" */
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "is_profile_active" */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_sign_in?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  specialization?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  updated_by?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "profile" */
export type ProfileAdditional_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
};


/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "profile" */
export type Profile_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profile_Max_Order_By>;
  min?: InputMaybe<Profile_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profile" */
export type Profile_Arr_Rel_Insert_Input = {
  data: Array<Profile_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  UpdatedByUser?: InputMaybe<Users_Bool_Exp>;
  _and?: InputMaybe<Array<Profile_Bool_Exp>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Bool_Exp>>;
  additional_data?: InputMaybe<Json_Comparison_Exp>;
  address?: InputMaybe<Address_Bool_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_sign_in?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  salutation?: InputMaybe<String_Comparison_Exp>;
  specialization?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile" */
export type Profile_Constraint =
  /** unique or primary key constraint */
  | 'profile_pkey'
  /** unique or primary key constraint */
  | 'profile_user_id_key';

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  UpdatedByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  additional_data?: InputMaybe<Scalars['json']['input']>;
  address?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_sign_in?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_sign_in?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  specialization?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "profile" */
export type Profile_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_sign_in?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  salutation?: InputMaybe<Order_By>;
  specialization?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_sign_in?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  specialization?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "profile" */
export type Profile_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_sign_in?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  salutation?: InputMaybe<Order_By>;
  specialization?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profile" */
export type Profile_Mutation_Response = {
  __typename?: 'profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile>;
};

/** input type for inserting object relation for remote table "profile" */
export type Profile_Obj_Rel_Insert_Input = {
  data: Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** on_conflict condition type for table "profile" */
export type Profile_On_Conflict = {
  constraint: Profile_Constraint;
  update_columns?: Array<Profile_Update_Column>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  UpdatedByUser?: InputMaybe<Users_Order_By>;
  additional_data?: InputMaybe<Order_By>;
  address?: InputMaybe<Address_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_sign_in?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  salutation?: InputMaybe<Order_By>;
  specialization?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profile */
export type Profile_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "profile" */
export type Profile_Select_Column =
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

/** input type for updating data in table "profile" */
export type Profile_Set_Input = {
  additional_data?: InputMaybe<Scalars['json']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_sign_in?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  /** fetch data from the table: "appointments" using primary key columns */
  appointments_by_pk?: Maybe<Appointments>;
  /** fetch data from the table: "appointments_state_enum" */
  appointments_state_enum: Array<Appointments_State_Enum>;
  /** fetch aggregated fields from the table: "appointments_state_enum" */
  appointments_state_enum_aggregate: Appointments_State_Enum_Aggregate;
  /** fetch data from the table: "appointments_state_enum" using primary key columns */
  appointments_state_enum_by_pk?: Maybe<Appointments_State_Enum>;
  /** fetch data from the table: "audit_logs" */
  audit_logs: Array<Audit_Logs>;
  /** fetch aggregated fields from the table: "audit_logs" */
  audit_logs_aggregate: Audit_Logs_Aggregate;
  /** fetch data from the table: "audit_logs" using primary key columns */
  audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "doctor_appointment_alert" */
  doctor_appointment_alert: Array<Doctor_Appointment_Alert>;
  /** fetch aggregated fields from the table: "doctor_appointment_alert" */
  doctor_appointment_alert_aggregate: Doctor_Appointment_Alert_Aggregate;
  /** fetch data from the table: "doctor_appointment_alert" using primary key columns */
  doctor_appointment_alert_by_pk?: Maybe<Doctor_Appointment_Alert>;
  /** fetch data from the table: "doctor_appointments_response_enum" */
  doctor_appointments_response_enum: Array<Doctor_Appointments_Response_Enum>;
  /** fetch aggregated fields from the table: "doctor_appointments_response_enum" */
  doctor_appointments_response_enum_aggregate: Doctor_Appointments_Response_Enum_Aggregate;
  /** fetch data from the table: "doctor_appointments_response_enum" using primary key columns */
  doctor_appointments_response_enum_by_pk?: Maybe<Doctor_Appointments_Response_Enum>;
  /** fetch data from the table: "doctor_subscriptions" */
  doctor_subscriptions: Array<Doctor_Subscriptions>;
  /** fetch aggregated fields from the table: "doctor_subscriptions" */
  doctor_subscriptions_aggregate: Doctor_Subscriptions_Aggregate;
  /** fetch data from the table: "doctor_subscriptions" using primary key columns */
  doctor_subscriptions_by_pk?: Maybe<Doctor_Subscriptions>;
  /** fetch data from the table: "doctor_validation_state_enum" */
  doctor_validation_state_enum: Array<Doctor_Validation_State_Enum>;
  /** fetch aggregated fields from the table: "doctor_validation_state_enum" */
  doctor_validation_state_enum_aggregate: Doctor_Validation_State_Enum_Aggregate;
  /** fetch data from the table: "doctor_validation_state_enum" using primary key columns */
  doctor_validation_state_enum_by_pk?: Maybe<Doctor_Validation_State_Enum>;
  /** fetch data from the table: "doctor_weekly_availability" */
  doctor_weekly_availability: Array<Doctor_Weekly_Availability>;
  /** fetch aggregated fields from the table: "doctor_weekly_availability" */
  doctor_weekly_availability_aggregate: Doctor_Weekly_Availability_Aggregate;
  /** fetch data from the table: "doctor_weekly_availability" using primary key columns */
  doctor_weekly_availability_by_pk?: Maybe<Doctor_Weekly_Availability>;
  /** An array relationship */
  doctors: Array<Doctors>;
  /** An aggregate relationship */
  doctors_aggregate: Doctors_Aggregate;
  /** fetch data from the table: "doctors" using primary key columns */
  doctors_by_pk?: Maybe<Doctors>;
  /** An array relationship */
  external_api_call_logs: Array<External_Api_Call_Logs>;
  /** An aggregate relationship */
  external_api_call_logs_aggregate: External_Api_Call_Logs_Aggregate;
  /** fetch data from the table: "external_api_call_logs" using primary key columns */
  external_api_call_logs_by_pk?: Maybe<External_Api_Call_Logs>;
  /** fetch data from the table: "facility_account_admin" */
  facility_account_admin: Array<Facility_Account_Admin>;
  /** fetch aggregated fields from the table: "facility_account_admin" */
  facility_account_admin_aggregate: Facility_Account_Admin_Aggregate;
  /** fetch data from the table: "facility_account_admin" using primary key columns */
  facility_account_admin_by_pk?: Maybe<Facility_Account_Admin>;
  /** fetch data from the table: "facility_account_subscription" */
  facility_account_subscription: Array<Facility_Account_Subscription>;
  /** fetch aggregated fields from the table: "facility_account_subscription" */
  facility_account_subscription_aggregate: Facility_Account_Subscription_Aggregate;
  /** fetch data from the table: "facility_account_subscription" using primary key columns */
  facility_account_subscription_by_pk?: Maybe<Facility_Account_Subscription>;
  /** An array relationship */
  facility_accounts: Array<Facility_Accounts>;
  /** An aggregate relationship */
  facility_accounts_aggregate: Facility_Accounts_Aggregate;
  /** fetch data from the table: "facility_accounts_apis" */
  facility_accounts_apis: Array<Facility_Accounts_Apis>;
  /** fetch aggregated fields from the table: "facility_accounts_apis" */
  facility_accounts_apis_aggregate: Facility_Accounts_Apis_Aggregate;
  /** fetch data from the table: "facility_accounts_apis" using primary key columns */
  facility_accounts_apis_by_pk?: Maybe<Facility_Accounts_Apis>;
  /** fetch data from the table: "facility_accounts" using primary key columns */
  facility_accounts_by_pk?: Maybe<Facility_Accounts>;
  /** fetch data from the table: "galen_staff" */
  galen_staff: Array<Galen_Staff>;
  /** fetch aggregated fields from the table: "galen_staff" */
  galen_staff_aggregate: Galen_Staff_Aggregate;
  /** fetch data from the table: "galen_staff" using primary key columns */
  galen_staff_by_pk?: Maybe<Galen_Staff>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "locations_doctors" */
  locations_doctors: Array<Locations_Doctors>;
  /** fetch aggregated fields from the table: "locations_doctors" */
  locations_doctors_aggregate: Locations_Doctors_Aggregate;
  /** fetch data from the table: "locations_doctors" using primary key columns */
  locations_doctors_by_pk?: Maybe<Locations_Doctors>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** An array relationship */
  nurses: Array<Nurses>;
  /** An aggregate relationship */
  nurses_aggregate: Nurses_Aggregate;
  /** fetch data from the table: "nurses" using primary key columns */
  nurses_by_pk?: Maybe<Nurses>;
  /** An array relationship */
  overridden_dates: Array<Overridden_Dates>;
  /** An aggregate relationship */
  overridden_dates_aggregate: Overridden_Dates_Aggregate;
  /** fetch data from the table: "overridden_dates" using primary key columns */
  overridden_dates_by_pk?: Maybe<Overridden_Dates>;
  /** fetch data from the table: "override_time_slots" */
  override_time_slots: Array<Override_Time_Slots>;
  /** fetch aggregated fields from the table: "override_time_slots" */
  override_time_slots_aggregate: Override_Time_Slots_Aggregate;
  /** fetch data from the table: "override_time_slots" using primary key columns */
  override_time_slots_by_pk?: Maybe<Override_Time_Slots>;
  /** fetch data from the table: "patient_vitals" */
  patient_vitals: Array<Patient_Vitals>;
  /** fetch aggregated fields from the table: "patient_vitals" */
  patient_vitals_aggregate: Patient_Vitals_Aggregate;
  /** fetch data from the table: "patient_vitals" using primary key columns */
  patient_vitals_by_pk?: Maybe<Patient_Vitals>;
  /** fetch data from the table: "prescription" */
  prescription: Array<Prescription>;
  /** fetch aggregated fields from the table: "prescription" */
  prescription_aggregate: Prescription_Aggregate;
  /** fetch data from the table: "prescription" using primary key columns */
  prescription_by_pk?: Maybe<Prescription>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "trusted_devices" */
  trusted_devices: Array<Trusted_Devices>;
  /** fetch aggregated fields from the table: "trusted_devices" */
  trusted_devices_aggregate: Trusted_Devices_Aggregate;
  /** fetch data from the table: "trusted_devices" using primary key columns */
  trusted_devices_by_pk?: Maybe<Trusted_Devices>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "waiting_room_status_enum" */
  waiting_room_status_enum: Array<Waiting_Room_Status_Enum>;
  /** fetch aggregated fields from the table: "waiting_room_status_enum" */
  waiting_room_status_enum_aggregate: Waiting_Room_Status_Enum_Aggregate;
  /** fetch data from the table: "waiting_room_status_enum" using primary key columns */
  waiting_room_status_enum_by_pk?: Maybe<Waiting_Room_Status_Enum>;
  /** fetch data from the table: "waiting_rooms" */
  waiting_rooms: Array<Waiting_Rooms>;
  /** fetch aggregated fields from the table: "waiting_rooms" */
  waiting_rooms_aggregate: Waiting_Rooms_Aggregate;
  /** fetch data from the table: "waiting_rooms" using primary key columns */
  waiting_rooms_by_pk?: Maybe<Waiting_Rooms>;
};


export type Query_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


export type Query_RootAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


export type Query_RootAppointments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAppointments_State_EnumArgs = {
  distinct_on?: InputMaybe<Array<Appointments_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_State_Enum_Order_By>>;
  where?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
};


export type Query_RootAppointments_State_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_State_Enum_Order_By>>;
  where?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
};


export type Query_RootAppointments_State_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAudit_LogsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Query_RootAudit_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Query_RootAudit_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String']['input'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid']['input'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootDoctor_Appointment_AlertArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointment_Alert_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointment_Alert_Order_By>>;
  where?: InputMaybe<Doctor_Appointment_Alert_Bool_Exp>;
};


export type Query_RootDoctor_Appointment_Alert_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointment_Alert_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointment_Alert_Order_By>>;
  where?: InputMaybe<Doctor_Appointment_Alert_Bool_Exp>;
};


export type Query_RootDoctor_Appointment_Alert_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDoctor_Appointments_Response_EnumArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
};


export type Query_RootDoctor_Appointments_Response_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
};


export type Query_RootDoctor_Appointments_Response_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootDoctor_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Subscriptions_Order_By>>;
  where?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
};


export type Query_RootDoctor_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Subscriptions_Order_By>>;
  where?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
};


export type Query_RootDoctor_Subscriptions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDoctor_Validation_State_EnumArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Validation_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Validation_State_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
};


export type Query_RootDoctor_Validation_State_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Validation_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Validation_State_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
};


export type Query_RootDoctor_Validation_State_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootDoctor_Weekly_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Weekly_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Weekly_Availability_Order_By>>;
  where?: InputMaybe<Doctor_Weekly_Availability_Bool_Exp>;
};


export type Query_RootDoctor_Weekly_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Weekly_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Weekly_Availability_Order_By>>;
  where?: InputMaybe<Doctor_Weekly_Availability_Bool_Exp>;
};


export type Query_RootDoctor_Weekly_Availability_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDoctorsArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


export type Query_RootDoctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


export type Query_RootDoctors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExternal_Api_Call_LogsArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


export type Query_RootExternal_Api_Call_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


export type Query_RootExternal_Api_Call_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFacility_Account_AdminArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Admin_Order_By>>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};


export type Query_RootFacility_Account_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Admin_Order_By>>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};


export type Query_RootFacility_Account_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFacility_Account_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Subscription_Order_By>>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};


export type Query_RootFacility_Account_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Subscription_Order_By>>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};


export type Query_RootFacility_Account_Subscription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFacility_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};


export type Query_RootFacility_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};


export type Query_RootFacility_Accounts_ApisArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Apis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Apis_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Apis_Bool_Exp>;
};


export type Query_RootFacility_Accounts_Apis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Apis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Apis_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Apis_Bool_Exp>;
};


export type Query_RootFacility_Accounts_Apis_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFacility_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGalen_StaffArgs = {
  distinct_on?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Galen_Staff_Order_By>>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};


export type Query_RootGalen_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Galen_Staff_Order_By>>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};


export type Query_RootGalen_Staff_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLocations_DoctorsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Doctors_Order_By>>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};


export type Query_RootLocations_Doctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Doctors_Order_By>>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};


export type Query_RootLocations_Doctors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Query_RootNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Query_RootNurses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOverridden_DatesArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


export type Query_RootOverridden_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


export type Query_RootOverridden_Dates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOverride_Time_SlotsArgs = {
  distinct_on?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Override_Time_Slots_Order_By>>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};


export type Query_RootOverride_Time_Slots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Override_Time_Slots_Order_By>>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};


export type Query_RootOverride_Time_Slots_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPatient_VitalsArgs = {
  distinct_on?: InputMaybe<Array<Patient_Vitals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patient_Vitals_Order_By>>;
  where?: InputMaybe<Patient_Vitals_Bool_Exp>;
};


export type Query_RootPatient_Vitals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Patient_Vitals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patient_Vitals_Order_By>>;
  where?: InputMaybe<Patient_Vitals_Bool_Exp>;
};


export type Query_RootPatient_Vitals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrescriptionArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Query_RootPrescription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Query_RootPrescription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTrusted_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Trusted_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trusted_Devices_Order_By>>;
  where?: InputMaybe<Trusted_Devices_Bool_Exp>;
};


export type Query_RootTrusted_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trusted_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trusted_Devices_Order_By>>;
  where?: InputMaybe<Trusted_Devices_Bool_Exp>;
};


export type Query_RootTrusted_Devices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWaiting_Room_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Room_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Room_Status_Enum_Order_By>>;
  where?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
};


export type Query_RootWaiting_Room_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Room_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Room_Status_Enum_Order_By>>;
  where?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
};


export type Query_RootWaiting_Room_Status_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootWaiting_RoomsArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Rooms_Order_By>>;
  where?: InputMaybe<Waiting_Rooms_Bool_Exp>;
};


export type Query_RootWaiting_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Rooms_Order_By>>;
  where?: InputMaybe<Waiting_Rooms_Bool_Exp>;
};


export type Query_RootWaiting_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Self_Signup_Action_Type =
  | 'create'
  | 'update';

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** An array relationship */
  appointments: Array<Appointments>;
  /** An aggregate relationship */
  appointments_aggregate: Appointments_Aggregate;
  /** fetch data from the table: "appointments" using primary key columns */
  appointments_by_pk?: Maybe<Appointments>;
  /** fetch data from the table: "appointments_state_enum" */
  appointments_state_enum: Array<Appointments_State_Enum>;
  /** fetch aggregated fields from the table: "appointments_state_enum" */
  appointments_state_enum_aggregate: Appointments_State_Enum_Aggregate;
  /** fetch data from the table: "appointments_state_enum" using primary key columns */
  appointments_state_enum_by_pk?: Maybe<Appointments_State_Enum>;
  /** fetch data from the table: "audit_logs" */
  audit_logs: Array<Audit_Logs>;
  /** fetch aggregated fields from the table: "audit_logs" */
  audit_logs_aggregate: Audit_Logs_Aggregate;
  /** fetch data from the table: "audit_logs" using primary key columns */
  audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "doctor_appointment_alert" */
  doctor_appointment_alert: Array<Doctor_Appointment_Alert>;
  /** fetch aggregated fields from the table: "doctor_appointment_alert" */
  doctor_appointment_alert_aggregate: Doctor_Appointment_Alert_Aggregate;
  /** fetch data from the table: "doctor_appointment_alert" using primary key columns */
  doctor_appointment_alert_by_pk?: Maybe<Doctor_Appointment_Alert>;
  /** fetch data from the table: "doctor_appointments_response_enum" */
  doctor_appointments_response_enum: Array<Doctor_Appointments_Response_Enum>;
  /** fetch aggregated fields from the table: "doctor_appointments_response_enum" */
  doctor_appointments_response_enum_aggregate: Doctor_Appointments_Response_Enum_Aggregate;
  /** fetch data from the table: "doctor_appointments_response_enum" using primary key columns */
  doctor_appointments_response_enum_by_pk?: Maybe<Doctor_Appointments_Response_Enum>;
  /** fetch data from the table: "doctor_subscriptions" */
  doctor_subscriptions: Array<Doctor_Subscriptions>;
  /** fetch aggregated fields from the table: "doctor_subscriptions" */
  doctor_subscriptions_aggregate: Doctor_Subscriptions_Aggregate;
  /** fetch data from the table: "doctor_subscriptions" using primary key columns */
  doctor_subscriptions_by_pk?: Maybe<Doctor_Subscriptions>;
  /** fetch data from the table: "doctor_validation_state_enum" */
  doctor_validation_state_enum: Array<Doctor_Validation_State_Enum>;
  /** fetch aggregated fields from the table: "doctor_validation_state_enum" */
  doctor_validation_state_enum_aggregate: Doctor_Validation_State_Enum_Aggregate;
  /** fetch data from the table: "doctor_validation_state_enum" using primary key columns */
  doctor_validation_state_enum_by_pk?: Maybe<Doctor_Validation_State_Enum>;
  /** fetch data from the table: "doctor_weekly_availability" */
  doctor_weekly_availability: Array<Doctor_Weekly_Availability>;
  /** fetch aggregated fields from the table: "doctor_weekly_availability" */
  doctor_weekly_availability_aggregate: Doctor_Weekly_Availability_Aggregate;
  /** fetch data from the table: "doctor_weekly_availability" using primary key columns */
  doctor_weekly_availability_by_pk?: Maybe<Doctor_Weekly_Availability>;
  /** An array relationship */
  doctors: Array<Doctors>;
  /** An aggregate relationship */
  doctors_aggregate: Doctors_Aggregate;
  /** fetch data from the table: "doctors" using primary key columns */
  doctors_by_pk?: Maybe<Doctors>;
  /** An array relationship */
  external_api_call_logs: Array<External_Api_Call_Logs>;
  /** An aggregate relationship */
  external_api_call_logs_aggregate: External_Api_Call_Logs_Aggregate;
  /** fetch data from the table: "external_api_call_logs" using primary key columns */
  external_api_call_logs_by_pk?: Maybe<External_Api_Call_Logs>;
  /** fetch data from the table: "facility_account_admin" */
  facility_account_admin: Array<Facility_Account_Admin>;
  /** fetch aggregated fields from the table: "facility_account_admin" */
  facility_account_admin_aggregate: Facility_Account_Admin_Aggregate;
  /** fetch data from the table: "facility_account_admin" using primary key columns */
  facility_account_admin_by_pk?: Maybe<Facility_Account_Admin>;
  /** fetch data from the table: "facility_account_subscription" */
  facility_account_subscription: Array<Facility_Account_Subscription>;
  /** fetch aggregated fields from the table: "facility_account_subscription" */
  facility_account_subscription_aggregate: Facility_Account_Subscription_Aggregate;
  /** fetch data from the table: "facility_account_subscription" using primary key columns */
  facility_account_subscription_by_pk?: Maybe<Facility_Account_Subscription>;
  /** An array relationship */
  facility_accounts: Array<Facility_Accounts>;
  /** An aggregate relationship */
  facility_accounts_aggregate: Facility_Accounts_Aggregate;
  /** fetch data from the table: "facility_accounts_apis" */
  facility_accounts_apis: Array<Facility_Accounts_Apis>;
  /** fetch aggregated fields from the table: "facility_accounts_apis" */
  facility_accounts_apis_aggregate: Facility_Accounts_Apis_Aggregate;
  /** fetch data from the table: "facility_accounts_apis" using primary key columns */
  facility_accounts_apis_by_pk?: Maybe<Facility_Accounts_Apis>;
  /** fetch data from the table: "facility_accounts" using primary key columns */
  facility_accounts_by_pk?: Maybe<Facility_Accounts>;
  /** fetch data from the table: "galen_staff" */
  galen_staff: Array<Galen_Staff>;
  /** fetch aggregated fields from the table: "galen_staff" */
  galen_staff_aggregate: Galen_Staff_Aggregate;
  /** fetch data from the table: "galen_staff" using primary key columns */
  galen_staff_by_pk?: Maybe<Galen_Staff>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "locations_doctors" */
  locations_doctors: Array<Locations_Doctors>;
  /** fetch aggregated fields from the table: "locations_doctors" */
  locations_doctors_aggregate: Locations_Doctors_Aggregate;
  /** fetch data from the table: "locations_doctors" using primary key columns */
  locations_doctors_by_pk?: Maybe<Locations_Doctors>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** An array relationship */
  nurses: Array<Nurses>;
  /** An aggregate relationship */
  nurses_aggregate: Nurses_Aggregate;
  /** fetch data from the table: "nurses" using primary key columns */
  nurses_by_pk?: Maybe<Nurses>;
  /** An array relationship */
  overridden_dates: Array<Overridden_Dates>;
  /** An aggregate relationship */
  overridden_dates_aggregate: Overridden_Dates_Aggregate;
  /** fetch data from the table: "overridden_dates" using primary key columns */
  overridden_dates_by_pk?: Maybe<Overridden_Dates>;
  /** fetch data from the table: "override_time_slots" */
  override_time_slots: Array<Override_Time_Slots>;
  /** fetch aggregated fields from the table: "override_time_slots" */
  override_time_slots_aggregate: Override_Time_Slots_Aggregate;
  /** fetch data from the table: "override_time_slots" using primary key columns */
  override_time_slots_by_pk?: Maybe<Override_Time_Slots>;
  /** fetch data from the table: "patient_vitals" */
  patient_vitals: Array<Patient_Vitals>;
  /** fetch aggregated fields from the table: "patient_vitals" */
  patient_vitals_aggregate: Patient_Vitals_Aggregate;
  /** fetch data from the table: "patient_vitals" using primary key columns */
  patient_vitals_by_pk?: Maybe<Patient_Vitals>;
  /** fetch data from the table: "prescription" */
  prescription: Array<Prescription>;
  /** fetch aggregated fields from the table: "prescription" */
  prescription_aggregate: Prescription_Aggregate;
  /** fetch data from the table: "prescription" using primary key columns */
  prescription_by_pk?: Maybe<Prescription>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "trusted_devices" */
  trusted_devices: Array<Trusted_Devices>;
  /** fetch aggregated fields from the table: "trusted_devices" */
  trusted_devices_aggregate: Trusted_Devices_Aggregate;
  /** fetch data from the table: "trusted_devices" using primary key columns */
  trusted_devices_by_pk?: Maybe<Trusted_Devices>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "waiting_room_status_enum" */
  waiting_room_status_enum: Array<Waiting_Room_Status_Enum>;
  /** fetch aggregated fields from the table: "waiting_room_status_enum" */
  waiting_room_status_enum_aggregate: Waiting_Room_Status_Enum_Aggregate;
  /** fetch data from the table: "waiting_room_status_enum" using primary key columns */
  waiting_room_status_enum_by_pk?: Maybe<Waiting_Room_Status_Enum>;
  /** fetch data from the table: "waiting_rooms" */
  waiting_rooms: Array<Waiting_Rooms>;
  /** fetch aggregated fields from the table: "waiting_rooms" */
  waiting_rooms_aggregate: Waiting_Rooms_Aggregate;
  /** fetch data from the table: "waiting_rooms" using primary key columns */
  waiting_rooms_by_pk?: Maybe<Waiting_Rooms>;
};


export type Subscription_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAppointmentsArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


export type Subscription_RootAppointments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_Order_By>>;
  where?: InputMaybe<Appointments_Bool_Exp>;
};


export type Subscription_RootAppointments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAppointments_State_EnumArgs = {
  distinct_on?: InputMaybe<Array<Appointments_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_State_Enum_Order_By>>;
  where?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
};


export type Subscription_RootAppointments_State_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Appointments_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Appointments_State_Enum_Order_By>>;
  where?: InputMaybe<Appointments_State_Enum_Bool_Exp>;
};


export type Subscription_RootAppointments_State_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAudit_LogsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Subscription_RootAudit_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Subscription_RootAudit_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Providers_Order_By>>;
  where?: InputMaybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Providers_Order_By>>;
  where?: InputMaybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String']['input'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootDoctor_Appointment_AlertArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointment_Alert_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointment_Alert_Order_By>>;
  where?: InputMaybe<Doctor_Appointment_Alert_Bool_Exp>;
};


export type Subscription_RootDoctor_Appointment_Alert_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointment_Alert_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointment_Alert_Order_By>>;
  where?: InputMaybe<Doctor_Appointment_Alert_Bool_Exp>;
};


export type Subscription_RootDoctor_Appointment_Alert_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDoctor_Appointments_Response_EnumArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
};


export type Subscription_RootDoctor_Appointments_Response_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Appointments_Response_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Appointments_Response_Enum_Bool_Exp>;
};


export type Subscription_RootDoctor_Appointments_Response_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootDoctor_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Subscriptions_Order_By>>;
  where?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
};


export type Subscription_RootDoctor_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Subscriptions_Order_By>>;
  where?: InputMaybe<Doctor_Subscriptions_Bool_Exp>;
};


export type Subscription_RootDoctor_Subscriptions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDoctor_Validation_State_EnumArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Validation_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Validation_State_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
};


export type Subscription_RootDoctor_Validation_State_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Validation_State_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Validation_State_Enum_Order_By>>;
  where?: InputMaybe<Doctor_Validation_State_Enum_Bool_Exp>;
};


export type Subscription_RootDoctor_Validation_State_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootDoctor_Weekly_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Weekly_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Weekly_Availability_Order_By>>;
  where?: InputMaybe<Doctor_Weekly_Availability_Bool_Exp>;
};


export type Subscription_RootDoctor_Weekly_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctor_Weekly_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctor_Weekly_Availability_Order_By>>;
  where?: InputMaybe<Doctor_Weekly_Availability_Bool_Exp>;
};


export type Subscription_RootDoctor_Weekly_Availability_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDoctorsArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


export type Subscription_RootDoctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


export type Subscription_RootDoctors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExternal_Api_Call_LogsArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


export type Subscription_RootExternal_Api_Call_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Api_Call_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Api_Call_Logs_Order_By>>;
  where?: InputMaybe<External_Api_Call_Logs_Bool_Exp>;
};


export type Subscription_RootExternal_Api_Call_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFacility_Account_AdminArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Admin_Order_By>>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};


export type Subscription_RootFacility_Account_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Admin_Order_By>>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};


export type Subscription_RootFacility_Account_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFacility_Account_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Subscription_Order_By>>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};


export type Subscription_RootFacility_Account_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Subscription_Order_By>>;
  where?: InputMaybe<Facility_Account_Subscription_Bool_Exp>;
};


export type Subscription_RootFacility_Account_Subscription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFacility_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};


export type Subscription_RootFacility_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};


export type Subscription_RootFacility_Accounts_ApisArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Apis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Apis_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Apis_Bool_Exp>;
};


export type Subscription_RootFacility_Accounts_Apis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Apis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Apis_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Apis_Bool_Exp>;
};


export type Subscription_RootFacility_Accounts_Apis_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFacility_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGalen_StaffArgs = {
  distinct_on?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Galen_Staff_Order_By>>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};


export type Subscription_RootGalen_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Galen_Staff_Order_By>>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};


export type Subscription_RootGalen_Staff_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLocations_DoctorsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Doctors_Order_By>>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};


export type Subscription_RootLocations_Doctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Doctors_Order_By>>;
  where?: InputMaybe<Locations_Doctors_Bool_Exp>;
};


export type Subscription_RootLocations_Doctors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Subscription_RootNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


export type Subscription_RootNurses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOverridden_DatesArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


export type Subscription_RootOverridden_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


export type Subscription_RootOverridden_Dates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOverride_Time_SlotsArgs = {
  distinct_on?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Override_Time_Slots_Order_By>>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};


export type Subscription_RootOverride_Time_Slots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Override_Time_Slots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Override_Time_Slots_Order_By>>;
  where?: InputMaybe<Override_Time_Slots_Bool_Exp>;
};


export type Subscription_RootOverride_Time_Slots_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPatient_VitalsArgs = {
  distinct_on?: InputMaybe<Array<Patient_Vitals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patient_Vitals_Order_By>>;
  where?: InputMaybe<Patient_Vitals_Bool_Exp>;
};


export type Subscription_RootPatient_Vitals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Patient_Vitals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Patient_Vitals_Order_By>>;
  where?: InputMaybe<Patient_Vitals_Bool_Exp>;
};


export type Subscription_RootPatient_Vitals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrescriptionArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Subscription_RootPrescription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prescription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prescription_Order_By>>;
  where?: InputMaybe<Prescription_Bool_Exp>;
};


export type Subscription_RootPrescription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTrusted_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Trusted_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trusted_Devices_Order_By>>;
  where?: InputMaybe<Trusted_Devices_Bool_Exp>;
};


export type Subscription_RootTrusted_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trusted_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trusted_Devices_Order_By>>;
  where?: InputMaybe<Trusted_Devices_Bool_Exp>;
};


export type Subscription_RootTrusted_Devices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWaiting_Room_Status_EnumArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Room_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Room_Status_Enum_Order_By>>;
  where?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
};


export type Subscription_RootWaiting_Room_Status_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Room_Status_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Room_Status_Enum_Order_By>>;
  where?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
};


export type Subscription_RootWaiting_Room_Status_Enum_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootWaiting_RoomsArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Rooms_Order_By>>;
  where?: InputMaybe<Waiting_Rooms_Bool_Exp>;
};


export type Subscription_RootWaiting_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Waiting_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Waiting_Rooms_Order_By>>;
  where?: InputMaybe<Waiting_Rooms_Bool_Exp>;
};


export type Subscription_RootWaiting_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "trusted_devices" */
export type Trusted_Devices = {
  __typename?: 'trusted_devices';
  created_at: Scalars['timestamptz']['output'];
  device_info?: Maybe<Scalars['String']['output']>;
  expires_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  refresh_token: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "trusted_devices" */
export type Trusted_Devices_Aggregate = {
  __typename?: 'trusted_devices_aggregate';
  aggregate?: Maybe<Trusted_Devices_Aggregate_Fields>;
  nodes: Array<Trusted_Devices>;
};

/** aggregate fields of "trusted_devices" */
export type Trusted_Devices_Aggregate_Fields = {
  __typename?: 'trusted_devices_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Trusted_Devices_Max_Fields>;
  min?: Maybe<Trusted_Devices_Min_Fields>;
};


/** aggregate fields of "trusted_devices" */
export type Trusted_Devices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trusted_Devices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "trusted_devices". All fields are combined with a logical 'AND'. */
export type Trusted_Devices_Bool_Exp = {
  _and?: InputMaybe<Array<Trusted_Devices_Bool_Exp>>;
  _not?: InputMaybe<Trusted_Devices_Bool_Exp>;
  _or?: InputMaybe<Array<Trusted_Devices_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device_info?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "trusted_devices" */
export type Trusted_Devices_Constraint =
  /** unique or primary key constraint */
  | 'trusted_devices_pkey'
  /** unique or primary key constraint */
  | 'trusted_devices_token_key';

/** input type for inserting data into table "trusted_devices" */
export type Trusted_Devices_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  device_info?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Trusted_Devices_Max_Fields = {
  __typename?: 'trusted_devices_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  device_info?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Trusted_Devices_Min_Fields = {
  __typename?: 'trusted_devices_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  device_info?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "trusted_devices" */
export type Trusted_Devices_Mutation_Response = {
  __typename?: 'trusted_devices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Trusted_Devices>;
};

/** on_conflict condition type for table "trusted_devices" */
export type Trusted_Devices_On_Conflict = {
  constraint: Trusted_Devices_Constraint;
  update_columns?: Array<Trusted_Devices_Update_Column>;
  where?: InputMaybe<Trusted_Devices_Bool_Exp>;
};

/** Ordering options when selecting data from "trusted_devices". */
export type Trusted_Devices_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_info?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trusted_devices */
export type Trusted_Devices_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "trusted_devices" */
export type Trusted_Devices_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'device_info'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'id'
  /** column name */
  | 'refresh_token'
  /** column name */
  | 'token'
  /** column name */
  | 'user_id';

/** input type for updating data in table "trusted_devices" */
export type Trusted_Devices_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  device_info?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "trusted_devices" */
export type Trusted_Devices_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'device_info'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'id'
  /** column name */
  | 'refresh_token'
  /** column name */
  | 'token'
  /** column name */
  | 'user_id';

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  /** An array relationship */
  account_admins: Array<Facility_Account_Admin>;
  /** An aggregate relationship */
  account_admins_aggregate: Facility_Account_Admin_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  display_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  doctors: Array<Doctors>;
  /** An aggregate relationship */
  doctors_aggregate: Doctors_Aggregate;
  /** An array relationship */
  facility_accounts: Array<Facility_Accounts>;
  /** An aggregate relationship */
  facility_accounts_aggregate: Facility_Accounts_Aggregate;
  first_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  galen_staffs: Array<Galen_Staff>;
  /** An aggregate relationship */
  galen_staffs_aggregate: Galen_Staff_Aggregate;
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "is_usr_active" */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** An array relationship */
  nurses: Array<Nurses>;
  /** An aggregate relationship */
  nurses_aggregate: Nurses_Aggregate;
  /** An array relationship */
  overridden_dates: Array<Overridden_Dates>;
  /** An aggregate relationship */
  overridden_dates_aggregate: Overridden_Dates_Aggregate;
  /** An object relationship */
  profile?: Maybe<Profile>;
  /** An object relationship */
  profileById?: Maybe<Profile>;
  /** An array relationship */
  profiles: Array<Profile>;
  /** An aggregate relationship */
  profiles_aggregate: Profile_Aggregate;
  /** A computed field, executes function "users_role" */
  role?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "users" */
export type UsersAccount_AdminsArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Admin_Order_By>>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccount_Admins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Account_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Account_Admin_Order_By>>;
  where?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDoctorsArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDoctors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Doctors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Doctors_Order_By>>;
  where?: InputMaybe<Doctors_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFacility_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFacility_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Facility_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Facility_Accounts_Order_By>>;
  where?: InputMaybe<Facility_Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGalen_StaffsArgs = {
  distinct_on?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Galen_Staff_Order_By>>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGalen_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Galen_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Galen_Staff_Order_By>>;
  where?: InputMaybe<Galen_Staff_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNursesArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNurses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nurses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nurses_Order_By>>;
  where?: InputMaybe<Nurses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOverridden_DatesArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOverridden_Dates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Overridden_Dates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Overridden_Dates_Order_By>>;
  where?: InputMaybe<Overridden_Dates_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_admins?: InputMaybe<Facility_Account_Admin_Bool_Exp>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  doctors?: InputMaybe<Doctors_Bool_Exp>;
  facility_accounts?: InputMaybe<Facility_Accounts_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  galen_staffs?: InputMaybe<Galen_Staff_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  notifications?: InputMaybe<Notifications_Bool_Exp>;
  nurses?: InputMaybe<Nurses_Bool_Exp>;
  overridden_dates?: InputMaybe<Overridden_Dates_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileById?: InputMaybe<Profile_Bool_Exp>;
  profiles?: InputMaybe<Profile_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_admins?: InputMaybe<Facility_Account_Admin_Arr_Rel_Insert_Input>;
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  doctors?: InputMaybe<Doctors_Arr_Rel_Insert_Input>;
  facility_accounts?: InputMaybe<Facility_Accounts_Arr_Rel_Insert_Input>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  galen_staffs?: InputMaybe<Galen_Staff_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<Notifications_Arr_Rel_Insert_Input>;
  nurses?: InputMaybe<Nurses_Arr_Rel_Insert_Input>;
  overridden_dates?: InputMaybe<Overridden_Dates_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileById?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profiles?: InputMaybe<Profile_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_admins_aggregate?: InputMaybe<Facility_Account_Admin_Aggregate_Order_By>;
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  doctors_aggregate?: InputMaybe<Doctors_Aggregate_Order_By>;
  facility_accounts_aggregate?: InputMaybe<Facility_Accounts_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  galen_staffs_aggregate?: InputMaybe<Galen_Staff_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Order_By>;
  nurses_aggregate?: InputMaybe<Nurses_Aggregate_Order_By>;
  overridden_dates_aggregate?: InputMaybe<Overridden_Dates_Aggregate_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileById?: InputMaybe<Profile_Order_By>;
  profiles_aggregate?: InputMaybe<Profile_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export type Users_Select_Column =
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

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** This is the enum table for waiting room */
export type Waiting_Room_Status_Enum = {
  __typename?: 'waiting_room_status_enum';
  value: Scalars['String']['output'];
};

/** aggregated selection of "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Aggregate = {
  __typename?: 'waiting_room_status_enum_aggregate';
  aggregate?: Maybe<Waiting_Room_Status_Enum_Aggregate_Fields>;
  nodes: Array<Waiting_Room_Status_Enum>;
};

/** aggregate fields of "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Aggregate_Fields = {
  __typename?: 'waiting_room_status_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Waiting_Room_Status_Enum_Max_Fields>;
  min?: Maybe<Waiting_Room_Status_Enum_Min_Fields>;
};


/** aggregate fields of "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Waiting_Room_Status_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "waiting_room_status_enum". All fields are combined with a logical 'AND'. */
export type Waiting_Room_Status_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Waiting_Room_Status_Enum_Bool_Exp>>;
  _not?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Waiting_Room_Status_Enum_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
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
  _eq?: InputMaybe<Waiting_Room_Status_Enum_Enum>;
  _in?: InputMaybe<Array<Waiting_Room_Status_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Waiting_Room_Status_Enum_Enum>;
  _nin?: InputMaybe<Array<Waiting_Room_Status_Enum_Enum>>;
};

/** input type for inserting data into table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Waiting_Room_Status_Enum_Max_Fields = {
  __typename?: 'waiting_room_status_enum_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Waiting_Room_Status_Enum_Min_Fields = {
  __typename?: 'waiting_room_status_enum_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Mutation_Response = {
  __typename?: 'waiting_room_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Waiting_Room_Status_Enum>;
};

/** input type for inserting object relation for remote table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Obj_Rel_Insert_Input = {
  data: Waiting_Room_Status_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Waiting_Room_Status_Enum_On_Conflict>;
};

/** on_conflict condition type for table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_On_Conflict = {
  constraint: Waiting_Room_Status_Enum_Constraint;
  update_columns?: Array<Waiting_Room_Status_Enum_Update_Column>;
  where?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "waiting_room_status_enum". */
export type Waiting_Room_Status_Enum_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: waiting_room_status_enum */
export type Waiting_Room_Status_Enum_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Select_Column =
  /** column name */
  | 'value';

/** input type for updating data in table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "waiting_room_status_enum" */
export type Waiting_Room_Status_Enum_Update_Column =
  /** column name */
  | 'value';

/** This table contains information about waiting room */
export type Waiting_Rooms = {
  __typename?: 'waiting_rooms';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  account_id: Scalars['uuid']['output'];
  /** An object relationship */
  appointment?: Maybe<Appointments>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  location_id: Scalars['uuid']['output'];
  started_at: Scalars['String']['output'];
  status: Waiting_Room_Status_Enum_Enum;
  unit_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  updated_by: Scalars['uuid']['output'];
  /** An object relationship */
  waiting_room_status?: Maybe<Waiting_Room_Status_Enum>;
};

/** aggregated selection of "waiting_rooms" */
export type Waiting_Rooms_Aggregate = {
  __typename?: 'waiting_rooms_aggregate';
  aggregate?: Maybe<Waiting_Rooms_Aggregate_Fields>;
  nodes: Array<Waiting_Rooms>;
};

/** aggregate fields of "waiting_rooms" */
export type Waiting_Rooms_Aggregate_Fields = {
  __typename?: 'waiting_rooms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Waiting_Rooms_Max_Fields>;
  min?: Maybe<Waiting_Rooms_Min_Fields>;
};


/** aggregate fields of "waiting_rooms" */
export type Waiting_Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Waiting_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "waiting_rooms". All fields are combined with a logical 'AND'. */
export type Waiting_Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Waiting_Rooms_Bool_Exp>>;
  _not?: InputMaybe<Waiting_Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Waiting_Rooms_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  appointment?: InputMaybe<Appointments_Bool_Exp>;
  appointment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  started_at?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Waiting_Room_Status_Enum_Enum_Comparison_Exp>;
  unit_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Uuid_Comparison_Exp>;
  waiting_room_status?: InputMaybe<Waiting_Room_Status_Enum_Bool_Exp>;
};

/** unique or primary key constraints on table "waiting_rooms" */
export type Waiting_Rooms_Constraint =
  /** unique or primary key constraint */
  | 'waiting_rooms_pkey';

/** input type for inserting data into table "waiting_rooms" */
export type Waiting_Rooms_Insert_Input = {
  account?: InputMaybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  appointment?: InputMaybe<Appointments_Obj_Rel_Insert_Input>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  started_at?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Waiting_Room_Status_Enum_Enum>;
  unit_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
  waiting_room_status?: InputMaybe<Waiting_Room_Status_Enum_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Waiting_Rooms_Max_Fields = {
  __typename?: 'waiting_rooms_max_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  started_at?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Waiting_Rooms_Min_Fields = {
  __typename?: 'waiting_rooms_min_fields';
  account_id?: Maybe<Scalars['uuid']['output']>;
  appointment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  started_at?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_by?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "waiting_rooms" */
export type Waiting_Rooms_Mutation_Response = {
  __typename?: 'waiting_rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Waiting_Rooms>;
};

/** input type for inserting object relation for remote table "waiting_rooms" */
export type Waiting_Rooms_Obj_Rel_Insert_Input = {
  data: Waiting_Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Waiting_Rooms_On_Conflict>;
};

/** on_conflict condition type for table "waiting_rooms" */
export type Waiting_Rooms_On_Conflict = {
  constraint: Waiting_Rooms_Constraint;
  update_columns?: Array<Waiting_Rooms_Update_Column>;
  where?: InputMaybe<Waiting_Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "waiting_rooms". */
export type Waiting_Rooms_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  appointment?: InputMaybe<Appointments_Order_By>;
  appointment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  waiting_room_status?: InputMaybe<Waiting_Room_Status_Enum_Order_By>;
};

/** primary key columns input for table: waiting_rooms */
export type Waiting_Rooms_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "waiting_rooms" */
export type Waiting_Rooms_Select_Column =
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

/** input type for updating data in table "waiting_rooms" */
export type Waiting_Rooms_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']['input']>;
  appointment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  started_at?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Waiting_Room_Status_Enum_Enum>;
  unit_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_by?: InputMaybe<Scalars['uuid']['input']>;
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
