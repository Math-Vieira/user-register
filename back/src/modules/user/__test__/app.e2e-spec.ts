import { UserModule } from '../user.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';

//TODO: create a test database with docker

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/local'), //TODO: change to test database
        UserModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/(POST)- should return 400 if only name is provided', async () => {
    const payload = {
      name: 'Zenon Test',
    };
    await request(app.getHttpServer())
      .post('/user/signUp')
      .send(payload)
      .expect(400);
  });

  it('/(POST)- should return 400 if only email is provided', async () => {
    const payload = {
      email: 'teste@teste.com',
    };
    await request(app.getHttpServer())
      .post('/user/signUp')
      .send(payload)
      .expect(400);
  });
});
