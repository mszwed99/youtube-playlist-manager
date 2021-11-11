import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddVideoDto } from './dto/add-song.dto';
import { Video } from './video.entity';
import { VideoRepository } from './video.repository';

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(VideoRepository)
        private videoRepository: VideoRepository
    ) {}

    async addVideo(addVideoDto: AddVideoDto): Promise<Video> {
        return this.videoRepository.addVideo(addVideoDto);
    }
}
