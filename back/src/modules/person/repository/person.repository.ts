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

  async updateById(person: Person): Promise<Person> {
    return await this.personModel.findByIdAndUpdate(person._id, person, {
      new: true,
    });
  }

  async deleteById(id: string): Promise<Person> {
    return await this.personModel.findByIdAndDelete(id);
  }
}
