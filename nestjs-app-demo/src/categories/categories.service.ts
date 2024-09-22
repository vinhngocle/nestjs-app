import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorySaveDto } from 'src/dtos/categories/CategorySaveDto';
import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private _categoryRepository: Repository<Category>,
  ) {}

  async getAll() {
    return await this._categoryRepository.find();
  }

  async getCategoryById(categoryId: number) {
    return await this._categoryRepository.findOneBy({ id: categoryId });
  }

  async create(categorySaveDto: CategorySaveDto) {
    const subCategory = await this._categoryRepository.findOneBy({
      sub_category: categorySaveDto.sub_category,
    });
    console.log(subCategory);

    if (subCategory) {
      throw new HttpException(
        'Category name already exists.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const category = await this._categoryRepository.create(categorySaveDto);
    return await this._categoryRepository.save(category);
  }

  async update(categoryId: number, categorySaveDto: CategorySaveDto) {
    const category = await this.getCategoryById(categoryId);
    if (!category) {
      throw new HttpException('Category not found.', HttpStatus.BAD_REQUEST);
    }

    const updatedCategory = await this._categoryRepository.update(
      {
        id: category.id,
      },
      {
        name: categorySaveDto.name,
        sub_category: categorySaveDto.sub_category,
      },
    );

    if (updatedCategory.affected > 0) {
      return categorySaveDto;
    }

    return null;
  }

  async delete(categoryId: number) {
    const category = await this.getCategoryById(categoryId);
    if (!category) {
      throw new HttpException('Category not found.', HttpStatus.BAD_REQUEST);
    }

    return this._categoryRepository.delete({ id: categoryId });
  }
}
