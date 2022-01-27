import { VideoItem } from 'components/molecules';
import React from 'react';
import { PlaylistVideosContainer } from './PlaylistVideos.styles';
import { PlaylistVideosPropsI } from './PlaylistVideos.types';

export const PlaylistVideos: React.FC<PlaylistVideosPropsI> = ({ videos, onPressVideo, onPressDeleteVideo }) => {
  return (<PlaylistVideosContainer>
    {videos?.map((video) => <VideoItem key={video.videoId} video={video} onPressVideo={onPressVideo} onPressDeleteVideo={onPressDeleteVideo} />)}
  </PlaylistVideosContainer>);
};
