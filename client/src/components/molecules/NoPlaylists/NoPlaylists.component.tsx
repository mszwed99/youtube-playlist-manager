import { Button } from 'components/atoms';
import React from 'react';
import { NoPlaylistsPropsI } from './NoPlaylists.types';

export const NoPlaylists: React.FC<NoPlaylistsPropsI> = ({ onPressOpenModal, onPressRedirect }) => {
  return (
    <>
      <p>Nie posiadasz jeszcze zadnych playlist</p>
      <br />
      <Button onPress={onPressOpenModal} label="Stwórz swoją playlistę" />
      <br />
      <Button onPress={onPressRedirect} label="Sprawdź playlisty innych" secondary />
    </>
  );
};