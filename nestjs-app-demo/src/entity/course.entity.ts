import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { BaseTime } from './base-time.entity';
import { Category } from './category.entity';

@Entity({ name: 'courses' })
export class Course extends BaseTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: number;

  @Column()
  image: string;

  @Column('decimal')
  price: number;

  @Column('decimal')
  sale_price: number;

  @Column()
  short_desc: string;

  @Column()
  description: string;

  @Column()
  status: number;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;
}
