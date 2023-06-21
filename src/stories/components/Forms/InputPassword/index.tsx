import { FC, useCallback, useMemo, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import { VisibilityIcon, VisibilityOffIcon } from 'shared/icons';

import { InputText } from '../InputText';
import { InputPasswordProps } from './types';

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  const tooggleIcon = useCallback(() => {
    if (type === 'text') {
      setType('password');
    } else {
      setType('text');
    }
  }, [type]);

  const IconEye = useMemo(() => {
    if (type === 'text') {
      return (
        <IconButton onClick={tooggleIcon}>
          <VisibilityIcon />
        </IconButton>
      );
    }
    return (
      <IconButton onClick={tooggleIcon}>
        <VisibilityOffIcon />
      </IconButton>
    );
  }, [type, tooggleIcon]);

  return <InputText {...props} type={type} rightIcon={IconEye} />;
};
