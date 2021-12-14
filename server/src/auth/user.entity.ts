import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Playlist } from "src/playlist/playlist.entity";
import { Exclude } from 'class-transformer';


@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @OneToMany(() => Playlist, playlist => playlist.added_by)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Exclude({ toPlainOnly: true })
    @Column()
    password: string;

    @Exclude({ toPlainOnly: true })
    @Column()
    salt: string;

    @OneToMany(() => Playlist, playlist => playlist.owner)
    playlists: Playlist[];

    @ManyToMany(() => Playlist, playlist => playlist.followers)
    followed: Playlist[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}