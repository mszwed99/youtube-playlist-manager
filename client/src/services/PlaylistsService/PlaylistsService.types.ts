export interface CreatePlaylistI {
  name: string;
  isPublic: boolean;
}

export interface FollowPlaylistI {
  id: string;
}

export interface EditPlaylistNameI extends FollowPlaylistI {
  name: string;
}

export interface EditPlaylistPublicI extends FollowPlaylistI {
  isPublic: boolean;
}