import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from "./post.entity";
import { typeOrmConfigAsync } from "../config/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([ Post ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
