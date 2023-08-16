import { Module } from '@nestjs/common';
import { SmartrequestsummariesService } from './smartrequestsummaries.service';
import { SmartrequestsummariesController } from './smartrequestsummaries.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SmartrequestsummariesController],
  providers: [SmartrequestsummariesService, PrismaService],
})
export class SmartrequestsummariesModule {}
