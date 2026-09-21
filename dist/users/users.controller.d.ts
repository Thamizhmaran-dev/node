import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("./user.interface").User[];
    findOne(id: number): import("./user.interface").User;
    create(dto: CreateUserDto): import("./user.interface").User;
    update(id: number, dto: UpdateUserDto): import("./user.interface").User;
    remove(id: number): {
        message: string;
    };
}
