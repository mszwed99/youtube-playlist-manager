import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.large}px;
  right: ${({ theme }) => theme.spacing.large}px;
`;