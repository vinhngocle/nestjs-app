import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTime } from './base-time.entity';

@Entity({ name: 'categories' })
export class Category extends BaseTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sub_category: string;
}
