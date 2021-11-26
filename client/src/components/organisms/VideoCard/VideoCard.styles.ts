import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60vw;
  height: 240px;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.small}px 0;
`;

export const VideoThumbnail = styled.img`
  height: 240px;
  width: 360px;
  object-fit: contain;
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

export const Channel = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize.medium};
`;

export const PublishTime = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize.small};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize.medium};
`;
