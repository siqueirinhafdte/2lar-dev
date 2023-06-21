import { MenuAnchor, MenuVariant } from 'shared/enum';

import { IconLinkProps } from '../IconLink/types';
export declare type MenuAnchorTypes = (typeof MenuAnchor)[keyof typeof MenuAnchor];
export declare type MenuVariantTypes = (typeof MenuVariant)[keyof typeof MenuVariant];
export interface MenuItemProps {
  id: string;
  redirectLink: string;
  icon?: IconLinkProps;
  label: string;
  isSelected?: boolean;
}
export interface MenuProps {
  anchor?: MenuAnchorTypes;
  variant?: MenuVariantTypes;
  menuItems?: MenuItemProps[];
  urlImgLogo?: string;
  username?: string;
  buttonFooterMenu?: ButtonFooterMenu;
  colorIcon?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}

export interface ButtonFooterMenu {
  label?: string;
  onClick: CallableFunction;
}
