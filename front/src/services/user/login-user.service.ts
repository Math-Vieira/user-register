import { api } from '../api';
import { setCookie } from 'nookies';

export type LoginUserPayload = {
  email: string;
  password: string;
};

export const loginUserService = async (data: LoginUserPayload) => {
  try {
    const response = await api.post('/user/signIn', data);
    const { jwtToken } = response.data;
    setCookie(undefined, 'user.token', jwtToken, {
      maxAge: 60 * 60 * 1 // 1 hour
    });
    return jwtToken;
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
