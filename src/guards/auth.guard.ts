import { CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    this.logger.log(`Auth Guard...`);

    return true;
  }
}
