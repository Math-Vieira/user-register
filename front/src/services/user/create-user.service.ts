import { api } from '../api';

export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export const createUserService = async (data: CreateUserPayload) => {
  try {
    const response = await api.post('/user/signUp', data);
    return response;
  } catch (error) {
    alert('Erro ao criar usuário, tente novamente.');
  }
};
