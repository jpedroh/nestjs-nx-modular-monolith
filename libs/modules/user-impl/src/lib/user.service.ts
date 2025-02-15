import type { UserApi } from '@modular-monolith/modules-user-api'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService implements UserApi {
  async getUserById(id: string): Promise<{ id: string; name: string }> {
    return { id, name: 'Joao Duarte' }
  }
}
