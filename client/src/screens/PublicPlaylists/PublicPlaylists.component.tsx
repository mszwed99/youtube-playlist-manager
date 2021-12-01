import { PlaylistList } from 'components/organisms';
import { getPublicPlaylists } from 'ducks/modules/PublicPlaylists/publicPlaylistsSlice';
import { RootState } from 'ducks/modules/rootReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PublicPlaylists: React.FC = () => {
  const dispatch = useDispatch();
  const { publicPlaylists } = useSelector((state: RootState) => state.publicPlaylists);

  useEffect(() => {
    dispatch(getPublicPlaylists());
  }, [dispatch])

  return (
    <PlaylistList playlists={publicPlaylists} title="Wszystkie playlisty" />
  );
};

export default PublicPlaylists;