import { Injectable } from '@nestjs/common';
import { CreateDocprofileDto } from './dto/create-docprofile.dto';
import { UpdateDocprofileDto } from './dto/update-docprofile.dto';
import { PrismaService } from '../prisma.service';
import { docprofile, organization, Prisma } from '@prisma/client';

@Injectable()
export class DocprofilesService {
  constructor(private prisma: PrismaService) {}

  create(createDocprofileDto: CreateDocprofileDto) {
    return 'This action adds a new docprofile';
  }

  findAll() {
    return `This action returns all docprofiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docprofile`;
  }

  async findByOrgSlugAndProfileIdentifier(
    orgSlug: string,
    idType: string,
    id: string,
  ): Promise<docprofile> {
    if (!orgSlug || !idType || !id) {
      return null;
    }

    let profile: docprofile = null;

    // find the associated organization
    const organization: organization = await this.prisma.organization.findFirst(
      {
        where: {
          slug: orgSlug,
        },
      },
    );

    if (organization) {
      // Create a dynamic where clause for the docprofile
      let profileWhere = {
        organizationid: organization.organizationid,
      };

      // Add the idType and id to the where clause
      switch (idType) {
        case 'npinumber':
          profileWhere['npinumber'] = id;
          break;
        case 'sourceid':
          profileWhere['sourceid'] = id;
          break;
        case 'alternateprofileid':
          profileWhere['alternateprofileid'] = id;
          break;
        // Add more cases if needed
        default:
          throw new Error(`Unsupported idType: ${idType}`);
      }

      // find the associated profile
      profile = await this.prisma.docprofile.findFirst({
        where: profileWhere,
      });
    }

    return profile;
  }

  update(id: number, updateDocprofileDto: UpdateDocprofileDto) {
    return `This action updates a #${id} docprofile`;
  }

  remove(id: number) {
    return `This action removes a #${id} docprofile`;
  }
}
