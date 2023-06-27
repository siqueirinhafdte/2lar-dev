/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from '@mui/material';

export interface SelectCircleButtonProps {
  options: OptionsSelectCircle[];
  value?: OptionsSelectCircle['value'];
  valueText?: string;
  onChange: (value: OptionsSelectCircle['value']) => void;
  color?: ButtonProps['color'];
  showValuesSelected?: 'only-one' | 'previous-values';
  className?: string;
}

export interface OptionsSelectCircle {
  label: string;
  value: any;
  valueText?: string;
}
