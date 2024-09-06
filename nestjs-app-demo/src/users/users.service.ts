import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSaveDto } from 'src/dtos/users/UserSaveDto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private _usersRepository: Repository<User>,
  ) {}

  getUserByEmail(email: string) {
    return this._usersRepository.findOneBy({ email });
  }

  async create(userSaveDto: UserSaveDto) {
    const user = await this.getUserByEmail(userSaveDto.email);
    if (user) {
      throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
    }

    const hassPassword = await bcrypt.hash(userSaveDto.password, 10);
    const newUser = this._usersRepository.create({
      email: userSaveDto.email,
      password: hassPassword,
    });
    await this._usersRepository.save(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }
}
