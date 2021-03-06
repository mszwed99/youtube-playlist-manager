import { BadRequestException, ConflictException, Inject, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { Playlist } from "src/playlist/playlist.entity";
import { filterFollow } from "src/playlist/follow-validation";
import { InjectRepository } from "@nestjs/typeorm";
import { PlaylistRepository } from "src/playlist/playlist.repostitory";
@EntityRepository(User)
export class UserRepository extends Repository<User> {

    constructor(
        
        @InjectRepository(PlaylistRepository)
        private playlistRepository: PlaylistRepository
    ) {
        super();
    }

    async getFollowedPlaylists(user: User): Promise<Playlist[]> {

        const userInfo: User = await this.findOne({
            relations: ["followed"],
            where: {
                id: user.id
            }
        })
        
        if(!userInfo) {
            return []
        }
        let playlists: Playlist[] = userInfo.followed
        
        for (let playlist of playlists) {
            playlist.isFollowed = true
            //playlist.videos = await this.playlistRepository.getVideos(playlist.id)
        }
        
        return playlists;
    }

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<any> {
        const { username, password } = authCredentialsDto;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt()

        const regExp = new RegExp(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
        if(!regExp.test(password)) {
            throw new BadRequestException('Password to weak')
        }
        user.password = await this.hashPassword(password, user.salt);



        try {
            await user.save();
            return true;
        } catch (error) {
            if(error.code === '23505') { // duplicate username
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
        
    }

    async validateUserPassword(authCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });

        if(user && await user.validatePassword(password)){
            return user.username;
        } else {
            return null;
        }

    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}