import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from '../prisma.service';
import { review, Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  async findAll(): Promise<review[]> {
    return this.prisma.review.findMany({
      take: 10,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }

  loadReviewsForProfileAndView(profile: any, numberOfReviews: number) {
    return (
      'This action loads reviews for profile: ' +
      profile +
      ' and numberOfReviews: ' +
      numberOfReviews
    );
  }
}
