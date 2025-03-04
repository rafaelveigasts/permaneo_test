import { LessonsEntity } from '../../lessons/entities/lesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @OneToMany(() => LessonsEntity, (lesson) => lesson.course)
  lessons: LessonsEntity[];
}
