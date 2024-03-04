import {
  CreateUserPayload,
  createUserService
} from './../../../services/user/create-user.service';

import { useMutation } from '@tanstack/react-query';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: async (payload: CreateUserPayload) => {
      return await createUserService(payload);
    },
    throwOnError: false
  });
};
