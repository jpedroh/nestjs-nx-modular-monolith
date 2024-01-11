import { USER_API_INJECTION_TOKEN } from '@modular-monolith/modules/user-api';
import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Global()
@Module({
  controllers: [UserController],
  providers: [{ provide: USER_API_INJECTION_TOKEN, useClass: UserService }],
  exports: [{ provide: USER_API_INJECTION_TOKEN, useClass: UserService }],
})
export class UserModule {}
