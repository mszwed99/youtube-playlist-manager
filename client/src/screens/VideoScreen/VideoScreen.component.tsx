import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container } from './VideoScreen.style';

const VideoScreen: React.FC<{ match: any }> = ({ match }) => {
  const { videoId } = match.params;

  const [player, setPlayer] = useState(null);

  const onReady = (event: any): void => {
    setPlayer(event.target);
    console.log(event.target);
  };
  console.log('test');

  const options = { // more options -> https://developers.google.com/youtube/player_parameters
    height: (window.innerHeight * 0.6).toString(),
    width: (window.innerWidth * 0.6).toString(),
  }

  return (
    <Container>
      <YouTube
        videoId={videoId}
        onReady={onReady}
        opts={{ ...options, playerVars: { autoplay: 1 } }}
      />
    </Container>
  );
}

export default VideoScreen;
