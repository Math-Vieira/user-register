import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants/env-constants';

export const obtainUserIdFromToken = (token: string): string => {
  const tokenJwt = token.split(' ')[1];
  const { user_id }: any = jwt.verify(tokenJwt, JWT_SECRET);

  return user_id;
};
