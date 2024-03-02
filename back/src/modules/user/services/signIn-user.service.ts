import { Injectable } from '@nestjs/common';
import { SignInUserDto } from '../dto/signIn-user.dto';

@Injectable()
export class SignInUserService {
  constructor() {}
  async exec(signInUserDto: SignInUserDto) {
    console.log('signInUserDto', signInUserDto);
  }
}
