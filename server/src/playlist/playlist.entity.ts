import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Video } from "src/video/video.entity"
import { Exclude, Expose } from 'class-transformer';

export const GROUP_USER = 'group_user_details';
export const GROUP_ALL_USERS = 'group_all_users';



@Entity()
export class Playlist extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Expose({ groups: [GROUP_USER, GROUP_ALL_USERS] })
    id: number;

    @Column()
    @Expose({ groups: [GROUP_USER, GROUP_ALL_USERS] })
    name: string;

    @Column({default: false})
    @Expose({ groups: [GROUP_USER, GROUP_ALL_USERS] })
    public: boolean;
    

    @ManyToOne(() => User, owner => owner.playlists, { eager: true })
    owner: User;

    // @ManyToMany(() => Video)
    // @JoinTable()

    // videos: Video[];

    @ManyToMany(() => User, (user) => user.followed, { cascade: true } )
    @JoinTable()
    @Expose({ groups: [GROUP_USER] })
    followers: User[];


    @ManyToMany(() => Video, video => video.playlists)
    @Expose({ groups: [GROUP_USER] })
    videos: Video[];
    
    isFollowed?: boolean;

    async checkIfPublic(): Promise<boolean> {
        return this.public;
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
