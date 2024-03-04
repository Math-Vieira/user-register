import { useAxios } from '../useAxios';
import {
  CreateUserPayload,
  createUserService
} from './../../../services/user/create-user.service';

export const useCreateUser = () => {
  return useAxios<CreateUserPayload>(createUserService);
};
