
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../database/models';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    create(userDto: CreateUserDto): Promise<User | undefined> {

        const phone: string | null = userDto.phone || null;

        return this.userModel.create({
            fullname: userDto.fullname,
            username: userDto.username,
            email: userDto.email,
            password: userDto.password,
            phone: phone
        })
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}