import {
  loginUserService,
  LoginUserPayload
} from '@/services/user/login-user.service';

import { useMutation } from '@tanstack/react-query';

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (payload: LoginUserPayload) => {
      return await loginUserService(payload);
    },
    throwOnError: false
  });
};
