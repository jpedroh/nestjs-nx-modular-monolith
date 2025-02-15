import { Module } from '@nestjs/common';

import { OrderModule } from '@modular-monolith/modules-order-impl';
import { UserModule, UserService } from '@modular-monolith/modules-user-impl';
import { HealthCheckModule } from '@modular-monolith/shared-monitoring';

@Module({
  imports: [
    HealthCheckModule,
    UserModule.forRoot(),
    OrderModule.forRoot({ userApi: UserService }),
  ],
})
export class AppModule {}
