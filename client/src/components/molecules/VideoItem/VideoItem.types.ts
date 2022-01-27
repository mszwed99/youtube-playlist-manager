import { VideoI } from "services/VideoService/VideoService.types";

export interface VideoItemPropsI {
  owner: {
    id: number;
    username: string;
  }
  video: VideoI;
  onPressVideo: (videoId: string) => void;
  onPressDeleteVideo: (videoId: string) => void;
}