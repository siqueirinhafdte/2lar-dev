import { Typography } from '@mui/material';
import { useForgotPassword } from 'hooks/useForgotPasswordPage';
import { InputText } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import * as S from 'styles/forgotPasswordStyles';
import { getErrorsFormik, getHelperTextFormik } from 'utils';

export default function ForgotPassword() {
  const { formik } = useForgotPassword();

  return (
    <S.Main>
      <S.Wrapper>
        <S.Form onSubmit={formik.handleSubmit}>
          <Typography variant="h4">Resetar senha</Typography>
          <p>Insira o e-mail cadastrado para que você altere sua senha</p>

          <InputText
            label="E-mail"
            name="email"
            required
            value={formik.values.email}
            helperText={getHelperTextFormik(formik, 'email') ?? ' '}
            error={getErrorsFormik(formik, 'email')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
