import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/http.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  // app.useGlobalGuards(new AuthGuard());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalPipes(new RequestPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
