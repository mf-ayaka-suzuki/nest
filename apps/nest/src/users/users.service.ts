import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user-dto';

type User = {
  id: number;
  name: string;
  age: number;
};
@Injectable()
export class UsersService {
  // ユーザデータの配列
  users: User[] = [
    { id: 1, name: 'Taro', age: 25 },
    { id: 2, name: 'Hanako', age: 30 },
    { id: 3, name: 'Jiro', age: 22 },
  ];
  create(createUserDto: CreateUserDto) {
    const maxId =
      this.users.length > 0
        ? Math.max(...this.users.map((user) => user.id))
        : 0;

    const newUser : User = {
      id: maxId + 1,
      name: createUserDto.name,
      age: createUserDto.age,
    };

    this.users.push(newUser);

    return this.users;
  }

  findAll(searchUserDto: SearchUserDto) {
    
    if(!searchUserDto.name){
      return this.users
    }
    const filteredUsers = this.users.filter((user) =>
      user.name.includes(searchUserDto.name),
    );

    return filteredUsers;
  }

  findOne(id: number) {
    // 条件に一致する最初のユーザを返す
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if(!user){
      return; 
    }
    
    if(updateUserDto.age){
      user.age = updateUserDto.age;
    }

    if(updateUserDto.name){
      user.name = updateUserDto.name;
    }

    return user;
  }

  remove(id: number) {
    return this.users.filter((user) => user.id !== id);
  }
}
