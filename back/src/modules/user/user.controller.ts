import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserService } from './services/create-user.service';
import { SignInUserDto } from './dto/signIn-user.dto';
import { SignInUserService } from './services/signIn-user.service';
import { ThrottlerGuard } from '@nestjs/throttler';
import { UserAuthGuard } from '@/shared/guards/user.guard';
import { GetUserService } from './services/get-user.service';

@Controller('user')
@UseGuards(ThrottlerGuard)
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly signInUserService: SignInUserService,
    private readonly getUserService: GetUserService,
  ) {}

  @Post('/signUp')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.createUserService.exec(createUserDto);
  }

  @Post('/signIn')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInUserDto: SignInUserDto) {
    return await this.signInUserService.exec(signInUserDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserAuthGuard)
  async getUser(@Headers('Authorization') token: string) {
    return await this.getUserService.exec(token);
  }
}
