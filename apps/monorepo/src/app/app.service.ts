import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CREATE_USER, GET_USERS, usersRmq } from "@monorepo/microservices";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(@Inject(usersRmq.name) private readonly usersClient: ClientProxy) {
  }

  async getUsers() {
    return await lastValueFrom(
      this.usersClient.send(GET_USERS, {})
    )
  }

  async createUser(body) {
    return await lastValueFrom(
      this.usersClient.send(CREATE_USER, body)
    )
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.usersClient.connect();
  }
}
