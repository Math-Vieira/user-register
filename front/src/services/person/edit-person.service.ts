import { api } from '../api';

export type EditPersonPayload = {
  name: string;
  email: string;
  avatar: string;
  age: number;
  _id: string;
};

export const editPersonService = async (data: EditPersonPayload) => {
  try {
    const response = await api.patch('/person', { ...data, age: +data.age });
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
