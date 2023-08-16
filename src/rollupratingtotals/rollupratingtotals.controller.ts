import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RollupratingtotalsService } from './rollupratingtotals.service';
import { CreateRollupratingtotalDto } from './dto/create-rollupratingtotal.dto';
import { UpdateRollupratingtotalDto } from './dto/update-rollupratingtotal.dto';

@Controller('rollupratingtotals')
export class RollupratingtotalsController {
  constructor(private readonly rollupratingtotalsService: RollupratingtotalsService) {}

  @Post()
  create(@Body() createRollupratingtotalDto: CreateRollupratingtotalDto) {
    return this.rollupratingtotalsService.create(createRollupratingtotalDto);
  }

  @Get()
  findAll() {
    return this.rollupratingtotalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rollupratingtotalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRollupratingtotalDto: UpdateRollupratingtotalDto) {
    return this.rollupratingtotalsService.update(+id, updateRollupratingtotalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rollupratingtotalsService.remove(+id);
  }
}
