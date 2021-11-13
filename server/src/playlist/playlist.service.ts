import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistRepository } from './playlist.repostitory';
import { User } from 'src/auth/user.entity';

@Injectable()
export class PlaylistService {
    constructor(
        @InjectRepository(PlaylistRepository)
        private playlistRepository: PlaylistRepository
    ) {}

    async getUserPlaylists(user: User): Promise<Playlist[]> {
        return this.playlistRepository.getUserPlaylists(user);
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
