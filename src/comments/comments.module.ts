import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { CommentsController } from './use-cases/comment.controller';
import { CommentService } from './use-cases/comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  controllers: [CommentsController],
  providers: [CommentService],
})
export class CommentsModule {}
