import { Button } from 'components/atoms';
import React from 'react';
import { ContainerWithoutPlaylists } from './Home.styles';

const Home: React.FC = () => {
  const playlists = [];

  const openPlayListModal = () => {

  };

  return (
    <ContainerWithoutPlaylists>
      <p>Nie posiadasz jeszcze zadnych playlist</p>
      <Button onPress={openPlayListModal} label="Stwórz swoją playlistę" />
      <p>Wkrótce będziesz mógł je dodać</p>
    </ContainerWithoutPlaylists >
  );
};

export default Home;