import { Grid } from '@mui/material';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms/Button';

export const Wrapper = styled('div')`
  .MuiAppBar-colorPrimary {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

export const AppBar = styled(MuiAppBar)`
  padding-top: ${spacing.S10};
  box-shadow: none;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: ${spacing.S8};
  }
`;

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

export const Main = styled('div')`
  width: 100%;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: flex-end;
  }
`;

export const WrapperMenu = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

export const WrapperLogo = styled('div')``;

export const ContainerNavLinks = styled(Container)`
  max-height: 4rem;
  margin-top: ${spacing.S8};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${spacing.S16};
`;

export const IconWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  padding-right: ${spacing.S16};
`;

export const ContainerHeaderAvatar = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.S16};
`;

export const ButtonHeader = styled(Button, {
  shouldForwardProp: (prop) => !['colorHeader'].includes(prop as string)
})<{ colorHeader?: AppBarProps['color'] }>`
  border: ${({ theme }) => `${spacing.S1} solid ${theme.palette.secondary.main}`};
  color: ${({ theme, colorHeader }) => {
    if (colorHeader === 'primary') {
      return theme.palette.text.disabled;
    }
    return theme.palette.text.primary;
  }};
  background-color: transparent;
`;

export const LinkHeader = styled(Link, {
  shouldForwardProp: (prop) => !['isSelected', 'colorHeader'].includes(prop as string)
})<{ isSelected: boolean; colorHeader?: AppBarProps['color'] }>`
  color: ${({ theme, isSelected, colorHeader }) => {
    if (colorHeader === 'primary') {
      return theme.palette.text.disabled;
    }

    return isSelected ? theme.palette.text.primary : theme.palette.text.secondary;
  }};
  text-decoration: none;
  padding-bottom: ${spacing.S16};
  border-bottom: ${({ theme, isSelected }) =>
    isSelected ? `${spacing.S1} solid ${theme.palette.primary.light}` : 'none'};

  :hover {
    border-bottom: ${({ theme }) => `${spacing.S1} solid ${theme.palette.primary.light}`};
  }
`;

export const DividerHeader = styled(Divider)`
  font-size: ${fontSizes.F20};
`;

export const WrapperInputSearch = styled(`div`)`
  display: flex;
  justify-content: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0 ${spacing.S20};

    .MuiInputBase-root {
      padding: 0 !important;
      width: 31.25rem;
    }

    button {
      padding-top: ${spacing.S16};
    }
  }
`;

export const WrapperButton = styled('div')`
  max-height: 4rem;
  justify-self: end;

  div {
    padding: 0;
    margin: 0;
  }
`;

export const WrapperButtons = styled('div')`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;
