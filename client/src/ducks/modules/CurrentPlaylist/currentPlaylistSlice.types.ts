import { Status } from "ducks/types";
import { PlaylistI } from "../UsersPlaylists/usersPlaylistsSlice.types";

export interface CurrentPlaylistStateI {
  playlist: PlaylistI | null;
  currentPlaylistCallStatus: Status;
}