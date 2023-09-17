import { Controller, } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";
import { GET_USERS } from "@monorepo/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern(GET_USERS)
  getData() {
    return this.appService.getData();
  }
}
