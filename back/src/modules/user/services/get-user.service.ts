import { Injectable } from '@nestjs/common';
import { JWT_SECRET } from '@/shared/utils/env-constants';
import { UserRepository } from '../repository/user.repository';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}
  public async exec(token: string): Promise<User> {
    const tokenJwt = token.split(' ')[1];
    const { user_id }: any = jwt.verify(tokenJwt, JWT_SECRET);

    const user = await this.userRepository.findById(user_id);
    return user;
  }
}
