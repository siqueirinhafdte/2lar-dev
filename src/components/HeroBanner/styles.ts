import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ImageComponent } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: calc(100vw - 0.9375rem);
  height: 60rem;
  padding: ${spacing.S48} ${spacing.S200};
  margin-bottom: ${spacing.S200};
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: visible;
  position: relative;
  background: ${({ theme }) => theme.palette.primary.light};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100vw;
    height: auto;
    display: flex;

    margin: 0;
    padding: 0;
  }
`;

export const Title = styled(Typography)`
  width: 35rem;
  height: auto;
  margin-bottom: ${spacing.S20};

  font-size: ${fontSizes.F56};
  line-height: 3.75rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.palette.secondary.light};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: ${spacing.S20};
    width: 18rem;
    height: auto;

    font-size: ${fontSizes.F28};
    line-height: 2.25rem;
  }
`;

export const Container = styled('div')`
  display: flex;
  margin-top: ${spacing.S176};
  position: absolute;
  top: 20%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: ${spacing.S20};
    gap: ${spacing.S20};
    position: static;
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled('div')`
  color: ${({ theme }) => theme.palette.secondary.light};
  ${({ theme }) => theme.breakpoints.down('md')} {
    order: 1;

    display: flex;
    flex-direction: column;

    gap: ${spacing.S20};
  }
`;
export const IconContainer = styled('div')`
  margin: 0 ${spacing.S150};
  padding-bottom: ${spacing.S20};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: 0;
    position: absolute;
    top: 60%;
  }
`;

export const SubTitle = styled(Typography)`
  width: 31.25rem;
  height: 13rem;
  margin: 0 ${spacing.S150};
  font-size: ${fontSizes.F40};
  line-height: 3rem;
  letter-spacing: -0.02em;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 16rem;
    height: auto;
    margin: 0;
    margin-top: 3rem;
    font-size: ${fontSizes.F24};
    line-height: 2rem;
  }
`;

export const Description = styled(Typography)`
  width: 31.25rem;
  margin: 0 ${spacing.S150};

  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${fontSizes.F24};
  line-height: 2rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 16rem;

    margin: 0;
    margin-bottom: ${spacing.S20};
    font-size: ${fontSizes.F20};
  }
`;
export const ContainerImage = styled('div')`
  ${({ theme }) => theme.breakpoints.down('md')} {
    order: 0;
  }
`;

export const Image = styled(ImageComponent)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    margin: auto;
  }
`;
