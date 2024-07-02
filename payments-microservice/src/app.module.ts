import { Module } from '@nestjs/common';
import { PaymentsModules } from './payments/payments.modules';

@Module({
  imports: [PaymentsModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
