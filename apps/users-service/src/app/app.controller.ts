import { Controller, } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";
import { CREATE_USER, GET_USERS } from "@monorepo/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern(GET_USERS)
  getUsers() {
    return this.appService.getUsers();
  }

  @MessagePattern(CREATE_USER)
  createUser(data) {
    return this.appService.createUser(data);
  }
}
