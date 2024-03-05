import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends CreatePersonDto {
  @IsString({ message: 'a propriedade "_id" deve ser uma string' })
  @IsNotEmpty({ message: 'a propriedade "_id" não pode ser vazia' })
  _id: string;
}
