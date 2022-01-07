import styled from "styled-components";

export const PlaylistVideosContainer = styled.div`
  height: 80%;
  width: 100%;
  margin: 0 ${({ theme }) => theme.spacing.xLarge}px;
  background: ${({ theme }) => theme.colors.secondary100};
  overflow-y: scroll;
`;
