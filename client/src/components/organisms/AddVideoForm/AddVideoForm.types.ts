import { PlaylistI } from "ducks/modules/UsersPlaylists/usersPlaylistsSlice.types";
import { VideoI } from "services/VideoService/VideoService.types";

export interface AddVideoFormPropsI {
  video: VideoI;
  playlists: PlaylistI[];
  closeModalFc: () => void;
}

export interface FormRowI {
  playlistId: number;
  shouldBeAdded: boolean;
}