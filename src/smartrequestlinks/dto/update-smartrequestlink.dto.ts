import { PartialType } from '@nestjs/mapped-types';
import { CreateSmartrequestlinkDto } from './create-smartrequestlink.dto';

export class UpdateSmartrequestlinkDto extends PartialType(CreateSmartrequestlinkDto) {}
