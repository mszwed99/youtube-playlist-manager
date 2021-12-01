import { SidebarItem } from 'components/atoms';
import { MainTemplateContext } from 'components/templates/MainTemplate/MainTemplateContext';
import React, { useContext } from 'react';
import { FiHome, FiFilm } from 'react-icons/fi';
import { SidebarContainer } from './Sidebar.styles';

export const Sidebar: React.FC = () => {
  const { isSidebarExpanded } = useContext(MainTemplateContext);
  return (
    <SidebarContainer isSidebarExpanded={isSidebarExpanded}>
      <SidebarItem label="Home" icon={<FiHome />} onPressRedirect="/" isSidebarExpanded={isSidebarExpanded} />
      <SidebarItem label="Public playlists" icon={<FiFilm />} onPressRedirect="/playlists" isSidebarExpanded={isSidebarExpanded} />
    </SidebarContainer>
  );
};
