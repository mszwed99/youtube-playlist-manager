import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { VideoController } from './video.controller';
import { VideoRepository } from './video.repository';
import { VideoService } from './video.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VideoRepository]),
    AuthModule,
  ],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
