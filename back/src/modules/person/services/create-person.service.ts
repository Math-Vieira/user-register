import { PersonRepository } from './../repository/person.repository';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from '../dto/create-person.dto';
import { obtainUserIdFromToken } from '@/shared/utils/functions/obtain-user-id-from-token.util';
import { Person } from '../models/person.model';

@Injectable()
export class CreatePersonService {
  constructor(private readonly personRepository: PersonRepository) {}
  async exec(createPersonDto: CreatePersonDto, token: string) {
    const user_id = obtainUserIdFromToken(token);

    return await this.personRepository.create({
      ...createPersonDto,
      user_id: user_id,
    } as Person);
  }
}
