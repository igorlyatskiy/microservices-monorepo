import { Repository } from "typeorm";
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { CreateUserDto, GET_POSTS, postsRmq } from "@monorepo/microservices";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @Inject(postsRmq.name) private readonly postsClient: ClientProxy,
  ) {
  }

  async getUsers() {
    const users = await this.userRepository.find();

    return await Promise.all(users.map(async (item) => {
      const posts = await lastValueFrom(
        this.postsClient.send(GET_POSTS, { userId: item.userId })
      )

      return {
        ...item,
        posts
      }
    }))
  }

  async createUser(dto: CreateUserDto) {
    const existing = await this.userRepository.findOneBy({ email: dto.email })

    if (existing) {
      throw new ConflictException('User with such email already exists')
    }

    const user = this.userRepository.create(dto);

    return this.userRepository.save(user);
  }
}
