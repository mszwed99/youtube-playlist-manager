import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistRepository } from './playlist.repostitory';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Injectable()
export class PlaylistService {
    constructor(
        @InjectRepository(PlaylistRepository)
        private playlistRepository: PlaylistRepository,

        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}


    async getPlaylistInfo(id: number, user: User): Promise<Playlist> {
        const playlist =  this.playlistRepository.getPlaylistInfo(id, user);
        if (!playlist){
            throw new NotFoundException(`Playlist with id ${id} not found`);
        }
        return playlist;
    }



    async getUserPlaylists(user: User): Promise<Playlist[]> {
        return this.playlistRepository.getUserPlaylists(user);
    }


    async getFollowedPlaylists(user: User): Promise<Playlist[]> {
        const playlists = await this.userRepository.getFollowedPlaylists(user)
        let playlistWithVideo: Playlist
        let playlistsVideos: Playlist[] = []

        
        for(let playlist of playlists) {
            playlistWithVideo = await this.playlistRepository.findOne({id: playlist.id}, {
                        relations:['videos', 'followers']
            })
            playlistsVideos.push(playlistWithVideo)
        }

        return playlistsVideos
       
    }


    async getPublicPlaylists(user: User): Promise<Playlist[]> {
        return this.playlistRepository.getPublicPlaylists(user);
    }

    async createPlaylist(
        user: User, 
        createPlaylistDto: CreatePlaylistDto,  
    ): Promise<Playlist> {
        return this.playlistRepository.createPlaylist(user, createPlaylistDto);
    }
 
    async editPlaylist(id: number, user: User,  updatePlaylistDto:  UpdatePlaylistDto): Promise<Playlist> {
        return this.playlistRepository.editPlaylist(id, user,  updatePlaylistDto);

    }

    async deletePlaylist(id: number, user: User): Promise<void> {
        return this.playlistRepository.deletePlaylist(id, user);
    }

    async followPlaylist(id: number, user: User): Promise<Playlist> {
        return this.playlistRepository.followPlaylist(id, user);
    }

    async unfollowPlaylist(id: number, user: User): Promise<Playlist> {
        return this.playlistRepository.unfollowPlaylist(id, user);
    }
}
