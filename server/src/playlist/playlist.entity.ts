import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Video } from "src/video/video.entity"
import { Exclude, Expose, Transform } from 'class-transformer';

export const GROUP_PLAYLIST = 'group_user_details';
export const GROUP_ALL_PLAYLISTS = 'group_all_users';



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
    public: boolean;
    
    
    // @ManyToOne(() => User, user => user)
    // @JoinColumn()
    // @Expose({ groups: [GROUP_PLAYLIST,GROUP_ALL_PLAYLISTS], toPlainOnly: true }, )
    // @Transform(({ value }) => value.id)
    // added_by: User;


    @ManyToOne(() => User, owner => owner.playlists, { eager: true })
    owner: User;

    // @ManyToMany(() => Video)
    // @JoinTable()

    // videos: Video[];

    @ManyToMany(() => User, (user) => user.followed, { cascade: true } )
    @JoinTable()
    // @Expose({ groups: [GROUP_PLAYLIST] })
    followers: User[];


    @ManyToMany(() => Video, video => video.playlists, { onDelete: 'CASCADE' } )
    // @Expose({ groups: [GROUP_PLAYLIST] })
    videos: Video[];
    
    isFollowed?: boolean;

    async checkIfPublic(): Promise<boolean> {
        return this.public;
    }

    async checkIfFollowed(user: User): Promise<boolean> {
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
