import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from '../dto/create-person.dto';

@Injectable()
export class CreatePersonService {
  constructor() {}
  async exec(createPersonDto: CreatePersonDto) {
    return console.log(createPersonDto);
  }
}
