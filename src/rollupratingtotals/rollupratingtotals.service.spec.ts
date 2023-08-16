import { Test, TestingModule } from '@nestjs/testing';
import { RollupratingtotalsService } from './rollupratingtotals.service';

describe('RollupratingtotalsService', () => {
  let service: RollupratingtotalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RollupratingtotalsService],
    }).compile();

    service = module.get<RollupratingtotalsService>(RollupratingtotalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
