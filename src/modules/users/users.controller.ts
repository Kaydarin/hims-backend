import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe, UseGuards, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import { DataExistedFilter } from '@/commons/filter/data-existed.filter'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('create')
    @UseFilters(new DataExistedFilter())
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
        try {
            return await this.usersService.create(createUserDto);
        } catch (e) {
            throw new HttpException({
                error: e,
                // customError: {
                //     something: 'something',
                //     someshit: 'yea boi'
                // }
            }, HttpStatus.CONFLICT);
        }
    }

    @Get(':id')
    findUser(@Param('id') id): Promise<any> {
        return this.usersService.findOne(id)
    }
}
