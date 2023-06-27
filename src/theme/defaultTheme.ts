import { createTheme } from '@mui/material/styles';
import { epilogue } from 'assets/fonts';
import { project } from 'shared/enum';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#175CD3',
      main: '#1450B8',
      dark: '#262B35'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#BFC5D0',
      dark: '#273246'
    },
    success: {
      main: '#45A33C'
    },
    warning: {
      main: '#FF851A'
    },
    error: {
      main: '#EA4444'
    },
    text: {
      primary: '#273246',
      secondary: '#6C757D',
      disabled: '#F2F5F7'
    },
    customColors: {
      backgroundLight: '#eff4f6',
      backgroundDark: '#212c3e'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: project.fontFamily
  }
});

defaultTheme.typography.h1 = {
  fontFamily: epilogue.style.fontFamily,
  fontWeight: defaultTheme.typography.fontWeightMedium,
  fontSize: '4.6875rem',
  lineHeight: '5rem',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: '2.1875rem',
    lineHeight: '2.5rem'
  }
};

defaultTheme.typography.h2 = {
  fontFamily: epilogue.style.fontFamily,
  fontWeight: defaultTheme.typography.fontWeightMedium,
  fontSize: '3.5rem',
  lineHeight: '3.75rem',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
    lineHeight: '2.25rem'
  }
};

defaultTheme.typography.h3 = {
  fontFamily: epilogue.style.fontFamily,
  fontWeight: defaultTheme.typography.fontWeightMedium,
  fontSize: '2.5rem',
  lineHeight: '3rem',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    lineHeight: '2rem'
  }
};

defaultTheme.typography.h4 = {
  fontFamily: epilogue.style.fontFamily,
  fontWeight: defaultTheme.typography.fontWeightMedium,
  fontSize: '2rem',
  lineHeight: '2.5rem',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem'
  }
};

defaultTheme.typography.h5 = {
  fontFamily: epilogue.style.fontFamily,
  fontWeight: defaultTheme.typography.fontWeightMedium,
  fontSize: '1.5rem',
  lineHeight: '2rem',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem'
  }
};

defaultTheme.typography.h6 = {
  fontFamily: epilogue.style.fontFamily,
  fontWeight: defaultTheme.typography.fontWeightMedium,
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem'
  }
};

export default defaultTheme;

declare module '@mui/material/styles' {
  interface Palette {
    customColors?: {
      [key: string]: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      [key: string]: string;
    };
  }
}
