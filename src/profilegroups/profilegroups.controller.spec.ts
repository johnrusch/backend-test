import { Test, TestingModule } from '@nestjs/testing';
import { ProfilegroupsController } from './profilegroups.controller';
import { ProfilegroupsService } from './profilegroups.service';

describe('ProfilegroupsController', () => {
  let controller: ProfilegroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilegroupsController],
      providers: [ProfilegroupsService],
    }).compile();

    controller = module.get<ProfilegroupsController>(ProfilegroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
