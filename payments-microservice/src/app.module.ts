import { Module } from '@nestjs/common';
import { PaymentsModules } from './payments/payments.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/Payment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [Payment],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    PaymentsModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
