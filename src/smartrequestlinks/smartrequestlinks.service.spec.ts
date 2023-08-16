import { Test, TestingModule } from '@nestjs/testing';
import { SmartrequestlinksService } from './smartrequestlinks.service';

describe('SmartrequestlinksService', () => {
  let service: SmartrequestlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartrequestlinksService],
    }).compile();

    service = module.get<SmartrequestlinksService>(SmartrequestlinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
