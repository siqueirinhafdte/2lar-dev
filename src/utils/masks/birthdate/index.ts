import { MaskFunction } from '../types';

export const maskBirthdate: MaskFunction = (value: string): string => {
  if (value === '') {
    return '';
  }
  return value.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
};
