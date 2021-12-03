import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import { PlaylistRepository } from 'src/playlist/playlist.repostitory';
import { AddVideoDto } from './dto/add-video.dto';
import { Video } from './video.entity';
import { VideoRepository } from './video.repository';

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(VideoRepository)
        private videoRepository: VideoRepository,

        @InjectRepository(PlaylistRepository)
        private playlistRepository: PlaylistRepository
    ) {}


    async addVideo(addVideoDto: AddVideoDto): Promise<Video> {
        const { 
            videoId, 
            title, 
            channelTitle, 
            description, 
            publishTime, 
            thumbnail } = addVideoDto;

        const video = await this.videoRepository.create({
            videoId, 
            title, 
            channelTitle, 
            description, 
            publishTime, 
            thumbnail
        });

        const findVideo = await this.videoRepository.findOne({videoId: videoId})    
        if(!findVideo) {
            await video.save();
            return video
        }
    
        return findVideo
    }

    async addVideoToPlaylist(user: User, id: number, addVideoDto: AddVideoDto ): Promise<Playlist> {
        const video: Video = await this.addVideo(addVideoDto)

        return this.playlistRepository.addVideoToPlaylist(user, id, video);
    }

    async removeVideoFromPlaylist(user: User, idPlaylist: number, idVideo: string): Promise<void> {
    
        return this.playlistRepository.removeVideoFromPlaylist(user, idPlaylist, idVideo);
    }
}
