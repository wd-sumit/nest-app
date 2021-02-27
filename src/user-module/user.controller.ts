import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto, UserParamsDto } from './user.dto';
import { User, UsersResponse } from './user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): UsersResponse {
    return this.userService.getUsers();
  }

  @Post()
  addUser(@Body() user: CreateUserDto): User {
    return this.userService.addUser(user);
  }

  @Get(':email')
  getOneUser(@Param() params: UserParamsDto): User {
    return this.userService.getUser(params.email);
  }
}
