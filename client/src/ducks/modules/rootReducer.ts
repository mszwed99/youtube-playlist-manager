import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';
import searchVideosSlice from './SearchVideos/searchVideosSlice';
import { AuthStateI } from './Auth/authSlice.types';
import { SearchVideosStateI } from './SearchVideos/searchVideosSlice.types';
import usersPlaylistsSlice from './UsersPlaylists/usersPlaylistsSlice';
import { UsersPlaylistsStateI } from './UsersPlaylists/usersPlaylistsSlice.types';
import publicPlaylistsSlice from './PublicPlaylists/publicPlaylistsSlice';
import { PublicPlaylistsStateI } from './PublicPlaylists/publicPlaylistsSlice.types';

const rootReducer = combineReducers({
  auth: authSlice,
  searchVideos: searchVideosSlice,
  usersPlaylists: usersPlaylistsSlice,
  publicPlaylists: publicPlaylistsSlice,
});

export interface RootState {
  auth: AuthStateI,
  searchVideos: SearchVideosStateI,
  usersPlaylists: UsersPlaylistsStateI,
  publicPlaylists: PublicPlaylistsStateI,
}
export default rootReducer;
