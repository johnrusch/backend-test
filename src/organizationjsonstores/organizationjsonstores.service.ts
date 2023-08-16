import { Injectable } from '@nestjs/common';
import { CreateOrganizationjsonstoreDto } from './dto/create-organizationjsonstore.dto';
import { UpdateOrganizationjsonstoreDto } from './dto/update-organizationjsonstore.dto';
import { PrismaService } from '../prisma.service';
import { organizationjsonstore, Prisma } from '@prisma/client';


@Injectable()
export class OrganizationjsonstoresService {
  constructor(private prisma: PrismaService) {}

  create(createOrganizationjsonstoreDto: CreateOrganizationjsonstoreDto) {
    return 'This action adds a new organizationjsonstore';
  }

  findAll() {
    return `This action returns all organizationjsonstores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organizationjsonstore`;
  }

  update(id: number, updateOrganizationjsonstoreDto: UpdateOrganizationjsonstoreDto) {
    return `This action updates a #${id} organizationjsonstore`;
  }

  remove(id: number) {
    return `This action removes a #${id} organizationjsonstore`;
  }
}
