import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  margin: ${spacing.S20} 0;
`;

export const WrapperCarousel = styled('div')`
  margin: ${spacing.S20} 0;
`;

export const Title = styled(Typography)`
  margin: ${spacing.S30} 0;
`;

export const WrapperHeader = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperButtons = styled('div')`
  display: flex;
  gap: ${spacing.S16};
`;
