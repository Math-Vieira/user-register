import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './shared/utils/env-constants';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGODB_URI),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
