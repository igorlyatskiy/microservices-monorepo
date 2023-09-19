import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { GET_POSTS, postsRmq, } from "@monorepo/microservices";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class PostsService implements OnApplicationBootstrap {
  constructor(@Inject(postsRmq.name) private readonly postsClient: ClientProxy) {
  }

  async getPosts() {
    return await lastValueFrom(
      this.postsClient.send(GET_POSTS, {})
    )
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.postsClient.connect();
  }
}
