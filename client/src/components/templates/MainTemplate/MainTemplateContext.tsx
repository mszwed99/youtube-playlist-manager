import React, { createContext, useState } from 'react';

export const MainTemplateContext = createContext({ isSidebarExpanded: true, toggleSidebar: () => { } });

interface MainTeplateContextI {
  children: React.ReactNode,
}

export const MainTemplateProvider: React.FC<MainTeplateContextI> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = (): void => setIsSidebarExpanded(!isSidebarExpanded);

  return (
    <MainTemplateContext.Provider value={{ isSidebarExpanded, toggleSidebar }}>
      {children}
    </MainTemplateContext.Provider>
  );
};