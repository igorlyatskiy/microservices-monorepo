import { Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";

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

  async createUser(data) {
    const user = this.userRepository.create(data);

    return this.userRepository.save(user);
  }
}
