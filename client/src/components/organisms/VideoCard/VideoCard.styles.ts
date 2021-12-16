import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60vw;
  height: 200px;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.small}px 0;
  position: relative;
`;

export const VideoThumbnail = styled.img`
  height: 200px;
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

export const Plus = styled.div`
  position: absolute;
  z-index: 99;
  top: ${({ theme }) => theme.spacing.xxSmall}px;
  left: ${({ theme }) => 360 - theme.spacing.xLarge}px;
  padding: ${({ theme}) => theme.spacing.xxSmall}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    position: absolute;
    right: 100%;
    content: 'Dodaj do playlisty';
    width: 10vw;
    height: 100%;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    transform: scaleX(0);
    transition: transform 0.2s ease-out;
    transform-origin: center right;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    &::after {
      transform: scaleX(1);
    }
  }
`;