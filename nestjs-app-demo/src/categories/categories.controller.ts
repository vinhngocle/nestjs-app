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
import { CategoriesService } from './categories.service';
import { CategorySaveDto } from 'src/dtos/categories/CategorySaveDto';
import { Response } from 'express';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Get list all category' })
  @Get()
  async fetchAll(@Res() res: Response) {
    const result = await this.categoriesService.getAll();
    res.status(HttpStatus.OK).json({
      message: 'Get All category successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Get detail category by id' })
  @Get(':id')
  async fetchById(@Param('id') id: number, @Res() res: Response) {
    const result = this.categoriesService.getCategoryById(id);
    res.status(HttpStatus.OK).json({
      message: 'Get category successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Create new category' })
  @Post()
  async create(@Body() categorySaveDto: CategorySaveDto, @Res() res: Response) {
    const result = await this.categoriesService.create(categorySaveDto);
    res.status(HttpStatus.CREATED).json({
      message: 'Create category successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Update category' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() categorySaveDto: CategorySaveDto,
    @Res() res: Response,
  ) {
    const result = await this.categoriesService.update(id, categorySaveDto);
    res.status(HttpStatus.OK).json({
      message: 'Update category successfully.',
      data: result,
    });
  }

  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Delete category' })
  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    const result = await this.categoriesService.delete(id);
    res.status(HttpStatus.OK).json({
      message: 'Delete category successfully.',
      data: result,
    });
  }
}
