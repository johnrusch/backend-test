import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional()
  rememberMe: boolean;

  @IsString()
  @IsOptional()
  cookieSeriesToken: string;
}
