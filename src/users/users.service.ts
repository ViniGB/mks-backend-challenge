import { Injectable, Inject } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()

export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id })
  }
}