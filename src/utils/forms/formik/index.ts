import { FormikValues } from 'formik';

import { TFormik } from './types';

export function getErrorsFormik<T extends FormikValues>(formikInstance: TFormik<T>, name: keyof T) {
  return formikInstance.touched[name] && Boolean(formikInstance.errors[name]);
}

export function getHelperTextFormik<T extends FormikValues>(
  formikInstance: TFormik<T>,
  name: keyof T
) {
  return formikInstance.touched[name] && formikInstance.errors[name];
}

export const handleChangeFormik =
  <T extends FormikValues>(formikInstance: TFormik<T>, name: Extract<keyof T, string>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formikInstance.setFieldValue(name, value);
  };
