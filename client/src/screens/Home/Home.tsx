import { Button } from 'components/atoms';
import { Modal } from 'components/organisms';
import React, { useState } from 'react';
import { ContainerWithoutPlaylists } from './Home.styles';

const Home: React.FC = () => {
  const playlists = [];
  const [isNewPlaylistModalOpen, setIsNewPlaylistModalOpen] = useState(false);

  const openPlayListModal: () => void = () => {
    setIsNewPlaylistModalOpen(true);
  };

  const closePlayListModal: () => void = () => {
    setIsNewPlaylistModalOpen(false);
  };

  const redirectToPublicPlaylists: () => void = () => {

  }

  return (
    <ContainerWithoutPlaylists>
      {isNewPlaylistModalOpen && <Modal onClose={closePlayListModal} body={"test"} />}
      <p>Nie posiadasz jeszcze zadnych playlist</p>
      <Button onPress={openPlayListModal} label="Stwórz swoją playlistę" />
      <Button onPress={redirectToPublicPlaylists} label="Sprawdź playlisty innych" secondary />
    </ContainerWithoutPlaylists >
  );
};

export default Home;