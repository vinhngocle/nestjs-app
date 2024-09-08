import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTime } from './base-time.entity';

@Entity({ name: 'users' })
export class User extends BaseTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refresh_token: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  avatar: string;
}
