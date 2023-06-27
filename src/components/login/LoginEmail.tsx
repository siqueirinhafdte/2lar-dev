import { Typography } from '@mui/material';
import { useLogin } from 'hooks/useLoginPage';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

import { ButtonComponent, ContainerEmail, InputText } from './styles';

export function LoginEmail() {
  const { formik } = useLogin();

  return (
    <ContainerEmail>
      <Typography variant="h4">Acesse ou crie sua conta</Typography>
      <InputText
        label="E-mail"
        name="username"
        value={formik.values.username}
        helperText={getHelperTextFormik(formik, 'username')}
        error={getErrorsFormik(formik, 'username')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <InputText
        label="Senha"
        name="password"
        value={formik.values.password}
        helperText={getHelperTextFormik(formik, 'password') as string}
        error={getErrorsFormik(formik, 'password')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <ButtonComponent type="submit" variant="contained">
        Entrar
      </ButtonComponent>
    </ContainerEmail>
  );
}
