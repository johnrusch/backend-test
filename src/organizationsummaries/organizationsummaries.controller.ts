import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationsummariesService } from './organizationsummaries.service';
import { CreateOrganizationsummaryDto } from './dto/create-organizationsummary.dto';
import { UpdateOrganizationsummaryDto } from './dto/update-organizationsummary.dto';

@Controller('organizationsummaries')
export class OrganizationsummariesController {
  constructor(private readonly organizationsummariesService: OrganizationsummariesService) {}

  @Post()
  create(@Body() createOrganizationsummaryDto: CreateOrganizationsummaryDto) {
    return this.organizationsummariesService.create(createOrganizationsummaryDto);
  }

  @Get()
  findAll() {
    return this.organizationsummariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsummariesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationsummaryDto: UpdateOrganizationsummaryDto) {
    return this.organizationsummariesService.update(+id, updateOrganizationsummaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationsummariesService.remove(+id);
  }
}
