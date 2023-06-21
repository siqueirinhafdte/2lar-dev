export interface Listing {
  id: string;
  name: string;
  address: Address;
  price: number;
  isFavorite: boolean;
  images: string[];
  videos: string[];
  type: string;
  owner: Owner;
  attributes: Attributes;
  description: string;
  viewers: number;
  availablePeriod: number;
  amenities: Amenity[];
  nearby: string[];
}

export interface Address {
  street: string;
  city: string;
  district: string;
  state: string;
  long: number;
  lat: number;
}

export interface Owner {
  name: string;
}

export interface Attributes {
  area: number;
  bedrooms: number;
  suites: number;
  baths: number;
  parking: number;
}

export interface Amenity {
  icon?: string;
  name: string;
  label: string;
  description?: string;
  type?: string;
}
