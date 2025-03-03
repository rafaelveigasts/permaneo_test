import { CreateLessonDto } from '../dto/create-lesson.dto';

export abstract class ILessons {
  abstract createLesson(lesson: CreateLessonDto): Promise<CreateLessonDto>;
  abstract findAllLessons(): Promise<CreateLessonDto[]>;
  abstract findLessonById(id: number): Promise<CreateLessonDto>;
  abstract updateLesson(
    id: number,
    lesson: CreateLessonDto,
  ): Promise<CreateLessonDto>;
  abstract removeLesson(id: number): Promise<void>;
}
