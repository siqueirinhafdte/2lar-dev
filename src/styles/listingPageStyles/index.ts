import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: calc(100vw - 1.025rem);

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    background-color: ${({ theme }) => theme.palette?.customColors?.backgroundLight};
  }
`;

export const WrapperContainer = styled('div')`
  padding: ${spacing.S50};
  background-color: ${({ theme }) => theme.palette?.customColors?.backgroundLight};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    padding: ${spacing.S0};
  }
`;

export const Container = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledDivider = styled(Divider)`
  width: 60%;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: ${spacing.S16};
  margin-bottom: ${spacing.S16};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 95%;
    margin-left: ${spacing.S10};
  }
`;

export const ContainerMaps = styled('div')`
  display: none;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: block;
    width: 100%;
    margin-top: ${spacing.S16};
    img {
      width: 100%;
      height: 16rem;
      object-fit: cover;
    }
  }
`;

export const BoxAttributes = styled('div')`
  width: 60%;
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    padding: ${spacing.S10};
  }
`;

export const BoxViewersCTASimulator = styled('div')`
  width: 40%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const BoxRentSimulator = styled('div')`
  width: 60%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const BoxAnnounceProximity = styled('div')`
  width: 60%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;
