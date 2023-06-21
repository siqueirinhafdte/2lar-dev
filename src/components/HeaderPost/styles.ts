import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-self: self-start;
  margin: ${spacing.S28} ${spacing.S14} ${spacing.S28};
  gap: ${spacing.S28};
  color: ${({ theme }) => theme.palette.primary.dark};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S14} 0 ${spacing.S14} ${spacing.S10};
    gap: ${spacing.S14};
  }
`;

export const Title = styled(Typography)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F32};
  }
`;

export const InformationContainer = styled('div')`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: auto;
    flex-direction: column;
    gap: ${spacing.S14};
  }
`;

export const AddressContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Address = styled(Typography)`
  display: inline-block;
  font-size: ${fontSizes.F24};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F16};
  }
`;

export const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: ${fontSizes.F24};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F16};
  }
`;

export const ButtonsContainer = styled('div')`
  display: flex;
  gap: ${spacing.S16};
`;

export const FavoriteButtonContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: ${spacing.S8};
  text-decoration: underline;
  font-size: ${fontSizes.F16};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F12};
  }
`;

export const FavoriteButton = styled(Link)``;

export const ShareButtonContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: ${spacing.S8};
  text-decoration: underline;
  font-size: ${fontSizes.F16};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F12};
  }
`;

export const ShareButton = styled(Link)``;
