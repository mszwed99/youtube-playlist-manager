import { RootState } from 'ducks/modules/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import { VideoItemContainer, Thumbnail, TitleAndAuthor, Title, Channel, DeleteButton } from './VideoItem.styles';
import { VideoItemPropsI } from './VideoItem.types';

export const VideoItem: React.FC<VideoItemPropsI> = ({ owner, video, onPressVideo, onPressDeleteVideo }) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
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
      {owner.id === userInfo.id ? (
        <div>
          <DeleteButton onClick={onDeletePress}>x</DeleteButton>
        </div>
      ) : null}
    </VideoItemContainer >
  );
}