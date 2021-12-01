import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { PublicPlaylistsStateI } from './publicPlaylistsSlice.types';
import { CreatePlaylistI, FollowPlaylistI } from '../../../services/PlaylistsService/PlaylistsService.types';

const initialState: PublicPlaylistsStateI = {
  publicPlaylists: [],
  isLoading: false,
  publicPlaylistsCallStatus: 'NOT_SET',
};

export const getPublicPlaylists = createAsyncThunk('playlist/public', async () => {
  return await API.PlaylistService.getPublicPlaylists();
});

const publicPlaylistsSlice = createSlice({
  name: 'publicPlaylists',
  initialState,
  reducers: {
    clearPublicPlaylists: state => {
      state.isLoading = false;
      state.publicPlaylistsCallStatus = 'NOT_SET';
    }
  },
  extraReducers: {
    [getPublicPlaylists.pending.toString()]: state => {
      state.isLoading = true;
    },
    [getPublicPlaylists.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      state.publicPlaylistsCallStatus = 'ERROR';
      toast.error('Nie udało się pobrać playlist');
    },
    [getPublicPlaylists.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.publicPlaylistsCallStatus = 'SUCCESS';
      state.publicPlaylists = action.payload.data;
    },
  },
});

export const { clearPublicPlaylists } = publicPlaylistsSlice.actions;

export default publicPlaylistsSlice.reducer;
