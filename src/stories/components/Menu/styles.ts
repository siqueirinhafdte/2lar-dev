import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { ListItem, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms/Button';

export const GridHeader = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.data-user {
    padding-left: ${spacing.S16};
    gap: ${spacing.S16};
  }
`;

export const MenuButton = styled(Button, {
  shouldForwardProp: (prop) => !['colorIcon'].includes(prop as string)
})<{ colorIcon?: string }>`
  color: ${({ theme }) => theme.palette.primary.dark};
  border-radius: 50%;
  border-color: ${({ theme, colorIcon }) =>
    colorIcon === 'disabled' ? theme.palette.secondary.light : theme.palette.primary.dark};
  height: 1.875rem;
  min-width: 0;
  width: 1.75rem;

  &:hover {
    background: none;
    border-color: unset;
  }

  .MuiSvgIcon-colorDisabled {
    color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export const MenuIcon = styled(Menu)`
  font-size: ${fontSizes.F16};
`;

export const GridSeeAll = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuDrawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper {
    background: transparent;
    box-shadow: none;

    overflow: hidden;
  }
`;

export const CloseDrawerButton = styled(Button)`
  border-radius: 50%;
  border-color: ${({ theme }) => theme.palette.secondary.dark};
  height: 1.875rem;
  width: 1.75rem;
  min-width: 0;

  &:hover {
    background: none;
    border-color: none;
  }
`;

export const DrawerGrid = styled(Grid)`
  height: 100%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100vw;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 21.25rem;
  }
  backdrop-filter: blur(1.9375rem);
  background: ${({ theme }) => theme.palette.secondary.light};
`;

export const ButtonWrapper = styled(Grid)`
  padding: ${spacing.S16};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseDrawerIcon = styled(CloseIcon)`
  color: black;
`;

export const MenuDivider = styled(Divider)`
  border: 0.03125rem solid #a0a0a0;
  margin-top: ${spacing.S20};
  width: 100%;
  &.grid-button {
    margin-top: ${spacing.S24};
  }
`;

export const MenuList = styled(List)`
  margin-right: ${spacing.S16};
  margin-bottom: ${spacing.S20};
  margin-left: ${spacing.S16};
  padding: 0 ${spacing.S1} 0 ${spacing.S32};
  height: calc(100vh - 11.25rem);
  width: 100%;
`;

export const IconWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled(ListItem, {
  shouldForwardProp: (prop) => !['isSelected'].includes(prop as string)
})<{ isSelected: boolean }>`
  height: 2.0625rem;
  height: 3.125rem;
  border-left: ${({ theme, isSelected }) =>
    `${spacing.S1} solid ${
      isSelected ? theme.palette.primary.light : theme.palette.secondary.main
    }`};
  padding-left: ${spacing.S10};
`;

export const TitleCategory = styled(ListItemText, {
  shouldForwardProp: (prop) => !['isSelected'].includes(prop as string)
})<{ isSelected: boolean }>`
  span {
    font-size: ${fontSizes.F20};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    color: ${({ theme, isSelected }) =>
      isSelected ? theme.palette.text.primary : theme.palette.text.secondary};
  }
`;

export const WrapperLinkIcon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 1rem;
`;

export const ContentGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogin = styled(Button)`
  width: 90%;
`;
