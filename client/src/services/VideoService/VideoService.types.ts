export interface VideoI {
  videoId: string;
  title: string;
  channelTitle: string;
  description: string;
  publishTime: string;
  thumbnail: string;
}

export interface AddVideoI {
  playlistId: number;
  video: VideoI;
}