import styled, { css } from "styled-components";

// eslint-disable-next-line no-undef
export const StyledButton = styled.button<{fullwidth: boolean, error: boolean, secondary: boolean}>`
  padding: ${({ theme }) => theme.spacing.xSmall}px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small}px;
  border: none;
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
  font-size: ${({ theme }) => theme.font.fontSize.medium};
  transition: background 0.4s ease;

  ${({ fullwidth }) => fullwidth && css`
    width: 100%;
  `}

  :disabled {
    background: ${({ theme }) => theme.colors.grey};
    cursor: default;
  }

  ${({ error }) => error && css`
    background: ${({ theme }) => theme.colors.error};
  `}

  ${({ secondary }) => secondary && css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  `}
`;