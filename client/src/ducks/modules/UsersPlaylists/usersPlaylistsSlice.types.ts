import { Status } from "ducks/types";

export interface UsersPlaylistsStateI {
  playlists: Playlist[];
  playlistsCallStatus: Status;
  followedPlaylists: Playlist[];
  followedPlaylistsCallStatus: Status;
}

export interface Playlist {
  id: number;
  name: string;
  public: boolean;
  followers: {
    id: number;
    username: string;
    password: string;
    salt: string;
  }[];
  owner: {
    id: number;
    username: string;
    password: string;
    salt: string;
  }
}