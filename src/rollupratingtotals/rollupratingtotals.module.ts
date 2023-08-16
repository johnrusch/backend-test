import { Module } from '@nestjs/common';
import { RollupratingtotalsService } from './rollupratingtotals.service';
import { RollupratingtotalsController } from './rollupratingtotals.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RollupratingtotalsController],
  providers: [RollupratingtotalsService, PrismaService]
})
export class RollupratingtotalsModule {}
