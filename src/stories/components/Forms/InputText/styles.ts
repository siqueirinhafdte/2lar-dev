import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const InputText = styled(TextField)`
  width: 100%;
  margin-top: ${spacing.S30};

  label {
    position: absolute;
    top: -${spacing.S16};
    left: -${spacing.S10};
    font-size: ${fontSizes.F20};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .MuiOutlinedInput-root {
    border-radius: 0;

    fieldset {
      legend {
        display: none;
      }
    }

    &.Mui-focused fieldset {
      border: ${({ theme }) => `${spacing.S1} solid ${theme.palette.primary.main}`};
    }
    &:hover {
      fieldset {
        border: ${({ theme }) => `${spacing.S1} solid ${theme.palette.primary.light}`};
      }
    }
  }
`;
