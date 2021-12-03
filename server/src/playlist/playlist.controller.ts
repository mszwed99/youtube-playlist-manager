import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
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


    @Get('info/:id')
    getPlaylistInfo(
        @GetUser() user: User,
        @Param('id', ParseIntPipe) id: number
    ): Promise<Playlist> {
        return this.playlistService.getPlaylistInfo(id, user);

    }    
  

    @Get()
    getUserPlaylists(
        @GetUser() user: User
    ): Promise<Playlist[]> {
        return this.playlistService.getUserPlaylists(user);
    }

    @Get('followed')
    getFollowedPlaylists(
        @GetUser() user: User
    ): Promise<Playlist[]> {
        return this.playlistService.getFollowedPlaylists(user);
    }

    @Get('public')
    getPublicPlaylists(): Promise<Playlist[]> {    
        return this.playlistService.getPublicPlaylists();
    }


    @Post()
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

    @Patch('edit/:id')
    editPlaylidt(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
        @Body(ValidationPipe) createPlaylistDto: CreatePlaylistDto
    ): Promise<Playlist> {
        return this.playlistService.editPlaylist(id, user, createPlaylistDto);
    }

    @Delete('delete/:id')
    deletePlaylist(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User
    ): Promise<void> {
        return this.playlistService.deletePlaylist(id, user);
    }


   
}
