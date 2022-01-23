import React from 'react';
import { VideoItemContainer, Thumbnail, TitleAndAuthor, Title, Channel, DeleteButton } from './VideoItem.styles';
import { VideoItemPropsI } from './VideoItem.types';

export const VideoItem: React.FC<VideoItemPropsI> = ({ video, onPressVideo, onPressDeleteVideo }) => {

  const onPress = () => {
    onPressVideo(video.videoId);
  }

  const onDeletePress = (e: any) => {
    e.stopPropagation();
    onPressDeleteVideo(video.videoId);
  }

  return (
    <VideoItemContainer onClick={onPress}>
      <Thumbnail src={video.thumbnail} />
      <TitleAndAuthor>
        <Title>{video.title}</Title>
        <Channel>{video.channelTitle}</Channel>
      </TitleAndAuthor>
      <DeleteButton onClick={onDeletePress}>x</DeleteButton>
    </VideoItemContainer >
  );
}