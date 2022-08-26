import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from 'src/controllers/movies.controller';
import { MoviesEntity } from 'src/entities/movies.entity';
import { MoviesService } from 'src/services/movies.service';
@Module({
    imports: [TypeOrmModule.forFeature([MoviesEntity])],
    providers: [MoviesService],
    controllers: [MoviesController],
})
export class MoviesModule {}
