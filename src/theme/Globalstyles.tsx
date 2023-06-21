import React from 'react';

import MUIGlobalStyles, { GlobalStylesProps } from '@mui/material/GlobalStyles';
import { project } from 'shared/enum';

const STYLES: GlobalStylesProps['styles'] = {
  html: {
    fontSize: '16px',
    fontFamily: project.fontFamily
  },
  '*': {
    fontFamily: project.fontFamily,
    margin: '0',
    padding: '0',
    border: '0',
    boxSizing: 'border-box'
  },
  'ol, ul': {
    listStyle: 'none'
  },
  a: {
    textDecoration: 'inherit',
    color: 'inherit'
  }
};

export const GlobalStyles: React.FC = () => {
  return <MUIGlobalStyles styles={STYLES} />;
};
