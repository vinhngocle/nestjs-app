import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockUser';
import { UserSetting } from '../graphql/models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { Inject } from '@nestjs/common';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';

export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(UserSettingService) private userSettingService: UserSettingService,
  ) {}

  @Query((returns) => User, { nullable: true, name: 'userById' })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserId(id);
  }

  @Query(() => [User])
  async getUsers() {
    return await this.userService.getUsers();
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return this.userSettingService.getUserSettingById(user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
