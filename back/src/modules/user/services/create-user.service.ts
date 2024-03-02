import { UserRepository } from './../repository/user.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';
import { EmailAlreadyUsed } from '../errors/email-already-used.error';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}
  async exec(createUserDto: CreateUserDto) {
    const emailAlreadyExists = await this.userRepository.findByEmail(
      createUserDto.email,
    );

    if (emailAlreadyExists) {
      throw new EmailAlreadyUsed();
    }

    const formattedUserData = this.formatUserData(createUserDto);
    await this.userRepository.create(formattedUserData);

    return {
      message: 'Usuário criado com sucesso',
    };
  }

  private formatUserData(createUserDto: CreateUserDto): User {
    return {
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    } as User;
  }
}
