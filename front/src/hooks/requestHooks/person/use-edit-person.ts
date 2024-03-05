import {
  EditPersonPayload,
  editPersonService
} from '@/services/person/edit-person.service';
import { useAxios } from '../useAxios';

export const useEditPerson = () => {
  return useAxios<EditPersonPayload>(editPersonService);
};
