import { Injectable } from '@nestjs/common';
import { SignInUserDto } from '../dto/signIn-user.dto';
import { UserRepository } from '../repository/user.repository';
import { EmailNotRegistered } from '../errors/email-not-registered.error';
import { compare } from 'bcrypt';
import { InvalidPassword } from '../errors/invalid-password.error';
import { AuthService } from '@/modules/auth/auth.service';

@Injectable()
export class SignInUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}
  async exec(signInUserDto: SignInUserDto) {
    const user = await this.userRepository.findByEmail(signInUserDto.email);

    if (!user) throw new EmailNotRegistered();

    const passwordMatch = await this.comparePassword(
      signInUserDto.password,
      user.password,
    );

    if (!passwordMatch) throw new InvalidPassword();

    const jwtToken = await this.authService.createAccessToken(user._id);

    return { jwtToken };
  }

  private async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await compare(password, hash);
  }
}
