import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfigAsync } from "../config/typeorm.config";
import { User } from "./user.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([ User ]),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
