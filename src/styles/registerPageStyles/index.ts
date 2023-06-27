import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Main = styled('main')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 15.625rem);
  padding: ${spacing.S40} 0;
  background-color: ${({ theme }) => theme.palette.customColors?.backgroundLight};
`;

export const Wrapper = styled('div')`
  width: 90%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary.light};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: none;
    width: 37.5rem;
    min-height: 25rem;
  }
`;

export const Form = styled('form')`
  padding: ${spacing.S10};
  padding-right: ${spacing.S20};
  margin: 0 ${spacing.S20};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Title = styled(Typography)`
  margin-bottom: ${spacing.S16};
`;

export const InputContainer = styled(Grid)`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    flex-direction: column;
  }
`;

export const Subtitle = styled(Typography)`
  margin-top: ${spacing.S16};
`;

export const SubtitleAddress = styled(Typography)`
  margin-top: ${spacing.S32};
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const FooterForm = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${spacing.S20};
  margin-bottom: ${spacing.S20};
`;

export const StyledButton = styled(Button)`
  height: ${spacing.S56};
  font-size: ${fontSizes.F18};
  color: ${({ theme }) => theme.palette.secondary.light};
  margin-bottom: ${spacing.S20};
  border-radius: ${spacing.S30};
  padding: ${spacing.S16};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  background-color: ${({ theme }) => theme.palette.success.main};
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.light};
    opacity: 0.9;
  }
`;
