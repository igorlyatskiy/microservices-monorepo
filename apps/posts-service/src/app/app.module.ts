import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from "./post.entity";
import { typeOrmConfigAsync } from "../config/typeorm.config";
import { commentsRmq, } from "@monorepo/microservices";
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([ Post ]),
    ClientsModule.register([
      {
        name: commentsRmq.name,
        ...commentsRmq.config
      }
    ])
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
