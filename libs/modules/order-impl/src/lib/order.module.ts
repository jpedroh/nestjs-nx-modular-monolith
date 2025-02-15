import { ORDER_API_INJECTION_TOKEN } from '@modular-monolith/modules-order-api';
import {
  USER_API_INJECTION_TOKEN,
  type UserApi,
} from '@modular-monolith/modules-user-api';
import { type DynamicModule, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

type ModuleDependencies = { userApi: new () => UserApi };

@Module({})
export class OrderModule {
  static forRoot({ userApi }: ModuleDependencies): DynamicModule {
    return {
      module: OrderModule,
      providers: [
        { provide: ORDER_API_INJECTION_TOKEN, useClass: OrderService },
        {
          provide: USER_API_INJECTION_TOKEN,
          useClass: userApi,
        },
      ],
      controllers: [OrderController],
    };
  }
}
