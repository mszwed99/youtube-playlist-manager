import { PlaylistI } from "ducks/modules/UsersPlaylists/usersPlaylistsSlice.types";

export interface PlaylistRowFormPropsI {
  playlist: PlaylistI;
  shouldBeDisabled: boolean;
  selectPlaylist: (playlistId: number, shouldBeAdded: boolean) => void;
  isChecked: boolean;
}