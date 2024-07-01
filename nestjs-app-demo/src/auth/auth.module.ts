import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
// import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/Profile';
import { JwtModule } from '@nestjs/jwt';
import { Post } from 'src/typeorm/entities/Post';

@Module({
  // imports: [UsersModule],
  imports: [
    TypeOrmModule.forFeature([User, Profile, Post]),
    JwtModule.register({
      global: true,
      secret: 'DO NOT USE THIS VALUE',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
