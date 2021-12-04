import { Button } from 'components/atoms';
import { getPlaylistDetails } from 'ducks/modules/CurrentPlaylist/currentPlaylistSlice';
import { RootState } from 'ducks/modules/rootReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followPlaylist, unfollowPlaylist } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';

const Playlist: React.FC<{ match: any }> = ({ match }) => {
  const { playlistId } = match.params;
  const dispatch = useDispatch();
  const { playlist, currentPlaylistCallStatus } = useSelector((state: RootState) => state.currentPlaylist);
  const { publicPlaylists } = useSelector((state: RootState) => state.publicPlaylists);
  const [isFollowed, setIsFollowed] = useState(publicPlaylists.find(playlist => playlist.id == playlistId)?.followers.some(follower => follower.id === 2));

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

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>
        playlista nr {playlistId}
      </h1>
      <h2>{isFollowed ? 'jest obserwowana' : 'nie jest obserwowana'}</h2>
      <Button label={isFollowed ? 'Przestań obserwować' : 'Obserwuj'} onPress={onPressFollow} />
    </div>
  );
}

export default Playlist;