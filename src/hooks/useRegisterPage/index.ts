import { useDispatch } from 'react-redux';

import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import _delay from 'lodash/delay';
import { useRouter } from 'next/navigation';
import { messages } from 'shared/enum';
import { showSnackbar } from 'store/slices/snackbar';
import { setTempEmail } from 'store/slices/user';
import { countries, validateCPF } from 'utils';
import { transformToDatePtBrFromEng } from 'utils/formmater/date';
import * as yup from 'yup';

import api from '../../services/httpClient';

export const useRegister = () => {
  const INITIAL_VALUES = {
    name: '',
    email: '',
    fiscal_id: '',
    birthdate: '',
    phone_number: '',
    postal_code: '',
    street: '',
    district: '',
    number: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: ''
  };
  const router = useRouter();
  const dispatch = useDispatch();

  const validations = {
    name: yup.string().required(messages.fieldRequired),
    email: yup.string().required(messages.fieldRequired).email(messages.invalidEmail),
    fiscal_id: yup
      .string()
      .required(messages.fieldRequired)
      .test('valid fiscal_id', messages.invalidFiscalId, (value) => {
        if (!value) return true;
        return validateCPF(value);
      }),
    birthdate: yup.string(),
    phone_number: yup.string().required(messages.fieldRequired),
    postal_code: yup.string(),
    street: yup.string(),
    district: yup.string(),
    number: yup.string(),
    city: yup.string(),
    state: yup.string(),
    password: yup.string().required(messages.fieldRequired),
    confirmPassword: yup
      .string()
      .required(messages.fieldRequired)
      .oneOf([yup.ref('password')], messages.passwordNoMatch)
  };

  const validationSchemaRegister = yup.object().shape(validations);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchemaRegister,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        const [countryCode] = values.phone_number.split(' ');

        const country = countries.find((item) => item.phone === countryCode)?.label ?? '';

        const birthdate = transformToDatePtBrFromEng(values.birthdate);

        const payload = {
          ...values,
          phone_number: `+${values.phone_number.replace(/\D/g, '')}`,
          fiscal_id: values.fiscal_id.replace(/\D/g, ''),
          postal_code: values.postal_code.replace(/\D/g, ''),
          birthdate,
          country
        };
        const result = await api.post<{ status: number }>('/api/signUp', payload);
        if (result?.status === 200) {
          dispatch(setTempEmail(values.email));
          dispatch(showSnackbar({ message: 'Cadastro bem-sucedido!', severity: 'success' }));

          _delay(() => {
            router.push('/verify-email');
          }, 500);
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        dispatch(showSnackbar({ message: axiosError.message, severity: 'error' }));
      }
    }
  });

  return { formik };
};
