import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Controller('payments')
export class PaymentsMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private nasClient: ClientProxy) {}

  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
    this.nasClient.emit('paymentCreated', createPaymentDto);
  }
}
