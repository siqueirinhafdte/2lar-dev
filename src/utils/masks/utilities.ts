import { maskBirthdate } from 'utils/masks/birthdate';
import { maskCep } from 'utils/masks/cep';
import { maskCNPJ } from 'utils/masks/cnpj';
import { maskCPF } from 'utils/masks/cpf';
import { maskCreditCardNumber } from 'utils/masks/credit-card';
import { maskCurrency } from 'utils/masks/currency';
import { maskPhoneNumber } from 'utils/masks/phone';
import { MaskFunction, MaskName } from 'utils/masks/types';

export const getMaskByName = (maskName: MaskName): MaskFunction => {
  const mask: { [key in MaskName]: MaskFunction } = {
    'credit-card': maskCreditCardNumber,
    cnpj: maskCNPJ,
    cpf: maskCPF,
    currency: maskCurrency,
    phone: maskPhoneNumber,
    cep: maskCep,
    birthdate: maskBirthdate
  };

  const defaultMask: MaskFunction = (value: string) => value;

  return mask[maskName] || defaultMask;
};
