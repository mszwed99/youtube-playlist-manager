import styled from 'styled-components';

export const SearchVideoScreenContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const RetryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RetryMessage = styled.div`
  font-size: ${({ theme }) => theme.font.fontSize.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;