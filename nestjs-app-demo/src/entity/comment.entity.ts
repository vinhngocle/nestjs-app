import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTime } from './base-time.entity';

@Entity({ name: 'comments' })
export class Comment extends BaseTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
}
