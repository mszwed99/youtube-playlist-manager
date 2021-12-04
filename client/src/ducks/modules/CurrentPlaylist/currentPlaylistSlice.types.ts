import { Status } from "ducks/types";
import { Playlist } from "../UsersPlaylists/usersPlaylistsSlice.types";

export interface CurrentPlaylistStateI {
  playlist: Playlist | null;
  currentPlaylistCallStatus: Status;
}