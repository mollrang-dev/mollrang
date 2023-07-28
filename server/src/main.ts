import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global prefix setting
  app.setGlobalPrefix('/api');

  // swagger setting
  const config = new DocumentBuilder()
    .setTitle('OX Quiz API')
    .setDescription('The OX Quiz API description')
    .setVersion('1.0')
    .addTag('OX-QUIZ')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerPath = '/docs';
  SwaggerModule.setup(swaggerPath, app, document);

  // cors setting
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap().then();
