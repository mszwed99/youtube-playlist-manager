import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { UsersPlaylistsStateI } from './usersPlaylistsSlice.types';
import { CreatePlaylistI, FollowPlaylistI } from '../../../services/PlaylistsService/PlaylistsService.types';

const initialState: UsersPlaylistsStateI = {
  playlists: [],
  playlistsCallStatus: 'NOT_SET',
  followedPlaylists: [],
  followedPlaylistsCallStatus: 'NOT_SET',
};

export const getPlaylists = createAsyncThunk('playlist', async () => {
  return await API.PlaylistService.getPlaylists();
});

export const getFollowedPlaylists = createAsyncThunk('playlist/followed', async () => {
  return await API.PlaylistService.getFollowedPlaylists();
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

const usersPlaylistsSlice = createSlice({
  name: 'usersPlaylists',
  initialState,
  reducers: {
    clearPlaylists: state => {
      state.playlists = []
      state.playlistsCallStatus = 'NOT_SET';
      state.followedPlaylists = [];
      state.followedPlaylistsCallStatus = 'NOT_SET';
    }
  },
  extraReducers: {
    [getPlaylists.pending.toString()]: state => {
      state.playlistsCallStatus = 'LOADING';
    },
    [getPlaylists.rejected.toString()]: (state) => {
      state.playlistsCallStatus = 'ERROR';
      toast.error('Nie udało się pobrać playlist');
    },
    [getPlaylists.fulfilled.toString()]: (state, action) => {
      state.playlistsCallStatus = 'SUCCESS';
      state.playlists = action.payload.data;
    },
    [getFollowedPlaylists.pending.toString()]: state => {
      state.followedPlaylistsCallStatus = 'LOADING';
    },
    [getFollowedPlaylists.rejected.toString()]: (state) => {
      state.followedPlaylistsCallStatus = 'ERROR';
      toast.error('Nie udało się pobrać playlist');
    },
    [getFollowedPlaylists.fulfilled.toString()]: (state, action) => {
      state.followedPlaylistsCallStatus = 'SUCCESS';
      state.followedPlaylists = action.payload.data;
    },
    [createPlaylist.rejected.toString()]: state => {
      toast.error('Nie udało się stworzyć playlisty');
    },
    [createPlaylist.fulfilled.toString()]: (_, action) => {
      toast.success(`Utworzono playlistę ${action.payload.data.name}`);
    },
  },
});

export const { clearPlaylists } = usersPlaylistsSlice.actions;

export default usersPlaylistsSlice.reducer;
