import { PartialType } from '@nestjs/mapped-types';
import { CreateDocprofileDto } from './create-docprofile.dto';

export class UpdateDocprofileDto extends PartialType(CreateDocprofileDto) {}
