import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,
  ){}
    findAll(){
        return 'find all user works';
    }
    findUser(userId: string){
        return `find user works: ${userId}`;
    }
    createUser(newUser: any){
        return `new user here: ${JSON.stringify(newUser)}`;
    }
    login(user: any){
        return `user ${JSON.stringify(user)} has logged in`;
    }
    updateUser(userId: string, newUser: any){
        return `update user works: ${userId} ${newUser}` ;
    }
    deleteUser(userId: string){
        return 'delete user works'
    }
}
