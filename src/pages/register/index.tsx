import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import { InputPhoneNumberDDI } from 'components/InputPhoneNumberDDI';
import { useRegister } from 'hooks/useRegisterPage';
import { InputPassword, InputText } from 'stories/components';
import * as S from 'styles/registerPageStyles';
import {
  getErrorsFormik,
  getHelperTextFormik,
  handleChangeFormik,
  maskBirthdate,
  maskCPF,
  maskPhoneNumber
} from 'utils';

export default function Register() {
  const { formik } = useRegister();
  const [optIn, setOptIn] = useState(false);

  return (
    <S.Main>
      <S.Wrapper>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Subtitle variant="h6">Cadastro</S.Subtitle>
          <S.Title variant="h4">Estamos quase lá</S.Title>

          <InputText
            label="Seu Nome"
            name="name"
            value={formik.values.name}
            helperText={getHelperTextFormik(formik, 'name')}
            error={getErrorsFormik(formik, 'name')}
            onChange={handleChangeFormik(formik, 'name')}
            onBlur={formik.handleBlur}
          />
          <InputText
            label="Seu e-mail"
            name="email"
            value={formik.values.email}
            helperText={getHelperTextFormik(formik, 'email')}
            error={getErrorsFormik(formik, 'email')}
            onChange={handleChangeFormik(formik, 'email')}
            onBlur={formik.handleBlur}
          />

          <InputPhoneNumberDDI
            label="Celular"
            name="phone_number"
            value={maskPhoneNumber(formik.values.phone_number)}
            helperText={getHelperTextFormik(formik, 'phone_number')}
            error={getErrorsFormik(formik, 'phone_number')}
            onChange={handleChangeFormik(formik, 'phone_number')}
            onBlur={formik.handleBlur}
          />

          <S.InputContainer gap={2}>
            <InputText
              label="CPF"
              name="fiscal_id"
              value={maskCPF(formik.values.fiscal_id)}
              helperText={getHelperTextFormik(formik, 'fiscal_id')}
              error={getErrorsFormik(formik, 'fiscal_id')}
              onChange={handleChangeFormik(formik, 'fiscal_id')}
              onBlur={formik.handleBlur}
              mask="cpf"
            />
            <InputText
              label="Data de nascimento"
              name="birthdate"
              value={maskBirthdate(formik.values.birthdate)}
              helperText={getHelperTextFormik(formik, 'birthdate')}
              error={getErrorsFormik(formik, 'birthdate')}
              onChange={handleChangeFormik(formik, 'birthdate')}
              onBlur={formik.handleBlur}
              mask="birthdate"
            />
          </S.InputContainer>

          <S.SubtitleAddress variant="h6">Endereço</S.SubtitleAddress>

          <S.InputContainer gap={2}>
            <InputText
              label="CEP"
              name="postal_code"
              value={formik.values.postal_code}
              helperText={getHelperTextFormik(formik, 'postal_code')}
              error={getErrorsFormik(formik, 'postal_code')}
              onChange={handleChangeFormik(formik, 'postal_code')}
              onBlur={formik.handleBlur}
              mask="cep"
            />
            <InputText
              label="Rua"
              name="street"
              value={formik.values.street}
              helperText={getHelperTextFormik(formik, 'street')}
              error={getErrorsFormik(formik, 'street')}
              onChange={handleChangeFormik(formik, 'street')}
              onBlur={formik.handleBlur}
            />
          </S.InputContainer>
          <S.InputContainer gap={2}>
            <InputText
              label="Bairro"
              name="district"
              value={formik.values.district}
              helperText={getHelperTextFormik(formik, 'district')}
              error={getErrorsFormik(formik, 'district')}
              onChange={handleChangeFormik(formik, 'district')}
              onBlur={formik.handleBlur}
            />
            <InputText
              label="Número"
              name="number"
              value={formik.values.number}
              helperText={getHelperTextFormik(formik, 'number')}
              error={getErrorsFormik(formik, 'number')}
              onChange={handleChangeFormik(formik, 'number')}
              onBlur={formik.handleBlur}
            />
          </S.InputContainer>
          <S.InputContainer gap={2}>
            <InputText
              label="Cidade"
              name="city"
              value={formik.values.city}
              helperText={getHelperTextFormik(formik, 'city')}
              error={getErrorsFormik(formik, 'city')}
              onChange={handleChangeFormik(formik, 'city')}
              onBlur={formik.handleBlur}
            />
            <InputText
              label="Estado"
              name="state"
              value={formik.values.state}
              helperText={getHelperTextFormik(formik, 'state')}
              error={getErrorsFormik(formik, 'state')}
              onChange={handleChangeFormik(formik, 'state')}
              onBlur={formik.handleBlur}
            />
          </S.InputContainer>
          <InputPassword
            label="Senha"
            name="password"
            value={formik.values.password}
            helperText={getHelperTextFormik(formik, 'password')}
            error={getErrorsFormik(formik, 'password')}
            onChange={handleChangeFormik(formik, 'password')}
            onBlur={formik.handleBlur}
          />
          <InputPassword
            label="Confirmação da senha"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            helperText={getHelperTextFormik(formik, 'confirmPassword')}
            error={getErrorsFormik(formik, 'confirmPassword')}
            onChange={handleChangeFormik(formik, 'confirmPassword')}
            onBlur={formik.handleBlur}
          />

          <S.FooterForm>
            <Checkbox
              aria-label="remember"
              onChange={(e) => setOptIn(e.currentTarget.value === 'on')}
            />

            <span>
              Ao se cadastrar você aceita os{' '}
              <S.StyledLink href="/institutional/terms-of-use">termos de uso</S.StyledLink> e{' '}
              <S.StyledLink href="/institutional/privacy-policy">
                termos de privacidade
              </S.StyledLink>
            </span>
          </S.FooterForm>
          <S.StyledButton
            type="submit"
            variant="contained"
            color="success"
            disabled={!formik.isValid || !optIn}
          >
            Confirmar dados
          </S.StyledButton>
          {formik.isSubmitting && (
            <center>
              <CircularProgress />
            </center>
          )}
        </S.Form>
      </S.Wrapper>
    </S.Main>
  );
}
