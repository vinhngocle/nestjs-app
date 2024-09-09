import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseTime } from './base-time.entity';
import { Course } from './course.entity';

@Entity({ name: 'categories' })
export class Category extends BaseTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sub_category: string;

  @OneToMany(() => Course, (course) => course.category)
  courses: Course[];
}
