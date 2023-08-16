import { PartialType } from '@nestjs/mapped-types';
import { CreateRollupratingtotalDto } from './create-rollupratingtotal.dto';

export class UpdateRollupratingtotalDto extends PartialType(CreateRollupratingtotalDto) {}
