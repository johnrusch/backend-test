import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsummariesController } from './organizationsummaries.controller';
import { OrganizationsummariesService } from './organizationsummaries.service';

describe('OrganizationsummariesController', () => {
  let controller: OrganizationsummariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationsummariesController],
      providers: [OrganizationsummariesService],
    }).compile();

    controller = module.get<OrganizationsummariesController>(OrganizationsummariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
