import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationjsonstoresController } from './organizationjsonstores.controller';
import { OrganizationjsonstoresService } from './organizationjsonstores.service';

describe('OrganizationjsonstoresController', () => {
  let controller: OrganizationjsonstoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationjsonstoresController],
      providers: [OrganizationjsonstoresService],
    }).compile();

    controller = module.get<OrganizationjsonstoresController>(OrganizationjsonstoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
