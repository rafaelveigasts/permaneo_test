import { CommentEntity } from 'src/comments/entities/comment.entity';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { LessonsEntity } from 'src/lessons/entities/lesson.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'permaneo',
  entities: [CourseEntity, LessonsEntity, CommentEntity],
  logging: false,
  migrations: [path.join(__dirname, 'migrations', '*{.ts,.js}')],
};

export const dataSource = new DataSource({ ...dataSourceOptions });
