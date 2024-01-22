import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    findAll(){
        return this.userService.findAll();  
    }
    @Get(':userId')
    findUser(@Param('userId') userId: string){
        return this.userService.findUser(userId);
    }
    @Post()
    createUser(@Body() newUser: any){
        return  this.userService.createUser(newUser);
    }
    @Post("login")
    login(@Body() user:any){
        return this.userService.login(user);
    }
    @Put(':userId')
    updateUser(@Param('userId') userId: string, @Body() newUser: any){
        return this.userService.updateUser(userId, newUser);
    }
    @Delete()
    deleteUser(@Param('userId') userId: string){
        return this.userService.deleteUser(userId);
    }

}