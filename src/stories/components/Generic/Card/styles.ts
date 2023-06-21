import { CardContent, Chip } from '@mui/material';
import CardMUI from '@mui/material/Card';
import CardMediaMUI from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Mode } from './types';

export const Wrapper = styled(CardMUI, {
  shouldForwardProp: (prop) => !['mode'].includes(prop as string)
})<{
  mode: Mode;
}>`
  display: flex;
  flex-direction: ${({ mode }) => (mode === 'vertical' ? 'column' : 'row')};
  max-width: ${({ mode }) => (mode === 'vertical' ? 'auto' : '100%')};
  border-radius: unset;
  box-shadow: unset;
`;

export const CardMedia = styled(CardMediaMUI, {
  shouldForwardProp: (prop) => !['mode'].includes(prop as string)
})<{
  mode: Mode;
}>`
  height: ${({ mode }) => (mode === 'vertical' ? '12rem' : 'auto')};
  width: ${({ mode }) => (mode === 'horizontal' ? '33%' : 'auto')};
  margin: ${({ mode }) => (mode === 'horizontal' ? spacing.S10 : '0')};

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const CardContentContainer = styled(CardContent)`
  padding: 0;
  padding-top: ${spacing.S16};
`;

export const StyledChip = styled(Chip)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.grey['100']};
  top: 0;
  left: 0;
  margin: ${spacing.S10};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['700']};
`;

export const Price = styled(Typography)`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.light};
  height: 2.5rem;
`;

export const WrapperAttributes = styled('div')`
  margin-top: ${spacing.S1};
  display: flex;
  gap: ${spacing.S8};
`;

export const AttributeText = styled(Typography)`
  font-size: ${fontSizes.F12};
  color: ${({ theme }) => theme.palette.grey['500']};

  ::after {
    content: '|';
    margin-left: ${spacing.S4};
  }
  :last-child::after {
    content: '';
  }
`;

export const Title = styled(Typography)`
  transition: text-decoration 0.3s;
  color: ${({ theme }) => theme.palette.primary.dark};

  &:hover {
    text-decoration: underline;
  }
`;
