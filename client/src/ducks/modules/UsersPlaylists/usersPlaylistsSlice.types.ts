import { Status } from "ducks/types";

export interface UsersPlaylistsStateI {
  playlists: Playlist[];
  isLoading: boolean;
  playlistsCallStatus: Status;
  isFollowLoading: boolean;
}

export interface Playlist {
  id: number;
  name: string;
  public: boolean;
  followers: any[];
  owner: {
    id: number;
    username: string;
    password: string;
    salt: string;
  }
}