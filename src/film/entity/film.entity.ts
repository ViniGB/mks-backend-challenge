import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['title'])

export class Film {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  title: string

  @Column()
  releaseYear: number
}