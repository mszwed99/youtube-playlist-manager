import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomeImage = styled.img`
  height: 60%;
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xLarge}px;
`;

export const WelcomeHeader = styled.h1`
  
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;