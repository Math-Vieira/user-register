import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonSchema } from './schemas/person.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatePersonService } from './services/create-person.service';
import { PersonRepository } from './repository/person.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
  ],
  controllers: [PersonController],
  providers: [CreatePersonService, PersonRepository],
})
export class PersonModule {}
