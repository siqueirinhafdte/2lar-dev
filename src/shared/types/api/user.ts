export interface User {
  id: string;
  name: string;
  phone: string;
  birthdate: string;
  fiscalId: string;
  address: Address;
  email: string;
  medias: string[];
}

export interface Address {
  id: string;
  country: string;
  postalCode: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
}
