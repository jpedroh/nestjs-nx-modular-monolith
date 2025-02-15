import {
  USER_API_INJECTION_TOKEN,
  type UserApi,
} from '@modular-monolith/modules-user-api';
import { Controller, Get, Inject, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_API_INJECTION_TOKEN) private readonly service: UserApi
  ) {}

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.service.getUserById(id);
  }
}
