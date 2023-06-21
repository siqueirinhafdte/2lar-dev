import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${spacing.S32};
  padding-bottom: ${spacing.S64};
  max-width: 34.375rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${spacing.S32};
  }

  h1 {
    margin-bottom: ${spacing.S64};
    color: ${({ theme }) => theme.palette.primary.light};
  }

  p {
    margin-bottom: ${spacing.S32};
    color: ${({ theme }) => theme.palette.primary.dark};
  }

  h3 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
