import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { user } from '@prisma/client';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //   @HttpCode(HttpStatus.OK)
  //   @Post('login')
  //   signIn(@Body() user: any, rememberMe: boolean, cookieSeriesToken: string) {
  //     return this.authService.signIn();
  //   }

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  async signIn(
    @Body()
    body: SignInDto,
  ): Promise<user | null> {
    const { email, password, rememberMe, cookieSeriesToken } = body;

    const user = await this.authService.signIn(
      email,
      password,
      rememberMe,
      cookieSeriesToken,
    );
    if (!user) {
      return null;
    }


    return user;
  }
}
