import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequest extends HttpException {
  constructor() {
    super('BAD_REQUEST', HttpStatus.BAD_REQUEST);
  }
}
