import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSaveDto } from 'src/dtos/users/UserSaveDto';
import { Request, Response } from 'express';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  async createUser(@Body() userSaveDto: UserSaveDto, @Res() res: Response) {
    const result = await this.usersService.create(userSaveDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'Create successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @Get('/profile')
  @ApiOperation({ summary: 'Get profile user' })
  async profile(@Res() res: Response, @Req() req: Request) {
    const userId = req['user'].sub;
    const result = await this.usersService.getCurrentUser(userId);
    return res.status(HttpStatus.OK).json({
      message: 'Get profile successfully',
      data: result,
    });
  }
}
