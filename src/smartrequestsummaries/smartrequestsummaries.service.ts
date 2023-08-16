import { Injectable } from '@nestjs/common';
// import { CreateSmartrequestsummaryDto } from './dto/create-smartrequestsummary.dto';
// import { UpdateSmartrequestsummaryDto } from './dto/update-smartrequestsummary.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, smartrequestsummary } from '@prisma/client';

@Injectable()
export class SmartrequestsummariesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.smartrequestsummaryCreateInput) {
    return this.prisma.smartrequestsummary.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.smartrequestsummaryWhereUniqueInput;
    where?: Prisma.smartrequestsummaryWhereInput;
    orderBy?: Prisma.smartrequestsummaryOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.smartrequestsummary.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    data: Prisma.smartrequestsummaryWhereUniqueInput,
  ): Promise<smartrequestsummary | null> {
    return this.prisma.smartrequestsummary.findUnique({ where: data });
  }

  update(params: {
    where: Prisma.smartrequestsummaryWhereUniqueInput;
    data: Prisma.smartrequestsummaryUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.smartrequestsummary.update({ data, where });
  }

  remove(
    where: Prisma.smartrequestsummaryWhereUniqueInput,
  ): Promise<smartrequestsummary> {
    return this.prisma.smartrequestsummary.delete({ where });
  }
}
