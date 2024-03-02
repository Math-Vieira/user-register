import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './shared/utils/env-constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
