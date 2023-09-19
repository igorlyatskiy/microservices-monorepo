/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { postsRmq, } from "@monorepo/microservices";

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(
    AppModule,
    postsRmq.config
  );
  await microservice.listen();
}

bootstrap();
