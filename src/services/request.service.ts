import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RequestService {
  userId: string;

  logger = new Logger(RequestService.name);

  public async getUserId() {
    return this.userId;
  }

  public async setUserId(userId: string) {
    // this.logger.log(`Setting userId: ${userId}`);
    this.userId = userId;
  }
}
