import { PlaylistI } from "ducks/modules/UsersPlaylists/usersPlaylistsSlice.types";

export interface PlaylistListPropsI {
  playlists: PlaylistI[];
  title: string;
}