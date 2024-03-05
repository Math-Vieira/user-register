import { getUserInfoService } from '@/services/user/get-user-info.service';
import { useAxios } from '../useAxios';

export const useGetUser = () => {
  return useAxios(getUserInfoService);
};
