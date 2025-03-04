import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentEntity } from '../entities/comment.entity';
import { IComment } from '../interfaces/IComment';

@Injectable()
export class CommentService implements IComment {
  @InjectRepository(CommentEntity)
  private readonly commentRepository: Repository<CommentEntity>;

  async createComment(
    createCommentDto: CreateCommentDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentRepository.save(createCommentDto);

    return comment;
  }
}
