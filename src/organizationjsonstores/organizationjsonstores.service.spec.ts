import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationjsonstoresService } from './organizationjsonstores.service';

describe('OrganizationjsonstoresService', () => {
  let service: OrganizationjsonstoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationjsonstoresService],
    }).compile();

    service = module.get<OrganizationjsonstoresService>(OrganizationjsonstoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
