import {
  ORDER_API_INJECTION_TOKEN,
  type OrderApi,
} from '@modular-monolith/modules-order-api'
import { Controller, Get, Inject } from '@nestjs/common'

@Controller('orders')
export class OrderController {
  constructor(
    @Inject(ORDER_API_INJECTION_TOKEN) private readonly service: OrderApi
  ) {}

  @Get('create')
  createOrder(userId: string, items: string[]): Promise<string> {
    return this.service.createOrder(userId, items)
  }
}
