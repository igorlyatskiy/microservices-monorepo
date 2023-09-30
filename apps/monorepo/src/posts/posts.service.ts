import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CREATE_POST, CreatePostDto, GET_POSTS, postsRmq, } from "@monorepo/microservices";
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

  async createPost(data: CreatePostDto) {
    return await lastValueFrom(
      this.postsClient.send(CREATE_POST, data)
    )
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.postsClient.connect();
  }
}
