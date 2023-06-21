import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: calc(100vw - 0.9375rem);
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  justify-content: center;
  padding: ${spacing.S100};
  padding-bottom: 0;
  margin: ${spacing.S50} 0;
  margin-top: 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100vw;
    padding: 0;
    padding-top: ${spacing.S50};
  }
`;

export const Content = styled('div')`
  max-width: 75rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100vw;
  }
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
  width: 21ch;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: ${spacing.S70};
  }
`;

export const WrapperCards = styled('div')`
  margin-top: ${spacing.S50};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(NextLink)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${spacing.S20};
  border-top: ${spacing.S1} solid ${({ theme }) => theme.palette.secondary.main};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column-reverse;
    align-items: flex-end;
    border: none;
    width: calc(100vw - 0.9375rem);
  }
`;

export const TitleCard = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
  width: 16ch;
  margin-top: ${spacing.S20};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    align-self: flex-start;
    margin-left: ${spacing.S70};
  }
`;

export const WrapperCardFooter = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  margin-top: ${spacing.S100};
  display: flex;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column-reverse;
  }
`;

export const ContainerTextCardFooter = styled('div')`
  color: ${({ theme }) => theme.palette.text.disabled};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: flex-start;
    padding: 0 ${spacing.S20};
  }
`;

export const ContentTextCardFooter = styled('div')`
  width: 60%;
  margin: ${spacing.S40} 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
  }
`;

export const TitleCardFooter = styled(Typography)`
  margin-bottom: ${spacing.S20};
`;

export const TextCardFooter = styled(Typography)`
  margin-bottom: ${spacing.S20};
`;
