import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';
import searchVideosSlice from './SearchVideos/searchVideosSlice';
import { AuthStateI } from './Auth/authSlice.types';
import { SearchVideosStateI } from './SearchVideos/searchVideosSlice.types';

const rootReducer = combineReducers({
  auth: authSlice,
  searchVideos: searchVideosSlice,
});

export interface RootState {
  auth: AuthStateI,
  searchVideos: SearchVideosStateI,
}
export default rootReducer;
