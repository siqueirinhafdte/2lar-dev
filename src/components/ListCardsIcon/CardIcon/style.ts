import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.S12};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: 0 0 ${spacing.S48};
    padding: ${spacing.S16} ${spacing.S12} 0;
  }
`;

export const IconContainer = styled(`div`)`
  margin-bottom: ${spacing.S48};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: ${spacing.S24};
  }
`;

export const Title = styled(Typography)`
  width: 25.5rem;

  margin-bottom: 1.5rem;

  font-size: ${fontSizes.F32};
  line-height: 2.5rem;
  letter-spacing: -0.02rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: auto;
    height: auto;

    font-size: ${fontSizes.F24};
    line-height: 2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }
`;

export const Description = styled(Typography)`
  width: 25.5rem;
  height: 6rem;

  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${fontSizes.F24};
  line-height: 2rem;
  letter-spacing: 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: auto;
    height: auto;
    font-size: ${fontSizes.F16};
    line-height: 1.5rem;
  }
`;
