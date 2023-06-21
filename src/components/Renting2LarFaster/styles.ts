import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: calc(100vw - 0.9375rem);
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: ${spacing.S100} 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100vw;
  }
`;

export const WrapperCollumns = styled('div')`
  display: flex;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const CollumnLeft = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.S50};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;

    img {
      width: 100%;
      margin-bottom: ${spacing.S50};
    }
  }
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
  margin-left: ${spacing.S100};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-left: 0;
    padding: 0 ${spacing.S50};
  }
`;

export const CollumnRight = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.S100};
  padding: 0 ${spacing.S100};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    padding: 0 ${spacing.S50};
  }
`;

export const BoxTitleDescription = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S20};
`;

export const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F30};
    line-height: ${spacing.S40};
  }
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
  font-size: ${fontSizes.F20};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
`;
