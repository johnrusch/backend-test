import { Test, TestingModule } from '@nestjs/testing';
import { DocprofilesService } from './docprofiles.service';

describe('DocprofilesService', () => {
  let service: DocprofilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocprofilesService],
    }).compile();

    service = module.get<DocprofilesService>(DocprofilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
