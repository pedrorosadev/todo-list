import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  
  await app.listen(port);
}
bootstrap();
