import { ReactNode } from 'react';

export type CategoryMenu = {
  mainButtonIcon?: ReactNode;
  mainButtonTitle: string;
  items: CategoryMenuItem[];
};
export type CategoryMenuItem = {
  icon: ReactNode;
  name: string;
  link: string;
  items: CategorySubMenu[];
};
export type CategorySubMenu = {
  name: string;
  link: string;
  items?: CategorySubMenuItem[];
};
export type CategorySubMenuItem = {
  name: string;
  link: string;
};
