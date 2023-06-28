import { Typography } from '@mui/material';
import { useLogin } from 'hooks/useLoginPage';
import { InputPassword, InputText } from 'stories/components';
import { getErrorsFormik, getHelperTextFormik, handleChangeFormik } from 'utils';

import * as S from './styles';

export function LoginEmail() {
  const { formik } = useLogin();

  return (
    <S.FormEmail onSubmit={formik.handleSubmit}>
      <Typography variant="h4">Acesse ou crie sua conta</Typography>

      <InputText
        label="E-mail"
        name="username"
        value={formik.values.username}
        helperText={getHelperTextFormik(formik, 'username')}
        error={getErrorsFormik(formik, 'username')}
        onChange={handleChangeFormik(formik, 'username')}
        onBlur={formik.handleBlur}
      />

      <InputPassword
        label="Senha"
        name="password"
        value={formik.values.password}
        helperText={getHelperTextFormik(formik, 'password') as string}
        error={getErrorsFormik(formik, 'password')}
        onChange={handleChangeFormik(formik, 'password')}
        onBlur={formik.handleBlur}
      />

      <S.ButtonComponent type="submit" variant="contained">
        Entrar
      </S.ButtonComponent>
    </S.FormEmail>
  );
}
