import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
// import { PlaylistRepository } from './playlist.repostitory';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PlaylistService {
    constructor(
        // @InjectRepository(PlaylistRepository)
        // private playlistRepository: PlaylistRepository,
        @InjectRepository(Playlist)
        private readonly playlistRepository: Repository<Playlist>,
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}


    async findOne(id: number): Promise<Playlist> {
        const playlist = await this.playlistRepository.findOne({id}, {
                        relations:['videos', 'followers']
                    });

        if (!playlist){
            throw new NotFoundException(`Playlist with id ${id} not found`);
        }
        return playlist;
    }

    //TODO: add query string ?user=id
    async findAll(): Promise<Playlist[]> {
        return this.playlistRepository.find();
    }


    // async getUserPlaylists(user: User): Promise<Playlist[]> {
    //     return this.playlistRepository.getUserPlaylists(user);
    // }


    // Dopracować return z playlistami
    async getFollowedPlaylists(user: User): Promise<Playlist[]> {
        return this.userRepository.getFollowedPlaylists(user)
        //return this.playlistRepository.getFollowedPlaylists(user);
    }


    async getPublicPlaylists(user: User): Promise<Playlist[]> {
        const playlist  = this.playlistRepository.find({relations: ['added_by']})
        // return this.playlistRepository.getPublicPlaylists(user);
        return playlist;
    }

    async create(
        // user: User, 
        createPlaylistDto: CreatePlaylistDto,  
    ): Promise<Playlist> {
        // return this.playlistRepository(createPlaylistDto);
        const playlist =  this.playlistRepository.create(createPlaylistDto);
        // playlist.added_by = user;
        console.log(playlist)
        return this.playlistRepository.save(playlist)
    }
 
//     async editPlaylist(id: number, user: User,  updatePlaylistDto:  UpdatePlaylistDto): Promise<Playlist> {
//         return this.playlistRepository.editPlaylist(id, user,  updatePlaylistDto);

//     }

//     async deletePlaylist(id: number, user: User): Promise<void> {
//         return this.playlistRepository.deletePlaylist(id, user);
//     }

//     async followPlaylist(id: number, user: User): Promise<Playlist> {
//         return this.playlistRepository.followPlaylist(id, user);
//     }

//     async unfollowPlaylist(id: number, user: User): Promise<Playlist> {
//         return this.playlistRepository.unfollowPlaylist(id, user);
//     }
}
