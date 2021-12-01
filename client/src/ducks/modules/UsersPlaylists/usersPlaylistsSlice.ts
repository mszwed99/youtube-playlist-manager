import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { UsersPlaylistsStateI } from './usersPlaylistsSlice.types';
import { CreatePlaylistI, FollowPlaylistI } from '../../../services/PlaylistsService/PlaylistsService.types';

const initialState: UsersPlaylistsStateI = {
  playlists: [],
  isLoading: false,
  playlistsCallStatus: 'NOT_SET',
  isFollowLoading: false,
};

export const getPlaylists = createAsyncThunk('playlist', async () => {
  return await API.PlaylistService.getPlaylists();
});

export const createPlaylist = createAsyncThunk('playlist/create', async (payload: CreatePlaylistI)  => {
  return await API.PlaylistService.createPlaylist(payload);
})

export const followPlaylist = createAsyncThunk('playlist/follow', async (payload: FollowPlaylistI) => {
  return await API.PlaylistService.followPlaylist(payload);
})

export const unfollowPlaylist = createAsyncThunk('playlist/unfollow', async (payload: FollowPlaylistI) => {
  return await API.PlaylistService.unfollowPlaylist(payload);
})

const usersPlaylistSlice = createSlice({
  name: 'searchVideos',
  initialState,
  reducers: {
    clearPlaylists: state => {
      state.playlists = []
      state.isLoading = false;
      state.playlistsCallStatus = 'NOT_SET';
    }
  },
  extraReducers: {
    [getPlaylists.pending.toString()]: state => {
      state.isLoading = true;
    },
    [getPlaylists.rejected.toString()]: (state) => {
      state.isLoading = false;
      state.playlistsCallStatus = 'ERROR';
      toast.error('Nie udało się pobrać playlist');
    },
    [getPlaylists.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.playlistsCallStatus = 'SUCCESS';
      state.playlists = action.payload.data;
    },
    [createPlaylist.pending.toString()]: state => {
      state.isLoading = true;
    },
    [createPlaylist.rejected.toString()]: state => {
      state.isLoading = false;
      toast.error('Nie udało się stworzyć playlisty');
    },
    [createPlaylist.fulfilled.toString()]: state => {
      state.isLoading = false;
    },
    [followPlaylist.pending.toString()]: state => {
      state.isFollowLoading = true;
    },
    [followPlaylist.rejected.toString()]: state => {
      state.isFollowLoading = false;
    },
    [followPlaylist.fulfilled.toString()]: state => {
      state.isFollowLoading = false;
    },
    [unfollowPlaylist.pending.toString()]: state => {
      state.isFollowLoading = true;
    },
    [unfollowPlaylist.rejected.toString()]: state => {
      state.isFollowLoading = false;
    },
    [unfollowPlaylist.fulfilled.toString()]: state => {
      state.isFollowLoading = false;
    }
  },
});

export const { clearPlaylists } = usersPlaylistSlice.actions;

export default usersPlaylistSlice.reducer;
