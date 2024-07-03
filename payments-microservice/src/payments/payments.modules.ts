import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { PaymentsService } from './payments.service';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [NatsClientModule, TypeOrmModule.forFeature([Payment, User])],
  // imports: [NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModules {}
