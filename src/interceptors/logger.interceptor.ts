import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // this exec for request time
    this.logger.log('executed at request time...');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        // this exec at response time
        this.logger.log(`executed at response time...`);
        if (context.switchToHttp().getResponse().statusCode === 200) {
          //   console.log('Success');
        } else {
          //   console.log('Error');
        }

        this.logger.log(`Method Process Time: ${Date.now() - now}ms`);
      }),
    );
  }
}
