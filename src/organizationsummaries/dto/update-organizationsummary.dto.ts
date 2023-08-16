import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationsummaryDto } from './create-organizationsummary.dto';

export class UpdateOrganizationsummaryDto extends PartialType(CreateOrganizationsummaryDto) {}
