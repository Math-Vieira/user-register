import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonSchema } from './schemas/person.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatePersonService } from './services/create-person.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
  ],
  controllers: [PersonController],
  providers: [CreatePersonService],
})
export class PersonModule {}
