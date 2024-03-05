import { deletePersonService } from '@/services/person/delete-person.service';
import { useAxios } from '../useAxios';

export const useDeletePerson = () => {
  return useAxios<string>(deletePersonService);
};
