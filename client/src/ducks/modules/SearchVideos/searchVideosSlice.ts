import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { SearchVideosStateI } from './searchVideosSlice.types';

const initialState: SearchVideosStateI = {
  videos: [],
  isLoading: false,
  status: 'NOT_SET',
};

export const getVideosByPhrase = createAsyncThunk('searchVideos', async (phrase: string) => {
  return await API.YouTubeService.getVideosByPhrase(phrase);
})

const searchVideosSlice = createSlice({
  name: 'searchVideos',
  initialState,
  reducers: {
    clearVideos: state => {
      state.status = 'NOT_SET';
      state.videos = [];
    }
  },
  extraReducers: {
    [getVideosByPhrase.pending.toString()]: state => {
      state.isLoading = true;
    },
    [getVideosByPhrase.rejected.toString()]: (state) => {
      state.isLoading = false;
      state.status = 'ERROR';
      toast.error('Nie udało się pobrać danych z YouTube API');
    },
    [getVideosByPhrase.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.status = 'SUCCESS';
      state.videos = action.payload.data.items;
    },
  },
});

export const { clearVideos } = searchVideosSlice.actions;

export default searchVideosSlice.reducer;
