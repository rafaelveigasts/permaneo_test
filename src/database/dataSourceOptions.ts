import 'dotenv/config';
import { CommentEntity } from 'src/comments/entities/comment.entity';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { LessonsEntity } from 'src/lessons/entities/lesson.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [CourseEntity, LessonsEntity, CommentEntity],
  logging: false,
  migrations: [path.join(__dirname, 'migrations', '*{.ts,.js}')],
};

export const dataSource = new DataSource({ ...dataSourceOptions });
