import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
}
