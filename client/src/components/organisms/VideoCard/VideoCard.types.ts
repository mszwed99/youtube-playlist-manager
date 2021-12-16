import { VideoI } from "services/VideoService/VideoService.types";

export interface VideoCardPropsI {
  video: {
    etag: string;
    id: {
      kind: string;
      videoId: string;
    };
    kind: string;
    snippet: {
      channelId: string;
      channelTitle: string;
      description: string;
      liveBroadcastContent: string;
      publishTime: string;
      publishedAt: string;
      thumbnails: {
        default: ThumbnailI;
        medium: ThumbnailI;
        high: ThumbnailI;
      };
      title: string;
    }
  };
  onPressAddVideo: (video: VideoI) => void;
}

interface ThumbnailI {
  url: string;
  width: number;
  height: number;
}