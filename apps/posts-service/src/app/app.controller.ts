import { Controller, } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";
import { GET_POSTS, } from "@monorepo/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(GET_POSTS)
  getPosts() {
    console.log('get posts service')
    return this.appService.getData();
  }
}
