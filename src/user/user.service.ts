import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
