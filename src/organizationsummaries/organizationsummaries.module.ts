import { Module } from '@nestjs/common';
import { OrganizationsummariesService } from './organizationsummaries.service';
import { OrganizationsummariesController } from './organizationsummaries.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrganizationsummariesController],
  providers: [OrganizationsummariesService, PrismaService]
})
export class OrganizationsummariesModule {}
