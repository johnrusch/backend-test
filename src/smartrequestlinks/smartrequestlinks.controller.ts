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
import { SmartrequestlinksService } from './smartrequestlinks.service';
// import { CreateSmartrequestlinkDto } from './dto/create-smartrequestlink.dto';
// import { UpdateSmartrequestlinkDto } from './dto/update-smartrequestlink.dto';
import { Prisma } from '@prisma/client';

@Controller('smartrequestlinks')
export class SmartrequestlinksController {
  constructor(
    private readonly smartrequestlinksService: SmartrequestlinksService,
  ) {}

  @Post()
  create(@Body() data: Prisma.smartrequestlinkCreateInput) {
    return this.smartrequestlinksService.create(data);
  }

  @Get()
  findAll(
    @Query()
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.smartrequestlinkWhereUniqueInput;
      where?: Prisma.smartrequestlinkWhereInput;
      orderBy?: Prisma.smartrequestlinkOrderByWithRelationInput;
    },
  ) {
    return this.smartrequestlinksService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.smartrequestlinksService.findOne({ smartrequestlinkid: id });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Prisma.smartrequestlinkUpdateInput,
  ) {
    return this.smartrequestlinksService.update({
      where: { smartrequestlinkid: id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.smartrequestlinksService.remove({ smartrequestlinkid: id });
  }
}
