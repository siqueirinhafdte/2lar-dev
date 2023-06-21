import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 100vw;
  }
`;
