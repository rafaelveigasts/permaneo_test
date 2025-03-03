import { LessonsEntity } from 'src/lessons/entities/lesson.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  text: string;

  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => LessonsEntity, (lesson) => lesson.comments)
  @JoinColumn({ name: 'lesson_id' })
  lesson: LessonsEntity;
}
