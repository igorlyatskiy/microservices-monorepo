import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from "@nestjs/microservices";
import { usersRmq } from "@monorepo/microservices";

@Module({
  imports: [ ClientsModule.register([
    {
      name: usersRmq.name,
      ...usersRmq.config
    }
  ]) ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
