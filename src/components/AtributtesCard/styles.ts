import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: 9.375rem;
  height: 11.25rem;
  margin: ${spacing.S10};
  padding: ${spacing.S20};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.secondary.light};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 10rem;
    height: auto;
    margin: ${spacing.S5};
    gap: ${spacing.S14};
    align-self: flex-start;
  }
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const PrimaryText = styled(Typography)``;

export const SecondaryText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;
