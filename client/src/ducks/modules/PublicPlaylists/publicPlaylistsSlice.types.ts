import { Status } from "ducks/types";
import { Playlist } from "../UsersPlaylists/usersPlaylistsSlice.types";

export interface PublicPlaylistsStateI {
  publicPlaylists: Playlist[];
  isLoading: boolean;
  publicPlaylistsCallStatus: Status;
}