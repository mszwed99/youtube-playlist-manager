import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
// import { PlaylistRepository } from './playlist.repostitory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from 'src/auth/user.repository';
import { Playlist } from './playlist.entity';
import { User } from 'src/auth/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      // PlaylistRepository,
      Playlist,
      UserRepository
    ]),
    AuthModule,
  ],
  providers: [PlaylistService],
  controllers: [PlaylistController]
})
export class PlaylistModule {}
