import { Button, Divider, Grid, Typography, styled } from '@mui/material';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: ${spacing.S32};
  width: 25rem;
  height: 21.875rem;
  margin-top: ${spacing.S100};
  margin-left: ${spacing.S12};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: ${spacing.S50};
    margin-bottom: ${spacing.S30};
    margin-left: 0;
    width: 100%;
  }
`;

export const ViewersDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.subtitle2};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  width: 29ch;

  span {
    color: ${({ theme }) => theme.palette.primary.dark};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }
`;

export const StyledDivider = styled(Divider)`
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: ${spacing.S16};
  margin-bottom: ${spacing.S16};
`;

export const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.dark};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${fontSizes.F24};
  line-height: 2.25rem;
  letter-spacing: 0.02em;
  margin-bottom: ${spacing.S16};
`;

export const AvailablePeriodDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.subtitle2};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  width: 35ch;

  span {
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }
`;

export const ButtonLinkWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.S32};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${spacing.S32};
  }
`;

export const ButtonLink = styled(Button)`
  height: ${spacing.S56};
  font-size: ${fontSizes.F16};
  color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: ${spacing.S30};
  padding: ${spacing.S16} ${spacing.S76};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-transform: none;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
