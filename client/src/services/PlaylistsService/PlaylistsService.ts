import { APIService } from 'services/APIService';
import { CreatePlaylistI, EditPlaylistNameI, EditPlaylistPublicI, FollowPlaylistI } from './PlaylistsService.types';

export const getPlaylists = () => APIService.get('playlist');

export const getPublicPlaylists = () => APIService.get('playlist/public');

export const getFollowedPlaylists = () => APIService.get('playlist/followed');

export const createPlaylist = (payload: CreatePlaylistI) => APIService.post('playlist', { ...payload });

export const followPlaylist = (payload: FollowPlaylistI) => APIService.post(`playlist/follow/${payload.id}`);

export const unfollowPlaylist = (payload: FollowPlaylistI) => APIService.post(`playlist/unfollow/${payload.id}`);

export const getPlaylistDetails = (payload: FollowPlaylistI) => APIService.get(`playlist/info/${payload.id}`);

export const editPlaylistName = (payload: EditPlaylistNameI) => APIService.patch(`playlist/edit/${payload.id}`, { name: payload.name });

export const editPlaylistIsPublic = (payload: EditPlaylistPublicI) => APIService.patch(`playlist/edit/${payload.id}`, { isPublic: payload.isPublic });

export const deletePlaylist = (payload: FollowPlaylistI) => APIService.delete(`playlist/delete/${payload.id}`);