import {
  loginUserService,
  LoginUserPayload
} from '@/services/user/login-user.service';

import { useAxios } from '../useAxios';

export const useLoginUser = () => {
  return useAxios<LoginUserPayload>(loginUserService);
};
