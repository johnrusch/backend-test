import { Test, TestingModule } from '@nestjs/testing';
import { ProfilegroupsService } from './profilegroups.service';

describe('ProfilegroupsService', () => {
  let service: ProfilegroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilegroupsService],
    }).compile();

    service = module.get<ProfilegroupsService>(ProfilegroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
