import { Status } from "ducks/types";

export interface UsersPlaylistsStateI {
  playlists: any[];
  isLoading: boolean;
  playlistsCallStatus: Status;
  isFollowLoading: boolean;
}