import { Injectable } from '@nestjs/common';
// import { CreateSmartrequestlinkDto } from './dto/create-smartrequestlink.dto';
// import { UpdateSmartrequestlinkDto } from './dto/update-smartrequestlink.dto';
import { Prisma, smartrequestlink } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SmartrequestlinksService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.smartrequestlinkCreateInput) {
    return this.prisma.smartrequestlink.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.smartrequestlinkWhereUniqueInput;
    where?: Prisma.smartrequestlinkWhereInput;
    orderBy?: Prisma.smartrequestlinkOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.smartrequestlink.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    data: Prisma.smartrequestlinkWhereUniqueInput,
  ): Promise<smartrequestlink | null> {
    return this.prisma.smartrequestlink.findUnique({ where: data });
  }

  update(params: {
    where: Prisma.smartrequestlinkWhereUniqueInput;
    data: Prisma.smartrequestlinkUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.smartrequestlink.update({
      data,
      where,
    });
  }

  remove(
    where: Prisma.smartrequestlinkWhereUniqueInput,
  ): Promise<smartrequestlink> {
    return this.prisma.smartrequestlink.delete({ where });
  }
}
