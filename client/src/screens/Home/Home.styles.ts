import styled from 'styled-components';

export const ContainerWithoutPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

export const ContainerWithPlaylists = styled.div`
  position: relative;
`;

export const CreateButtonContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.small}px;
  right: ${({ theme }) => theme.spacing.small}px;
`;