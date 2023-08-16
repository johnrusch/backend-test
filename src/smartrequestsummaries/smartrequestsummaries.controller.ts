import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SmartrequestsummariesService } from './smartrequestsummaries.service';
// import { CreateSmartrequestsummaryDto } from './dto/create-smartrequestsummary.dto';
// import { UpdateSmartrequestsummaryDto } from './dto/update-smartrequestsummary.dto';
import { Prisma } from '@prisma/client';

@Controller('smartrequestsummaries')
export class SmartrequestsummariesController {
  constructor(
    private readonly smartrequestsummariesService: SmartrequestsummariesService,
  ) {}

  @Post()
  create(@Body() data: Prisma.smartrequestsummaryCreateInput) {
    return this.smartrequestsummariesService.create(data);
  }

  @Get()
  findAll(
    @Query()
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.smartrequestsummaryWhereUniqueInput;
      where?: Prisma.smartrequestsummaryWhereInput;
      orderBy?: Prisma.smartrequestsummaryOrderByWithRelationInput;
    },
  ) {
    return this.smartrequestsummariesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.smartrequestsummariesService.findOne({
      smartrequestsummaryid: id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Prisma.smartrequestsummaryUpdateInput,
  ) {
    return this.smartrequestsummariesService.update({
      where: { smartrequestsummaryid: id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.smartrequestsummariesService.remove({
      smartrequestsummaryid: id,
    });
  }
}
