import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { UserSettingResolver } from 'src/graphql/resovers/UserSettingsResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingResolver,
    UserSettingService,
  ],
})
export class UsersModule {}
