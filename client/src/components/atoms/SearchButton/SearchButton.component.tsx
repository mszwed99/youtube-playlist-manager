import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchContainer } from './SearchButton.styles';
import { SearchButtonPropsI } from './SearchButton.types';

export const SearchButton: React.FC<SearchButtonPropsI> = ({ onPress }) => (
  <SearchContainer onClick={onPress}>
    <FiSearch />
  </SearchContainer>
);
