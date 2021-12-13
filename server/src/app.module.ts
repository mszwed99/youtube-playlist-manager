import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
// import { VideoModule } from './video/video.module';
import { PlaylistModule } from './playlist/playlist.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    // VideoModule,
    PlaylistModule
  ],
})
export class AppModule {}
