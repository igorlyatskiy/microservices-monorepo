import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  checkHealth() {
    return {
      isHealthy: true
    };
  }

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('/users')
  createUser(@Body() body) {
    return this.appService.createUser(body)
  }
}
