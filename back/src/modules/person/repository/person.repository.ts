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

  async findPeopleByUserId(
    userId: string,
    offset: number,
    limit: number,
  ): Promise<Person[]> {
    return await this.personModel
      .find({ user_id: userId })
      .skip(offset)
      .limit(limit)
      .sort({ createdAt: -1 });
  }

  async getTotalPeopleByUserId(userId: string): Promise<number> {
    return await this.personModel.countDocuments({ user_id: userId });
  }
}
