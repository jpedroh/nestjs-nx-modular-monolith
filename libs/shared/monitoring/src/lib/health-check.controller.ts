import { Controller, Get } from '@nestjs/common';

@Controller('.well-known/health-check')
export class HealthCheckController {
  @Get('/liveness')
  liveness(): string {
    return 'OK';
  }
}
