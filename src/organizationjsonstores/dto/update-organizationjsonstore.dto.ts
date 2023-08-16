import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationjsonstoreDto } from './create-organizationjsonstore.dto';

export class UpdateOrganizationjsonstoreDto extends PartialType(CreateOrganizationjsonstoreDto) {}
