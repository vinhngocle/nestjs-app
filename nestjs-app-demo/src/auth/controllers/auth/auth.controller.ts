import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthPayloadDto } from 'src/auth/dtos/auth.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() authDto: AuthPayloadDto) {
    return this.authService.signIn(authDto.username, authDto.password);
  }
}
