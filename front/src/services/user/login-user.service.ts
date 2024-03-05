import { setCookie } from 'nookies';
import { api } from '../api';
import { setUser } from '@/store/user';
import { useDispatch } from 'react-redux';

export type LoginUserPayload = {
  email: string;
  password: string;
};

export const loginUserService = async (data: LoginUserPayload) => {
  try {
    const response = await api.post('/user/signIn', data);
    return response.data;
  } catch (error: any) {
    if (Array.isArray(error.response.data.message)) {
      const messages = error.response.data.message;
      messages.forEach((message: string) => {
        alert(message);
      });
    } else {
      alert(error.response.data.message);
    }
  }
};
