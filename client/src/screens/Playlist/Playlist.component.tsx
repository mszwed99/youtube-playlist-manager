import { PlaylistHeader } from 'components/organisms';
import { deleteVideo, getPlaylistDetails } from 'ducks/modules/CurrentPlaylist/currentPlaylistSlice';
import { RootState } from 'ducks/modules/rootReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { PlaylistVideos } from 'components/organisms';
import { useHistory } from 'react-router';
import { Container, Header, DetailsContainer, Title, SubTitle, Content } from './Playlist.styles';

const Playlist: React.FC<{ match: any }> = ({ match }) => {
  const history = useHistory();
  const { playlistId, videoId } = match.params;
  const dispatch = useDispatch();
  const { playlist, currentPlaylistCallStatus } = useSelector((state: RootState) => state.currentPlaylist);

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    dispatch(getPlaylistDetails({ id: playlistId }));
  }, [dispatch, playlistId]);

  const onReady = (event: any): void => {
    setPlayer(event.target);
  };

  const options = { // more options -> https://developers.google.com/youtube/player_parameters
    height: (window.innerHeight * 0.6).toString(),
    width: (window.innerWidth * 0.6).toString(),
  }

  const onPressVideo = (videoId: string) => history.push(`/playlist/${playlistId}/video/${videoId}`);

  const onPressDeleteVideo = async (videoId: string) => {
    await dispatch(deleteVideo({ playlistId, videoId }));
    await dispatch(getPlaylistDetails({ id: playlistId }));
  }

  return (
    <Container>
      <PlaylistHeader playlist={playlist} />
      <Content>
        <YouTube
          videoId={videoId}
          onReady={onReady}
          opts={{ ...options, playerVars: { autoplay: 1 } }}
        />
        <PlaylistVideos videos={playlist?.videos} onPressVideo={onPressVideo} onPressDeleteVideo={onPressDeleteVideo} />
      </Content>
    </Container>
  );
}

export default Playlist;