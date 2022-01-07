import { VideoI } from 'services/VideoService/VideoService.types';

export interface PlaylistVideosPropsI {
  videos: VideoI[];
  onPressVideo: (videoId: string) => void;
}