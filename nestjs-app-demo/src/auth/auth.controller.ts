import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Req,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthPayloadDto } from 'src/dtos/auth/AuthPayloadDto';
import { Response, Request } from 'express';
import { RefreshTokenGuard } from 'src/common/guards/refresh-token.guard';
import { GoogleGuard } from 'src/common/guards/google.guard';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login User' })
  async signIn(@Body() authPayloadDto: AuthPayloadDto, @Res() res: Response) {
    const result = await this.authService.signIn(authPayloadDto);
    res.status(HttpStatus.OK).json({
      message: 'Login successfully.',
      data: result,
    });
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh token' })
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const userId = req['user'].sub;
    const refreshToken = req['user'].refreshToken;

    const newTokens = await this.authService.refreshTokens(
      userId,
      refreshToken,
    );

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Tokens refreshed', data: newTokens });
  }

  @UseGuards(GoogleGuard)
  @Get('google/login')
  @ApiOperation({ summary: 'Google Login' })
  googleLogin() {
    return { message: 'Google Authentication' };
  }

  @UseGuards(GoogleGuard)
  @Get('google/redirect')
  @ApiOperation({ summary: 'Google Callback' })
  googleRedirect(@Req() req: Request) {
    return { message: 'Google login successfull.', data: req['user'] };
  }
}
