import { styled } from '@mui/material';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  padding-bottom: ${spacing.S100};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${spacing.S20};
  }
`;

export const LeftCard = styled('div')`
  display: flex;
  width: 85%;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const RightCard = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;
