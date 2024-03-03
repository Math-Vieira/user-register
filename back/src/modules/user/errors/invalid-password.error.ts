import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPassword extends HttpException {
  constructor() {
    super('A senha enviada não é válida', HttpStatus.BAD_REQUEST);
  }
}
