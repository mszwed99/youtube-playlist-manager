import { Button } from 'components/atoms';
import { getPlaylistDetails } from 'ducks/modules/CurrentPlaylist/currentPlaylistSlice';
import { RootState } from 'ducks/modules/rootReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followPlaylist, unfollowPlaylist } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import YouTube from 'react-youtube';
import { PlaylistVideos } from 'components/organisms';
import { useHistory } from 'react-router';
import { Container, Header, DetailsContainer, Title, SubTitle, Content } from './Playlist.styles';

const Playlist: React.FC<{ match: any }> = ({ match }) => {
  const history = useHistory();
  const { playlistId, videoId } = match.params;
  const dispatch = useDispatch();
  const { playlist, currentPlaylistCallStatus } = useSelector((state: RootState) => state.currentPlaylist);
  const { publicPlaylists } = useSelector((state: RootState) => state.publicPlaylists);

  const [isFollowed, setIsFollowed] = useState(publicPlaylists.find(playlist => playlist.id == playlistId)?.followers.some(follower => follower.id === 2));
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    dispatch(getPlaylistDetails({ id: playlistId }));
  }, [dispatch, playlistId]);

  const onPressFollow = () => {
    setIsFollowed(!isFollowed);
    if (isFollowed) {
      dispatch(unfollowPlaylist({ id: playlistId }))
    } else {
      dispatch(followPlaylist({ id: playlistId }));
    }
  }

  const onReady = (event: any): void => {
    setPlayer(event.target);
  };

  const options = { // more options -> https://developers.google.com/youtube/player_parameters
    height: (window.innerHeight * 0.6).toString(),
    width: (window.innerWidth * 0.6).toString(),
  }

  const onPressVideo = (videoId: string) => history.push(`/playlist/${playlistId}/video/${videoId}`);

  return (
    <Container>
      <Header>
        <DetailsContainer>
          <Title>{playlist?.name}</Title>
          <SubTitle>stworzona przez testuser</SubTitle>
          <SubTitle>{playlist?.videos?.length} utworów</SubTitle>
        </DetailsContainer>
        <Button label={isFollowed ? 'Przestań obserwować' : 'Obserwuj'} secondary={isFollowed} onPress={onPressFollow} />
      </Header>
      <Content>
        <YouTube
          videoId={videoId}
          onReady={onReady}
          opts={{ ...options, playerVars: { autoplay: 1 } }}
        />
        <PlaylistVideos videos={playlist?.videos} onPressVideo={onPressVideo} />
      </Content>
    </Container>
  );
}

export default Playlist;