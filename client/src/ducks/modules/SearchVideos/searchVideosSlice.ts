import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { toast } from 'react-toastify';
import { SearchVideosStateI } from './searchVideosSlice.types';

const initialState: SearchVideosStateI = {
  videos: [],
  status: 'NOT_SET',
  selectedVideo: null,
  selectedVideoCallStatus: 'NOT_SET',
};

export const getVideosByPhrase = createAsyncThunk('searchVideos', async (phrase: string) => {
  return await API.YouTubeService.getVideosByPhrase(phrase);
})

export const getVideoDetailsById = createAsyncThunk('getVideoDetails', async (id: string) => {
  return await API.YouTubeService.getVideoDetailsById(id);
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
      state.status = 'LOADING';
    },
    [getVideosByPhrase.rejected.toString()]: (state) => {
      state.status = 'ERROR';
      toast.error('Nie udało się pobrać danych z YouTube API');
    },
    [getVideosByPhrase.fulfilled.toString()]: (state, action) => {
      state.status = 'SUCCESS';
      state.videos = action.payload.data.items;
    },
    [getVideoDetailsById.pending.toString()]: state => {
      state.selectedVideoCallStatus = 'LOADING';
    },
    [getVideoDetailsById.rejected.toString()]: (state) => {
      state.selectedVideoCallStatus = 'ERROR'
      toast.error('Nie udało się pobrać danych z YouTube API');
    },
    [getVideoDetailsById.fulfilled.toString()]: (state, action) => {
      state.selectedVideoCallStatus = 'SUCCESS';
      state.selectedVideo = mapVideoSnippetToVideoModel(action.payload.data.items[0]);
    },
  },
});

export const { clearVideos } = searchVideosSlice.actions;

export default searchVideosSlice.reducer;

export const mapVideoSnippetToVideoModel = (videoDetails: any) => ({
  videoId: videoDetails.id,
  title: videoDetails.snippet.title,
  channelTitle: videoDetails.snippet.channelTitle,
  description: videoDetails.snippet.description,
  publishTime: videoDetails.snippet.publishedAt,
  thumbnail: videoDetails.snippet.thumbnails.medium.url,
});