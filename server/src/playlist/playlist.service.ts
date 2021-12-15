import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
// import { PlaylistRepository } from './playlist.repostitory';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Repository } from 'typeorm';
import { SearchPlaylistsDto } from './dto/search-playlists-dto';

@Injectable()
export class PlaylistService {
    constructor(
        @InjectRepository(Playlist)
        private readonly playlistRepository: Repository<Playlist>,
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) { }


      //TODO: add query string ?user=id
      async findAll(searchPlaylistsDto: SearchPlaylistsDto): Promise<Playlist[]> {
        const { _public, favourite} = searchPlaylistsDto;
        // const [added_by]  user.id
        // console.log(favourite)
        console.log(searchPlaylistsDto)
        return this.playlistRepository.find({
            ...searchPlaylistsDto,
            relations: ['added_by'],

        })
    };
    

    async findOne(id: number): Promise<Playlist> {
        const playlist = await this.playlistRepository.findOne({ id }, {
            relations: ['videos', 'followers']
        });

        if (!playlist) {
            throw new NotFoundException(`Playlist with id ${id} not found`);
        }
        return playlist;
    }

    async create(
        user: User,
        createPlaylistDto: CreatePlaylistDto,
    ): Promise<Playlist> {
        const added_by = user;
        const playlist = this.playlistRepository.create({
            ...createPlaylistDto,
            added_by
        })
        return this.playlistRepository.save(playlist)
    }

    async update(
        id: number, 
        // user: User, 
        updatePlaylistDto: UpdatePlaylistDto
        ): Promise<Playlist> {
            let playlist = await this.findOne(id)

            // const added_by = user;
            playlist = await this.playlistRepository.preload({
                id: +id,
                ...updatePlaylistDto,
            
            })
            console.log(playlist);
        return this.playlistRepository.save(playlist);


        }



    // async getUserPlaylists(user: User): Promise<Playlist[]> {
    //     return this.playlistRepository.getUserPlaylists(user);
    // }


    // Dopracować return z playlistami
    // async getFollowedPlaylists(user: User): Promise < Playlist[] > {
    //         return this.userRepository.getFollowedPlaylists(user)
    //         //return this.playlistRepository.getFollowedPlaylists(user);
    //     }





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


    // async getPublicPlaylists(user: User): Promise<Playlist[]> {
    //     const playlist = this.playlistRepository.find({ relations: ['added_by'] })
    //     // return this.playlistRepository.getPublicPlaylists(user);
    //     return playlist;
    // }
