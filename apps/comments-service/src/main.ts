/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
 
import { commentsRmq, } from "@monorepo/microservices";
import { AppModule } from './app/app.module';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(
    AppModule,
    commentsRmq.config
  );
  await microservice.listen();
}

bootstrap();
