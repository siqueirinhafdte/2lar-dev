export interface Simulator {
  days: number;
  total: number;
  price: Price;
}

export interface Price {
  day: number;
  period: number;
}
