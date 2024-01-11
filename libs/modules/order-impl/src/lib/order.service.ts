import { OrderApi } from '@modular-monolith/modules/order-api';
import {
  USER_API_INJECTION_TOKEN,
  UserApi,
} from '@modular-monolith/modules/user-api';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class OrderService implements OrderApi {
  constructor(
    @Inject(USER_API_INJECTION_TOKEN) private readonly userApi: UserApi
  ) {}

  async createOrder(userId: string, items: string[]): Promise<string> {
    const user = await this.userApi.getUserById(userId);
    return `Successfuly created order for user ${user.name} with items ${items}`;
  }
}
