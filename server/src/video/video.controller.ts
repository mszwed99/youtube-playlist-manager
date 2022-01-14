import { Body, Controller, Delete, Param, ParseIntPipe, Post, UseGuards, UsePipes} from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { AddVideoDto } from './dto/add-video.dto';
import { Video } from './video.entity';
import { VideoService } from './video.service';
import { User } from 'src/auth/user.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('video')
export class VideoController {
    constructor(
        private videoService: VideoService
    ) {}

   
    @Post('add/:id')
    addVideoToPlaylist(
        @GetUser() user: User,
        @Param('id', ParseIntPipe) id: number,
        @Body() addVideoDto: AddVideoDto,
    ): Promise<any> {
        return this.videoService.addVideoToPlaylist(user, id, addVideoDto);
        //return this.videoService.addVideo(addVideoDto);
    }

    @Delete('remove/:idPlaylist/:idVideo')
    removeVideoFromPlaylist(
        @GetUser() user: User,
        @Param('idPlaylist', ParseIntPipe) idPlaylist: number,
        @Param('idVideo') idVideo: string,
    ): Promise<any> {
        return this.videoService.removeVideoFromPlaylist(user, idPlaylist, idVideo);
    }

}
