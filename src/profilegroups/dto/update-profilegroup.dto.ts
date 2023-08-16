import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilegroupDto } from './create-profilegroup.dto';

export class UpdateProfilegroupDto extends PartialType(CreateProfilegroupDto) {}
