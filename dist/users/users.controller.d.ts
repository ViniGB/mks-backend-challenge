import { User } from './entity/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): string;
    findOne(id: number): Promise<User>;
}
