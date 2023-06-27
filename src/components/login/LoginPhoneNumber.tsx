import { Typography } from '@mui/material';
import { InputPhoneNumberDDI } from 'components/InputPhoneNumberDDI';
import { useLogin } from 'hooks/useLoginPage';
import { getErrorsFormik, getHelperTextFormik, handleChangeFormik } from 'utils';

import { ButtonComponent, ContainerPhoneNumber, InputText } from './styles';

export function LoginPhoneNumber() {
  const { formik } = useLogin();

  return (
    <ContainerPhoneNumber>
      <Typography variant="h4">Acesse ou crie sua conta</Typography>

      <InputPhoneNumberDDI
        label="Celular"
        name="username"
        value={formik.values.username}
        helperText={getHelperTextFormik(formik, 'username')}
        error={getErrorsFormik(formik, 'username')}
        onChange={handleChangeFormik(formik, 'username')}
        onBlur={formik.handleBlur}
      />
      <InputText
        label="Senha"
        name="password"
        value={formik.values.password}
        helperText={getHelperTextFormik(formik, 'password')}
        error={getErrorsFormik(formik, 'password')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <ButtonComponent type="submit" variant="contained">
        Entrar
      </ButtonComponent>
    </ContainerPhoneNumber>
  );
}
