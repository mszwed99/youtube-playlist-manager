import { Status } from "ducks/types";
import { PlaylistI } from "../UsersPlaylists/usersPlaylistsSlice.types";

export interface PublicPlaylistsStateI {
  publicPlaylists: PlaylistI[];
  isLoading: boolean;
  publicPlaylistsCallStatus: Status;
}