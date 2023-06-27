import { ChangeEvent } from 'react';

export interface InputPhoneNumberDDIProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
