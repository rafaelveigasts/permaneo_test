import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { DatabaseModule } from './database/database.module';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoursesModule,
    LessonsModule,
    DatabaseModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
