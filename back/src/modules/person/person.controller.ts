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

@Controller('person')
@UseGuards(UserAuthGuard)
export class PersonController {
  constructor(
    private readonly createPersonService: CreatePersonService,
    private readonly updatePersonService: UpdatePersonService,
    private readonly deletePersonService: DeletePersonService,
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
  async getPersons(@Headers('Authorization') token: string) {
    return `getPersons ${token}`;
  }
}
