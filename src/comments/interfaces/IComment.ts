import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentEntity } from '../entities/comment.entity';

export abstract class IComment {
  abstract createComment(comment: CreateCommentDto): Promise<CommentEntity>;
}
