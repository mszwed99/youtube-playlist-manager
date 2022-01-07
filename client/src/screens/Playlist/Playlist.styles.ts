import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.large}px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.xxLarge}px;
`;

export const Title = styled.h1`

`

export const SubTitle = styled.p`
  color: ${({ theme })=> theme.colors.grey};
`

export const Content = styled.div`
  height: 100%;
  display: flex;
`;