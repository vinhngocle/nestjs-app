import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entity/course.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Category])],
  controllers: [CoursesController],
  providers: [CoursesService, CategoriesService],
  exports: [CoursesService],
})
export class CoursesModule {}
