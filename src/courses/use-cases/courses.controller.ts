import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAllCourses();
  }

  @Get('courses/:id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findCourseById(+id);
  }

  @Put('courses/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.updateCourse(+id, updateCourseDto);
  }

  @Delete('courses/:id')
  remove(@Param('id') id: string) {
    return this.coursesService.removeCourse(+id);
  }
}
