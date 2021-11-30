import { Button } from 'components/atoms';
import { VideoCard, VideoCardLoading } from 'components/organisms';
import { RootState } from 'ducks/modules/rootReducer';
import { clearVideos, getVideosByPhrase } from 'ducks/modules/SearchVideos/searchVideosSlice';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RetryContainer, RetryMessage, SearchVideoScreenContainer } from './SearchVideoScreen.style';

const SearchVideoScreen: React.FC<{ match: any }> = ({ match }) => {
  const { phrase } = match.params;
  const dispatch = useDispatch();
  const { videos, isLoading, status } = useSelector((state: RootState) => state.searchVideos);
  const fetchVideos = useCallback(() => {
    dispatch(getVideosByPhrase(phrase));
  }, [dispatch, phrase]);

  useEffect(() => {
    fetchVideos();

    return () => {
      dispatch(clearVideos());
    }
  }, [dispatch, fetchVideos, phrase]);

  const shouldDisplayVideos: boolean = !isLoading && status !== 'ERROR' && Boolean(videos.length);

  const shouldDisplayRetryButton: boolean = status === 'ERROR';

  return (
    <SearchVideoScreenContainer>
      {shouldDisplayRetryButton &&
        (<RetryContainer>
          <RetryMessage>Wygląda na to, że wystąpił błąd podczas pobierania filmów.</RetryMessage>
          <Button error label="Spróbuj ponownie" onPress={fetchVideos} />
        </RetryContainer>)
      }
      {isLoading && Array(4).fill(0).map((_, i) => <VideoCardLoading key={i} />)}
      {!shouldDisplayRetryButton && shouldDisplayVideos && videos.map((video) => <VideoCard key={video.id.videoId} video={video} />)}
    </SearchVideoScreenContainer>
  )
};

export default SearchVideoScreen;