import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(3000);

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
}
bootstrap().then();
