import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { CreateUserSettingsInput } from 'src/graphql/utils/CreateUserSettingsInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUserSettings() {
    return this.userSettingsRepository.find();
  }

  getUserSettingById(userId: number) {
    return this.userSettingsRepository.findOneBy({ userId });
  }

  async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
    const user = await this.userRepository.findOneBy({
      id: createUserSettingsData.userId,
    });

    if (!user) throw new Error('User not found.');

    const newUserSetting = this.userSettingsRepository.create(
      createUserSettingsData,
    );
    const savedSettings =
      await this.userSettingsRepository.save(newUserSetting);
    user.settings = savedSettings;

    await this.userRepository.save(user);

    return savedSettings;
  }
}
