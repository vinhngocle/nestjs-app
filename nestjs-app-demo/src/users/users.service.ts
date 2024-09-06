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

  async create(userSaveDto: UserSaveDto) {
    const user = await this.getUserByEmail(userSaveDto.email);
    if (user) {
      throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userSaveDto.password, 10);
    const newUser = this._usersRepository.create({
      ...userSaveDto,
      email: userSaveDto.email,
      password: hashPassword,
    });
    await this._usersRepository.save(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  getUserByEmail(email: string) {
    return this._usersRepository.findOneBy({ email });
  }

  getUserById(id: number) {
    return this._usersRepository.findOneBy({ id });
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this._usersRepository.update(
      {
        id: userId,
      },
      {
        refresh_token: hashedRefreshToken,
      },
    );
  }
}
