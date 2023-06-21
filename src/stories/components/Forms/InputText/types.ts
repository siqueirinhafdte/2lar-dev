import { ReactNode } from 'react';

import { MaskFunction, MaskName } from 'utils/masks/types';

export interface InputProps {
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  mask?: MaskName;
  customMask?: MaskFunction;
}
