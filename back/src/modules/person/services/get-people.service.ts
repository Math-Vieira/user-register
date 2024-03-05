import { obtainUserIdFromToken } from '@/shared/utils/functions/obtain-user-id-from-token.util';
import { PersonRepository } from '../repository/person.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPeopleService {
  constructor(private readonly personRepository: PersonRepository) {}
  async exec(page: number, token: string) {
    const user_id = obtainUserIdFromToken(token);
    const skip = (page - 1) * 10;
    const limit = 10; //Number of people per page

    const totalPeople =
      await this.personRepository.getTotalPeopleByUserId(user_id);
    const people = await this.personRepository.findPeopleByUserId(
      user_id,
      skip,
      limit,
    );

    const totalPages = Math.ceil(totalPeople / limit);

    return {
      totalPages,
      people,
    };
  }
}
