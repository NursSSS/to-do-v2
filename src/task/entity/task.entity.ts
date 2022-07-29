import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ITask } from '../interface/interface';

@Entity()
export class TaskEntity implements ITask{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isComplete: boolean;
}