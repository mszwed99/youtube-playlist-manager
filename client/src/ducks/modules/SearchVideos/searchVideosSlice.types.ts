import { VideoI } from 'services/VideoService/VideoService.types';
import { Status } from "ducks/types";

export interface SearchVideosStateI {
  videos: any[];
  status: Status;
  selectedVideo: VideoI | null,
  selectedVideoCallStatus: Status;
}