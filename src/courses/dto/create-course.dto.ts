import { CreateLessonDto } from 'src/lessons/dto/create-lesson.dto';

export class CreateCourseDto {
  readonly name: string;
  readonly category: string;
  readonly lessons: CreateLessonDto[];
}
