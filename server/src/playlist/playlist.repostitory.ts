import { ConflictException, NotFoundException } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { EntityRepository, Not, Repository } from "typeorm";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { Playlist } from "./playlist.entity";
import { followValidation } from "./follow-validation";

@EntityRepository(Playlist)
export class PlaylistRepository extends Repository<Playlist> {

    
    async getFollowedPlaylists(user: User): Promise<Playlist[]> {
        console.log(user.followed)
        const user_id = user.id

        const playlists = await this.createQueryBuilder("playlist")
            .leftJoinAndSelect("playlist.followers", "followers")
            .where("followers.userId")
            .getMany()

        return playlists;
    }
    
    async getUserPlaylists(user: User): Promise<Playlist[]> {
        const playlists = await this.find({ where: {
            owner: user
        },
            relations:['followers']
        });
        return playlists;
    }

    async getPublicPlaylists(): Promise<Playlist[]> {
        const playlists = await this.find({ where: {
            public: true
        }});

        return playlists;
    }

    async createPlaylist(
        user: User, 
        createPlaylistDto: CreatePlaylistDto
    ): Promise<Playlist> {
        const { name, isPublic } = createPlaylistDto;
        const playlist = await this.create();
    
        playlist.name = name;
        playlist.public = isPublic;
        playlist.owner = user;

        await playlist.save();
        return playlist;
    }

    async followPlaylist(id: number, user: User): Promise<Playlist> {
        const playlist = await this.findOne({id}, {
            relations:['followers']
        })
        
        await followValidation(playlist, user)

        if(await playlist.checkIfFollowed(user)) {
            throw new ConflictException('You already follow this playlist');
        }

        playlist.followers = [...playlist.followers, user];
        await playlist.save();
        return playlist;
    }
    
    async unfollowPlaylist(id: number, user: User): Promise<Playlist> {
        const playlist = await this.findOne({id}, {
            relations:['followers']
        })

        await followValidation(playlist, user)

        if(!await playlist.checkIfFollowed(user)) {
            throw new NotFoundException('You do not follow this playlist');
        }

        playlist.followers = playlist.followers.filter(e => e.id !== user.id)
        await playlist.save();
        return playlist;
    }   
}