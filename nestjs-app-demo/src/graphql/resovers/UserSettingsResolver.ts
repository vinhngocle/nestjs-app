import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { Inject } from '@nestjs/common';
import { UserSettingService } from 'src/users/UserSettingService';

@Resolver()
export class UserSettingResolver {
  constructor(
    @Inject(UserSettingService) private userSettingService: UserSettingService,
  ) {}

  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    return this.userSettingService.createUserSettings(createUserSettingsData);
  }
}
