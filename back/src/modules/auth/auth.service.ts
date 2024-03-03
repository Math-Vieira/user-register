import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Request } from 'express';
import { BadRequest } from '@/shared/exceptions/bad-request.exception';
import {
  JWT_EXPIRATION,
  JWT_SECRET,
} from '@/shared/utils/constants/env-constants';

@Injectable()
export class AuthService {
  public async createAccessToken(user_id: string): Promise<string> {
    return sign({ user_id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });
  }

  public jwtExtractor(request: Request): string {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new BadRequest();
    }
    const token = authHeader.split(' ')[1];
    return token;
  }
}
