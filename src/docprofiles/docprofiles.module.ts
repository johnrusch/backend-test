import { Module } from '@nestjs/common';
import { DocprofilesService } from './docprofiles.service';
import { DocprofilesController } from './docprofiles.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DocprofilesController],
  providers: [DocprofilesService, PrismaService]
})
export class DocprofilesModule {}
