import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from '../dto/create-lesson.dto';
import { UpdateLessonDto } from '../dto/update-lesson.dto';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post('/courses/:id/lessons')
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.createLesson(createLessonDto);
  }

  @Get('/courses/:id/lessons')
  findAll() {
    return this.lessonsService.findAllLessons();
  }

  @Get('courses/:id/lessons/:lesson_id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findLessonById(+id);
  }

  @Put('courses/:id/lessons/:lesson_id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.updateLesson(+id, updateLessonDto);
  }

  @Delete('courses/:id/lessons/:lesson_id')
  remove(@Param('id') id: string) {
    return this.lessonsService.removeLesson(+id);
  }
}
