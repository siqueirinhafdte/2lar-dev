import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Content = styled('div')`
  padding: 0;
  margin: 0;
  margin-bottom: ${spacing.S64};
`;

export const ContainerCard = styled('div')`
  color: ${({ theme }) => theme.palette.secondary.dark};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const ContentCard = styled('div')`
  display: flex;
  flex-direction: column;
  padding: ${spacing.S32};
  padding-right: ${spacing.S64};
  align-items: center;
`;

export const WrapperImage = styled('div')`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TitleCard = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.dark};
  width: 20ch;
`;

export const ButtonLinkWrapper = styled(Grid)`
  align-items: center;
  justify-content: flex-start;
  margin-top: ${spacing.S64};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${spacing.S32};
  }
`;

export const ButtonLink = styled(Button)`
  height: ${spacing.S56};
  font-size: ${fontSizes.F18};
  color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: ${spacing.S30};
  padding: ${spacing.S16} ${spacing.S32};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  background-color: ${({ theme }) => theme.palette.success.main};
  &:hover {
    opacity: 0.3;
  }
`;
