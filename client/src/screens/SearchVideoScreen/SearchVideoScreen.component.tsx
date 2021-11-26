import { VideoCard, VideoCardLoading } from 'components/organisms';
import { RootState } from 'ducks/modules/rootReducer';
import { getVideosByPhrase } from 'ducks/modules/SearchVideos/searchVideosSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchVideoScreenContainer } from './SearchVideoScreen.style';

const SearchVideoScreen: React.FC<{ match: any }> = ({ match }) => {
  const { phrase } = match.params;
  const dispatch = useDispatch();
  const { videos, isLoading } = useSelector((state: RootState) => state.searchVideos);

  useEffect(() => {
    dispatch(getVideosByPhrase(phrase));
  }, [dispatch, phrase]);

  const shouldDisplayVideos: boolean = !isLoading && Boolean(videos.length);

  return (
    <SearchVideoScreenContainer>
      {shouldDisplayVideos ? videos.map((video) => <VideoCard key={video.id.videoId} video={video} />) : Array(4).fill(0).map((_, i) => <VideoCardLoading key={i} />)}
    </SearchVideoScreenContainer>
  )
};

export default SearchVideoScreen;