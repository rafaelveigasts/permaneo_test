import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';

export class CreateLessonDto {
  readonly title: string;
  readonly description: string;
  readonly comments: CreateCommentDto[];
}
