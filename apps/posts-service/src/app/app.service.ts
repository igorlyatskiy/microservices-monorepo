import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Post } from "./post.entity";
import { commentsRmq, CreatePostDto, GET_POST_COMMENTS, } from "@monorepo/microservices";
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @Inject(commentsRmq.name) private readonly commentsClient: ClientProxy,
  ) {
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async getUserPosts(creatorId: string) {
    const userPosts = await this.postRepository.findBy({
      creatorId
    })

    return await Promise.all(userPosts.map(async (item) => {
      const comments = await lastValueFrom(
        this.commentsClient.send(GET_POST_COMMENTS, { postId: item.postId })
      )

      const preparedComments = comments.map((item) => ({
        commentId: item.commentId,
        creatorId: item.creatorId,
        body: item.body
      }))

      return {
        postId: item.postId,
        title: item.title,
        body: item.body,
        comments: preparedComments
      }
    }))
  }

  async createPost(dto: CreatePostDto) {
    const post = this.postRepository.create(dto);

    return this.postRepository.save(post);
  }
}
