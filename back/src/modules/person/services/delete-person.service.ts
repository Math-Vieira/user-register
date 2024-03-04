import { PersonRepository } from './../repository/person.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeletePersonService {
  constructor(private readonly personRepository: PersonRepository) {}
  async exec(personId: string) {
    return await this.personRepository.deleteById(personId);
  }
}
