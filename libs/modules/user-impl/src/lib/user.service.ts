import { Injectable } from '@nestjs/common';
import { UserApi } from '@modular-monolith/modules-user-api';

@Injectable()
export class UserService implements UserApi {
  async getUserById(id: string): Promise<{ id: string; name: string }> {
    return { id, name: 'Joao Duarte' };
  }
}
