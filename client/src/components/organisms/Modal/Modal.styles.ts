import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xLarge}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
`;

export const ModalTitle = styled.h1`
`;

export const Spacer = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.large}px 0;
`;