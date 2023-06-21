import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette?.customColors?.backgroundLight};
  padding: ${spacing.S100} 0;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${spacing.S50} 0 0 0;
  }
`;

export const Title = styled(Typography)`
  text-align: center;
  margin: 0 auto ${spacing.S100};
  width: 20ch;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: ${spacing.S50};
  }
`;

export const ContainerForm = styled('div')`
  margin: 0 auto;
  width: 80%;
  display: flex;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100vw;
    flex-direction: column;
  }
`;

export const WrapperBoxForm = styled('div')`
  background-color: ${({ theme }) => theme.palette?.customColors?.backgroundDark};
  display: flex;
  flex-direction: column;
  padding-bottom: ${spacing.S20};
  width: 60%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    flex-direction: column;
  }
`;

export const BoxImage = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.S20};

  img {
    width: 60%;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    flex-direction: column-reverse;

    img {
      width: 100%;
      height: 11.25rem;
      object-fit: cover;
    }
  }
`;

export const TitleBoxForm = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
  padding-right: ${spacing.S20};
  padding-left: ${spacing.S20};
`;

export const DescriptionBoxForm = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.disabled};
  width: 30ch;
  padding-top: ${spacing.S20};
  padding-left: ${spacing.S20};
  font-size: ${fontSizes.F20};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: auto;
  }
`;

export const WrapperForm = styled('div')`
  width: 40%;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  display: flex;
  flex-direction: column;
  padding: ${spacing.S30};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const TitleForm = styled(Typography)`
  margin-bottom: ${spacing.S20};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S20};
`;

export const SubmitForm = styled(Button)`
  padding: ${spacing.S20};
  margin: ${spacing.S20} 0;
`;
