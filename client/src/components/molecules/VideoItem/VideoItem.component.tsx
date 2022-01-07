import React from 'react';
import { VideoItemContainer, Thumbnail, TitleAndAuthor, Title, Channel } from './VideoItem.styles';
import { VideoItemPropsI } from './VideoItem.types';

export const VideoItem: React.FC<VideoItemPropsI> = ({ video, onPressVideo }) => {

  const onPress = () => {
    onPressVideo(video.videoId);
  }

  return (
    <VideoItemContainer onClick={onPress}>
      <Thumbnail src={video.thumbnail} />
      <TitleAndAuthor>
        <Title>{video.title}</Title>
        <Channel>{video.channelTitle}</Channel>
      </TitleAndAuthor>
    </VideoItemContainer>
  );
}