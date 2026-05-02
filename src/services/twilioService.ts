import axios from 'axios';
import { API_BASE_URL } from '../utils/config';

export interface TwilioCallToken {
  token: string;
  room_name: string;
}

export const twilioService = {
  async getCallToken(
    appointmentId: string,
    jwtToken: string,
    accountId: string,
  ): Promise<TwilioCallToken> {
    const res = await axios.get(`${API_BASE_URL}/api/get-appointment`, {
      params: { meeting_link: appointmentId },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'x-galen-account-id': accountId,
      },
    });
    return res.data;
  },

  async getExternalCallToken(appointmentId: string): Promise<TwilioCallToken> {
    const res = await axios.get(`${API_BASE_URL}/api/external-call-token`, {
      params: { appointment_id: appointmentId },
    });
    return res.data;
  },
};
