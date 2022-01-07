import { VideoI } from "services/VideoService/VideoService.types";

export interface VideoItemPropsI {
  video: VideoI;
  onPressVideo: (videoId: string) => void;
}