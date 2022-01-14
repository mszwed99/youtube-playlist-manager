import styled from 'styled-components';

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