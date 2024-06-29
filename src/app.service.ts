import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './services/request.service';

@Injectable()
export class AppService {
  public readonly logger = new Logger(AppService.name);

  constructor(private readonly requestService: RequestService) {}
  getHello() {
    const userId = this.requestService.getUserId();
    this.logger.log(`userId: ${userId}`, userId);

    return 'Hello World!';
  }
}
