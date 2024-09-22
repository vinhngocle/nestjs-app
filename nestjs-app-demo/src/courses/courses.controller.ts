import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { CourseSaveDto } from 'src/dtos/courses/CourseSaveDto';
import { Response } from 'express';

@ApiBearerAuth()
@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Get all list courses' })
  @Get()
  async fetchAll(@Res() res: Response) {
    const result = await this.coursesService.getAll();
    res.status(HttpStatus.OK).json({
      message: 'Get all course successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Get detail courses by id' })
  @Get(':id')
  async fetchById(@Param('id') id: number, @Res() res: Response) {
    const result = await this.coursesService.getCourseById(id);
    res.status(HttpStatus.OK).json({
      message: 'Get course by id successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Create new courses' })
  @Post()
  async create(@Body() courseSaveDto: CourseSaveDto, @Res() res: Response) {
    const result = await this.coursesService.create(courseSaveDto);
    res.status(HttpStatus.CREATED).json({
      message: 'Create course successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Update course' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() courseSaveDto: CourseSaveDto,
    @Res() res: Response,
  ) {
    const result = await this.coursesService.update(id, courseSaveDto);
    res.status(HttpStatus.OK).json({
      message: 'Update course successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Delete course' })
  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    const result = await this.coursesService.delete(id);
    res.status(HttpStatus.OK).json({
      message: 'Delete course successfully.',
      data: result,
    });
  }
}
