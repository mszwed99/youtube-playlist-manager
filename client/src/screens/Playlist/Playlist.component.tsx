import React from 'react';

const Playlist: React.FC<{ match: any }> = ({ match }) => {
  const { playlistId } = match.params;
  return (
    <div>playlista nr {playlistId}</div>
  );
}

export default Playlist;