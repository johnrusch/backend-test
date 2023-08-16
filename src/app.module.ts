import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './reviews/reviews.module';
import { PrismaService } from './prisma.service';
import { ReviewsService } from './reviews/reviews.service';
import { DocprofilesModule } from './docprofiles/docprofiles.module';
import { OrganizationsummariesModule } from './organizationsummaries/organizationsummaries.module';
import { ProfilegroupsModule } from './profilegroups/profilegroups.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { RollupratingtotalsModule } from './rollupratingtotals/rollupratingtotals.module';
import { OrganizationjsonstoresModule } from './organizationjsonstores/organizationjsonstores.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';
import { SmartrequestsummariesModule } from './smartrequestsummaries/smartrequestsummaries.module';
import { SmartrequestlinksModule } from './smartrequestlinks/smartrequestlinks.module';

@Module({
  imports: [
    ReviewsModule,
    DocprofilesModule,
    OrganizationsummariesModule,
    ProfilegroupsModule,
    OrganizationsModule,
    RollupratingtotalsModule,
    OrganizationjsonstoresModule,
    UsersModule,
    AuthModule,
    PasswordModule,
    SmartrequestsummariesModule,
    SmartrequestlinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
