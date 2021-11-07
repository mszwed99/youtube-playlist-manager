import styled from "styled-components";

export const RegisterFormContainer = styled.div`
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

// eslint-disable-next-line no-undef
export const FieldCheck = styled.p<{passed: boolean}>`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxSmall}px;
  color: ${({ theme, passed }) => passed ? theme.colors.primary : theme.colors.error};
`;

export const Spacer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large}px;
`;