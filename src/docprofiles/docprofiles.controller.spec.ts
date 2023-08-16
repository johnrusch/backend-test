import { Test, TestingModule } from '@nestjs/testing';
import { DocprofilesController } from './docprofiles.controller';
import { DocprofilesService } from './docprofiles.service';

describe('DocprofilesController', () => {
  let controller: DocprofilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocprofilesController],
      providers: [DocprofilesService],
    }).compile();

    controller = module.get<DocprofilesController>(DocprofilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
