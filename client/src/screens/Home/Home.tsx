import { Button } from 'components/atoms';
import { Modal } from 'components/organisms';
import { createPlaylist, getPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ContainerWithoutPlaylists } from './Home.styles';

const Home: React.FC = () => {
  const playlists = [];
  const dispatch = useDispatch()
  const [isNewPlaylistModalOpen, setIsNewPlaylistModalOpen] = useState(false);

  const openPlayListModal: () => void = () => {
    setIsNewPlaylistModalOpen(true);
    // dispatch(createPlaylist({ name: 'test' }));
    dispatch(getPlaylists());
  };

  const closePlayListModal: () => void = () => {
    setIsNewPlaylistModalOpen(false);
  };

  const redirectToPublicPlaylists: () => void = () => {

  }

  return (
    playlists.length ? null : (
      <ContainerWithoutPlaylists>
        {isNewPlaylistModalOpen && <Modal onClose={closePlayListModal} body={"test"} />}
        <p>Nie posiadasz jeszcze zadnych playlist</p>
        <br />
        <Button onPress={openPlayListModal} label="Stwórz swoją playlistę" />
        <br />
        <Button onPress={redirectToPublicPlaylists} label="Sprawdź playlisty innych" secondary />
      </ContainerWithoutPlaylists >
    )

  );
};

export default Home;