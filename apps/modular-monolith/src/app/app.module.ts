import { Module } from '@nestjs/common';

import { OrderModule } from '@modular-monolith/modules/order-impl';
import { UserModule } from '@modular-monolith/modules/user-impl';
import { HealthCheckModule } from '@modular-monolith/shared/monitoring';

@Module({
  imports: [UserModule, OrderModule, HealthCheckModule],
})
export class AppModule {}
