import { Module } from '@nestjs/common';
import { usersRmq } from "@monorepo/microservices";
import { ClientsModule } from "@nestjs/microservices";

import { UsersService } from './users.service';
import { UsersController } from "./users.controller";

@Module({
  imports: [ ClientsModule.register([
    {
      name: usersRmq.name,
      ...usersRmq.config
    }
  ]) ],
  controllers: [ UsersController ],
  providers: [ UsersService ],
})
export class UsersModule {
}
