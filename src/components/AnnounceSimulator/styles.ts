import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { InputText } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  padding: ${spacing.S100};
  color: ${({ theme }) => theme.palette.text.disabled};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${spacing.S50} ${spacing.S20};
  }
`;

export const Title = styled(Typography)`
  margin: 0 auto ${spacing.S50};
  width: 24ch;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 18ch;
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    margin: 0;
    font-size: ${fontSizes.F30};
  }
`;

export const Container = styled('div')`
  display: flex;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    margin-top: ${spacing.S50};
  }
`;

export const ContainerForm = styled('div')`
  width: 50%;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: ${spacing.S50};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const TitleBox = styled(Typography)``;

export const ContainerResult = styled('div')`
  width: 50%;
  padding: ${spacing.S50};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const ContentBox = styled('div')`
  margin: ${spacing.S50};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const Question = styled(Typography)`
  font-size: ${fontSizes.F24};
`;

export const Field = styled(InputText)`
  margin-bottom: ${spacing.S50};

  input {
    font-size: ${fontSizes.F40};
    padding-bottom: ${spacing.S10};
    &::placeholder {
      color: ${({ theme }) => theme.palette.text.disabled};
    }
    &:focus {
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }

  .MuiInput-root:before {
    border-color: ${({ theme }) => theme.palette.secondary.main};
  }
  &:hover {
    .MuiInput-root:before {
      border-color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;

export const DescriptionForm = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
`;

export const BoxResult = styled('div')`
  margin: ${spacing.S50};
  opacity: 0.3;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: ${spacing.S50} 0;
  }
`;

export const ValueResult = styled(Typography)`
  font-size: ${fontSizes.F40};
`;

export const MonthResult = styled(Typography)`
  font-size: ${fontSizes.F20};
`;

export const OcupantValue = styled(Typography)`
  font-size: ${fontSizes.F20};
`;

export const OcupantDescription = styled(Typography)`
  font-size: ${fontSizes.F16};
`;
