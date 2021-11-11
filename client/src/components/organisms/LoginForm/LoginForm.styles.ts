import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RegisterText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.large}px;
  align-self: flex-start;
`;