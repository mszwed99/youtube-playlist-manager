import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddVideoDto } from './dto/add-song.dto';
import { Video } from './video.entity';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(
        private videoService: VideoService
    ) {}

    @Post('add')
    @UsePipes(ValidationPipe)
    addVideo(@Body() addVideoDto: AddVideoDto): Promise<Video> {
        return this.videoService.addVideo(addVideoDto);
    }
}
