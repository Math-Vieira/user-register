import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../models/user.model';
import { obtainUserIdFromToken } from '@/shared/utils/functions/obtain-user-id-from-token.util';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}
  public async exec(token: string): Promise<User> {
    const user_id = obtainUserIdFromToken(token);

    const user = await this.userRepository.findById(user_id);
    return user;
  }
}
