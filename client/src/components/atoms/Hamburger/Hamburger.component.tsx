import React from 'react';
import { HamburgerContainer, TopLine, MiddleLine, BottomLine, TopLineWrapper, BottomLineWrapper } from './Hamburger.styles';
import { HamburgerPropsI } from './Hamburger.types';

export const Hamburger: React.FC<HamburgerPropsI> = ({ isToggled, onPress }) => (
  <HamburgerContainer onClick={onPress}>
    <TopLineWrapper toggled={isToggled}><TopLine toggled={isToggled} /></TopLineWrapper>
    <MiddleLine toggled={isToggled} />
    <BottomLineWrapper toggled={isToggled}><BottomLine toggled={isToggled} /></BottomLineWrapper>
  </HamburgerContainer>
);
