import { Module } from '@nestjs/common';
import { OrganizationjsonstoresService } from './organizationjsonstores.service';
import { OrganizationjsonstoresController } from './organizationjsonstores.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrganizationjsonstoresController],
  providers: [OrganizationjsonstoresService, PrismaService]
})
export class OrganizationjsonstoresModule {}
