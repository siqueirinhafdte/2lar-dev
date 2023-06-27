import { useCallback, useState } from 'react';

import * as S from './styles';
import { InputNumberProps } from './types';

export function InputNumber({
  defaultValue = 0,
  onChange,
  isInt = false,
  maxValue
}: InputNumberProps) {
  const [value, setValue] = useState(defaultValue);

  const getValueMinus = useCallback(
    (currentValue: number) => {
      return isInt ? Math.max(currentValue - 1, 0) : currentValue - 1;
    },
    [isInt]
  );

  const getValueMore = useCallback((currentValue: number) => {
    return currentValue + 1;
  }, []);

  const handleChange = useCallback(
    (action: '+' | '-') => {
      const newValue = action === '-' ? getValueMinus(value) : getValueMore(value);

      if (newValue !== undefined) {
        const fixedValue = maxValue !== undefined ? Math.min(newValue, maxValue) : newValue;

        setValue(fixedValue);
        if (onChange != null) {
          onChange(fixedValue);
        }
      }
    },
    [value, onChange, getValueMore, getValueMinus, maxValue]
  );

  return (
    <S.InputContainer>
      <S.ActionBox
        onClick={() => {
          handleChange('-');
        }}
        disabled={isInt ? value <= 0 : false}
      >
        -
      </S.ActionBox>
      <S.Input type="number" value={value} disabled={false} inputProps={{ max: maxValue }} />
      <S.ActionBox
        onClick={() => {
          handleChange('+');
        }}
        disabled={false}
      >
        +
      </S.ActionBox>
    </S.InputContainer>
  );
}
