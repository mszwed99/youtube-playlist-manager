import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { FiFolderPlus } from "react-icons/fi";
import { mapVideoSnippetToVideoModel } from 'ducks/modules/SearchVideos/searchVideosSlice';
import { Description, PublishTime, Title, Channel, VideoCardContainer, VideoDetails, VideoThumbnail, Plus } from './VideoCard.styles';
import { VideoCardPropsI } from './VideoCard.types';

export const VideoCard: React.FC<VideoCardPropsI> = ({ video, onPressAddVideo }) => {
  const history = useHistory();
  const formatPublishDate = (timestamp: string): string => moment(timestamp).format("DD MM YYYY");

  const onPressVideo = () => {
    history.push(`/video/${video.id.videoId}`, { video: mapVideoSnippetToVideoModel(video) });
  }

  const onPressAddToPlaylist = (e: any) => {
    e.stopPropagation();
    onPressAddVideo(mapVideoSnippetToVideoModel(video));
  }

  return (
    <>
      <VideoCardContainer onClick={onPressVideo}>
        <Plus onClick={onPressAddToPlaylist}><FiFolderPlus /></Plus>
        <VideoThumbnail src={video.snippet.thumbnails.medium.url} />
        <VideoDetails>
          <Title>{video.snippet.title}</Title>
          <Channel>{video.snippet.channelTitle}</Channel>
          <PublishTime>Dodano: {formatPublishDate(video.snippet.publishedAt)}</PublishTime>
          <Description>{video.snippet.description}</Description>
        </VideoDetails>
      </VideoCardContainer>
    </>
  );
};