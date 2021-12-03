import { ConflictException, NotFoundException } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { EntityRepository, Not, Repository } from "typeorm";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { Playlist } from "./playlist.entity";
import { followValidation } from "./follow-validation";
import { Video } from "src/video/video.entity";
import { AddVideoDto } from "src/video/dto/add-video.dto";


@EntityRepository(Playlist)
export class PlaylistRepository extends Repository<Playlist> {


    async getPlaylistInfo(id: number, user: User): Promise<Playlist> {
        const playlist: Playlist = await this.findOne({id}, {
            relations:['videos', 'followers']
        })
        

        if(playlist?.public) {
            return playlist
        }
        if(playlist?.owner.id === user.id){
            return playlist;
        }

        throw new NotFoundException(`Playlist with id ${id} not found`);
    }



    async addVideoToPlaylist(user: User, id: number, video: Video): Promise<Playlist> {
        const playlist = await this.findOne({id}, {
            relations:['videos']
        })
        const videoExist: Video = playlist.videos.find(v => v.videoId === video.videoId)
        if(!videoExist) {
            playlist.videos = [...playlist.videos, video]
            await playlist.save()
            return playlist;
        }
        return playlist;
    }

    async removeVideoFromPlaylist(user: User, idPlaylist: number, idVideo: string): Promise<void> {
        console.log(user.id)
        const playlist = await this.findOne({id: idPlaylist, owner: user}, {
            relations:['videos']
        })
        if(!playlist) {
            throw new NotFoundException(`Playlist with id ${idPlaylist} not found`);
        }

        const videoExist  = playlist.videos.filter(v => v.videoId !== idVideo)

        // if(!videoExist) {
        //     throw new NotFoundException(`Video with id ${idVideo} not found`);
        //     // playlist.videos = [...playlist.videos, video]
        //     // await playlist.save()
        //     // return playlist;
        // }

        console.log(videoExist)
    }

    async getUserPlaylists(user: User): Promise<Playlist[]> {
        const playlists = await this.find({ where: {
            owner: user
        },
            relations:['followers', 'videos']
        });
        return playlists;
    }

    async getPublicPlaylists(): Promise<Playlist[]> {
        const playlists = await this.find({ where: {
            public: true
        }, 
            relations: ["followers"]});

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

    async deletePlaylist(id: number, user: User): Promise<void> {
        const result = await this.delete({ id, owner: user})
        if(result.affected === 0) {
            throw new NotFoundException(`Playlist with id ${id} not found`);
        }
    }


    async editPlaylist(id: number, user: User, createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
        const playlist = await this.findOne({id})

        if(!playlist) {
            throw new NotFoundException('Not found')
        }

        if(playlist.owner.id !== user.id) {
            throw new NotFoundException('Not found')
        }

        playlist.name = createPlaylistDto.name;
        playlist.public = createPlaylistDto.isPublic;

        await playlist.save()
        return playlist
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