import { Button } from 'components/atoms';
import { AddVideoForm, Modal } from 'components/organisms';
import { RootState } from 'ducks/modules/rootReducer';
import { getVideoDetailsById } from 'ducks/modules/SearchVideos/searchVideosSlice';
import { getPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import { VideoI } from 'services/VideoService/VideoService.types';
import { Container, ButtonContainer } from './VideoScreen.style';

const VideoScreen: React.FC<{ match: any }> = ({ match }) => {
  const { videoId } = match.params;
  const dispatch = useDispatch();
  const location = useLocation<{ video?: VideoI }>();
  const { playlists, playlistsCallStatus } = useSelector((state: RootState) => state.usersPlaylists);
  const { selectedVideo, selectedVideoCallStatus } = useSelector((state: RootState) => state.searchVideos);

  const [player, setPlayer] = useState(null);
  const [isAddVideoModalVisible, setIsAddVideoModalVisible] = useState(false);

  useEffect(() => {
    if (playlistsCallStatus === 'NOT_SET') {
      dispatch(getPlaylists());
    }
  }, [dispatch, playlistsCallStatus]);

  useEffect(() => {
    if (!location.state?.video) {
      // dispatch(getVideoDetailsById(videoId));
    }
  }, [dispatch, location.state, videoId]);

  const onCloseModal = (): void => setIsAddVideoModalVisible(false);

  const openModal = (): void => setIsAddVideoModalVisible(true);

  const onReady = (event: any): void => {
    setPlayer(event.target);
  };

  const options = { // more options -> https://developers.google.com/youtube/player_parameters
    height: (window.innerHeight * 0.6).toString(),
    width: (window.innerWidth * 0.6).toString(),
  }
  // albo brak state.video albo 
  const shouldDisableAddButton: boolean = !location.state?.video && selectedVideoCallStatus !== 'SUCCESS';
  console.log(shouldDisableAddButton);
  console.log(isAddVideoModalVisible, selectedVideo);
  const shouldDisplayModal: boolean = !!(isAddVideoModalVisible && ((selectedVideo && selectedVideoCallStatus) || location.state.video));
  const video: VideoI = selectedVideo ? selectedVideo : location.state.video;
  return (
    <>
      <Container>
        {shouldDisplayModal && <Modal title="Dodaj film do playlisty" body={<AddVideoForm video={video} playlists={playlists} closeModalFc={onCloseModal} />} onClose={onCloseModal} />}
        <YouTube
          videoId={videoId}
          onReady={onReady}
          opts={{ ...options, playerVars: { autoplay: 1 } }}
        />
        <ButtonContainer>
          <Button onPress={openModal} label="Dodaj do playlisty" disabled={shouldDisableAddButton} />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default VideoScreen;
