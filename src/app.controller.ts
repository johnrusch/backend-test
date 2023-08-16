import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const { PrismaClient, Review } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    return this.appService.getHello();
  }
}
