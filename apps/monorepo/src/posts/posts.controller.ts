import { Body, Controller, Get, Post, } from '@nestjs/common';

import { PostsService } from "./posts.service";
import { CreatePostDto } from "@monorepo/microservices";

@Controller('/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Post()
  createPost(@Body() body: CreatePostDto) {
    return this.postsService.createPost(body)
  }
}
