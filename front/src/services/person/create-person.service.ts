import { api } from '../api';

export type CreatePersonPayload = {
  name: string;
  email: string;
  avatar: string;
  age: number;
};

export const createPersonService = async (data: CreatePersonPayload) => {
  try {
    const response = await api.post('/person', { ...data, age: +data.age });
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
