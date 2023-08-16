import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationjsonstoresService } from './organizationjsonstores.service';
import { CreateOrganizationjsonstoreDto } from './dto/create-organizationjsonstore.dto';
import { UpdateOrganizationjsonstoreDto } from './dto/update-organizationjsonstore.dto';

@Controller('organizationjsonstores')
export class OrganizationjsonstoresController {
  constructor(private readonly organizationjsonstoresService: OrganizationjsonstoresService) {}

  @Post()
  create(@Body() createOrganizationjsonstoreDto: CreateOrganizationjsonstoreDto) {
    return this.organizationjsonstoresService.create(createOrganizationjsonstoreDto);
  }

  @Get()
  findAll() {
    return this.organizationjsonstoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationjsonstoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationjsonstoreDto: UpdateOrganizationjsonstoreDto) {
    return this.organizationjsonstoresService.update(+id, updateOrganizationjsonstoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationjsonstoresService.remove(+id);
  }
}
