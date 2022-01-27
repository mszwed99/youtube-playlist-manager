import { Hamburger, Input } from 'components/atoms';
import { MainTemplateContext } from 'components/templates/MainTemplate/MainTemplateContext';
import { logOut } from 'ducks/modules/Auth/authSlice';
import React, { useContext, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from 'ducks/modules/rootReducer';
import { clearPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import { clearVideos } from 'ducks/modules/SearchVideos/searchVideosSlice';
import { HeaderContainer, LogoutContainer, SearchContainer, UserContainer, UserInfo } from './Header.styles';
import { SearchButton } from '../../atoms/SearchButton/SearchButton.component';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSidebarExpanded, toggleSidebar } = useContext(MainTemplateContext);
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value);

  const logout: () => void = () => {
    dispatch(logOut());
    dispatch(clearPlaylists());
    dispatch(clearVideos());
    history.push('/');
  }

  const onEnterPress: (e: React.FormEvent<HTMLFormElement>) => void = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      history.push(`/search/${searchValue}`);
    }
  }

  const onSearchPress: () => void = () => {
    if (searchValue) {
      history.push(`/search/${searchValue}`);
    }
  }

  return (
    <HeaderContainer>
      <Hamburger isToggled={isSidebarExpanded} onPress={toggleSidebar} />
      <SearchContainer onSubmit={onEnterPress}>
        <Input value={searchValue} name='Search' onChange={handleSearchInputChange} transparent placeholder="Szukaj" />
        <SearchButton onPress={onSearchPress} />
      </SearchContainer>
      <UserContainer>
        <UserInfo>Witaj, {userInfo?.username}</UserInfo>
        <LogoutContainer onClick={logout}><FiLogOut /></LogoutContainer>
      </UserContainer>
    </HeaderContainer>
  );
};
