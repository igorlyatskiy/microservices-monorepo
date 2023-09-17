/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { usersRmq } from "@monorepo/microservices";

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(
    AppModule,
    usersRmq.config
  );
  await microservice.listen();
}

bootstrap();
