import MuiFormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Option as TOption } from 'stories/components/Forms/Select/types';
import { spacing } from 'theme/spacing';

export const Wrapper = styled(MuiFormControl, {
  shouldForwardProp: (prop) => !['hasBorderRadius'].includes(prop as string)
})<{ hasBorderRadius?: boolean }>`
  width: 100%;

  ${({ hasBorderRadius }) =>
    hasBorderRadius
      ? `
    .MuiInputBase-root {
      border-radius: ${spacing.S30};
    }
  `
      : ''};
`;

export const Select = styled(MuiSelect<TOption['value']>)`
  width: 100%;
`;
