import { Test, TestingModule } from '@nestjs/testing';
import { SmartrequestsummariesService } from './smartrequestsummaries.service';

describe('SmartrequestsummariesService', () => {
  let service: SmartrequestsummariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartrequestsummariesService],
    }).compile();

    service = module.get<SmartrequestsummariesService>(SmartrequestsummariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
