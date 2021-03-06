import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique, ManyToMany, JoinTable } from "typeorm";
import { Playlist } from "src/playlist/playlist.entity";
@Entity()
export class Video extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    videoId: string;
 
    @Column()
    title: string;
    
    @Column()
    channelTitle: string;

    @Column()
    description: string;

    @Column({default: new Date()})
    publishTime: Date;

    @Column()
    thumbnail: string;

    @ManyToMany(() => Playlist, (playlist) => playlist.videos)
    @JoinTable()
    playlists: Playlist[];
}