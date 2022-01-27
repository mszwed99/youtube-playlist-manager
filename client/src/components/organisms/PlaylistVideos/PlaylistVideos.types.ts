
import { VideoI } from 'services/VideoService/VideoService.types';

export interface PlaylistVideosPropsI {
  owner: {
    id: number;
    username: string;
  }
  videos: VideoI[];
  onPressVideo: (videoId: string) => void;
  onPressDeleteVideo: (videoId: string) => void;
}