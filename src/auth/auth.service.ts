import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { user } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from 'src/password/password.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
    rememberMe?: boolean,
    cookieSeriesToken?: string,
  ): Promise<any> {
    if (!email || !pass) {
      throw new UnauthorizedException();
    }

    const user: user = await this.usersService.findOne(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    let loginSuccess = false;
    let failedLoginAttemptMsg = null;

    if (user) {
      if (
        user.active &&
        this.passwordService.checkPassword(pass, user.passworddigest, user.salt)
      ) {
        loginSuccess = true;
      } else {
        loginSuccess = false;
        failedLoginAttemptMsg = 'Bad Password';
      }
    } else {
      loginSuccess = false;
      failedLoginAttemptMsg = 'Bad Email';
    }

    if (loginSuccess) {
      const token = await this.jwtService.signAsync({
        userid: user.userid,
        email: user.email,
      });

      user.lastlogin = new Date();
      await this.usersService.update({
        where: { userid: user.userid },
        data: { lastlogin: user.lastlogin },
      });

      return {
        user,
        accessToken: token,
      };
    } else {
      console.warn(
        `AUDIT: Failed login attempt: ${failedLoginAttemptMsg} - email: ${email}`,
      );

      await new Promise((resolve) => setTimeout(resolve, 1500)); // sleep

      throw new UnauthorizedException();
    }
  }
}
