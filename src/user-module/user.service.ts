import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UsersResponse } from './user.interface';

@Injectable()
export class UserService {
  public users: User[] = [];

  getUsers(): UsersResponse {
    return {
      status: 'success',
      isSuccess: true,
      results: this.users.length,
      data: this.users,
    };
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  getUser(email: string): User {
    const userData = this.users.filter((user) => user.email === email);
    if (!userData || !Array.isArray(userData) || userData.length <= 0) {
      throw new NotFoundException('user not found');
    }
    return userData[0];
  }
}
