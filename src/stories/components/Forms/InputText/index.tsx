import { FC, ReactElement, useCallback, useMemo, useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from 'stories/components/Forms/InputText/types';
import { defaultValuesMask } from 'utils';
import { getMaskByName } from 'utils/masks/utilities';

import * as S from './styles';

export const InputText: FC<TextFieldProps & InputProps> = ({
  value,
  name,
  id,
  label,
  onChange,
  error,
  helperText,
  onBlur,
  onFocus,
  size,
  disabled,
  placeholder,
  leftIcon,
  rightIcon,
  customMask,
  mask,
  ...props
}): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const IconInputRight = useMemo(() => {
    if (rightIcon !== undefined) {
      return <InputAdornment position="end">{rightIcon}</InputAdornment>;
    }
    return null;
  }, [rightIcon]);

  const IconInputLeft = useMemo(() => {
    if (leftIcon !== undefined) {
      return <InputAdornment position="start">{leftIcon}</InputAdornment>;
    }
    return null;
  }, [leftIcon]);

  const defaultValue = useMemo(() => {
    if (!value) {
      return value;
    }

    if (customMask) {
      return customMask(String(value));
    }

    if (mask) {
      const maskFunction = getMaskByName(mask);
      return maskFunction(String(value));
    }

    return value;
  }, [mask, customMask, value]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event) {
        let value = event?.target?.value;

        if (customMask) {
          value = customMask(String(value));
        }

        if (mask) {
          if (value === defaultValuesMask[mask]) {
            value = '';
          } else {
            const maskFunction = getMaskByName(mask);
            value = maskFunction(String(value));
          }
        }

        const newEvent = {
          ...event,
          target: {
            ...event?.target,
            value
          }
        };

        setInputValue(value);

        if (onChange) {
          onChange(newEvent);
        }
      }
    },
    [mask, customMask, onChange]
  );

  return (
    <S.InputText
      label={label}
      name={name}
      id={id}
      defaultValue={defaultValue}
      value={inputValue}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      InputProps={{
        endAdornment: IconInputRight,
        startAdornment: IconInputLeft
      }}
      error={error}
      helperText={helperText}
      onChange={handleChange}
      size={size}
      placeholder={placeholder}
      InputLabelProps={{
        shrink: true
      }}
      {...props}
    />
  );
};
