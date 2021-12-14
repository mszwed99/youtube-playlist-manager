import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ClassSerializerInterceptor,SerializeOptions,UseInterceptors, Query} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Playlist, GROUP_ALL_PLAYLISTS, GROUP_PLAYLIST, } from './playlist.entity';
import { PlaylistService } from './playlist.service';

@UseGuards(AuthGuard())
@Controller('playlist')
@UseInterceptors(ClassSerializerInterceptor)
export class PlaylistController {
    constructor(
        private readonly playlistService: PlaylistService
    ) {}


    @Get('info/:id')
    @SerializeOptions({
        groups: [GROUP_PLAYLIST],
      })
    getPlaylistInfo(
        @GetUser() user: User,
        @Param('id', ParseIntPipe) id: number
    ): Promise<Playlist> {
        return this.playlistService.getPlaylistInfo(id, user);

    }    
  

    @Get()
    @SerializeOptions({
        groups: [GROUP_ALL_PLAYLISTS],
      })
    async getUserPlaylists(@Query() paginationQuery,
        @GetUser() user: User,
    ): Promise<Playlist[]> {
        const { limit, offset } = paginationQuery;
        return this.playlistService.getUserPlaylists(user);
    }

    @Get('followed')
    @SerializeOptions({
        groups: [GROUP_ALL_PLAYLISTS],
      })
    getFollowedPlaylists(
        @GetUser() user: User
    ): Promise<Playlist[]> {
        return this.playlistService.getFollowedPlaylists(user);
    }

    @Get('public')
    @SerializeOptions({
        groups: [GROUP_ALL_PLAYLISTS],
      })
    getPublicPlaylists(
        @GetUser() user: User,
    ): Promise<Playlist[]> {    
        return this.playlistService.getPublicPlaylists(user);
    }


    @Post()
    @SerializeOptions({
        groups: [GROUP_ALL_PLAYLISTS,GROUP_PLAYLIST],
      })
    createPlaylist(
        @GetUser() user: User,
        @Body() createPlaylistDto: CreatePlaylistDto,
    ): Promise<Playlist> {
        return this.playlistService.createPlaylist(user, createPlaylistDto);
    }

    @Post('follow/:id')
    @SerializeOptions({
        groups: [GROUP_PLAYLIST],
      })
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

    @Patch(':id')
    @SerializeOptions({
        groups: [GROUP_PLAYLIST, GROUP_ALL_PLAYLISTS],
      })
    editPlaylist(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
        @Body()  updatePlaylistDto:  UpdatePlaylistDto
    ): Promise<Playlist> {
        return this.playlistService.editPlaylist(id, user,  updatePlaylistDto);
    }

    @Delete('delete/:id')
    deletePlaylist(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User
    ): Promise<void> {
        return this.playlistService.deletePlaylist(id, user);
    }


   
}
