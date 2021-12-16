import styled from "styled-components";

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  margin: ${({ theme }) => theme.spacing.medium}px;
`;

export const PlaylistName = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.xLarge}px;
  min-width: 15vw;
`;