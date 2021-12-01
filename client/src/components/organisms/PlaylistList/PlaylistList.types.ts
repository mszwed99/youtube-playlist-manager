import { Playlist } from "ducks/modules/UsersPlaylists/usersPlaylistsSlice.types";

export interface PlaylistListPropsI {
  playlists: Playlist[];
  title: string;
}