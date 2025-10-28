import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user-dto';

@Injectable()
export class UsersService {
  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(searchUserDto: SearchUserDto) {
    // User型の定義
    type User = {
      id: number;
      name: string;
      age: number;
    };
    // ユーザデータの配列
    const users: User[] = [
      { id: 1, name: 'Taro', age: 25 },
      { id: 2, name: 'Hanako', age: 30 },
      { id: 3, name: 'Jiro', age: 22 },
    ];
    // keywordがnameに含まれているユーザのみをフィルタリング
    const filteredUsers = users.filter((user) => user.name.includes(searchUserDto.name));
    return filteredUsers;
  }

  findOne(id: number) {
    // ユーザデータの配列
    const users = [
      { id: 1, name: 'Taro', age: 25 },
      { id: 2, name: 'Hanako', age: 30 },
      { id: 3, name: 'Jiro', age: 22 },
    ];

    const user = users.find((user) => user.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}