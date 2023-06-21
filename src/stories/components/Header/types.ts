import { AppBarProps } from '@mui/material';

import { InputSearchElasticProps } from '../ElasticSearch/InputSearchElastic/types';
import { MenuProps } from '../Menu/types';

export interface HeaderProps {
  urlImgLogo?: string;
  urlImgLogoDarkBg?: string;
  links?: Array<{ label: string; redirectLink: string; isSelected?: boolean }>;
  button: { label: string; onClick: () => void };
  menu?: MenuProps;
  username?: string;
  search?: InputSearchElasticProps;
  color?: AppBarProps['color'];
  showComponent: {
    inputSearch: boolean;
    navLinks: boolean;
    buttonHeader: boolean;
    menuDrawer: boolean;
  };
}
