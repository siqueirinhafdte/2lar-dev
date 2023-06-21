import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const StyledButton = styled(MuiButton)`
  border-radius: 6.25rem;
  text-transform: none;
  box-shadow: none;

  ${({ color, theme }) => {
    if (color === 'inherit') {
      return `
        border: ${spacing.S1} solid ${theme.palette.secondary.main};
        color: ${theme.palette.text.primary};
        background-color: ${theme.palette.secondary.light};
      `;
    }
  }}
`;
