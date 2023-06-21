import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const WrapperComponent = styled('div')`
  max-width: 75rem;
  margin: 0 auto;
`;

export const Container = styled(Grid)`
  width: 100%;
  padding: ${spacing.S10};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled(Grid)`
  margin-bottom: ${spacing.S32};
  margin-left: ${spacing.S64};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0;
  }
`;

export const Title = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.palette.primary.dark};
  font-size: ${fontSizes.F26};
  width: 25ch;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${fontSizes.F22};
  }
`;

export const Wrapper = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'Card1 Card2'
    'Card3 Card4';
  max-width: 37.5rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'Card1'
      'Card2'
      'Card3'
      'Card4';
  }
`;

export const StyledCard = styled(Grid, {
  shouldForwardProp: (prop) => !['index'].includes(prop as string)
})<{ index: number }>`
  margin-top: ${({ index }) => (index % 2 === 1 ? spacing.S70 : 0)};
  grid-area: ${({ index }) => `Card${index + 1}`};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 0;
  }
`;

export const ButtonLinkWrapper = styled(Grid)`
  align-items: center;
  justify-content: flex-start;
  margin-top: ${spacing.S64};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Link)`
  height: ${spacing.S56};
  font-size: ${fontSizes.F18};
  color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: ${spacing.S30};
  padding: ${spacing.S16} ${spacing.S32} ${spacing.S16} ${spacing.S32};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  background-color: ${({ theme }) => theme.palette.primary.light};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
