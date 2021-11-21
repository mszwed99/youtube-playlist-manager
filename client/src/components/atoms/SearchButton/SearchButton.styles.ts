import styled from 'styled-components';

export const SearchContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.small}px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-left: none;
  height: 5vh;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;