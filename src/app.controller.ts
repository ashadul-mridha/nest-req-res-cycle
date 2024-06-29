import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(new AuthGuard())
  // @UseInterceptors(new LoggingInterceptor())
  // @UsePipes(new RequestPipe())
  getHello(): string {
    // throw new HttpException('Forbidden', 403);
    return this.appService.getHello();
  }
}
