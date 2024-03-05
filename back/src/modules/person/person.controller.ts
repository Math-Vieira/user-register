import { UserAuthGuard } from '@/shared/guards/user.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreatePersonService } from './services/create-person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { UpdatePersonService } from './services/update-person.service';
import { DeletePersonService } from './services/delete-person.service';
import { GetPeopleService } from './services/get-people.service';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('person')
@UseGuards(UserAuthGuard)
@UseGuards(ThrottlerGuard)
export class PersonController {
  constructor(
    private readonly createPersonService: CreatePersonService,
    private readonly updatePersonService: UpdatePersonService,
    private readonly deletePersonService: DeletePersonService,
    private readonly getPeopleService: GetPeopleService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
    @Headers('Authorization') token: string,
  ) {
    return await this.createPersonService.exec(createPersonDto, token);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  async updatePerson(@Body() updatePersonDto: UpdatePersonDto) {
    return await this.updatePersonService.exec(updatePersonDto);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  async deletePerson(@Param('id') id: string) {
    return await this.deletePersonService.exec(id);
  }

  @Get('/list/:page')
  @HttpCode(HttpStatus.OK)
  async getPeople(
    @Headers('Authorization') token: string,
    @Param('page') page: string,
  ) {
    return await this.getPeopleService.exec(+page, token);
  }
}
