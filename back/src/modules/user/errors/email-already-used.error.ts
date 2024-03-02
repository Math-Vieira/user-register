import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyUsed extends HttpException {
  constructor() {
    super('O e-mail já está sendo utilizado', HttpStatus.BAD_REQUEST);
  }
}
