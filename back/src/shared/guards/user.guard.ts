import {
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { ExecutionContext } from '@nestjs/common';
import { JWT_SECRET } from '../utils/env-constants';

@Injectable()
export class UserAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const { authorization } = context.switchToHttp().getRequest().headers;
    if (!authorization)
      throw new BadRequestException('authorization inexistente na requisição');
    const token = authorization.split(' ')[1];
    const isValid = verifyToken(token);
    if (isValid) {
      return true;
    }
    throw new ForbiddenException(
      'Você não tem permissão para acessar esse recurso',
    );
  }
}

const verifyToken = (token: string): boolean => {
  try {
    const isValid: any = jwt.verify(token, JWT_SECRET);
    return !!isValid;
  } catch (e) {
    return false;
  }
};
