import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { GET_USERS, usersRmq } from "@monorepo/microservices";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(@Inject(usersRmq.name) private readonly usersClient: ClientProxy) {
  }

  // TODO: Fix types.
  async getData(): Promise<any> {
    return await lastValueFrom(
      this.usersClient.send('test', {})
    );
  }

  async getUsers(): Promise<any[]> {
    return await lastValueFrom(
      this.usersClient.send(GET_USERS, {})
    )
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.usersClient.connect();
  }
}
