import { ChangeEvent, FC, useCallback, useState } from 'react';

import { Box, InputLabel } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';
import { countries } from 'utils';

import * as S from './styles';
import { InputPhoneNumberDDIProps } from './types';

export const InputPhoneNumberDDI: FC<TextFieldProps & InputPhoneNumberDDIProps> = ({
  label,
  name,
  value,
  helperText,
  error,
  onChange,
  onBlur
}) => {
  const [valueDDI, setValueDDI] = useState<string>('55');
  const [inputValue, setInputValue] = useState(String(value));

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, ddiValue: string, inputTextValue: string) => {
      if (onChange) {
        const newEvent = {
          ...event,
          target: {
            ...event.target,
            value: `${ddiValue} ${inputTextValue}`
          }
        };
        onChange(newEvent);
      }
    },
    [onChange]
  );

  const handleChangeInputText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event) {
        const targetValue = event?.target?.value;
        setInputValue(targetValue);

        handleChange(event, valueDDI, targetValue);
      }
    },
    [handleChange, valueDDI]
  );

  const handleChangeDDI = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const ddiValue = event?.target?.value;
      setValueDDI(ddiValue);

      handleChange(event, ddiValue, inputValue);
    },
    [inputValue, handleChange]
  );

  return (
    <S.Container>
      <Box>
        <InputLabel>DDI</InputLabel>
        <S.SelectDDI
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={valueDDI}
          label="DDI"
          onChange={(e) => handleChangeDDI(e as ChangeEvent<HTMLInputElement>)}
        >
          {countries.map((country) => (
            <S.OptionContainer key={country.code} value={country.phone}>
              <S.ImageFlag
                width={20}
                height={20}
                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                alt="flag contry"
              />
              <S.TextSelect>{`+${country.phone}`}</S.TextSelect>
            </S.OptionContainer>
          ))}
        </S.SelectDDI>
      </Box>
      <S.InputTextPhone
        type="text"
        label={label}
        name={name}
        mask="phone"
        value={inputValue}
        helperText={helperText}
        error={error}
        onChange={handleChangeInputText}
        onBlur={onBlur}
      />
    </S.Container>
  );
};
