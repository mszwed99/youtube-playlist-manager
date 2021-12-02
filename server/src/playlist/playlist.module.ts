import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { PlaylistRepository } from './playlist.repostitory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from 'src/auth/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlaylistRepository, 
      UserRepository
    ]),
    AuthModule,
  ],
  providers: [PlaylistService],
  controllers: [PlaylistController]
})
export class PlaylistModule {}
