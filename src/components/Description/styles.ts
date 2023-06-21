import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.secondary.light};

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-image: url('/img/fundo-informacoes.png');
  background-repeat: no-repeat;
  background-position-x: 95%;

  padding-top: ${spacing.S120};

  ${({ theme }) => theme.breakpoints.down('md')} {
    background-image: none;
    padding: ${spacing.S60} ${spacing.S32} 0;
  }
`;

export const ContentContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: ${spacing.S8} ${spacing.S200};
  padding: ${spacing.S48} ${spacing.S12};
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: auto;
    flex-direction: column;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 3rem;

  align-self: start;

  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${fontSizes.F56};
  line-height: 3.75rem;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F28};
    line-height: 2.25rem;
    letter-spacing: -0.02em;
  }
`;

export const TopicContainer = styled('div')`
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const Topic = styled('div')`
  display: flex;
  gap: ${spacing.S48};
  margin-bottom: ${spacing.S24};

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: ${spacing.S76};
    gap: ${spacing.S24};
    margin-bottom: ${spacing.S12};
  }
`;

export const TopicTitle = styled(Typography)`
  width: 30%;
  font-size: ${fontSizes.F24};
  line-height: ${fontSizes.F32};
  letter-spacing: -0.02em;
  margin-top: 0;
  margin-bottom: ${spacing.S8};

  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;

    font-size: ${fontSizes.F20};
    line-height: 1.75rem;
    letter-spacing: -0.02em;
  }
`;

export const TextContainer = styled('div')`
  width: 50%;
  margin-top: ${spacing.S100};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    margin-top: ${spacing.S50};
  }
`;

export const subTitle = styled(Typography)`
  margin-bottom: ${spacing.S70};

  font-size: ${fontSizes.F56};
  line-height: 3.75rem;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: ${spacing.S36};

    font-size: ${fontSizes.F28};
    line-height: 2.25rem;
    letter-spacing: -0.02em;
  }
`;

export const InfosContainer = styled('div')``;

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled(Typography)`
  margin-bottom: ${spacing.S48};
  padding-top: 3rem;
  font-size: ${fontSizes.F40};
  line-height: 3rem;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: ${spacing.S24};
    padding-top: ${spacing.S24};
    font-size: ${fontSizes.F24};
    line-height: 2rem;
    letter-spacing: -0.02em;
  }
`;

export const InfoText = styled(Typography)`
  width: 80%;

  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${fontSizes.F24};
  line-height: 2rem;
  margin-bottom: ${spacing.S48};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: ${fontSizes.F16};
    line-height: 1.5rem;
    letter-spacing: 0;
  }
`;

export const InfoLink = styled(Link)`
  padding-bottom: ${spacing.S24};
  margin-bottom: ${spacing.S48};
  padding-top: ${spacing.S16};
  text-decoration: underline;
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: 0;
  }
`;
