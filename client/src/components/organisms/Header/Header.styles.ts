import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutContainer = styled.div`
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.fontSize.large};
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.spacing.medium}px;
`;