import { Module } from '@nestjs/common';
import { LessonsService } from './use-cases/lessons.service';
import { LessonsController } from './use-cases/lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonsEntity } from './entities/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonsEntity])],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
