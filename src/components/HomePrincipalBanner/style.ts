import { IconButton, Typography, styled } from '@mui/material';
import { PauseIcon, PlayArrowIcon } from 'shared';
import { Button } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: 100%;
  text-align: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing.S100};
  margin: ${spacing.S50} 0;
  letter-spacing: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};

  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: center;
    justify-content: center;
    letter-spacing: 0;
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};

    gap: ${spacing.S50};
  }
`;

export const WrapperBanner = styled('div')`
  width: 100%;
  height: 24rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: ${spacing.S70};
  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: center;
    justify-content: center;
    letter-spacing: 0;
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    gap: ${spacing.S30};
  }
`;

export const TittleContainer = styled('div')`
  width: 80%;
`;

export const Title = styled('h1')`
  width: 91.66666%;

  flex: 0 0 auto;
  display: block;

  font-size: ${fontSizes.F74};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  line-height: 5rem;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F34};
    letter-spacing: -0.02em;
    line-height: 2.25rem;
  }
`;

export const TitleHighlight = styled('span')`
  font-size: ${fontSizes.F74};
  color: ${({ theme }) => theme.palette.primary.main};

  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  line-height: 5rem;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F34};
    letter-spacing: -0.02em;
    line-height: 2.25rem;
  }
`;

export const Container = styled('div')`
  width: 80%;
  margin: 0 ${spacing.S10};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    gap: ${spacing.S5};
  }
`;

export const ContainerVideo = styled('div')`
  position: relative;
  width: 100%;
`;
export const Video = styled('video')`
  width: 100%;
`;
export const ButtonVideo = styled(IconButton)`
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 45%;
  left: 45%;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${fontSizes.F20};
  text-transform: none;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 100%;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
export const PlayButton = styled(PlayArrowIcon)`
  width: 2.5rem;
  height: 2.5rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
export const PauseButton = styled(PauseIcon)`
  width: 2.5rem;
  height: 2.5rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
export const ButtonContainer = styled(Button)`
  width: 16rem;
  height: 5rem;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${fontSizes.F16};
  text-transform: none;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 2.5rem;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    order: 2;
    height: 3rem;
    font-size: ${fontSizes.F18};
    padding: ${spacing.S16} ${spacing.S24};
  }
`;

export const ShortDescription = styled(Typography)`
  width: 20rem;
  height: 3.5rem;

  margin: auto;
  font-size: ${fontSizes.F20};
  text-align: left;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 18.75rem;
    order: 1;
    margin: 0;
    align-self: center;
    text-align: center;
    font-size: ${fontSizes.F16};
    margin-right: ${spacing.S10};
  }
`;

export const DescriptionContainer = styled('div')`
  width: 40%;

  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing.S10};
  text-align: left;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 60%;
  }
`;

export const SubTitle = styled(Typography)`
  font-size: ${fontSizes.F24};
  color: ${({ theme }) => theme.palette.secondary.main};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F12};
  }
`;

export const Description = styled(Typography)`
  font-size: ${fontSizes.F24};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F12};
  }
`;
