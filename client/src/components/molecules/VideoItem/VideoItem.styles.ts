import styled from "styled-components";

export const VideoItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.large}px 0;
  padding: ${({ theme }) => theme.spacing.xSmall}px;
  transition: background 400ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Thumbnail = styled.img`
  height: 80px;
  width: 140px;
`;

export const TitleAndAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.spacing.small}px;
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
`;

export const Channel = styled.p`
`;