import { Repository } from "typeorm";
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { CreatePostDto } from "@monorepo/microservices";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
  }

  async getUsers() {
    return this.userRepository.find()
  }

  async createUser(dto: CreatePostDto) {
    const existing = await this.userRepository.findOneBy({ email: dto.email })

    if (existing) {
      throw new ConflictException('User with such email already exists')
    }

    const user = this.userRepository.create(dto);

    return this.userRepository.save(user);
  }
}
