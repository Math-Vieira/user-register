import { api } from '../api';

export const getPeopleService = async (pageNumber: number) => {
  try {
    const response = await api.get(`/person/list/${pageNumber}`);
    return response.data;
  } catch (error) {
    alert('Erro ao buscar informações do usuário, tente novamente.');
  }
};
