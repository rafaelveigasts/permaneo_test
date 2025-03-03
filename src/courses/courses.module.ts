import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { LessonsEntity } from 'src/lessons/entities/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, LessonsEntity])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
