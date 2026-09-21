import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.interface';
export declare class UsersService {
    private users;
    private nextId;
    findAll(): User[];
    findOne(id: number): User;
    create(dto: CreateUserDto): User;
    update(id: number, dto: UpdateUserDto): User;
    remove(id: number): {
        message: string;
    };
}
