import { Injectable } from '@nestjs/common';
import { CreateProfilegroupDto } from './dto/create-profilegroup.dto';
import { UpdateProfilegroupDto } from './dto/update-profilegroup.dto';
import { PrismaService } from '../prisma.service';
import { profilegroup, Prisma } from '@prisma/client';

@Injectable()
export class ProfilegroupsService {
  constructor(private prisma: PrismaService) {}

  create(createProfilegroupDto: CreateProfilegroupDto) {
    return 'This action adds a new profilegroup';
  }

  findAll() {
    return `This action returns all profilegroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profilegroup`;
  }

  update(id: number, updateProfilegroupDto: UpdateProfilegroupDto) {
    return `This action updates a #${id} profilegroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilegroup`;
  }
}
