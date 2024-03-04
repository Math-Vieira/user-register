import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { CreateUserService } from './services/create-user.service';
import { SignInUserService } from './services/signIn-user.service';
import { UserRepository } from './repository/user.repository';
import { AuthService } from '../auth/auth.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 10,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    SignInUserService,
    UserRepository,
    AuthService,
  ],
})
export class UserModule {}
