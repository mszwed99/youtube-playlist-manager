import styled, { css } from 'styled-components';

export const HamburgerContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  transform-origin: center;
`

// eslint-disable-next-line no-undef
export const TopLineWrapper = styled.div<{toggled: boolean}>`
  transform-origin: center;
  transition: all 300ms ease-in-out 300ms;

  ${({ toggled }) => toggled && css`
    transform: translateY(8px);
    transition-delay: 0s;
  `};
`;

// eslint-disable-next-line no-undef
export const BottomLineWrapper = styled.div<{toggled: boolean}>`
  transform-origin: center;
  transition: all 300ms ease-in-out 300ms;

  ${({ toggled }) => toggled && css`
    transform: translateY(-8px);
    transition-delay: 0s;
  `};
`;

// eslint-disable-next-line no-undef
export const TopLine = styled(Line)<{toggled: boolean}>`
  transition: all 300ms ease-in-out 0s;
  ${({ toggled }) => toggled && css`
    transform: rotate(-45deg);
    transition-delay: 300ms;
  `};
`;

// eslint-disable-next-line no-undef
export const MiddleLine = styled(Line)<{toggled: boolean}>`
  transition: all 300ms ease-in-out;
  ${({ toggled }) => toggled && css`
    transform: scaleX(0);
  `};

`;

// eslint-disable-next-line no-undef
export const BottomLine = styled(Line)<{toggled: boolean}>`
  transition: all 300ms ease-in-out 0s;

  ${({ toggled }) => toggled && css`
    transform: rotate(45deg);
    transition-delay: 300ms;
  `};
`;