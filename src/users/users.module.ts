import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
// import { User } from './entity/user.entity';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usersProviders,
    UsersService,
  ],
  // controllers: [UsersController],
})
export class UserModule {}
