import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseEntity } from '../entities/course.entity';

export abstract class ICourses {
  abstract createCourse(
    createCourseDto: CreateCourseDto,
  ): Promise<CourseEntity>;
  abstract findAllCourses(): Promise<CourseEntity[]>;
  abstract findCourseById(id: number): Promise<CourseEntity>;
  abstract updateCourse(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<CourseEntity>;
  abstract removeCourse(id: number): Promise<void>;
}
