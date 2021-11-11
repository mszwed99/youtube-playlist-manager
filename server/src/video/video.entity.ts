import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Video extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
 
    @Column()
    duration: string;

    @Column()
    url: string;

    @Column()
    thumbnail: string;   
}