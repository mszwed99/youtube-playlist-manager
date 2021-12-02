import React from 'react';
import { PlaylistCardContainer, PlaylistThumbnail, Title } from './PlaylistCard.styles';
import { PlaylistCardPropsI } from './PlaylistCard.types';

export const PlaylistCard: React.FC<PlaylistCardPropsI> = ({ playlist }) => {
  const onPlaylistPress = () => {
    //redirect to playlist screen;
  }
  return (
    <PlaylistCardContainer onClick={onPlaylistPress}>
      <PlaylistThumbnail />
      <Title>{playlist.name}</Title>
    </PlaylistCardContainer>
  );
};