import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { CourseSaveDto } from 'src/dtos/courses/CourseSaveDto';
import { Course } from 'src/entity/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private _courseRepository: Repository<Course>,
    private categoriesService: CategoriesService,
  ) {}

  async create(courseSaveDto: CourseSaveDto) {
    const category = await this.categoriesService.getCategoryById(
      courseSaveDto.category_id,
    );
    const course = await this._courseRepository.create({
      ...courseSaveDto,
      category,
    });
    return await this._courseRepository.save(course);
  }

  async getAll() {
    return await this._courseRepository.find();
  }

  async getCourseById(courseId: number) {
    return await this._courseRepository.findOneBy({ id: courseId });
  }

  async update(courseId: number, courseSaveDto: CourseSaveDto) {
    const course = await this.getCourseById(courseId);
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.BAD_REQUEST);
    }

    const category = await this.categoriesService.getCategoryById(
      courseSaveDto.category_id,
    );
    console.log(category);

    const form = {
      order: courseSaveDto.order,
      image: courseSaveDto.image,
      price: courseSaveDto.price,
      sale_price: courseSaveDto.sale_price,
      short_desc: courseSaveDto.short_desc,
      description: courseSaveDto.description,
      status: courseSaveDto.status,
      category,
    };

    const courseUpdated = await this._courseRepository.update(
      {
        id: courseId,
      },
      form,
    );

    if (courseUpdated.affected > 0) {
      return form;
    }

    return null;
  }

  async delete(courseId: number) {
    const course = await this.getCourseById(courseId);
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.BAD_REQUEST);
    }

    return await this._courseRepository.delete({ id: courseId });
  }
}
