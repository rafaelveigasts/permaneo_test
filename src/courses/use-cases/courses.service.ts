import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from '../entities/course.entity';
import { LessonsEntity } from '../../lessons/entities/lesson.entity';
import { ICourses } from '../interfaces/ICourses';

@Injectable()
export class CoursesService implements ICourses {
  @InjectRepository(CourseEntity)
  private readonly courseRepository: Repository<CourseEntity>;

  @InjectRepository(LessonsEntity)
  private readonly lessonsRepository: Repository<LessonsEntity>;

  async createCourse(createCourseDto: CreateCourseDto) {
    const lessons = await Promise.all(
      createCourseDto.lessons.map((lessonDto) => {
        const lesson = this.lessonsRepository.create(lessonDto);
        return this.lessonsRepository.save(lesson);
      }),
    );

    const course = this.courseRepository.create({
      ...createCourseDto,
      lessons,
    });

    return this.courseRepository.save(course);
  }

  async findAllCourses() {
    console.log('aqui');
    return this.courseRepository.find();
  }

  async findCourseById(id: number) {
    const course = this.courseRepository.findOne({
      where: { id },
    });

    if (!course) throw new NotFoundException(`Course #${id} not found`);

    return course;
  }

  async updateCourse(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<CourseEntity> {
    await this.findCourseById(id);
    await this.courseRepository.update({ id }, updateCourseDto);

    return this.courseRepository.findOne({
      where: { id },
    });
  }

  async removeCourse(id: number): Promise<void> {
    await this.findCourseById(id);
    this.courseRepository.delete({ id });
  }
}
