import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { DeleteVideoI, EditPlaylistNameI, EditPlaylistPublicI, FollowPlaylistI } from 'services/PlaylistsService/PlaylistsService.types';
import { CurrentPlaylistStateI } from './currentPlaylistSlice.types';

const initialState: CurrentPlaylistStateI = {
  currentPlaylist: null,
  currentPlaylistCallStatus: 'NOT_SET',
};

export const getPlaylistDetails = createAsyncThunk('playlist/info', async (payload: FollowPlaylistI) => {
  return await API.PlaylistService.getPlaylistDetails(payload);
});

export const editPlaylistName = createAsyncThunk('playlist/editName', async (payload: EditPlaylistNameI) => {
  return await API.PlaylistService.editPlaylistName(payload);
});

export const editPlaylistIsPublic = createAsyncThunk('playlist/editIsPublic', async (payload: EditPlaylistPublicI) => {
  return await API.PlaylistService.editPlaylistIsPublic(payload);
});

export const deletePlaylist = createAsyncThunk('playlist/deletePlaylist', async (payload: FollowPlaylistI) => {
  return await API.PlaylistService.deletePlaylist(payload);
});

export const deleteVideo = createAsyncThunk('playlist/deleteVideo', async (payload: DeleteVideoI) => {
  return await API.PlaylistService.deleteVideo(payload);
});

const currentPlaylistSlice = createSlice({
  name: 'currentPlaylist',
  initialState,
  reducers: {
    clearCurrentPlaylist: state => {
      state.currentPlaylistCallStatus = 'NOT_SET';
      state.currentPlaylist  = null;
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
      state.currentPlaylist = action.payload.data;
    },
    [editPlaylistName.fulfilled.toString()]: (_, action) => {
      toast.success(`Pomyślnie edytowano nazwę playlisty na ${action.meta.arg.name}`);
    },
    [editPlaylistIsPublic.fulfilled.toString()]: (_, action) => {
      toast.success(`Pomyślnie zmieniono status playlisty na ${action.meta.arg.isPublic ? 'publiczną' : 'prywatną'}`);
    },
    [deletePlaylist.fulfilled.toString()]: () => {
      toast.success('Pomyślnie usunięto playlistę');
    }
  },
});

export const { clearCurrentPlaylist } = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;
