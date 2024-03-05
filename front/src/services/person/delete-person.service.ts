import { api } from '../api';

export const deletePersonService = async (id: string) => {
  try {
    const response = await api.delete(`/person/delete/${id}`);
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
