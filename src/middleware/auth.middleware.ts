// import { Logger, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import { RequestService } from '../services/request.service';

// export class AuthMiddleware implements NestMiddleware {
//   private readonly logger = new Logger(AuthMiddleware.name);

//   constructor(private readonly requestService: RequestService) {}

//   async use(req: Request, res: Response, next: NextFunction) {
//     this.logger.log(`Auth Middleware...`);
//     const userId = '123';
//     await this.requestService.setUserId(userId);

//     next();
//   }
// }

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from '../services/request.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthMiddleware.name);
  constructor(private readonly reqService: RequestService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`Auth Middleware...`);
    await this.reqService.setUserId('123');
    next();
  }
}
