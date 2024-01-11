import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { HealthCheckController } from './health-check.controller';

@Module({
  imports: [
    PrometheusModule.register({
      path: '.well-known/metrics',
    }),
  ],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
