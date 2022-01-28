import { Status } from "ducks/types";
import { PlaylistI } from "../UsersPlaylists/usersPlaylistsSlice.types";

export interface CurrentPlaylistStateI {
  currentPlaylist: PlaylistI | null;
  currentPlaylistCallStatus: Status;
}