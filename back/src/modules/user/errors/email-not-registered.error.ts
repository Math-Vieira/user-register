import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailNotRegistered extends HttpException {
  constructor() {
    super(
      'O e-mail enviado não está cadastrado na plataforma',
      HttpStatus.BAD_REQUEST,
    );
  }
}
