import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilegroupsService } from './profilegroups.service';
import { CreateProfilegroupDto } from './dto/create-profilegroup.dto';
import { UpdateProfilegroupDto } from './dto/update-profilegroup.dto';

@Controller('profilegroups')
export class ProfilegroupsController {
  constructor(private readonly profilegroupsService: ProfilegroupsService) {}

  @Post()
  create(@Body() createProfilegroupDto: CreateProfilegroupDto) {
    return this.profilegroupsService.create(createProfilegroupDto);
  }

  @Get()
  findAll() {
    return this.profilegroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilegroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilegroupDto: UpdateProfilegroupDto) {
    return this.profilegroupsService.update(+id, updateProfilegroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilegroupsService.remove(+id);
  }
}
