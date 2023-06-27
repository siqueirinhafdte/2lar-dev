import { styled, Box } from '@mui/material';
import { spacing } from 'theme/spacing';

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.S36};
`;

export const ContainerTab = styled(Box)`
  border-bottom: ${spacing.S1} solid ${({ theme }) => theme.palette.secondary.main};
`;
