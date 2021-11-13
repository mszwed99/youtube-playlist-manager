import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
import { PlaylistService } from './playlist.service';

@UseGuards(AuthGuard())
@Controller('playlist')
export class PlaylistController {
    constructor(
        private playlistService: PlaylistService
    ) {}

    @Get()
    getUserPlaylists(
        @GetUser() user: User
    ): Promise<Playlist[]> {
        return this.playlistService.getUserPlaylists(user);
    }

    @Get('public')
    getPublicPlaylists(): Promise<Playlist[]> {
        return this.playlistService.getPublicPlaylists();
    }


    @Post('create')
    createPlaylist(
        @GetUser() user: User,
        @Body(ValidationPipe) createPlaylistDto: CreatePlaylistDto,
    ): Promise<Playlist> {
        return this.playlistService.createPlaylist(user, createPlaylistDto);
    }

    @Post('follow/:id')
    followPlaylist(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
    ): Promise<Playlist> {
        return this.playlistService.followPlaylist(id, user);
    }

    @Post('unfollow/:id')
    unfollowPlaylist(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
    ): Promise<Playlist> {
        return this.playlistService.unfollowPlaylist(id, user);
    }
}
