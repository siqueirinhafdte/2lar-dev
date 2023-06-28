import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Main = styled('main')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${spacing.S24} 0;
  margin: ${spacing.S24} 0;
  background: ${({ theme }) => theme.palette.customColors?.backgroundLight};
`;

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  justify-content: center;
  max-width: 23rem;
`;

export const Form = styled('form')`
  display: flex;
  padding: ${spacing.S24};
  flex-direction: column;
  gap: ${spacing.S16};
`;
