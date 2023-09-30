import { Controller, } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";
import { GET_POST_COMMENTS } from "@monorepo/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern(GET_POST_COMMENTS)
  getData() {
    return this.appService.getData();
  }
}
