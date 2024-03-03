import { UserAuthGuard } from '@/shared/guards/user.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreatePersonService } from './services/create-person.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('person')
@UseGuards(UserAuthGuard)
export class PersonController {
  constructor(private readonly createPersonService: CreatePersonService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPerson(@Body() createPersonDto: CreatePersonDto) {
    return this.createPersonService.exec(createPersonDto);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  async updatePerson() {
    return 'updatePerson';
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  async deletePerson() {
    return 'deletePerson';
  }

  @Get('/list/:page')
  @HttpCode(HttpStatus.OK)
  async getPersons(@Headers('Authorization') token: string) {
    return `getPersons ${token}`;
  }
}
