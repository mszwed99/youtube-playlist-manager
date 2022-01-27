import { Button } from 'components/atoms';
import { AddVideoForm, Modal, VideoCard, VideoCardLoading } from 'components/organisms';
import { RootState } from 'ducks/modules/rootReducer';
import { clearVideos, getVideosByPhrase } from 'ducks/modules/SearchVideos/searchVideosSlice';
import { getPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VideoI } from 'services/VideoService/VideoService.types';
import { RetryContainer, RetryMessage, SearchVideoScreenContainer } from './SearchVideoScreen.style';

const SearchVideoScreen: React.FC<{ match: any }> = ({ match }) => {
  const { phrase } = match.params;
  const dispatch = useDispatch();
  const { videos, status } = useSelector((state: RootState) => state.searchVideos);
  const { playlists, playlistsCallStatus } = useSelector((state: RootState) => state.usersPlaylists);

  const [isAddVideoModalVisible, setIsAddVideoModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoI | null>(null);

  useEffect(() => {
    if (playlistsCallStatus === 'NOT_SET') {
      dispatch(getPlaylists());
    }
  }, [dispatch, playlistsCallStatus]);

  const fetchVideos = useCallback(() => {
    dispatch(getVideosByPhrase(phrase));
  }, [dispatch, phrase]);

  const onPressAddVideo = (video: VideoI): void => {
    setIsAddVideoModalVisible(true);
    setSelectedVideo(video);
  };

  const onCloseModal = (): void => setIsAddVideoModalVisible(false);

  useEffect(() => {
    fetchVideos();

    return () => {
      dispatch(clearVideos());
    }
  }, [dispatch, fetchVideos, phrase]);

  //@ts-ignore
  const shouldDisplayVideos: boolean = Boolean(videos.length) && status !== 'ERROR' && status !== 'LOADING';
  //@ts-ignore
  const shouldDisplayRetryButton: boolean = status === 'ERROR';

  return (
    <>
      {!!(isAddVideoModalVisible && selectedVideo) && <Modal title="Dodaj film do playlisty" body={<AddVideoForm video={selectedVideo} playlists={playlists} closeModalFc={onCloseModal} />} onClose={onCloseModal} />}
      <SearchVideoScreenContainer>
        {shouldDisplayRetryButton &&
          (<RetryContainer>
            <RetryMessage>Wygląda na to, że wystąpił błąd podczas pobierania filmów.</RetryMessage>
            <Button error label="Spróbuj ponownie" onPress={fetchVideos} />
          </RetryContainer>)
        }
        {status === 'LOADING' && Array(4).fill(0).map((_, i) => <VideoCardLoading key={i} />)}
        {!shouldDisplayRetryButton && shouldDisplayVideos && videos.map((video) => <VideoCard key={video.id.videoId} video={video} onPressAddVideo={onPressAddVideo} />)}
      </SearchVideoScreenContainer>
    </>
  )
};

export default SearchVideoScreen;