import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { CurrentPlaylistStateI } from './currentPlaylistSlice.types';
import { FollowPlaylistI } from '../../../services/PlaylistsService/PlaylistsService.types';

const initialState: CurrentPlaylistStateI = {
  playlist: null,
  currentPlaylistCallStatus: 'NOT_SET',
};

export const getPlaylistDetails = createAsyncThunk('playlist/info', async (payload: FollowPlaylistI) => {
  return await API.PlaylistService.getPlaylistDetails(payload);
});

const currentPlaylistSlice = createSlice({
  name: 'currentPlaylist',
  initialState,
  reducers: {
    clearCurrentPlaylist: state => {
      state.currentPlaylistCallStatus = 'NOT_SET';
      state.playlist  = null;
    }
  },
  extraReducers: {
    [getPlaylistDetails.pending.toString()]: state => {
      state.currentPlaylistCallStatus = 'LOADING';
    },
    [getPlaylistDetails.rejected.toString()]: (state, action) => {
      state.currentPlaylistCallStatus = 'ERROR';
      toast.error('Nie udało się pobrać informacji o playliście');
    },
    [getPlaylistDetails.fulfilled.toString()]: (state, action) => {
      state.currentPlaylistCallStatus = 'SUCCESS';
      state.playlist = action.payload.data;
    },
  },
});

export const { clearCurrentPlaylist } = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;
