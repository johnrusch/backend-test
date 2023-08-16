import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  private globalSalt: string;

  constructor() {
    this.globalSalt = process.env.GLOBAL_SALT;
    if (!this.globalSalt || this.globalSalt.length < 6) {
      throw new Error(
        'Global salt in password helper must be at least six characters long',
      );
    }
  }

  generateSalt(): string {
    return crypto.randomBytes(8).toString('hex');
  }

  generatePasswordDigest(clearPassword: string, salt: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(salt + clearPassword + this.globalSalt);
    return hash.digest('hex');
  }

  checkPassword(
    clearPassword: string,
    passwordDigest: string,
    salt: string,
  ): boolean {
    if (!passwordDigest || !salt) {
      return false;
    }

    const incomingPassDigest = this.generatePasswordDigest(clearPassword, salt);
    return incomingPassDigest === passwordDigest;
  }
}
