import { Controller, Post, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Controller('courses')
export class CommentsController {
  constructor(private readonly coursesService: CommentService) {}

  @Post('/:id/lessons/:lessonId')
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.coursesService.createComment(createCommentDto);
  }
}
