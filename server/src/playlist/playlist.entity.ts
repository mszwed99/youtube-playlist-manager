import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Video } from "src/video/video.entity"
import { Exclude, Expose, Transform } from 'class-transformer';
import { userInfo } from "os";

export const GROUP_PLAYLIST = 'group_playlist_details';
export const GROUP_ALL_PLAYLISTS = 'group_all_playlists';



@Entity()
export class Playlist extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Expose({ groups: [GROUP_PLAYLIST,GROUP_ALL_PLAYLISTS] })
    id: number;

    @Column()
    @Expose({ groups: [GROUP_PLAYLIST,GROUP_ALL_PLAYLISTS] })
    name: string;

    @Column()
    @Expose({ groups: [GROUP_PLAYLIST,GROUP_ALL_PLAYLISTS] })
    personal: boolean;
    
    @JoinColumn()
    @OneToOne(() => User, (user) => user.id, { eager: true })
    @Expose({ groups: [GROUP_PLAYLIST,GROUP_ALL_PLAYLISTS], toPlainOnly: true }, )
    // @Transform(({ value }) => value.id)
    added_by: User;

    // @Column()
    // @Expose({ groups: [GROUP_PLAYLIST,GROUP_ALL_PLAYLISTS] })
    // favourite: boolean;
    

    @Exclude({ toPlainOnly: true })
    @ManyToOne(() => User, owner => owner.playlists, { eager: true })
    owner: User;

    // @ManyToMany(() => Video)
    // @JoinTable()

    // videos: Video[];

    @ManyToMany(() => User, (user) => user.followed, { cascade: true } )
    @JoinTable()
    @Expose({ groups: [GROUP_PLAYLIST] })
    followers: User[];


    @ManyToMany(() => Video, video => video.playlists)
    @Expose({ groups: [GROUP_PLAYLIST] })
    videos: Video[];
    
    isFollowed?: boolean;

    async checkIfPublic(): Promise<boolean> {
        return this.personal;
    }

    async checkIfFollowed(user: User): Promise<boolean> {
        console.log('check error')
        const find = this.followers.filter(e => e.id === user.id)
        if(find.length === 0) {
            return false
        }
        return true;
    }

    async followValdiation(user: User): Promise<boolean> {
        if(this)
        return true;
    }


}
