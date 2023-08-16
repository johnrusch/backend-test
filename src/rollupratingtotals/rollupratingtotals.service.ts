import { Injectable } from '@nestjs/common';
import { CreateRollupratingtotalDto } from './dto/create-rollupratingtotal.dto';
import { UpdateRollupratingtotalDto } from './dto/update-rollupratingtotal.dto';
import { PrismaService } from '../prisma.service';
import { rollupratingtotal, Prisma } from '@prisma/client';

@Injectable()
export class RollupratingtotalsService {
  constructor(private prisma: PrismaService) {}

  create(createRollupratingtotalDto: CreateRollupratingtotalDto) {
    return 'This action adds a new rollupratingtotal';
  }

  findAll() {
    return `This action returns all rollupratingtotals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rollupratingtotal`;
  }

  update(id: number, updateRollupratingtotalDto: UpdateRollupratingtotalDto) {
    return `This action updates a #${id} rollupratingtotal`;
  }

  remove(id: number) {
    return `This action removes a #${id} rollupratingtotal`;
  }
}
