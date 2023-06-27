import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  margin: ${spacing.S28} 0;
  gap: ${spacing.S28};
  color: ${({ theme }) => theme.palette.primary.dark};
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
    margin: ${spacing.S32} 0 ${spacing.S14} ${spacing.S10};
    gap: ${spacing.S14};
  }
`;

export const BoxTitle = styled('div')`
  width: 60%;
  padding-left: ${spacing.S100};
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    padding-left: ${spacing.S10};
  }
`;

export const Title = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F32};
  }
`;

export const InformationContainer = styled('div')`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: auto;
    flex-direction: column;
    gap: ${spacing.S14};
  }
`;

export const AddressContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  padding-right: ${spacing.S100};

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
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
