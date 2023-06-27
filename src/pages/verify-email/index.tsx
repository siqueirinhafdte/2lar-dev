import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputLabel, Typography } from '@mui/material';
import { cryptoConfig } from 'config/crypto';
import cryptoJs from 'crypto-js';
import _isEqual from 'lodash/isEqual';
import { useRouter } from 'next/router';
import api from 'services/httpClient';
import { RootState, store } from 'store';
import { setNewPassword } from 'store/slices/user';
import { Button } from 'stories/components/Forms/Button';
import { OTPInput } from 'stories/components/Forms/OTPInput';
import * as S from 'styles/verifyEmailPageStyles';
import { Logger } from 'utils';

const TOKEN_LENGTH = 6;

export default function VerifyEmail() {
  const router = useRouter();
  const dispatch = useDispatch();

  const newPassword = useRef(decryptPassword(store.getState().user.newPassword));
  const tempEmail = useSelector((state: RootState) => state.user.tempEmail);
  const resettingPassword = useSelector((state: RootState) => state.user.resettingPassword);

  const [token, setToken] = useState('');
  const disableButton = !_isEqual(token.length, TOKEN_LENGTH);

  function decryptPassword(hash?: string) {
    if (!hash) {
      return undefined;
    }

    const passwordBytes = cryptoJs.AES.decrypt(hash, cryptoConfig.secretKey as string);
    return passwordBytes.toString(cryptoJs.enc.Utf8);
  }

  async function handleResetPasswordSubmit() {
    await api.post('/api/forgotPassword/submit', {
      username: tempEmail,
      newPassword: newPassword.current,
      code: token
    });

    router.replace('/login');
  }

  async function handleSignUpSubmit(): Promise<void> {
    try {
      const result = await api.post('/api/verifyEmail', { email: tempEmail, code: token });

      if (_isEqual(result.status, 200)) {
        router.replace('/login');
      }
    } catch (error) {
      if (error instanceof Error) {
        if (_isEqual(error.message, 'CodeMismatchException')) {
          Logger.error('Código inválido');
        }
      }
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (resettingPassword) {
      await handleResetPasswordSubmit();
      return;
    }

    await handleSignUpSubmit();
  }

  async function resendCode() {
    if (resettingPassword) {
      await api.post('/api/forgotPassword/sendCode', { email: tempEmail });
      return;
    }

    await api.post('/api/resendCode', { email: tempEmail });
  }

  useEffect(() => {
    if (!tempEmail) {
      dispatch(setNewPassword());
      router.push('/login');
    }
  }, [tempEmail, router, dispatch]);

  return (
    <S.Main>
      <S.Wrapper>
        <Typography variant="h6">Informe o código</Typography>
        <S.Description>Enviamos um código de confirmação para</S.Description>
        <S.Email>{tempEmail}</S.Email>
        <S.Form onSubmit={onSubmit}>
          <InputLabel>Digite o código</InputLabel>
          <OTPInput autoFocus length={TOKEN_LENGTH} onChangeToken={setToken} />

          <Button type="submit" variant="outlined" disabled={disableButton}>
            Enviar
          </Button>

          <Button type="button" variant="text" onClick={resendCode}>
            Não recebi o código
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
