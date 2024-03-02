import { Match } from '@/shared/decorators/match.decorator';

import { IsString, IsNotEmpty, IsEmail, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'a propriedade "nome" deve ser uma string' })
  @IsNotEmpty({ message: 'a propriedade "nome" não pode ser vazia' })
  name: string;

  @IsString({ message: 'a propriedade "email" deve ser uma string' })
  @IsEmail(undefined, {
    message: 'a propriedade "email" não é um e-mail válido',
  })
  @IsNotEmpty({ message: 'a propriedade "email" não pode ser vazia' })
  email: string;

  @IsString({ message: 'a propriedade "password" deve ser uma string' })
  @IsNotEmpty({ message: 'a propriedade "password" não pode ser vazia' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/, {
    message:
      'a propriedade "password" deve ter no mínimo 4 caracteres, uma letra maiúscula, uma letra minúscula e um número',
  })
  password: string;

  @IsNotEmpty({
    message: 'a propriedade "confirm_password" não pode ser vazia',
  })
  @IsString({
    message: 'a propriedade "confirm_password" deve ser uma string',
  })
  @Match('password', {
    message:
      'a propriedade "confirm_password" deve ser igual a propriedade "password"',
  })
  confirm_password: string;
}
