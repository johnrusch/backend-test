import { Module } from '@nestjs/common';
import { ProfilegroupsService } from './profilegroups.service';
import { ProfilegroupsController } from './profilegroups.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProfilegroupsController],
  providers: [ProfilegroupsService, PrismaService]
})
export class ProfilegroupsModule {}
