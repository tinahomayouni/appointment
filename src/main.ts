import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation :: when we use DTO and wants to ckeck
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('MOM - API Documentation')
    .setDescription('API documentation for the set appointment application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Serve Swagger UI at /api

  await app.listen(3000);
}
bootstrap();
