import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: calc(100vw - 0.9375rem);
  background-color: ${({ theme }) => theme.palette.text.disabled};
  padding: ${spacing.S200} 0;
  margin-top: ${spacing.S50};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${spacing.S50} 0;
    width: 100vw;
  }
`;

export const Container = styled('div')`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled('div')`
  width: 70%;
  margin-bottom: ${spacing.S50};
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.dark};
  width: 22ch;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${fontSizes.F22};
    width: 15ch;
  }
`;

export const SwiperWrapper = styled('div')`
  width: 100%;
  .swiper-horizontal > .swiper-scrollbar,
  .swiper-scrollbar.swiper-scrollbar-horizontal {
    left: unset;
    top: unset;
    right: 23%;
    bottom: 0;
    width: 12.5rem;

    ${({ theme }) => theme.breakpoints.down('xl')} {
      right: 23%;
    }

    ${({ theme }) => theme.breakpoints.down('lg')} {
      right: 20%;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      width: 90%;
      right: 5%;
    }
  }
  .swiper-pagination-fraction {
    left: unset;
    top: unset;
    right: 23%;
    bottom: 5%;
    width: 12.5rem;

    ${({ theme }) => theme.breakpoints.down('xl')} {
      right: 23%;
    }

    ${({ theme }) => theme.breakpoints.down('lg')} {
      right: 20%;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      width: 10%;
      right: unset;
      bottom: 1%;
      left: 3%;
    }
  }
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const WrapperImage = styled('div')`
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const DescriptionContainer = styled('div')`
  margin-bottom: ${spacing.S40};
  width: 30%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${spacing.S40};
    padding: 0 ${spacing.S20};
  }
`;

export const Position = styled(Typography)`
  font-size: ${fontSizes.F16};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.palette.primary.light};
  margin-bottom: ${spacing.S16};
`;

export const Subtitle = styled(Typography)`
  font-size: ${fontSizes.F24};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: ${spacing.S16};
`;

export const Description = styled(Typography)`
  font-size: ${fontSizes.F16};
  color: ${({ theme }) => theme.palette.primary.dark};

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: calc(100vw - 3.125rem);
  }
`;
