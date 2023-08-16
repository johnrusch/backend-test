import { Module } from '@nestjs/common';
import { SmartrequestlinksService } from './smartrequestlinks.service';
import { SmartrequestlinksController } from './smartrequestlinks.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SmartrequestlinksController],
  providers: [SmartrequestlinksService, PrismaService],
})
export class SmartrequestlinksModule {}
