import styled, { css } from 'styled-components';

// eslint-disable-next-line no-undef
export const SidebarContainer = styled.nav<{isSidebarExpanded: boolean}>`
  width: 5vw;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-right: 2px solid ${({ theme }) => theme.colors.grey};
  transition: width 300ms ease-out;
  
  ${({ isSidebarExpanded }) => isSidebarExpanded && css`
    width: 15vw;
  `}
`;