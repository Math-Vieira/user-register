import { IsString, IsNotEmpty, IsEmail, Matches } from 'class-validator';

export class SignInUserDto {
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
}
