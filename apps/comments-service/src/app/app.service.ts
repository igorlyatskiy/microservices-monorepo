import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from "./comment.entity";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>
  ) {
  }

  getPostComments(postId: string) {
    return this.commentRepository.find({
      where: { postId }
    });
  }
}
