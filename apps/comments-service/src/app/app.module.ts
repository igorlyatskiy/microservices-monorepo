import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "./comment.entity";
import { typeOrmConfigAsync } from "../config/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([ Comment ]),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
