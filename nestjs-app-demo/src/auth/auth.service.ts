import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from 'src/dtos/auth/AuthPayloadDto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async signIn(authPayloadDto: AuthPayloadDto) {
    const user = await this.userService.getUserByEmail(authPayloadDto.email);
    if (!user) {
      throw new HttpException('User not found.', HttpStatus.BAD_REQUEST);
    }

    const matched = await bcrypt.compare(
      authPayloadDto.password,
      user.password,
    );
    if (!matched) {
      throw new UnauthorizedException();
    }

    const newTokens = await this.getToken(user.id, user.email);
    await this.userService.updateRefreshToken(user.id, newTokens.refreshToken);

    return newTokens;
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.userService.getUserById(userId);
    const matched = await bcrypt.compare(refreshToken, user.refresh_token);
    if (!user || !matched) {
      throw new ForbiddenException('Access denied');
    }

    const newTokens = await this.getToken(userId, user.email);
    await this.userService.updateRefreshToken(userId, newTokens.refreshToken);

    return newTokens;
  }

  private async getToken(userId: number, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.JWT_ACCESS_SECRET || 'JWT_ACCESS_SECRET',
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.JWT_REFRESH_SECRET || 'JWT_REFRESH_SECRET',
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      id: userId,
      email,
      accessToken,
      refreshToken,
    };
  }
}
