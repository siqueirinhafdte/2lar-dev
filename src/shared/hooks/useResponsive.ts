import { useMediaQuery, useTheme } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.between(theme.breakpoints.values.xs, theme.breakpoints.values.md)
  );

  const isDesk = useMediaQuery(theme.breakpoints.up(theme.breakpoints.values.md));

  const isTablet = useMediaQuery(
    theme.breakpoints.between(theme.breakpoints.values.sm, theme.breakpoints.values.lg)
  );

  const isXs = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm));

  const isSm = useMediaQuery(
    theme.breakpoints.between(theme.breakpoints.values.xs, theme.breakpoints.values.md)
  );
  const isMd = useMediaQuery(
    theme.breakpoints.between(theme.breakpoints.values.md, theme.breakpoints.values.lg)
  );
  const isLg = useMediaQuery(
    theme.breakpoints.between(theme.breakpoints.values.lg, theme.breakpoints.values.xl)
  );
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  return {
    isMobile,
    isTablet,
    isDesk,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl
  };
};
