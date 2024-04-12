import { Body, Controller, Delete, Get, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiTags('users')
    @Get()
    getUsers() {
        return this.usersService.getUsers()
    }

    @ApiTags('users')
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user)
    }

    @ApiTags('users')
    @Put()
    updateUser() {
        return 'Actualizando usuarios'
    }

    @ApiTags('users')
    @Delete()
    deleteUser() {
        return 'Eliminando usuario'
    }

}
