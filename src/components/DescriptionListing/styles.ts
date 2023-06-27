import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: 100%;
  margin-top: ${spacing.S50};
  margin-bottom: ${spacing.S70};
`;

export const Title = styled(Typography)`
  margin-bottom: ${spacing.S20};
`;

export const Description = styled(Typography)`
  width: 100%;
`;
