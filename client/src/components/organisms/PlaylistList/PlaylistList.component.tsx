import { PlaylistCard } from 'components/molecules';
import React from 'react';
import { PlaylistGrid, Title } from './PlaylistList.styles';
import { PlaylistListPropsI } from './PlaylistList.types';

export const PlaylistList: React.FC<PlaylistListPropsI> = ({ playlists, title }) => {
  return (
    playlists.length ? (
      <>
        <Title>{title}</Title>
        <PlaylistGrid>
          {playlists.map((playlist) => <PlaylistCard key={playlist.id} playlist={playlist} />)}
        </PlaylistGrid>
      </>
    ) : null
  );
};
