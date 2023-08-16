import { Test, TestingModule } from '@nestjs/testing';
import { RollupratingtotalsController } from './rollupratingtotals.controller';
import { RollupratingtotalsService } from './rollupratingtotals.service';

describe('RollupratingtotalsController', () => {
  let controller: RollupratingtotalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RollupratingtotalsController],
      providers: [RollupratingtotalsService],
    }).compile();

    controller = module.get<RollupratingtotalsController>(RollupratingtotalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
