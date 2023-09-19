import { Module } from '@nestjs/common';
import { postsRmq, } from "@monorepo/microservices";
import { ClientsModule } from "@nestjs/microservices";

import { PostsService } from './posts.service';
import { PostsController } from "./posts.controller";

@Module({
  imports: [ ClientsModule.register([
    {
      name: postsRmq.name,
      ...postsRmq.config
    }
  ]) ],
  controllers: [ PostsController ],
  providers: [ PostsService ],
})
export class PostsModule {
}
