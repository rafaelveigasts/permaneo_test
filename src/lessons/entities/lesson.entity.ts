import { CommentEntity } from '../../comments/entities/comment.entity';
import { CourseEntity } from '../../courses/entities/course.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('lessons')
export class LessonsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => CourseEntity, (course: CourseEntity) => course.lessons)
  @JoinColumn({ name: 'course_id' })
  course: CourseEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.lesson)
  comments: CommentEntity[];
}
