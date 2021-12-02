import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { Description, PublishTime, Title, Channel, VideoCardContainer, VideoDetails, VideoThumbnail } from './VideoCard.styles';
import { VideoCardPropsI } from './VideoCard.types';

export const VideoCard: React.FC<VideoCardPropsI> = ({ video }) => {
  const history = useHistory();
  const formatPublishDate = (timestamp: string): string => moment(timestamp).format("DD MM YYYY");

  const onPressVideo = () => {
    history.push(`/video/${video.id.videoId}`);
  }

  return (
    <VideoCardContainer onClick={onPressVideo}>
      <VideoThumbnail src={video.snippet.thumbnails.medium.url} />
      <VideoDetails>
        <Title>{video.snippet.title}</Title>
        <Channel>{video.snippet.channelTitle}</Channel>
        <PublishTime>Dodano: {formatPublishDate(video.snippet.publishedAt)}</PublishTime>
        <Description>{video.snippet.description}</Description>
      </VideoDetails>
    </VideoCardContainer>
  );
};