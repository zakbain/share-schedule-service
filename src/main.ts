import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Schedule Service')
    .setDescription('AirBNB for fun')
    .setVersion('1.0')
    .addTag('schedule')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.enableCors();
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
