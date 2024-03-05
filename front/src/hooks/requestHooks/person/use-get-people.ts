import { useAxios } from '../useAxios';
import { getPeopleService } from '@/services/person/get-people.service';

export const useGetPeople = () => {
  return useAxios<number>(getPeopleService);
};
