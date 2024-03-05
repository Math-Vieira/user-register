import { useAxios } from '../useAxios';
import {
  CreatePersonPayload,
  createPersonService
} from '@/services/person/create-person.service';

export const useCreatePerson = () => {
  return useAxios<CreatePersonPayload>(createPersonService);
};
