import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';
import { user, Prisma } from '@prisma/client';
import { PasswordService } from 'src/password/password.service';

@Injectable()
export class UsersService {
  private readonly CLEAR_PASSWORD_MIN_LENGTH: number = 8;
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async validateUserEmail(
    email: string,
    userBeingUpdated: user | null,
  ): Promise<void> {
    // Check that email is not null
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    // Check that a user with this email doesn't already exist
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user) {
      if (!userBeingUpdated || userBeingUpdated.userid !== user.userid) {
        throw new BadRequestException('Email already in use');
      }
    }
  }

  async setSaltAndDigestFromClearPassword(
    user: Prisma.userCreateInput,
    clearPassword: string,
  ): Promise<void> {
    // Generate a new salt for this person
    const salt = this.passwordService.generateSalt();
    const passwordDigest = this.passwordService.generatePasswordDigest(
      clearPassword,
      salt,
    );

    user.salt = salt;
    user.passworddigest = passwordDigest; // assuming 'password' is the hashed password field in your Prisma User model
  }

  async create(createUserDto: CreateUserDto): Promise<user> {
    const { email, clearPassword } = createUserDto;
    await this.validateUserEmail(email, null);

    const userData: Prisma.userCreateInput = {
      email: email,
      // You should update salt and password fields based on your logic
      salt: 'generated_salt',
      passworddigest: 'hashed_password',
    };
    await this.setSaltAndDigestFromClearPassword(userData, clearPassword);

    const user = await this.prisma.user.create({ data: userData });

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async update(params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }) {
    const { data, where } = params;
    return this.prisma.user.update({
      where,
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
