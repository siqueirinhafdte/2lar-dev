export interface RentSimulatorProps {
  listingId: string;
  days?: number;
  total?: number;
  price?: PriceComponent;
}

export interface SimulatorData {
  days: number;
  total: number;
}
export interface SimulatorComponent {
  maxPeriod: number;
  maxGuest: number;
}

export interface PriceComponent {
  day: number;
  period: number;
}
