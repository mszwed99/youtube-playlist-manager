import React from 'react';
import { useHistory } from 'react-router';
import { SidebarItemContainer, IconContainer, SidebarItemLabel } from './SidebarItem.styles';
import { SidebarItemPropsI } from './SidebarItem.types';

export const SidebarItem: React.FC<SidebarItemPropsI> = ({ label, icon, onPressRedirect, isSidebarExpanded }) => {
  const history = useHistory();

  const onPress: () => void = () => {
    history.push(onPressRedirect);
  };

  return (
    <SidebarItemContainer onClick={onPress} isSidebarExpanded={isSidebarExpanded}>
      <IconContainer>{icon}</IconContainer>
      <SidebarItemLabel isSidebarExpanded={isSidebarExpanded}>{label}</SidebarItemLabel>
    </SidebarItemContainer>
  );
}