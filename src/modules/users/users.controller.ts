import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
        try {
            return await this.usersService.create(createUserDto);
        } catch (e) {
            return e;
        }
    }

    @Get(':id')
    findUser(@Param('id') id): Promise<any> {
        return this.usersService.findOne(id)
    }
}
