import { UserRole } from '../types';

export const getRoleHomeTab: Record<string, string> = {
  doctor: 'DoctorTabs',
  nurse: 'NurseTabs',
  'admin-nurse': 'NurseTabs',
  'account-admin': 'DoctorTabs',
  'galen-admin': 'DoctorTabs',
  'galen-staff': 'DoctorTabs',
};

export function isClinicalRole(role: UserRole | undefined): boolean {
  return role === 'doctor' || role === 'nurse' || role === 'admin-nurse';
}
