import { Controller, } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CREATE_POST, CreatePostDto, GET_POST_BY_USER, GET_POSTS, } from "@monorepo/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern(GET_POSTS)
  getPosts() {
    return this.appService.getAllPosts();
  }

  @MessagePattern(GET_POST_BY_USER)
  getPostsByUser({ userId }: { userId: string }) {
    return this.appService.getUserPosts(userId)
  }

  @MessagePattern(CREATE_POST)
  createPost(
    @Payload() data: CreatePostDto,
  ) {
    return this.appService.createPost(data);
  }

  // @MessagePattern(UPDATE_POST)
  // updatePost(
  //   @Body() updatePostDto: UpdatePostDto,
  //   @Param('postId') postId: string,
  // ) {
  //   return this.appService.updatePost(updatePostDto, postId);
  // }
  //
  // @Delete('/:postId')
  // deletePost(@Param('postId') postId: string) {
  //   return this.postsService.deletePost(req.user, postId);
  // }
}
