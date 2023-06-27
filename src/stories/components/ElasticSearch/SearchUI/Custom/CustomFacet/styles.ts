import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  margin-top: ${spacing.S20};
  padding-bottom: ${spacing.S20};
  border-bottom: ${spacing.S1} solid ${({ theme }) => theme.palette.secondary.main};
`;

export const TitleFacet = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  margin-bottom: ${spacing.S20};
`;

export const WrapperOptions = styled('div')`
  display: flex;
  flex-direction: column;
`;
