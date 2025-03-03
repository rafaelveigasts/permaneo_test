import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ILessons } from './interfaces/ILessons';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonsEntity } from './entities/lesson.entity';

@Injectable()
export class LessonsService implements ILessons {
  constructor(
    @InjectRepository(LessonsEntity)
    private readonly lessonsRepository: Repository<LessonsEntity>,
  ) {}
  async createLesson(
    createLessonDto: CreateLessonDto,
  ): Promise<CreateLessonDto> {
    const lesson = await this.lessonsRepository.save(createLessonDto);

    return lesson;
  }

  async findAllLessons(): Promise<CreateLessonDto[]> {
    return this.lessonsRepository.find();
  }

  async findLessonById(id: number): Promise<CreateLessonDto> {
    const found = await this.lessonsRepository.findOne({
      where: { id },
    });

    if (!found) throw new NotFoundException(`Lesson #${id} not found`);

    return found;
  }

  async updateLesson(
    id: number,
    updateLessonDto: UpdateLessonDto,
  ): Promise<LessonsEntity> {
    await this.findLessonById(id);

    const updated = await this.lessonsRepository.update(
      { id },
      updateLessonDto,
    );

    return updated.raw;
  }

  async removeLesson(id: number): Promise<void> {
    await this.findLessonById(id);

    await this.lessonsRepository.delete({ id });
  }
}
