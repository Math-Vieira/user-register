import { api } from '../api';

export const getUserInfoService = async () => {
  try {
    const response = await api.get('/user');
    return response;
  } catch (error) {
    console.log(error);
  }
};
