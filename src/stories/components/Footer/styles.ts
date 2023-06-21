import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms';

export const Container = styled(Grid)`
  padding: ${spacing.S10};
  background-color: ${({ theme }) => theme.palette.secondary.light};
  font-size: ${fontSizes.F12};
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${spacing.S32};
  }
`;

export const Wrapper = styled('div')`
  width: 100%;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const LinkWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const WrapperCallToAction = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    border-bottom: ${({ theme }) => `${spacing.S1} solid ${theme.palette.secondary.main}`};
    padding-bottom: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const WrapperLogo = styled('div')`
  display: flex;
  gap: 1rem;
`;

export const TextLogo = styled(Typography)`
  font-size: ${fontSizes.F18};
  max-width: 26ch;
`;

export const WrapperButton = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: ${spacing.S20};
`;

export const TitleCallToAction = styled(Typography)`
  width: 21ch;
`;

export const ButtonCTA = styled(Button)`
  padding: ${spacing.S10} ${spacing.S20};
  max-width: 14.375rem;
`;

export const WrapperHorizontalLinks = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 6.25rem;
  margin-bottom: 1.25rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 2.5rem;
  }
`;

export const ContainerHorizontalLinks = styled('div')`
  width: 75rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2.5rem;
  border-top: ${({ theme }) => `${spacing.S1} solid ${theme.palette.secondary.main}`};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    padding-top: 1.25rem;
    justify-content: space-between;
  }
`;

export const HorizontalLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${fontSizes.F12};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${fontSizes.F16};
  }
`;
