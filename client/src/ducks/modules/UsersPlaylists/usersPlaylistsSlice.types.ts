import { Status } from "ducks/types";
import { VideoI } from "services/VideoService/VideoService.types";

export interface UsersPlaylistsStateI {
  playlists: PlaylistI[];
  playlistsCallStatus: Status;
  followedPlaylists: PlaylistI[];
  followedPlaylistsCallStatus: Status;
}

export interface PlaylistI {
  id: number;
  name: string;
  public: boolean;
  followers: {
    id: number;
    username: string;
    password: string;
    salt: string;
  }[];
  videos: VideoI[];
  owner: {
    id: number;
    username: string;
    password: string;
    salt: string;
  }
}