import styled, { css } from "styled-components";

// eslint-disable-next-line no-undef
export const StyledInputContainer = styled.div<{ fullwidth: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${({ fullwidth }) => fullwidth && css`
    width: 100%;
  `}
`;

export const Label = styled.label`
  margin-bottom: -12px;
  transition: color .2s ease-out;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

// eslint-disable-next-line no-undef
export const StyledInput = styled.input<{ rounded: boolean, fullwidth: boolean, transparent: boolean }>`
  padding: ${({ theme }) => theme.spacing.xSmall}px;
  margin: ${({ theme }) => theme.spacing.small}px 0;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  transition: border-radius .2s ease-out,
              border-color  .2s ease-out,
              color         .2s ease-out;
  outline: none;

  ${({ rounded }) => rounded && css`
    border-radius: ${({ theme }) => theme.radii.small}px;
  `}

  ${({ fullwidth }) => fullwidth && css`
    width: 100%;
  `}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ transparent }) => transparent && css`
    background: transparent;
    border: none;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    height: 5vh;
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
    }
  `}

`;

export const EyeIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-100%, -6px);
  display: flex;
  cursor: pointer;
`;