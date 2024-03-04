import { api } from '../api';

type LoginUserPayload = {
  email: string;
  password: string;
};

export const loginUser = async (data: LoginUserPayload) => {
  try {
    const response = await api.post('/user/signIn', data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
