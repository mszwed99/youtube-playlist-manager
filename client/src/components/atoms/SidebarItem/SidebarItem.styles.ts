import styled, { css } from 'styled-components';

// eslint-disable-next-line no-undef
export const SidebarItemContainer = styled.div<{ isSidebarExpanded: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xSmall}px ${({ theme }) => theme.spacing.small}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ isSidebarExpanded }) => !isSidebarExpanded && css`
    padding: 0;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.fontSize.small};
    text-align: center;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.secondary100};
  }
`;

export const IconContainer = styled.div`
  width: 5vh;
  height: 5vh;
  font-size: ${({ theme }) => theme.font.fontSize.large};
  display: flex;
  justify-content: center;
  align-items: center;
`;
// eslint-disable-next-line no-undef
export const SidebarItemLabel = styled.div<{ isSidebarExpanded: boolean }>`
  width: 100%;

  ${({ isSidebarExpanded }) => isSidebarExpanded && css`
    margin-left: ${({ theme }) => theme.spacing.medium}px;
  `}

`;
