import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSaveDto } from 'src/dtos/users/UserSaveDto';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

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
}
