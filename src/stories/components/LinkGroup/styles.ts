import Grid from '@mui/material/Grid';
import MuiListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Container = styled(Grid)`
  padding-bottom: ${spacing.S1};

  padding-left: 0;
  padding-right: 0;

  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${fontSizes.F14};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  text-transform: none;

  &:hover {
    background: none;
  }
`;

export const Title = styled(Typography)`
  font-size: ${fontSizes.F16};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

export const ListItem = styled(MuiListItem)`
  margin: ${spacing.S14} 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${fontSizes.F14};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
