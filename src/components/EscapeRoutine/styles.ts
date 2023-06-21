import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  min-height: 100vh;
  width: calc(100vw - 0.9375rem);
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  justify-content: center;
  padding: ${spacing.S100};
  margin: ${spacing.S50} 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100vw;
  }
`;

export const Content = styled('div')`
  display: flex;
  gap: ${spacing.S40};
  max-width: 75rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const WrapperImage = styled('div')`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100vw;
    display: flex;
    justify-content: flex-start;
  }
`;

export const WrapperTimeLine = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S40};
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-left: ${spacing.S16};
  }
`;

export const TimeLineItemWrapper = styled('li', {
  shouldForwardProp: (prop) => prop !== 'contentNumber'
})<{ contentNumber: number }>`
  color: ${({ theme }) => theme.palette.text.disabled};
  position: relative;
  padding-left: ${spacing.S120};
  height: 14.375rem;

  ::before {
    content: ${({ contentNumber }) => `'${contentNumber}'`};
    position: absolute;
    top: 0;
    left: 0;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizes.F24};
    background-color: ${({ theme }) => theme.palette.primary.dark};

    ${({ theme }) => theme.breakpoints.down('sm')} {
      left: 1.25rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  ::after {
    content: '';
    position: absolute;
    left: 1.5625rem;
    top: 3.125rem;
    height: 14.375rem;
    border-color: transparent transparent transparent ${({ theme }) => theme.palette.primary.dark};
    border-style: solid;
    border-width: ${spacing.S1};
    transform: translateX(45deg);

    ${({ theme }) => theme.breakpoints.down('sm')} {
      left: 2.5rem;
      top: 2.5rem;
    }
  }

  :last-child {
    height: auto;
    ::after {
      border: none;
    }
  }
`;

export const TimeLineItemTitle = styled(Typography)`
  margin-bottom: ${spacing.S16};
`;

export const TimeLineItemDescription = styled(Typography)`
  font-size: ${fontSizes.F18};
`;
