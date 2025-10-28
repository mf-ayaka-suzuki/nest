// src/main.ts
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // 型変換: 入力値をDTOの型に自動変換
      transform: true,
      // リクエストボディの中で、定義されていないプロパティを削除する
      whitelist: true,
      // whitelist外のプロパティが存在する場合、エラーを返す
      forbidNonWhitelisted: true,
    }),
  );
 await app.listen(3000, '0.0.0.0');
}
bootstrap();
