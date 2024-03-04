import { PersonRepository } from './../repository/person.repository';
import { Injectable } from '@nestjs/common';
import { Person } from '../models/person.model';
import { UpdatePersonDto } from '../dto/update-person.dto';

@Injectable()
export class UpdatePersonService {
  constructor(private readonly personRepository: PersonRepository) {}
  async exec(updatePersonDto: UpdatePersonDto) {
    const updatedPerson = await this.personRepository.updateById({
      ...updatePersonDto,
    } as Person);

    return updatedPerson;
  }
}
