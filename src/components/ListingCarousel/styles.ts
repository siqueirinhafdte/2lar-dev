import { Box, Chip, IconButton, Modal, Typography, styled } from '@mui/material';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  align-content: flex-start;
  max-height: 30rem;
`;

export const ContainerSlide = styled('div')`
  width: 60%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }

  .swiper-slide .swiper-slide-active {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-fraction {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    top: 0;
    left: unset;
    right: 5%;
    max-width: 10%;
    height: 2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.secondary.light};
    opacity: 0.8;
    margin: ${spacing.S24};

    ::before {
      content: '^';
      rotate: 270deg;
      position: absolute;
      left: 15%;
      font-size: ${fontSizes.F22};
    }

    ::after {
      content: '^';
      rotate: 90deg;
      position: absolute;
      right: 15%;
      font-size: ${fontSizes.F22};
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin: ${spacing.S16};
      max-width: 25%;
      right: 10%;
    }
  }
`;

export const ContainerMaps = styled('div')`
  display: block;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 29.85rem;
    max-height: 37.75rem;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const WrapperItemSwiper = styled('div')`
  img {
    width: 100%;
    height: 29.85rem;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 100%;
      height: 16rem;
      object-fit: cover;
    }
  }
`;

export const TypeChip = styled(Chip)`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.secondary.light};
  top: 0;
  left: 0;
  margin: ${spacing.S24};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S16};
  }
`;

export const ExpandButton = styled(IconButton)`
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.secondary.light};
  top: 0;
  right: 0;
  padding: ${spacing.S6};
  margin: ${spacing.S22};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    opacity: 0.6;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: ${spacing.S14};
  }
`;

export const StyledModal = styled(Modal)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.secondary.light};
`;

export const Container = styled('div')`
  padding: ${spacing.S16};
  .swiper-button-prev {
    padding: ${spacing.S16};
    width: 0.063rem;
    height: 0.063rem;
    color: ${({ theme }) => theme.palette.secondary.light};
    border-radius: 100%;
    border: 0.0065rem solid ${({ theme }) => theme.palette.secondary.light};
    margin-top: 0;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-top: 60%;
      margin-left: 35%;
    }
  }
  .swiper-button-next {
    padding: ${spacing.S16};
    width: 0.063rem;
    height: 0.063rem;
    color: ${({ theme }) => theme.palette.secondary.light};
    border-radius: 100%;
    border: 0.0065rem solid ${({ theme }) => theme.palette.secondary.light};
    margin-top: 0;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-top: 60%;
      margin-right: 35%;
    }
  }

  .swiper-button-next:after {
    font-size: unset;
  }

  .swiper-button-prev:after {
    font-size: unset;
  }

  .swiper-pagination-fraction {
    left: 45%;
    top: 5%;
    right: 23%;
    width: 10%;
    height: 1rem;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 10%;
      right: unset;
      left: 45%;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    img {
      width: 100%;
      height: 13rem;
      object-fit: cover;
    }
  }
`;

export const SwiperBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: ${spacing.S150};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100vh;
    margin-top: 0;
  }
`;

export const ImageDescription = styled(Typography)`
  text-align: center;
  margin-top: ${spacing.S32};
`;

export const CloseModalButton = styled(IconButton)`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  margin: ${spacing.S10};
  color: ${({ theme }) => theme.palette.secondary.light};
  opacity: 0.8;
  border: 0.0065rem solid ${({ theme }) => theme.palette.secondary.light};
  border-radius: 50%;
  cursor: pointer;
  outline: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    left: 0;
    right: unset;
    border: none;
  }
`;
