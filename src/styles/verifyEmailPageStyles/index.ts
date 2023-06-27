import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { spacing } from 'theme/spacing';

export const Main = styled('main')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.customColors?.backgroundLight};
  width: 100%;
`;

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  margin: ${spacing.S50} 0;
  padding: ${spacing.S32};
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S16};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  margin-top: ${spacing.S20};
`;

export const Email = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  text-decoration: underline;
  margin-bottom: ${spacing.S20};
`;
