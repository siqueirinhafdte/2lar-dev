export interface CardProps {
  title?: string;
  urlImg?: string;
  images?: string[];
  type?: string;
  description?: string;
  urlRedirect?: string;
  price?: Price;
  attributes?: Attributes[];
  mode?: Mode;
}

export type Mode = 'vertical' | 'horizontal';

interface Price {
  value: string;
  description?: string;
}

interface Attributes {
  name: string;
  value: string | number;
}
