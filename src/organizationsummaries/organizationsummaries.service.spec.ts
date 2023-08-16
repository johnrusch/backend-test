import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsummariesService } from './organizationsummaries.service';

describe('OrganizationsummariesService', () => {
  let service: OrganizationsummariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationsummariesService],
    }).compile();

    service = module.get<OrganizationsummariesService>(OrganizationsummariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
