import { SidebarItem } from 'components/atoms';
import { MainTemplateContext } from 'components/templates/MainTemplate/MainTemplateContext';
import React, { useContext } from 'react';
import { FiHome, FiFilm } from 'react-icons/fi';
import { SidebarContainer } from './Sidebar.styles';

export const Sidebar: React.FC = () => {
  const { isSidebarExpanded } = useContext(MainTemplateContext);
  return (
    <SidebarContainer isSidebarExpanded={isSidebarExpanded}>
      <SidebarItem label="Główna" icon={<FiHome />} onPressRedirect="/" isSidebarExpanded={isSidebarExpanded} />
      <SidebarItem label="Publiczne playlisty" icon={<FiFilm />} onPressRedirect="/playlists" isSidebarExpanded={isSidebarExpanded} />
    </SidebarContainer>
  );
};
