import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'tamil',
      email: 'tamil@example.com',
    },
  ];

  private nextId = 2;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user;
  }

  create(dto: CreateUserDto): User {
    const emailExists = this.users.some((user) => user.email === dto.email);

    if (emailExists) {
      throw new ConflictException('Email already exists');
    }

    const user: User = {
      id: this.nextId++,
      name: dto.name,
      email: dto.email,
    };

    this.users.push(user);
    return user;
  }

  update(id: number, dto: UpdateUserDto): User {
    const user = this.findOne(id);

    if (
      dto.email &&
      this.users.some(
        (item) => item.id !== id && item.email === dto.email,
      )
    ) {
      throw new ConflictException('Email already exists');
    }

    Object.assign(user, dto);
    return user;
  }

  remove(id: number): { message: string } {
    this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return {
      message: 'User deleted successfully',
    };
  }
}
