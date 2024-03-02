import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './shared/utils/env-constants';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(MONGODB_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
