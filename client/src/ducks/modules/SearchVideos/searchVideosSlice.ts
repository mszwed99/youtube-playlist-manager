import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { SearchVideosStateI } from './searchVideosSlice.types';

const initialState: SearchVideosStateI = {
  videos: [],
  isLoading: false,
};

export const getVideosByPhrase = createAsyncThunk('searchVideos', async (phrase: string) => {
  return await API.YouTubeService.getVideosByPhrase(phrase);
})

const searchVideosSlice = createSlice({
  name: 'searchVideos',
  initialState,
  reducers: {},
  extraReducers: {
    [getVideosByPhrase.pending.toString()]: state => {
      state.isLoading = true;
    },
    [getVideosByPhrase.rejected.toString()]: (state) => {
      state.isLoading = false;
      toast.error('Nie udało się pobrać danych z YouTube API');
    },
    [getVideosByPhrase.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.videos = action.payload.data.items;
    },
  },
});

export default searchVideosSlice.reducer;
