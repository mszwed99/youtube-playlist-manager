import  { ReactElement}  from 'react';

export interface SidebarItemPropsI {
  label: string;
  icon: ReactElement;
  onPressRedirect: string;
  isSidebarExpanded: boolean;
}