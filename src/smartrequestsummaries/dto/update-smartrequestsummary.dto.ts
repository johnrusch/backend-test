import { PartialType } from '@nestjs/mapped-types';
import { CreateSmartrequestsummaryDto } from './create-smartrequestsummary.dto';

export class UpdateSmartrequestsummaryDto extends PartialType(CreateSmartrequestsummaryDto) {}
