import { Injectable } from '@nestjs/common';
import { CreateOrganizationsummaryDto } from './dto/create-organizationsummary.dto';
import { UpdateOrganizationsummaryDto } from './dto/update-organizationsummary.dto';
import { PrismaService } from '../prisma.service';
import { organizationsummary, Prisma } from '@prisma/client';

@Injectable()
export class OrganizationsummariesService {
  constructor(private prisma: PrismaService) {}

  create(createOrganizationsummaryDto: CreateOrganizationsummaryDto) {
    return 'This action adds a new organizationsummary';
  }

  findAll() {
    return `This action returns all organizationsummaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organizationsummary`;
  }

  update(id: number, updateOrganizationsummaryDto: UpdateOrganizationsummaryDto) {
    return `This action updates a #${id} organizationsummary`;
  }

  remove(id: number) {
    return `This action removes a #${id} organizationsummary`;
  }
}
