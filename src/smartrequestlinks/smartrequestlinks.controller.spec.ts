import { Test, TestingModule } from '@nestjs/testing';
import { SmartrequestlinksController } from './smartrequestlinks.controller';
import { SmartrequestlinksService } from './smartrequestlinks.service';

describe('SmartrequestlinksController', () => {
  let controller: SmartrequestlinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartrequestlinksController],
      providers: [SmartrequestlinksService],
    }).compile();

    controller = module.get<SmartrequestlinksController>(SmartrequestlinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
