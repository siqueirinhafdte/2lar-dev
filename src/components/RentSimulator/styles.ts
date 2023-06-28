import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  color: ${({ theme }) => theme.palette.text.disabled};
  margin-top: ${spacing.S80};
  margin-bottom: ${spacing.S80};
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 100%;
  }

  .MuiInputBase-root .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.secondary.light};
  }

  .MuiIconButton-root {
    color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export const Title = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${spacing.S16};
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    margin-bottom: ${spacing.S10};
  }
`;

export const Subtitle = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${spacing.S1};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    margin-bottom: ${spacing.S10};
  }
`;

export const Container = styled('div')`
  display: flex;
  margin-top: ${spacing.S64};

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    margin-top: ${spacing.S50};
  }
`;

export const ContainerForm = styled('div')`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: ${spacing.S20};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    padding: ${spacing.S32};
  }
`;

export const ContainerResult = styled('div')`
  width: 100%;
  padding: ${spacing.S30};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    padding: ${spacing.S32};
  }
`;

export const ContentBox = styled('div')`
  padding: ${spacing.S30};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const QuestionDivideOne = styled(Typography)`
  margin: 0;
`;

export const QuestionDivideSecond = styled(Typography)`
  margin-bottom: ${spacing.S32};
`;

export const Question = styled(Typography)`
  margin-bottom: ${spacing.S32};
  width: 25ch;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 20ch;
  }
`;

export const MaxGuestContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2;
`;

export const MaxGuestText = styled(Typography)`
  margin-left: ${spacing.S16};
`;

export const BoxResult = styled('div')`
  margin: ${spacing.S30};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const BoxText = styled('div')`
  font-size: ${fontSizes.F20};
  margin-bottom: ${spacing.S16};
  color: ${({ theme }) => theme.palette.secondary.light};
`;

export const BoxDescription = styled('div')`
  margin: ${spacing.S30};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const BoxDays = styled('div')`
  margin: ${spacing.S30};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const PriceDay = styled(Typography)`
  font-size: ${fontSizes.F40};
  opacity: 0.3;
  width: 12ch;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const TotalValue = styled(Typography)`
  font-size: ${fontSizes.F40};
  opacity: 0.3;
  width: 13ch;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const MonthResult = styled(Typography)`
  font-size: ${fontSizes.F20};
`;

export const OcupantValue = styled(Typography)`
  font-size: ${fontSizes.F20};
`;

export const SimulatorDescription = styled(Typography)`
  font-size: ${fontSizes.F16};
  color: ${({ theme }) => theme.palette.secondary.light};
`;
