import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';
export const Wrapper = styled('div')`
  margin: ${spacing.S30} 0;
`;

export const TitleContainer = styled('div')`
  width: 20rem;

  margin-bottom: ${spacing.S30};
  margin-left: ${spacing.S30};
  padding: 0 ${spacing.S30};

  align-items: center;
  text-align: left;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0 ${spacing.S20};
    margin-left: 0;
    margin-bottom: ${spacing.S20};
  }
`;

export const Title = styled(Typography)`
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  letter-spacing: -0.02em;
  font-size: ${fontSizes.F32};
  line-height: 2.5rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F28};
    line-height: normal;
  }
`;
export const ContainerMedia = styled('div')`
  width: 100%;

  display: flex;
  flex-direction: row;

  overflow: hidden;
`;

export const ImgContainer = styled('div')`
  width: 100%;
  border-right: solid ${spacing.S1} ${({ theme }) => theme.palette.secondary.main};
  padding: 0 ${spacing.S30};
  margin: ${spacing.S10} 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: center;
  }
`;

export const Image = styled('img')`
  width: 4rem;
  height: 4rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 2rem;
    height: 2rem;
  }
`;
