import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from '../models/person.model';

@Injectable()
export class PersonRepository {
  constructor(
    @InjectModel('Person') private readonly personModel: Model<Person>,
  ) {}
  async create(person: Person): Promise<Person> {
    return await this.personModel.create(person);
  }
}
