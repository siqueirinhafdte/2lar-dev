import { MaskFunction } from '../types';

export const maskCep: MaskFunction = (value: string) => {
  if (value === '') {
    return '';
  }
  const cepRegex = /^(\d{5})(\d{3})$/;
  return value.replace(cepRegex, '$1-$2');
};
