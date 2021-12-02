import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistRepository } from './playlist.repostitory';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';

@Injectable()
export class PlaylistService {
    constructor(
        @InjectRepository(PlaylistRepository)
        private playlistRepository: PlaylistRepository,

        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async getUserPlaylists(user: User): Promise<Playlist[]> {
        return this.playlistRepository.getUserPlaylists(user);
    }


    // Dopracować return z playlistami
    async getFollowedPlaylists(user: User): Promise<Playlist[]> {
        return this.userRepository.getFollowedPlaylists(user)
        //return this.playlistRepository.getFollowedPlaylists(user);
    }


    async getPublicPlaylists(): Promise<Playlist[]> {
        return this.playlistRepository.getPublicPlaylists();
    }

    async createPlaylist(
        user: User, 
        createPlaylistDto: CreatePlaylistDto,  
    ): Promise<Playlist> {
        return this.playlistRepository.createPlaylist(user, createPlaylistDto);
    }

    async followPlaylist(id: number, user: User): Promise<Playlist> {
        return this.playlistRepository.followPlaylist(id, user);
    }

    async unfollowPlaylist(id: number, user: User): Promise<Playlist> {
        return this.playlistRepository.unfollowPlaylist(id, user);
    }
}
