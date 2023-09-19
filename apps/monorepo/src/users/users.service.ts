import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CREATE_USER, CreatePostDto, GET_USERS, usersRmq } from "@monorepo/microservices";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class UsersService implements OnApplicationBootstrap {
  constructor(@Inject(usersRmq.name) private readonly usersClient: ClientProxy) {
  }

  async getUsers() {
    return await lastValueFrom(
      this.usersClient.send(GET_USERS, {})
    )
  }

  async createUser(dto: CreatePostDto) {
    return await lastValueFrom(
      this.usersClient.send(CREATE_USER, dto)
    )
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.usersClient.connect();
  }
}
