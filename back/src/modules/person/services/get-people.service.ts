import { obtainUserIdFromToken } from '@/shared/utils/functions/obtain-user-id-from-token.util';
import { PersonRepository } from '../repository/person.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPeopleService {
  constructor(private readonly personRepository: PersonRepository) {}
  async exec(page: number, token: string) {
    const user_id = obtainUserIdFromToken(token);
    const limit = 7; //Number of people per page
    const skip = (page - 1) * limit;

    const totalPeople =
      await this.personRepository.getTotalPeopleByUserId(user_id);
    const people = await this.personRepository.findPeopleByUserId(
      user_id,
      skip,
      limit,
    );

    let totalPages = Math.ceil(totalPeople / limit);
    if (!totalPages) totalPages = 1;

    return {
      totalPages,
      people,
    };
  }
}
