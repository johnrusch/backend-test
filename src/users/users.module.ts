import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PasswordModule } from 'src/password/password.module';

@Module({
  imports: [PasswordModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
