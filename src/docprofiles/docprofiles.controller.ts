import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocprofilesService } from './docprofiles.service';
import { CreateDocprofileDto } from './dto/create-docprofile.dto';
import { UpdateDocprofileDto } from './dto/update-docprofile.dto';

@Controller('docprofiles')
export class DocprofilesController {
  constructor(private readonly docprofilesService: DocprofilesService) {}

  @Post()
  create(@Body() createDocprofileDto: CreateDocprofileDto) {
    return this.docprofilesService.create(createDocprofileDto);
  }

  @Get()
  findAll() {
    return this.docprofilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docprofilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocprofileDto: UpdateDocprofileDto) {
    return this.docprofilesService.update(+id, updateDocprofileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docprofilesService.remove(+id);
  }
}
