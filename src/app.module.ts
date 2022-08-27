import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { FilmModule } from './film/film.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { Film } from './film/entity/film.entity';
import { DataSource } from 'typeorm';

require('dotenv').config();

@Module({
  imports: [
    // CacheModule.register({
    //   isGlobal: true,
    //   store: redisStore,
    //   host: process.env.REDIS_HOST || 'localhost',
    //   port: process.env.REDIS_PORT || 6379,
    //   username: process.env.REDIS_USERNAME || 'root',
    //   password: process.env.REDIS_PASSWORD || '12345',
    //   no_ready_check: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USERNAME || 'root',
      password: process.env.POSTGRES_PASSWORD || '12345',
      database: process.env.POSTGRES_DB || 'film_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    // LoginModule,
    // FilmModule,
  ],
})
export class AppModule {}
