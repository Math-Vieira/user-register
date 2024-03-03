import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreatePersonDto {
  @IsString({ message: 'a propriedade "name" deve ser uma string' })
  @IsNotEmpty({ message: 'a propriedade "name" não pode ser vazia' })
  name: string;

  @IsString({ message: 'a propriedade "email" deve ser uma string' })
  @IsEmail(undefined, {
    message: 'a propriedade "email" não é um e-mail válido',
  })
  @IsNotEmpty({ message: 'a propriedade "email" não pode ser vazia' })
  email: string;

  @IsNumber({}, { message: 'a propriedade "idade" deve ser um número' })
  @IsNotEmpty({ message: 'a propriedade "idade" não pode ser vazia' })
  age: number;

  @IsString({ message: 'a propriedade "avatar" deve ser uma string' })
  @IsNotEmpty({ message: 'a propriedade "avatar" não pode ser vazia' })
  avatar: string;
}
