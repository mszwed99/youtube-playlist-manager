import { ConflictException, NotFoundException } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { EntityRepository, Not, Repository } from "typeorm";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { Playlist } from "./playlist.entity";

@EntityRepository(Playlist)
export class PlaylistRepository extends Repository<Playlist> {

    // async getUserPlaylists(user: User): Promise<Playlist[]> {
    //     const playlists = await this.find();
    //     /// ---------------------------------------------------------
    
    //     return playlists;
    // }

    async getPublicPlaylists(
        user: User
    ): Promise<Playlist[]> {
        const playlists = await this.find({ where: {
            isPublic: true
        }});

        if(playlists.length === 0) {
            throw new NotFoundException('No public playlists avaible');
        }
        return playlists;
    }

    async createPlaylist(
        user: User, 
        createPlaylistDto: CreatePlaylistDto
    ): Promise<Playlist> {
        const { name } = createPlaylistDto;
        const playlist = await this.create();

        playlist.name = name;
        playlist.owner = user;

        await playlist.save();
        return playlist;
    }

    async followPlaylist(id: number, user): Promise<Playlist> {

        const playlist = await this.findOne({id}, {
            relations:['followers']
        })

        if(!playlist){
            throw new NotFoundException('Resource not found');
        }
        if(playlist.owner.id === user.id) {
            throw new ConflictException(`You can't follow your own playlist`);
        }
        if(!await playlist.checkIfPublic()){
            throw new NotFoundException('Playlist is private');
        }
        const exist = await playlist.checkIfFollowed(user);
        if(exist) {
            throw new ConflictException('You already subscibre this playlist');
        }

        playlist.followers = [...playlist.followers, user];
        await playlist.save();
        return playlist;
    }
    
    async unfollowPlaylist(id: number, user): Promise<Playlist> {
        const playlist = await this.findOne({id}, {
            relations:['followers']
        })
        if(!playlist){
            throw new NotFoundException('Resource not found');
        }
        if(playlist.owner.id === user.id) {
            throw new ConflictException(`You can't follow your own playlist`);
        }
        if(!await playlist.checkIfPublic()){
            throw new NotFoundException('Playlist is private');
        }
        const exist = await playlist.checkIfFollowed(user);
        if(!exist) {
            throw new ConflictException('You do not subscibre this playlist');
        }

        playlist.followers = playlist.followers.filter(e => e.id !== user.id)
        await playlist.save();
        return playlist;
    }   
}