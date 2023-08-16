import { Test, TestingModule } from '@nestjs/testing';
import { SmartrequestsummariesController } from './smartrequestsummaries.controller';
import { SmartrequestsummariesService } from './smartrequestsummaries.service';

describe('SmartrequestsummariesController', () => {
  let controller: SmartrequestsummariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartrequestsummariesController],
      providers: [SmartrequestsummariesService],
    }).compile();

    controller = module.get<SmartrequestsummariesController>(SmartrequestsummariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
