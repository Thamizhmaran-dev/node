"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'John',
                email: 'john@example.com',
            },
        ];
        this.nextId = 2;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((item) => item.id === id);
        if (!user) {
            throw new common_1.NotFoundException(`User ${id} not found`);
        }
        return user;
    }
    create(dto) {
        const emailExists = this.users.some((user) => user.email === dto.email);
        if (emailExists) {
            throw new common_1.ConflictException('Email already exists');
        }
        const user = {
            id: this.nextId++,
            name: dto.name,
            email: dto.email,
        };
        this.users.push(user);
        return user;
    }
    update(id, dto) {
        const user = this.findOne(id);
        if (dto.email &&
            this.users.some((item) => item.id !== id && item.email === dto.email)) {
            throw new common_1.ConflictException('Email already exists');
        }
        Object.assign(user, dto);
        return user;
    }
    remove(id) {
        this.findOne(id);
        this.users = this.users.filter((user) => user.id !== id);
        return {
            message: 'User deleted successfully',
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map