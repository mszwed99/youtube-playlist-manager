import styled from 'styled-components';

export const PlaylistCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 240px;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.large}px auto;
`;

export const PlaylistThumbnail = styled.img`
  height: 240px;
  width: 360px;
  object-fit: contain;
`;

export const ThumbnailPlaceholder = styled.div`
  height: 240px;
  width: 360px;
  background: ${({ theme }) => theme.colors.white100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const VideoDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  overflow: hidden;
  margin-left: ${({ theme }) => theme.spacing.large}px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize.large};
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
`;
