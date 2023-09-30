import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Post } from "./post.entity";
import { CreatePostDto } from "@monorepo/microservices";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async getUserPosts(creatorId: string) {
    return this.postRepository.findBy({
      creatorId
    })
  }

  async createPost(dto: CreatePostDto) {
    const post = this.postRepository.create(dto);

    return this.postRepository.save(post);
  }
}
