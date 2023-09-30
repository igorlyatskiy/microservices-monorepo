import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfigAsync } from "../config/typeorm.config";
import { User } from "./user.entity";
import { ClientsModule } from "@nestjs/microservices";
import { postsRmq } from "@monorepo/microservices";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([ User ]),
    ClientsModule.register([
      {
        name: postsRmq.name,
        ...postsRmq.config
      }
    ])
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
