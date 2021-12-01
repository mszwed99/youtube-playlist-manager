import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  padding: ${({ theme })=> theme.spacing.medium}px;
`;

export const PlaylistGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;