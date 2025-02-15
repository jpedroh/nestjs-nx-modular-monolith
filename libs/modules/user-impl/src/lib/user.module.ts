import { USER_API_INJECTION_TOKEN } from '@modular-monolith/modules-user-api';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({})
export class UserModule {
  static forRoot() {
    return {
      module: UserModule,
      controllers: [UserController],
      providers: [{ provide: USER_API_INJECTION_TOKEN, useClass: UserService }],
    };
  }
}
