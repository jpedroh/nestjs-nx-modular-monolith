import { ORDER_API_INJECTION_TOKEN } from '@modular-monolith/modules/order-api';
import { Global, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Global()
@Module({
  controllers: [OrderController],
  providers: [{ provide: ORDER_API_INJECTION_TOKEN, useClass: OrderService }],
  exports: [{ provide: ORDER_API_INJECTION_TOKEN, useClass: OrderService }],
})
export class OrderModule {}
