import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CourseEntity } from '../entities/course.entity';
import { LessonsEntity } from '../../lessons/entities/lesson.entity';
import { CreateCourseDto } from '../dto/create-course.dto';

describe('CoursesService', () => {
  let service: CoursesService;
  let courseRepoMock: { create: jest.Mock; save: jest.Mock };
  let lessonsRepoMock: { create: jest.Mock; save: jest.Mock };

  beforeEach(async () => {
    courseRepoMock = { create: jest.fn(), save: jest.fn() };
    lessonsRepoMock = { create: jest.fn(), save: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: getRepositoryToken(CourseEntity), useValue: courseRepoMock },
        {
          provide: getRepositoryToken(LessonsEntity),
          useValue: lessonsRepoMock,
        },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should create a course with lessons', async () => {
    const dto: CreateCourseDto = {
      name: 'Test Course',
      category: 'Test Category',
      lessons: [{ title: 'L1', description: 'C1', comments: [] }],
    };
    lessonsRepoMock.create.mockImplementation((data) => data);
    lessonsRepoMock.save.mockImplementation((data) =>
      Promise.resolve({ ...data, id: 1 }),
    );
    courseRepoMock.create.mockImplementation((data) => data);
    courseRepoMock.save.mockImplementation((data) =>
      Promise.resolve({ ...data, id: 10 }),
    );

    const result = await service.createCourse(dto);

    expect(lessonsRepoMock.create).toHaveBeenCalledWith({
      title: 'L1',
      description: 'C1',
      comments: [],
    });
    expect(lessonsRepoMock.save).toHaveBeenCalledTimes(1);
    expect(courseRepoMock.create).toHaveBeenCalledWith({
      ...dto,
      lessons: [{ title: 'L1', description: 'C1', comments: [], id: 1 }],
    });
    expect(courseRepoMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      ...dto,
      lessons: [{ title: 'L1', description: 'C1', comments: [], id: 1 }],
      id: 10,
    });
  });
});
