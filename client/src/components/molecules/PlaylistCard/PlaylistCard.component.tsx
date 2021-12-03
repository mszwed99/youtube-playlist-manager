import React from 'react';
import { FiMinusCircle } from "react-icons/fi";
import { useHistory } from 'react-router';
import { PlaylistCardContainer, PlaylistThumbnail, ThumbnailPlaceholder, Title } from './PlaylistCard.styles';
import { PlaylistCardPropsI } from './PlaylistCard.types';

export const PlaylistCard: React.FC<PlaylistCardPropsI> = ({ playlist }) => {
  const history = useHistory();
  const videos = [];

  const onPlaylistPress = () => {
    history.push(`/playlist/${playlist.id}`);
  }

  return (
    <PlaylistCardContainer onClick={onPlaylistPress}>
      {videos.length ? <PlaylistThumbnail /> : (
        <ThumbnailPlaceholder>
          <FiMinusCircle style={{ fontSize: 40 }} />
          <p>Brak filmów w playliście</p>
        </ThumbnailPlaceholder>
      )}
      <Title>{playlist.name}</Title>
    </PlaylistCardContainer>
  );
};