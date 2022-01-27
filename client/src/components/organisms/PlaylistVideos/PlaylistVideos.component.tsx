import { VideoItem } from 'components/molecules';
import React from 'react';
import { PlaylistVideosContainer } from './PlaylistVideos.styles';
import { PlaylistVideosPropsI } from './PlaylistVideos.types';

export const PlaylistVideos: React.FC<PlaylistVideosPropsI> = ({ owner, videos, onPressVideo, onPressDeleteVideo }) => {
  return (<PlaylistVideosContainer>
    {videos?.map((video) => <VideoItem owner={owner} key={video.videoId} video={video} onPressVideo={onPressVideo} onPressDeleteVideo={onPressDeleteVideo} />)}
  </PlaylistVideosContainer>);
};
