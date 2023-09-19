import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from "@monorepo/microservices";

import { UsersService } from "./users.service";

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() body: CreatePostDto) {
    return this.usersService.createUser(body)
  }
}
